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

export const CreateTodoInput = builder.inputType("CreateTodoInput", {
  fields: (t) => ({
    title: t.string({ required: true }),
    content: t.string(),
  }),
});
export const UpdateTodoInput = builder.inputType("UpdateTodoInput", {
  fields: (t) => ({
    id: t.int({ required: true }),
    title: t.string(),
    content: t.string(),
  }),
});
export const DeleteTodoInput = builder.inputType("DeleteTodoInput", {
  fields: (t) => ({
    id: t.int({ required: true }),
  }),
});

builder.mutationFields((t) => ({
  createTodo: t.prismaField({
    type: "Todo",
    description: "Create a new Todo",
    args: {
      data: t.arg({
        type: CreateTodoInput,
        required: true,
      }),
    },
    resolve: (query, root, args, ctx, info) =>
      prisma.todo.create({
        ...query,
        data: {
          title: args.data.title,
          content: args.data.content ?? "",
        },
      }),
  }),
  updateTodo: t.prismaField({
    type: "Todo",
    description: "Update a Todo",
    args: {
      data: t.arg({
        type: UpdateTodoInput,
        required: true,
      }),
    },
    resolve: (query, root, args, ctx, info) =>
      prisma.todo.update({
        ...query,
        data: {
          title: args.data.title ?? "",
          content: args.data.title ?? "",
        },
        where: {
          id: args.data.id,
        },
      }),
  }),
  deleteTodo: t.prismaField({
    type: "Todo",
    description: "Delete a Todo",
    args: {
      data: t.arg({
        type: DeleteTodoInput,
        required: true,
      }),
    },
    resolve: (query, root, args, ctx, info) =>
      prisma.todo.update({
        ...query,
        data: {},
        where: {
          id: args.data.id,
        },
      }),
  }),
}));
