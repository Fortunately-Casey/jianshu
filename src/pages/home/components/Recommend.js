import React, { PureComponent } from "react";
import { RecommendWrapper, RecommendItem } from "../style";
import { connect } from "react-redux";

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {list.map((item) => {
          return (
            <RecommendItem
              imageUrl={item.get("imgUrl")}
              key={item.get("id")}
            ></RecommendItem>
          );
        })}
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(["home", "recommendList"]),
});

export default connect(mapStateToProps, null)(Recommend);
