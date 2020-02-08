import React from "react";
import styled from "styled-components";

const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * + * {
    margin-top: ${props => props.space || "var(--s1)"};
  }

  & > :nth-child(${props => props.splitAfter}) {
    margin-bottom: auto;
  }
`;

function Stack(props) {
  return (
    <StyledStack space={props.space} splitAfter={props.splitAfter}>
      {props.children}
    </StyledStack>
  );
}

export default Stack;
