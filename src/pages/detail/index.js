import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount() {
    console.log(this.props.location.state);
  }
  render() {
    return <div>Detail</div>;
  }
}

export default withRouter(Detail);
