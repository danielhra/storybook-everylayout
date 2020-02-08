import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.div`
  overflow: hidden;

  & > * > * {
    margin: calc(var(--s1) / 2);
    flex-grow: 1;
  }

  & > * > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(50% - var(--s1));
  }
`;

const IntermediaryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--s1) / 2 * -1);
`;

function Sidebar(props) {
  return (
    <StyledSidebar>
      <IntermediaryWrapper>{props.children}</IntermediaryWrapper>
    </StyledSidebar>
  );
}

export default Sidebar;
