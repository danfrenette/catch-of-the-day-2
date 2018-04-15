import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
    }),
    addToOrder: PropTypes.func.isRequired,
  };

  render() {
    const { image, name, price, desc, status } = this.props.details

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{ desc }</p>
        <button disabled={!status} onClick={() => this.props.addToOrder(this.props.index) }>
          {status ? "Add To Cart" : "Sold Out!"}
        </button>
      </li>
    );
  };
};

export default Fish;
