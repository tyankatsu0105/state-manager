import { useFindTodoLazyQuery, FindTodoQueryVariables } from "~api/graphql";

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

  return {
    handleFindTodo,
    todoDetail: data?.findTodo ?? null,
  };
};
