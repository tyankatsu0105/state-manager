import React from "react";
import { Presentational, defaultElement } from "./presentational";
import {
  PolymorphicMemoExoticComponent,
  PolymorphicComponentProps,
} from "~utils/polymorphic-component";

type FeatureProps = {
  as?: React.ComponentProps<typeof Presentational>["as"];
};

const Component = <Element extends React.ElementType = typeof defaultElement>(
  props: PolymorphicComponentProps<FeatureProps, Element>
) => {
  return <Presentational {...props} />;
};

export const Backdrop: PolymorphicMemoExoticComponent<
  FeatureProps,
  typeof defaultElement
> = React.memo(Component);
