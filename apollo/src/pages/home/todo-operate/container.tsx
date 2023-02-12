import React from "react";
import { Presentational } from "./presentational";
import { useModal } from "../../../design/recipes/modal";
const Component = () => {
  const modal = useModal({ initialOpen: false });

  return <Presentational modal={modal} />;
};

export const TodoOperate = React.memo(Component);
