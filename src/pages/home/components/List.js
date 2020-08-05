import React, { Component } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreaters } from "../store";

class List extends Component {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {list.map((item,key) => {
          return (
            <ListItem key={key}>
              <img className="pic" src={item.get("imgUrl")} alt="" />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          );
        })}
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(['home','page'])
});

const mapDispatchToProps = (dispatch) => ({
  getMoreList(page) {
    console.log(page);
    dispatch(actionCreaters.getMoreList(page))
  }
}) 

export default connect(mapStateToProps, mapDispatchToProps)(List);
