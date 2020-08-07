import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { GlobalStyle } from "./static/style/style.js";

import { Provider } from "react-redux";
import PagesRoot from "./router";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle></GlobalStyle>
          <PagesRoot></PagesRoot>
        </Fragment>
      </Provider>
    );
  }
}
export default App;
