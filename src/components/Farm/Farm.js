import React, {Component} from 'react';
import './Farm.css';
import Order from "../Order/Order";
import {moveOrderToCustomer} from 'actions/farmActions';
import {connect} from 'react-redux';

export class Farm extends Component {
   render() {
      const {orders} = this.props;

      return (
         <div className="farm"><h2>Производство на ферме</h2>
            <button
               onClick={() => this.props.moveOrderToCustomer(this.props.orders[0])}
               disabled={!(this.props.orders.length > 0)}
            >Отправить урожай клиенту</button>
            <div className="order-list">
               {
                  orders.map((order, i) => {
                     return (
                        <Order name={order.name} price={order.price} createdAt={order.createdAt} key={i}/>
                     )
                  })
               }
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => ({
   orders: state.farm.orders
});

const mapDispatchToProps = dispatch => {
   return {
      moveOrderToCustomer: payload => { dispatch(moveOrderToCustomer(payload)) }
   };
};
//TODO упрощенный вид
// const mapDispatchToProps = {
//    createOrder,
//    moveOrderToFarm
// };

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Farm);
