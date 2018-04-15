import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
  renderEditForm = ([fishId, fish]) => {
    return (
      <EditFishForm
        key={fishId}
        index={fishId}
        fish={fish}
        updateFish={this.props.updateFish}
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
