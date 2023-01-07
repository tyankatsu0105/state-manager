import { Presentational } from "./presentational";
import { useFindTodosQuery } from "~api/graphql";
export const TodoList = () => {
  const { data } = useFindTodosQuery();
  console.log({ data });

  return <Presentational />;
};
