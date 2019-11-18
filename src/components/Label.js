import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import StyledDiv from "./StyledDiv";
const Label = props => {
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
  console.log(css);

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
  // updateState();

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
        defaultPosition={{ x: state.deltaPosition.x, y: state.deltaPosition.y }}
      >
        <StyledDiv {...css} onClick={() => setSelecetedComponent(componentKey)}>
          <span
            className="deleteButton"
            style={{
              position: "absolute",
              top: -20,
              right: -10
            }}
            onClick={() => console.log("ABC")}
          >
            X
          </span>
          {(css && css.title) || "Write a title"}
        </StyledDiv>
      </Draggable>
    );
  }
};
export default Label;
