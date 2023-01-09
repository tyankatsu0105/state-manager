import React from "react";
import { Presentational, defaultElement } from "./presentational";
import {
  PolymorphicMemoExoticComponent,
  PolymorphicComponentProps,
} from "~utils/polymorphic-component";

type FeatureProps = {
  as?: React.ComponentProps<typeof Presentational>["as"];
  renderHeader?: React.ComponentProps<typeof Presentational>["renderHeader"];
  renderBody?: React.ComponentProps<typeof Presentational>["renderBody"];
};

const Component = <Element extends React.ElementType = typeof defaultElement>(
  props: PolymorphicComponentProps<FeatureProps, Element>
) => {
  return <Presentational {...props} />;
};

export const Card: PolymorphicMemoExoticComponent<
  FeatureProps,
  typeof defaultElement
> = React.memo(Component);
