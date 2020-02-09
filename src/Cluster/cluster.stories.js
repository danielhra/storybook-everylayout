import React from "react";
import Cluster from "./Cluster";
import { text, withKnobs } from "@storybook/addon-knobs/react";

import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

export default {
  title: "Design System/Layout/Cluster",
  component: Cluster,
  decorators: [withKnobs]
};

export const clusterElement = () => (
  <Cluster
    align={text("align", "center")}
    justify={text("justify", "left")}
    space={text("space", "var(--s-3)")}
  >
    <ul>
      <Chip variant="outlined" size="small" label="Basic" />
      <Chip
        variant="outlined"
        size="small"
        avatar={<Avatar>M</Avatar>}
        label="Clickable"
      />
      <Chip variant="outlined" size="small" label="Deletable" />
      <Chip variant="outlined" size="small" label="Clickable deletable" />
      <Chip variant="outlined" size="small" label="Custom delete icon" />
      <Chip
        variant="outlined"
        size="small"
        label="Clickable link"
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        variant="outlined"
        size="small"
        avatar={<Avatar>M</Avatar>}
        label="Primary clickable"
        color="primary"
      />
      <Chip
        variant="outlined"
        size="small"
        label="Primary clickable"
        color="primary"
      />
      <Chip
        variant="outlined"
        size="small"
        label="Deletable primary"
        color="primary"
      />
      <Chip
        variant="outlined"
        size="small"
        label="Deletable secondary"
        color="secondary"
      />
    </ul>
  </Cluster>
);
