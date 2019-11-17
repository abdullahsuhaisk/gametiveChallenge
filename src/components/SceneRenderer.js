import React from "react";
import Button from "./Button";
import Label from "./Label";

const MyComponentService = {
  myButton: Button,
  myLabel: Label
};

const SceneRenderer = ({ scene, scenes, setScenes }) => {
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
        />
      );
    });
  };
  return <div style={{ height: "100%", width: "100%" }}>{components()}</div>;
};

export default SceneRenderer;
