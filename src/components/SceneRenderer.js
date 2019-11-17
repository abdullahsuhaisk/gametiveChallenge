import React from "react";
import Button from "./Button";
import Label from "./Label";

const MyComponentService = {
  myButton: Button,
  myLabel: Label
};

const SceneRenderer = ({ scene }) => {
  console.log(scene.components);
  // const Component = MyComponentService["myLabel"];
  const components = () => {
    return scene.components.map(item => {
      let Component = MyComponentService[item.name];
      console.log(Component);
      return <Component />;
    });
  };
  return <div style={{ height: "100%", width: "100%" }}>{components()}</div>;
};

export default SceneRenderer;
