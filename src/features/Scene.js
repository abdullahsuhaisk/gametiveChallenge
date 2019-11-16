import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import SceneRenderer from "../components/SceneRenderer";
import Label from "../components/Label";

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: gray;
  border: 1px solid black;
  position: relative;
`;
class Scene extends React.Component {
  render() {
    return (
      <Wrapper>
        <div
          className="box"
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
            overflow: "auto",
            padding: "0"
          }}
        >
          <SceneRenderer />
        </div>
      </Wrapper>
    );
  }
}
export default Scene;
