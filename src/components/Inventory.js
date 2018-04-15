import React from "react";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
  };

  renderEditForm = ([fishId, fish]) => {
    return (
      <EditFishForm
        key={fishId}
        index={fishId}
        fish={fish}
        updateFish={this.props.updateFish}
        deleteFish={this.props.deleteFish}
      />
    )
  };

  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <ul>
          { Object.entries(this.props.fishes).map(this.renderEditForm) }
        </ul>
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  };
};

export default Inventory;
