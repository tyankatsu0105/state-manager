import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Todo", {
  fields: (t) => ({
    id: t.exposeInt("id", { description: "The id of the Todo" }),
    createdAt: t.expose("createdAt", {
      type: "DateTime",
      description: "The date and time the Todo was created",
    }),
    updatedAt: t.expose("updatedAt", {
      type: "DateTime",
      description: "The date and time the Todo was last updated",
    }),
    title: t.exposeString("title", { description: "The title of the Todo" }),
    content: t.exposeString("content", {
      nullable: true,
      description: "The content of the Todo",
    }),
  }),
});

export const CreateTodoInput = builder.inputType("CreateTodoInput", {
  fields: (t) => ({
    title: t.string({ required: true }),
    content: t.string(),
  }),
});

builder.queryFields((t) => ({
  findTodo: t.prismaField({
    type: "Todo",
    nullable: true,
    description: "Find a single Todo by id",
    args: {
      id: t.arg.int({ required: true }),
    },
    resolve: (query, root, args, ctx, info) =>
      prisma.todo.findUnique({
        ...query,
        where: {
          id: args.id,
        },
      }),
  }),
  findTodos: t.prismaField({
    type: ["Todo"],
    nullable: true,
    description: "Find all Todos",
    resolve: (query) =>
      prisma.todo.findMany({
        ...query,
      }),
  }),
}));

// builder.mutationFields((t) => ({
//   createTodo: t.prismaField({
//     type: "Todo",
//     args: {
//       data: t.arg({
//         type: CreateTodoInput,
//       })
//   })
// }))

// builder.mutationFields((t) => ({
//   createDraft: t.prismaField({
//     type: "Post",
//     args: {
//       data: t.arg({
//         type: PostCreateInput,
//         required: true,
//       }),
//       authorEmail: t.arg.string({ required: true }),
//     },
//     resolve: (query, parent, args) => {
//       return prisma.post.create({
//         ...query,
//         data: {
//           title: args.data.title,
//           content: args.data.content ?? undefined,
//           published: false,
//           author: {
//             connect: {
//               email: args.authorEmail,
//             },
//           },
//         },
//       });
//     },
//   }),
//   togglePublishPost: t.prismaField({
//     type: "Post",
//     args: {
//       id: t.arg.int({ required: true }),
//     },
//     resolve: async (query, parent, args) => {
//       // Toggling become simpler once this bug is resolved: https://github.com/prisma/prisma/issues/16715
//       const postPublished = await prisma.post.findUnique({
//         where: { id: args.id },
//         select: { published: true },
//       });
//       console.log(postPublished);
//       return prisma.post.update({
//         ...query,
//         where: { id: args.id },
//         data: { published: !postPublished?.published },
//       });
//     },
//   }),
//   incrementPostViewCount: t.prismaField({
//     type: "Post",
//     args: {
//       id: t.arg.int({ required: true }),
//     },
//     resolve: (query, parent, args) => {
//       return prisma.post.update({
//         ...query,
//         where: { id: args.id },
//         data: {
//           viewCount: {
//             increment: 1,
//           },
//         },
//       });
//     },
//   }),
//   deletePost: t.prismaField({
//     type: "Post",
//     args: {
//       id: t.arg.int({ required: true }),
//     },
//     resolve: (query, parent, args) => {
//       return prisma.post.delete({
//         ...query,
//         where: { id: args.id },
//       });
//     },
//   }),
// }));
