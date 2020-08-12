/**
 * 根路由
 */
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../common/header/index";

// 路由懒加载
import Home from "../pages/home/loadable";
import Detail from "../pages/detail/loadable";

export default function Root() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" exact component={Detail}></Route>
      </div>
    </BrowserRouter>
  );
} 
