import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { GlobalStyle } from "./static/style/style.js";
import Header from "./common/header/index";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle></GlobalStyle>
          <Header></Header>
        </Fragment>
      </Provider>
    );
  } 
}
export default App;
