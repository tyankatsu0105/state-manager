import React from "react";
import { Presentational } from "./presentational";
import { useTodo } from "./facade";
import { useModal } from "../../../../design/recipes/modal";

type Props = {
  todo: any;
};
const Component = (props: Props) => {
  const modal = useModal({ initialOpen: false });
  const { handleFindTodo, todoDetail } = useTodo({ todoID: props.todo.id });

  return (
    <Presentational
      todo={props.todo}
      modal={modal}
      handleFindTodo={handleFindTodo}
      todoDetail={todoDetail}
    />
  );
};

export const TodoListItem = React.memo(Component);
