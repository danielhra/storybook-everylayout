import React from "react";
import styled from "styled-components";

const StyledCenter = styled.div`
  box-sizing: content-box;
  max-width: var(--measure);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${props => props.gutters || 0};
  padding-right: ${props => props.gutters || 0};
  text-align: ${props => (props.andText ? "center" : "unset")};
`;

function Center(props) {
  return (
    <StyledCenter
      maxWidth={props.maxWidth}
      andText={props.andText}
      gutters={props.gutters}
    >
      {props.children}
    </StyledCenter>
  );
}

export default Center;
