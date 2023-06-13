import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { increaseCounter } from '../redux/actions/counterActions';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <Button color='success'
        onClick={(e) => this.props.dispatch(increaseCounter())}
        >
            Increase
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(increaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseCounter);