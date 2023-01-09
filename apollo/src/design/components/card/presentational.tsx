import React from "react";
import styles from "./presentational.module.css";
import {
  PolymorphicComponentProps,
  PolymorphicMemoExoticComponent,
} from "~utils/polymorphic-component";
type FeatureProps = {
  renderHeader?: () => React.ReactNode;
  renderBody?: () => React.ReactNode;
};

export const defaultElement = "div";

const Component = <Element extends React.ElementType = typeof defaultElement>(
  props: PolymorphicComponentProps<FeatureProps, Element>
) => {
  const { as, renderHeader, renderBody, ...restProps } = props;
  const Element = as || defaultElement;

  return (
    <Element className={styles.container} {...restProps}>
      {renderHeader && renderHeader()}
      {renderBody && renderBody()}
    </Element>
  );
};

export const Presentational: PolymorphicMemoExoticComponent<
  FeatureProps,
  typeof defaultElement
> = React.memo(Component);
