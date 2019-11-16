import React, { useState } from "react";
import Draggable from "react-draggable";

const Label = () => {
  const [state, setState] = useState({
    deltaPosition: {
      x: 0,
      y: 0
    }
  });

  const handleDrag = (e, ui) => {
    const { x, y } = state.deltaPosition;
    setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  };

  return (
    <Draggable
      bounds="parent"
      onDrag={handleDrag}
      defaultPosition={{ x: state.deltaPosition.x, y: state.deltaPosition.y }}
    >
      <div
        style={{
          height: "150px",
          width: "150px",
          position: "relative",
          overflow: "auto",
          padding: "0"
        }}
      >
        x: {state.deltaPosition.x.toFixed(0)}, y:
        {state.deltaPosition.y.toFixed(0)}
      </div>
    </Draggable>
  );
};

export default Label;
