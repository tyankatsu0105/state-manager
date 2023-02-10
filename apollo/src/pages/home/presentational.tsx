import * as React from "react";
import { TodoList } from "../../design/snowfrakes/todo-list";

// ------------------------------------
// Props
// ------------------------------------

type Props = {};

// ------------------------------------
// Component
// ------------------------------------

const Component = (props: Props) => {
  return (
    <>
      <TodoList />
    </>
  );
};

export const Presentaional = React.memo(Component);
