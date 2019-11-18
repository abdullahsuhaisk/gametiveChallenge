import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: gray;
  border: 1px solid black;
  button {
    height: 50px;
    width: 100%;
    background: #666666;
    text-align: center;
    padding: auto;
    border: 1px solid black;
    margin-top: 5px;
  }
`;

const Inputs = ({ scene, setScenes, scenes }) => {
  // console.log(scenes);
  // console.log(scene);

  const buttonInitialCss = {
    title: "Title",
    background: "palevioletred",
    width: "100px",
    height: "110px",
    color: "black"
  };
  const labelInitialCss = {
    title: "Title",
    background: "yellow",
    width: "100px",
    height: "20px",
    color: "black"
  };
  const inputInitialCss = {
    title: "Title",
    background: "white",
    width: "100px",
    height: "20px",
    color: "black"
  };
  const component = {
    name: null,
    props: {
      deltaPosition: {
        x: 0,
        y: 0
      }
    }
  };
  const updateState = (componentName, componentCss) => {
    component.name = componentName;
    component.css = componentCss;
    scene.components = [...scene.components, component];
    // console.log(scene);
    setScenes(
      scenes.map(item => {
        return item.key === scene.key ? (item = scene) : item;
      })
    );
  };
  const addNewComponent = key => {
    switch (key) {
      case 1:
        return updateState("myButton", buttonInitialCss);
      case 2:
        return updateState("myLabel", labelInitialCss);
      case 3:
        return updateState("myInput", inputInitialCss);
      default:
        return null;
    }
  };
  return (
    <Wrapper>
      <button key={1} onClick={() => addNewComponent(1)}>
        Button
      </button>
      <button key={2} onClick={() => addNewComponent(2)}>
        Font
      </button>
      <button key={3} onClick={() => addNewComponent(3)}>
        Input
      </button>
    </Wrapper>
  );
};

export default Inputs;
