import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreaters } from "./store/index";
import { connect } from "react-redux";
class Home extends Component {
  componentDidMount() {
    this.props.changeHomeList();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  scrollToTop() {
    window.scrollTo(0, 0);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
  
  render() {
    const { isShowScrollTop } = this.props;
    console.log(isShowScrollTop)
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2376575028,1469234842&fm=26&gp=0.jpg"
            alt=""
          />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {isShowScrollTop ? (
          <BackTop onClick={this.scrollToTop}>返回Top</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  changeHomeList() {
    const action = actionCreaters.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreaters.toggleBackTop(true));
    } else {
      dispatch(actionCreaters.toggleBackTop(false));
    }
  },
});

const mapStateToProps = (state) => ({
  isShowScrollTop: state.getIn(["home", "isShowSrollToTop"]),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
