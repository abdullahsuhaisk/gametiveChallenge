import styled from "styled-components";

const StyledButton = styled.button`
  background: #666666;
  background:  ${props => props.background || "palevioletred"};
  color: white;

`;

export default StyledButton;
