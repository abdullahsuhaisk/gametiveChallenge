import React, { useState } from "react";
import Draggable from "react-draggable";

const Button = () => {
  const [state, setState] = useState({
    deltaPosition: {
      x: 100,
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
      <button>
        x: {state.deltaPosition.x.toFixed(0)}, y:
        {state.deltaPosition.y.toFixed(0)}
      </button>
    </Draggable>
  );
};

export default Button;
