import React from "react";
import styled from "styled-components";

const StyledCluster = styled.div`
  --space: ${props => props.space || "var(--s1)"};

  & > * {
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.justify || "center"};
    align-items: ${props => props.align || "center"};
    margin: calc(var(--space) / 2 * -1);
  }

  & > * > * {
    margin: calc(var(--space) / 2);
  }
`;

function Cluster(props) {
  return (
    <StyledCluster
      justify={props.justify}
      align={props.align}
      space={props.space}
    >
      {props.children}
    </StyledCluster>
  );
}

export default Cluster;
