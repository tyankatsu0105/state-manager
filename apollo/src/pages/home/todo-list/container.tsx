import React from "react";
import { Presentational } from "./presentational";
import { useTodos } from "./facade";

const Component = () => {
  const { todos } = useTodos();

  return <Presentational todos={todos} />;
};

export const TodoList = React.memo(Component);
