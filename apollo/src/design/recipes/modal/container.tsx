import React from "react";
import ReactDOM from "react-dom";

import { Presentational, defaultElement } from "./presentational";
import {
  PolymorphicMemoExoticComponent,
  PolymorphicComponentProps,
} from "~utils/polymorphic-component";

import { useCreateModal } from "./facade";

type FeatureProps = {
  as?: React.ComponentProps<typeof Presentational>["as"];
  renderHeader?: React.ComponentProps<typeof Presentational>["renderHeader"];
  renderBody?: React.ComponentProps<typeof Presentational>["renderBody"];
  renderFooter?: React.ComponentProps<typeof Presentational>["renderFooter"];
};

const Component = <Element extends React.ElementType = typeof defaultElement>(
  props: PolymorphicComponentProps<FeatureProps, Element>
) => {
  return useCreateModal({ children: <Presentational {...props} /> });
};

export const Modal: PolymorphicMemoExoticComponent<
  FeatureProps,
  typeof defaultElement
> = React.memo(Component);
