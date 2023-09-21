import React, { Component } from "react";
import { Button, Toast } from "@douyinfe/semi-ui";

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button onClick={() => Toast.warning({ content: "welcome" })}>
        Hello Semi
      </Button>
    );
  }
}

export default Demo;