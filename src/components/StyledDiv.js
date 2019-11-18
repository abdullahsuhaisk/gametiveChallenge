import styled from "styled-components";

const StyledDiv = styled.div`
  width: ${props => props.width || "100px"};
  height: ${props => props.height || "20px"};
  background: ${props => props.background || "white"};
  color: ${props => props.color || "black"};
  position: "relative",
  overflow: "auto",
  padding: "0"
`;

export default StyledDiv;
