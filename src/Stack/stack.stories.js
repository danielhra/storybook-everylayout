import { text, withKnobs } from "@storybook/addon-knobs/react";
import React from "react";
import LogoReact from "../react.svg";
import LogoVue from "../vue.svg";
import LogoAngular from "../angular.svg";

import Stack from "./Stack";
import Center from "../Center/Center";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

export default {
  title: "Design System/Layout/Stack",
  component: Stack,
  decorators: [withKnobs]
};

export const basicStack = () => (
  <Center andText>
    <Stack space={text("space", "var(--s1)")}>
      <h2> some important text here</h2>
      <img src={LogoReact} alt="alt img"></img>
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
        <CardActionArea>
          <Center>
            <img src={LogoReact} alt="Contemplative Reptile" />
          </Center>
          <CardContent>
            <Stack>
              <h2>React</h2>
              <p>act in response to something; respond in a particular way.</p>
            </Stack>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card>
        <CardActionArea>
          <Center>
            <img src={LogoVue} alt="Contemplative Reptile" />
          </Center>
          <CardContent>
            <Stack>
              <h2>Vue</h2>
              <p>
                Vue.js is an open-source Model–view–viewmodel JavaScript
                framework for building user interfaces and single-page
                applications. It was created by Evan You, and is maintained by
                him and the rest of the active core team members coming from
                various companies.
              </p>
            </Stack>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card>
        <CardActionArea>
          <Center>
            <img src={LogoAngular} alt="Contemplative Reptile" />
          </Center>
          <CardContent>
            <Stack>
              <h2>Angular</h2>
              <p>
                AngularJS is a JavaScript-based open-source front-end web
                framework mainly maintained by Google and by a community of
                individuals and corporations to address many of the challenges
                encountered in developing single-page applications.
              </p>
            </Stack>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Stack>
  </Center>
);
