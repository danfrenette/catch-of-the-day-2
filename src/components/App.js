import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  };

  componentWillUnmount() {
    base.removeBinding(this.ref);
  };

  addFish = fish => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  }

  addToOrder = key => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1
    this.setState({ order });
  };

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  };

  renderFish = ([key, details]) => {
    return <Fish key={key} index={key} addToOrder={this.addToOrder} details={details}/>
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            { Object.entries(this.state.fishes).map(this.renderFish) }
          </ul>
        </div>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
        <Order fishes={this.state.fishes} order={this.state.order}/>
      </div>
    );
  };
};

export default App;
