import { text, withKnobs } from "@storybook/addon-knobs/react";
import React from "react";
import Card from "../Card";
import Logo from "../logo.svg";
import Stack from "./Stack";
import Center from "../Center/Center";
export default {
  title: "stack",
  component: Stack,
  decorators: [withKnobs]
};

export const basicStack = () => (
  <Center andText>
    <Stack space={text("space", "var(--s1)")}>
      <h2> some important text here</h2>
      <img src={Logo} alt="alt img"></img>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </Stack>
  </Center>
);

export const nestedStack = () => (
  <Center>
    <Stack space="3rem">
      <h2>Heading label</h2>
      <Stack space="1.5rem">
        <p>"body text" </p>
        <p>"body text"</p>
        <p>"body text"</p>
      </Stack>
      <h2>Heading label</h2>
      <Stack space="1.5rem">
        <p>"body text" </p>
        <p>"body text"</p>
        <p>"body text"</p>
      </Stack>
    </Stack>
  </Center>
);

export const simpleStack = () => (
  <Center>
    <Stack space={text("space", "var(--s1)")}>
      <Card>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </Card>
      <Card>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </Card>
      <Card>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </Card>
    </Stack>
  </Center>
);
