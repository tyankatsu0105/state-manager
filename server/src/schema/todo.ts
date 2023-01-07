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
      description: "The content of the Todo",
    }),
  }),
});

const FindTodoInput = builder.inputType("FindTodoInput", {
  fields: (t) => ({
    id: t.int({ required: true }),
  }),
});
builder.queryField("findTodo", (t) =>
  t.prismaField({
    type: "Todo",
    nullable: true,
    description: "Find a single Todo",
    args: {
      input: t.arg({
        type: FindTodoInput,
        required: true,
      }),
    },
    resolve: (query, root, args, ctx, info) =>
      prisma.todo.findUnique({
        ...query,
        where: {
          id: args.input.id,
        },
      }),
  })
);

builder.queryField("findTodos", (t) =>
  t.prismaConnection({
    type: "Todo",
    cursor: "id",
    description: "Find all Todos",
    resolve: async (query, root, args, ctx, info) => {
      return await prisma.todo.findMany({ ...query });
    },
    totalCount: async () => {
      return await prisma.todo.count();
    },
  })
);

const CreateTodoInput = builder.inputType("CreateTodoInput", {
  fields: (t) => ({
    title: t.string({ required: true }),
    content: t.string({ required: true }),
  }),
});
builder.mutationField("createTodo", (t) =>
  t.prismaField({
    type: "Todo",
    description: "Create a new Todo",
    args: {
      input: t.arg({
        type: CreateTodoInput,
        required: true,
      }),
    },
    resolve: (query, root, args, ctx, info) =>
      prisma.todo.create({
        ...query,
        data: {
          title: args.input.title,
          content: args.input.content ?? "",
        },
      }),
  })
);

const UpdateTodoInput = builder.inputType("UpdateTodoInput", {
  fields: (t) => ({
    id: t.int({ required: true }),
    title: t.string({ required: true }),
    content: t.string({ required: true }),
  }),
});
builder.mutationField("updateTodo", (t) =>
  t.prismaField({
    type: "Todo",
    description: "Update a Todo",
    args: {
      input: t.arg({
        type: UpdateTodoInput,
        required: true,
      }),
    },
    resolve: (query, root, args, ctx, info) =>
      prisma.todo.update({
        ...query,
        data: {
          title: args.input.title,
          content: args.input.content,
        },
        where: {
          id: args.input.id,
        },
      }),
  })
);

const DeleteTodoInput = builder.inputType("DeleteTodoInput", {
  fields: (t) => ({
    id: t.int({ required: true }),
  }),
});
builder.mutationField("deleteTodo", (t) =>
  t.prismaField({
    type: "Todo",
    description: "Delete a Todo",
    args: {
      input: t.arg({
        type: DeleteTodoInput,
        required: true,
      }),
    },
    resolve: (query, root, args, ctx, info) =>
      prisma.todo.delete({
        ...query,
        where: {
          id: args.input.id,
        },
      }),
  })
);
