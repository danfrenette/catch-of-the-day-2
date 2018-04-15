import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  storeName = React.createRef();

  goToStore = e => {
    e.preventDefault();
    const storeName = this.storeName.value.value
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore} >
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.storeName}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store!</button>
      </form>
    );
  };
};

export default StorePicker;
