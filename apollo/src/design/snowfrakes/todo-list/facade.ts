import { useFindTodosQuery } from "~api/graphql";

export const useTodos = () => {
  const { data } = useFindTodosQuery();

  return { todos: data?.findTodos.edges ?? [] };
};
