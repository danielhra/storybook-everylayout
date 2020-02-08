import React from "react";
import styled from "styled-components";

const StyledSwitcher = styled.div`
  --threshold: 60rem;
  --space: 1rem;

  & > * > * {
    flex-grow: 1;
    flex-basis: calc((var(--threshold) - (100% - var(--space))) * 999);
    margin: calc(var(--space) / 2);
  }

  & > * > :nth-last-child(n + 5),
  & > * > :nth-last-child(n + 5) ~ * {
    flex-basis: 100%;
  }
`;

const IntermediaryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: calc((var(--space) / 2) * -1);
`;

function Switcher(props) {
  return (
    <StyledSwitcher>
      <IntermediaryWrapper>{props.children}</IntermediaryWrapper>
    </StyledSwitcher>
  );
}

export default Switcher;
