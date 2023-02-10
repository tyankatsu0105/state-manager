import React from "react";

import { Presentational } from "./presentational";

import { useCreateModal } from "./facade";

type FeatureProps = React.ComponentPropsWithRef<"dialog"> & {
  renderHeader?: React.ComponentProps<typeof Presentational>["renderHeader"];
  renderBody?: React.ComponentProps<typeof Presentational>["renderBody"];
  renderFooter?: React.ComponentProps<typeof Presentational>["renderFooter"];
  onClickBackdrop?: React.ComponentProps<
    typeof Presentational
  >["onClickBackdrop"];
};

const Component = (props: FeatureProps) => {
  return useCreateModal({ children: <Presentational {...props} /> });
};

export const Modal = React.memo(Component);
