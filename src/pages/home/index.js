import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreaters } from './store/index';
import { connect } from "react-redux";
class Home extends Component {
  componentDidMount() {
    this.props.changeHomeList();
  }
  render() {
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
      </HomeWrapper>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  changeHomeList() {
    const action = actionCreaters.getHomeInfo();
    dispatch(action);
  },
});
export default connect(null, mapDispatchToProps)(Home);
