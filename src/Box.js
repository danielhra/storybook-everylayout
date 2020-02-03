import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  display: block;
  padding: 1rem;
  border-width: 1rem;
  /* ↓ For high contrast mode */
  outline: 1rem solid transparent;
  outline-offset: calc(var(--border-thin) * -1);
`;

function Box(props) {
  return <StyledBox>{props.children}</StyledBox>;
}

export default Box;
