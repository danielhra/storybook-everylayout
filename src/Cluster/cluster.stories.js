import React from "react";
import Cluster from "./Cluster";
import Center from "../Center/Center";
import Card from "../Card";
export default {
  title: "cluster",
  component: Cluster
};

export const clusterElement = () => (
  <Center>
    <Cluster>
      <Card>
        <p>Lorem</p>
      </Card>
      <Card>
        <p>Lorem Ipsum</p>
      </Card>
      <Card>
        <p>Lorem Ipsum is</p>
      </Card>
      <Card>
        <p>Lorem</p>
      </Card>
      <Card>
        <p>Lorem Ipsum</p>
      </Card>
      <Card>
        <p>Lorem Ipsum is</p>
      </Card>
    </Cluster>
  </Center>
);
