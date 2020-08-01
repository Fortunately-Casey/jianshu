import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { GlobalStyle } from "./static/style/style.js";
import Header from "./common/header/index";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Home from '../src/pages/home';
import Detail from '../src/pages/detail';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle></GlobalStyle>
          <Header></Header>
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Home}></Route>
              <Route
                path="/detail"
                exact
                component={Detail}
              ></Route>
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}
export default App;
