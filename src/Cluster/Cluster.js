import React from "react";
import styled from "styled-components";

const StyledCluster = styled.div`
  --space: 1rem;

  & > * {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: calc(var(--space) / 2 * -1);
  }

  & > * > * {
    margin: calc(var(--space) / 2);
  }
`;

function Cluster(props) {
  return (
    <StyledCluster>
      <ul>{props.children}</ul>
    </StyledCluster>
  );
}

export default Cluster;
