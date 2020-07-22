import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
} from "./style";
import { actionCreaters } from "./store";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo></Logo>
      <Nav>
        <NavItem className="left">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <NavItem className="right">登录</NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? "focused iconfont" : "iconfont"}>
            &#xe637;
          </i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <i className="iconfont">&#xe742;</i>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreaters.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreaters.searchBlur());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
