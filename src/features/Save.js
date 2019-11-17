import React, { useCallback } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: gray;
  border: 1px solid black;
  button {
    height: 50px;
    width: 90px;
    margin-right: 20px;
    background: #666666;
    text-align: center;
    padding: auto;
    border: 1px solid black;
  }
`;

const Save = ({ scenes }) => {
  const saveHandler = useCallback(() => {
    localStorage.setItem("JSON", JSON.stringify(scenes));
    console.log("saved");
  }, []);
  return (
    <Wrapper>
      <button onClick={() => saveHandler()}>Save</button>
    </Wrapper>
  );
};

export default Save;
