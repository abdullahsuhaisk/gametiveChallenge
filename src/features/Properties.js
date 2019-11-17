import React, { useState, useEffect } from "react";
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
`;

const Properties = ({ selecetedComponent, scene, setScenes, scenes }) => {
  const [cssa, setCssa] = useState({
    title: "Title",
    background: "yellow",
    width: "100px",
    height: "110px"
  });
  useEffect(() => {
    const cssb =
      scene.components[selecetedComponent] &&
      scene.components[selecetedComponent].css;
    setCssa(cssb);
  }, [selecetedComponent]);
  // console.log(cssa);
  // console.log(selecetedComponent);
  console.log(scene);
  console.log(scenes);

  if (selecetedComponent !== null)
    return (
      <Wrapper>
        <h1>Properties</h1>
        <form>
          <div>
            <label htmlFor="">width</label>
            <input
              type="text"
              id="width"
              onChange={e =>
                setCssa({ ...cssa, [e.target.id]: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="">height</label>
            <input
              type="text"
              id="height"
              onChange={e =>
                setCssa({ ...cssa, [e.target.id]: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="">color</label>
            <input
              type="text"
              id="background"
              onChange={e =>
                setCssa({ ...cssa, [e.target.id]: e.target.value })
              }
            />
          </div>
        </form>
        <button
          onClick={() => {
            scene.components.map((item, key) => {
              return key === selecetedComponent ? (item.css = cssa) : item;
            });
            console.log(scene);
            setScenes(
              scenes.map(item => {
                return item.key === scene.key ? (item = scene) : item;
              })
            );
          }}
        >
          Save
        </button>
      </Wrapper>
    );
  return null;
};

export default Properties;
