import React from "react";
import Button from "./Button";
import Label from "./Label";
import Input from "./Input";

const MyComponentService = {
  myButton: Button,
  myLabel: Label,
  myInput: Input
};

const SceneRenderer = ({ scene, scenes, setScenes, setSelecetedComponent }) => {
  // console.log(scene.components);
  // const Component = MyComponentService["myLabel"];
  const components = () => {
    return scene.components.map((item, key) => {
      let Component = MyComponentService[item.name];
      // console.log(Component);
      return (
        <Component
          key={key}
          {...item.props}
          scenes={scenes}
          setScenes={setScenes}
          scene={scene}
          componentKey={key}
          css={item.css}
          setSelecetedComponent={setSelecetedComponent}
        />
      );
    });
  };
  return <div style={{ height: "100%", width: "100%" }}>{components()}</div>;
};

export default SceneRenderer;
