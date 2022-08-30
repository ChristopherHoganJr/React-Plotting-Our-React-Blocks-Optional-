import React, { Component } from "react";

import SubContents from "./SubContents";
import Advertisement from "./Advertisement";

export class Main extends Component {
  render() {
    return (
      <div class="main-components">
        <div class="subcomps">
          <SubContents />
          <SubContents />
          <SubContents />
        </div>
        <Advertisement />
      </div>
    );
  }
}

export default Main;
