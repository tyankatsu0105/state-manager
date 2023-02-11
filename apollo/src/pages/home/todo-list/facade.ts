import { useFindTodosQuery } from "~api/graphql";

export const useTodos = () => {
  const { data } = useFindTodosQuery();
  const getSlicedContent = (content: string) => `${content.slice(0, 100)}...`;

  const todos =
    data?.findTodos.edges?.map((edge) => ({
      ...edge,
      node: {
        ...edge.node,
        content: edge.node.content
          ? getSlicedContent(edge.node.content)
          : "内容が無いよう...",
      },
    })) ?? [];

  return { todos };
};
