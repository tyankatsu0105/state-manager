import React from "react";
import { Presentational } from "./presentational";

type Props = {
  as?: React.ComponentProps<typeof Presentational>["as"];
  renderHeader?: React.ComponentProps<typeof Presentational>["renderHeader"];
  renderBody?: React.ComponentProps<typeof Presentational>["renderBody"];
};

const Component: React.FC<Props> = (props) => {
  return <Presentational {...props} />;
};

export const Card = React.memo(Component);
