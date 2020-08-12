import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { DetailWrapper, Header, Content } from "./style";
import { actionCreaters } from './store'

class Detail extends PureComponent {
  componentDidMount() {
    this.props.getDetail(this.props.location.state.id);
  }
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
      </DetailWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"]),
});

const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreaters.getDetail(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
