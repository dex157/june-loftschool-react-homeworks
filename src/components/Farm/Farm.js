import React, { Component } from 'react';
import './Farm.css';
import { connect } from 'react-redux';
import Order from 'components/Order';
import {
  moveOrderToCustomer
} from 'actions/farmActions';

const mapStateToProps = state => ({
  farm: state.farm
});

const mapDispatchToProps = {
  moveOrderToCustomer
};

export class Farm extends Component {
  render() {
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button>Отправить урожай клиенту</button>
        <div />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);
