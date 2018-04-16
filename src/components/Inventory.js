import React from "react";
import firebase from "firebase";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object.isRequired,
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired,
    loadSampleFishes: PropTypes.func.isRequired,
    storeId: PropTypes.string.isRequired,
  };

  state = {
    uid: null,
    owner: null,
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  authHandler = async authData => {
    const { storeId } = this.props
    const store = await base.fetch(storeId, { context: this });

    if (!store.owner) {
      await base.post(`${storeId}/owner`, {
        data: authData.user.uid
      });
    };
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
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
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate}/>
    };

    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          You are not authorized to manage this store's inventory
        </div>
      );
    };

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
