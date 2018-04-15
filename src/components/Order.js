import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key]
    const isAvailable = fish && fish.status
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter: 500, exit: 500 },
    }

    if (!fish) return null;

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry, {fish ? fish.name : "this fish"} is no longer available.
          </li>
        </CSSTransition>
      )
    } else {
      const count = this.props.order[key]
      const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>
                             &times;
                           </button>

      return (
        <CSSTransition {...transitionOptions} >
          <li key={key}>
            <span>
              <TransitionGroup component="span" className="count">
                <CSSTransition classNames="count" key={count} timeout={{ enter: 500, exit: 500 }}>
                  <span>{ count }</span>
                </CSSTransition>
              </TransitionGroup>
              lbs { fish.name }
              &nbsp;
              { formatPrice(count * fish.price) }
              &nbsp;
              { removeButton }
            </span>
          </li>
        </CSSTransition>
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
        <TransitionGroup className="order" component="ul">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
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
