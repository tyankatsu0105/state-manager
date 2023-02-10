import React from "react";
import styles from "./presentational.module.css";
import {
  PolymorphicComponentProps,
  PolymorphicMemoExoticComponent,
} from "~utils/polymorphic-component";
type FeatureProps = {
  color?: "normal" | "success" | "error";
};

export const defaultElement = "button";

const Component = <Element extends React.ElementType = typeof defaultElement>(
  props: PolymorphicComponentProps<FeatureProps, Element>
) => {
  const { as, className = "", color = "normal", ...restProps } = props;
  const Element = as || defaultElement;

  return (
    <Element
      className={`${className} ${styles.container} ${styles[color]}`}
      {...restProps}
    />
  );
};

export const Presentational: PolymorphicMemoExoticComponent<
  FeatureProps,
  typeof defaultElement
> = React.memo(Component);
