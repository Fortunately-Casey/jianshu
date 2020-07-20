import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { GlobalStyle } from "./style.js";
import Header from "./common/header/index";
class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
      </Fragment>
    );
  }
}
export default App;
