import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import StyledButton from "./styledButton";
import { deleteItem } from "./deleteItem";

const Button = props => {
  const {
    scenes,
    setScenes,
    scene,
    componentKey,
    css,
    setSelecetedComponent
  } = props;
  // console.log(props);
  // console.log(scene);
  // console.log(css);

  useEffect(() => {
    props.deltaPosition && setState(props);
  }, []);
  const [state, setState] = useState({
    deltaPosition: {
      x: 0,
      y: 0
    }
  });
  const updateState = () => {
    scene.components.map((item, key) =>
      key === componentKey ? (item.props = state) : item.props
    );
    setScenes(
      scenes.map(item => {
        return item.key === scene.key ? (item = scene) : item;
      })
    );
  };
  const deleteButton = () => {
    deleteItem(scenes, scene, componentKey, setScenes);
  };

  const handleDrag = (e, ui) => {
    const { x, y } = state.deltaPosition;
    setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
    updateState();
  };
  // console.log(state);
  // console.log(props.componentKey);

  if (props.deltaPosition) {
    return (
      <Draggable
        bounds="parent"
        onDrag={handleDrag}
        defaultPosition={{ x: props.deltaPosition.x, y: props.deltaPosition.y }}
      >
        <StyledButton
          {...css}
          onClick={() => setSelecetedComponent(componentKey)}
        >
          <span
            className="deleteButton"
            style={{
              position: "absolute",
              top: -20,
              right: -10
            }}
            onClick={() => deleteButton()}
          >
            X
          </span>
          {css && css.title}
        </StyledButton>
      </Draggable>
    );
  }
  return null;
};

export default Button;
