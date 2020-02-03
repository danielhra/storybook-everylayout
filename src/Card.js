import React from "react";
import styled from "styled-components";

const CardElement = styled.div`
  max-width: 500px;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 1.5em;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

function Card(props) {
  return <CardElement>{props.children}</CardElement>;
}

export default Card;
