import { useFindTodosQuery } from "~api/graphql";

export const useTodos = () => {
  const { data } = useFindTodosQuery();
  const todos = data?.findTodos.edges ?? [];

  return { todos };
};
