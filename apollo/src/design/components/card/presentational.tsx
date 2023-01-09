import React from "react";
import styles from "./presentational.module.css";
import { PolymorphicComponentProps } from "~utils/polymorphic-component";
type FeatureProps = {
  renderHeader?: () => React.ReactNode;
  renderBody?: () => React.ReactNode;
};

const defaultElement = "div";

const Component = <E extends React.ElementType = typeof defaultElement>(
  props: PolymorphicComponentProps<FeatureProps, E>
) => {
  const Element = props.as || defaultElement;

  return (
    <Element className={styles.container}>
      {props.renderHeader && props.renderHeader()}
      {props.renderBody && props.renderBody()}
    </Element>
  );
};

export const Presentational = React.memo(Component);
