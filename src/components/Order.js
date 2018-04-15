import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key]
    const isAvailable = fish && fish.status

    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry, {fish ? fish.name : "this fish"} is no longer available.
        </li>
      )
    } else {
      const count = this.props.order[key]
      return (
        <li key={key}>
          { count } lbs { fish.name }
          &nbsp;
          { formatPrice(count * fish.price) }
        </li>
      );
    };
  };

  total = ids => {
    return (
      ids.reduce((prevTotal, key) => {
        const fish = this.props.fishes[key]
        const isAvailable = fish && fish.status

        if (isAvailable) {
          const count = this.props.order[key]
          return prevTotal + count * fish.price;
        } else {
          return prevTotal
        };
      }, 0)
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          &nbsp;
          <strong>{formatPrice(this.total(orderIds))}</strong>
        </div>
      </div>
    );
  };
};
export default Order
