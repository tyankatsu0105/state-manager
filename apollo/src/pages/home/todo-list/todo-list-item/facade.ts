import React from "react";
import {
  useFindTodoLazyQuery,
  FindTodoQueryVariables,
  FindTodoQuery,
} from "~api/graphql";
import DayJS from "dayjs";

type UseTodoProps = {
  todoID: FindTodoQueryVariables["input"]["id"];
};
export const useTodo = (props: UseTodoProps) => {
  const [fetch, { data }] = useFindTodoLazyQuery();
  const handleFindTodo = () => {
    try {
      fetch({ variables: { input: { id: props.todoID } } });
    } catch (error) {
      console.error(error);
    }
  };

  const todoDetail = React.useMemo(() => {
    if (data?.findTodo == null) return null;

    const result = {
      ...data.findTodo,
      createdAt: DayJS(data.findTodo.createdAt).format("YYYY/MM/DD"),
      updatedAt: DayJS(data.findTodo.updatedAt).format("YYYY/MM/DD"),
    } satisfies FindTodoQuery["findTodo"];

    return result;
  }, [data]);

  return {
    handleFindTodo,
    todoDetail,
  };
};
