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
  }
`;

const Properties = () => {
  return <Wrapper></Wrapper>;
};

export default Properties;
