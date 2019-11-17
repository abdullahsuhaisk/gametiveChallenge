import React from "react";
import Button from "./Button";
import Label from "./Label";

const MyComponentService = {
  myButton: Button,
  myLabel: Label
};

const SceneRenderer = ({ scene }) => {
  console.log(scene);
  const Component = MyComponentService["myLabel"];
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Component />
    </div>
  );
};

export default SceneRenderer;
