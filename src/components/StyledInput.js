import styled from "styled-components";

const StyledInput = styled.input`
  width: ${props => props.width || "100px"};
  height: ${props => props.height || "50px"};
  background: ${props => props.background || "palevioletred"};
  color: ${props => props.color || "black"};
  position: "relative";
  overflow: "auto";
  padding: "0";
`;

export default StyledInput;
