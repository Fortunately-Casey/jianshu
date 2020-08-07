import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style";
import { actionCreaters } from "./store";

class Header extends Component {
  getlistArea() {
    const {
      focused,
      list,
      page,
      pageTotal,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          );
        }
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                handleChangePage(page, pageTotal, this.spinIcon);
              }}
            >
              <i
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
            <SearchInfoList>{pageList}</SearchInfoList>
          </SearchInfoTitle>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <NavItem className="right">登录</NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => {
                  handleInputFocus(list);
                }}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe637;
            </i>
            {this.getlistArea()}
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
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get("focused"),
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    pageTotal: state.getIn(["header", "pageTotal"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreaters.getList());
      dispatch(actionCreaters.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreaters.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreaters.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreaters.mouseLeave());
    },
    handleChangePage(page, pageTotal, spinIcon) {
      let spinAngle = spinIcon.style.transform.replace(/[^0-9]/gi, "");
      if (spinAngle) {
        spinAngle = parseInt(spinAngle, 10);
      } else {
        spinAngle = 0;
      }
      spinIcon.style.transform = `rotate(${spinAngle + 360}deg)`;
      if (page < pageTotal) {
        dispatch(actionCreaters.pageChange(page + 1));
      } else {
        dispatch(actionCreaters.pageChange(1));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
