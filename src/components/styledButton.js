import styled from "styled-components";

const StyledButton = styled.button`
  width: ${props => props.width || "100px"};
  height: ${props => props.height || "50px"};
  background: ${props => props.background || "palevioletred"};
  color: ${props => props.color || "black"};
  position: "relative";
`;

export default StyledButton;
