import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    index: PropTypes.string.isRequired,
    fish: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
    }),
    updateFish: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const{ fish, index } = this.props;
    const updatedFish = {
      ...fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateFish(index, updatedFish);
  };

  render() {
    const { name, price, status, desc, image } = this.props.fish
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={this.handleChange}
        />
        <select name="status" onChange={this.handleChange} value={status}>
          <option value={true}>Fresh!</option>
          <option value={false}>Sold Out!</option>
        </select>
        <textarea
          name="desc"
          value={desc}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="image"
          value={image}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </form>
    );
  };
}

export default EditFishForm;
