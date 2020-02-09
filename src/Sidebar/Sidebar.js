import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.div`
  overflow: hidden;
  --space: ${props =>
    props.space === "0" ? "0px" : props.space || "var(--s1)"};

  --minWidth: ${props => props.minWidth || "50%"};

  & > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(--space) / 2 * -1);
  }

  & > * > * {
    margin: calc(var(--space) / 2);
    flex-grow: 1;
    flex-basis: ${props => props.sideWidth || "auto"};
  }

  &
    > *
    > ${props => (props.side === "right" ? ":first-child" : ":last-child")} {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(var(--minWidth) - var(--space));
  }
`;

function Sidebar(props) {
  return (
    <StyledSidebar
      side={props.side}
      space={props.space}
      sideWidth={props.sideWidth}
      minWidth={props.minWidth}
    >
      {props.children}
    </StyledSidebar>
  );
}

export default Sidebar;
