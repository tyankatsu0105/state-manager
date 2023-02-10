import React from "react";
import { Presentational } from "./presentational";
import { useTodos } from "./facade";
import { useModal } from "../../../recipes/modal";

type Props = {
  todo: any;
};
const Component = (props: Props) => {
  const modal = useModal({ initialOpen: false });

  return <Presentational todo={props.todo} modal={modal} />;
};

export const TodoListItem = React.memo(Component);
