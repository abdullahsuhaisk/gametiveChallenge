import styled from "styled-components";

const StyledDiv = styled.div`
  width: ${props => props.width || "150px"};
  height: ${props => props.height || "50px"};
  background: ${props => props.background || "palevioletred"};
  color: ${props => props.color || "black"};
  position: "relative",
  overflow: "auto",
  padding: "0"
`;

export default StyledDiv;
