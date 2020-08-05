import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import axios from "axios";
import { connect } from "react-redux";
class Home extends Component {
  componentDidMount() {
    axios.post("/get/getHomeList").then((resp) => {
      this.props.changeHomeList(resp.data);
    });
    // axios
    //   .post("/api/stall/login", {
    //     loginUserID: "18662858322",
    //     loginPWD: "111111",
    //   })
    //   .then((resp) => {
    //     console.log(resp.data.data);
    //   });
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
  changeHomeList(data) {
    dispatch({
      type:"change_home_list",
      data:data
    })
  }
});
export default connect(null, mapDispatchToProps)(Home);
