import * as React from "react";
import { TodoList } from "../../design/snowfrakes/todo-list";
import { Modal } from "../../design/recipes/modal";

// ------------------------------------
// Props
// ------------------------------------

type Props = {};

// ------------------------------------
// Component
// ------------------------------------

const Component = (props: Props) => (
  <>
    <TodoList />
    <Modal
      open
      renderHeader={(props) => <h2 className={props.styles.header}>Header</h2>}
      renderBody={(props) => (
        <p className={props.styles.body}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptas ducimus asperiores autem illum facilis incidunt eos sapiente,
          id alias optio nemo voluptatum, labore culpa expedita nulla, numquam
          doloremque beatae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deserunt voluptas ducimus asperiores autem illum facilis
          incidunt eos sapiente, id alias optio nemo voluptatum, labore culpa
          expedita nulla, numquam doloremque beatae.
        </p>
      )}
      renderFooter={(props) => (
        <div className={props.styles.footer}>
          <button type="button" onClick={() => console.log("button 1")}>
            button 1
          </button>
          <button type="button" onClick={() => console.log("button 2")}>
            button 2
          </button>
          <button type="button" onClick={() => console.log("button 3")}>
            button 3
          </button>
        </div>
      )}
    />
  </>
);

export const Presentaional = React.memo(Component);
