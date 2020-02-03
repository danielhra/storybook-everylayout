import React from "react";
import styled from "styled-components";

const StyledStack = styled.div`
  --space: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > * + * {
    margin-top: var(--space);
  }
`;

function Stack(props) {
  return <StyledStack>{props.children}</StyledStack>;
}

export default Stack;
