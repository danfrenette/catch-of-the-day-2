import React from "react";

class EditFishForm extends React.Component {
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
      </form>
    );
  };
}

export default EditFishForm;
