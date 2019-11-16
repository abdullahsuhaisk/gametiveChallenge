import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  witdh: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  background: #f2f2f2;
  button {
    height: 30px;
    width: 60px;
    margin: 0px 10px;
    background: #e6e6e6;
    text-align: center;
    padding: auto;
    border: 1px solid black;
  }
  .selected {
    border: 2px solid blue;
  }
`;

const ScenesMenu = ({ scenes, setSelectedScene, selectedScene }) => {
  return (
    <Wrapper>
      <div className="container">
        {scenes &&
          scenes.map(item => {
            return (
              <button
                className={item.key === selectedScene ? "selected" : null}
                onClick={() => setSelectedScene(item.key)}
                key={item.key}
              >
                {item.name}
              </button>
            );
          })}
      </div>
    </Wrapper>
  );
};

export default ScenesMenu;
