import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  display: block;
  padding: ${props => props.padding || "var(--s1)"};

  border: ${props => props.borderWidth || "var(--border-thin)"} solid;

  --color-light: #fff;
  --color-dark: #000;
  color: var(--color-dark);
  background-color: var(--color-light);

  & * {
    color: inherit;
  }
`;

function Box(props) {
  return (
    <StyledBox padding={props.padding} borderWidth={props.borderWidth}>
      {props.children}
    </StyledBox>
  );
}

export default Box;
