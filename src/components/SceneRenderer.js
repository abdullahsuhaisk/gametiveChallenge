import React from "react";
import Button from "./Button";
import Label from "./Label";

const MyComponentService = {
  myButton: <Button />,
  myLabel: <Label />
};

const SceneRenderer = () => {
  console.log(MyComponentService["myButton"]);
  console.log(Button);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      {MyComponentService["myButton"]}
    </div>
  );
};

export default SceneRenderer;
