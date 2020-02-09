import { text, number, withKnobs } from "@storybook/addon-knobs/react";

import React from "react";
import Switcher from "./Switcher";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Stack from "../Stack/Stack";

export default {
  title: "Design System/Layout/Switcher",
  component: Switcher,
  decorators: [withKnobs]
};

export const switcherElement = () => (
  <Switcher
    threshold={text("threshold", "60em")}
    space={text("space", "var(--s1)")}
    limit={number("limit", 5)}
  >
    <div>
      <Card>
        <CardActionArea>
          <CardContent>
            <Stack>
              <h2>React</h2>
              <p>act in response to something; respond in a particular way.</p>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card>
        <CardActionArea>
          <CardContent>
            <Stack>
              <h2>Vue</h2>
              <p>the vue documentation.</p>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card>
        <CardActionArea>
          <CardContent>
            <Stack>
              <h2>Angular</h2>
              <p>RThe Angular documentation</p>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card>
        <CardActionArea>
          <CardContent>
            <Stack>
              <h2>Angular</h2>
              <p>RThe Angular documentation</p>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card>
        <CardActionArea>
          <CardContent>
            <Stack>
              <h2>Angular</h2>
              <p>RThe Angular documentation</p>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card>
        <CardActionArea>
          <CardContent>
            <Stack>
              <h2>Angular</h2>
              <p>RThe Angular documentation</p>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card>
        <CardActionArea>
          <CardContent>
            <Stack>
              <h2>Angular</h2>
              <p>RThe Angular documentation</p>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  </Switcher>
);
