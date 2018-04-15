import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  static propTypes = {
    addFish: PropTypes.func.isRequired,
  };

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value === "true",
      desc: this.descRef.value.value,
      image: this.imageRef.value.value,
    }
    this.props.addFish(fish)
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" ref={this.nameRef} name="name" placeholder="Name"/>
        <input type="text" ref={this.priceRef} name="price" placeholder="Price" />
        <select ref={this.statusRef} name="status">
          <option value={true}>Fresh!</option>
          <option value={false}>Sold Out!</option>
        </select>
        <textarea ref={this.descRef} name="desc" placeholder="Description"/>
        <input type="text" ref={this.imageRef} name="image" placeholder="Image"/>
        <button type="submit"> + Add Fish </button>
      </form>
    );
  };
};

export default AddFishForm;
