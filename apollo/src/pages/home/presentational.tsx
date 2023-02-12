import * as React from "react";
import { TodoList } from "./todo-list";
import { TodoOperate } from "./todo-operate";

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
      <TodoOperate />
      <TodoList />
    </>
  );
};

export const Presentaional = React.memo(Component);
