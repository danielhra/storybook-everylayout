import React from "react";
import styled from "styled-components";

const StyledSwitcher = styled.div`
  --threshold: ${props => props.threshold || "60rem"};
  --space: ${props => props.space || "var(--s1)"};

  & > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc((var(--space) / 2) * -1);
  }

  & > * > * {
    flex-grow: 1;
    flex-basis: calc((var(--threshold) - (100% - var(--space))) * 999);
    margin: calc(var(--space) / 2);
  }

  & > * > :nth-last-child(n + ${props => props.limit || 5}),
  & > * > :nth-last-child(n + ${props => props.limit || 5}) ~ * {
    flex-basis: 100%;
  }
`;

function Switcher(props) {
  return (
    <StyledSwitcher
      threshold={props.threshold}
      space={props.space}
      limit={props.limit}
    >
      {props.children}
    </StyledSwitcher>
  );
}

export default Switcher;
