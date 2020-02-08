import React from "react";
import styled from "styled-components";

const StyledCover = styled.div`
  --space: var(--s1);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: var(--space);

  & > * {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  & > :first-child:not(h1) {
    margin-top: 0;
  }
  & > :last-child:not(h1) {
    margin-bottom: 0;
  }

  & > h1 {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

function Cover(props) {
  return <StyledCover>{props.children}</StyledCover>;
}

export default Cover;
