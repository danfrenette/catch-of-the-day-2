import React from "react";
import Header from "./Header"
import Inventory from "./Inventory"
import Order from "./Order"
import Fish from "./Fish"
import sampleFishes from "../sample-fishes"

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
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
        <Order/>
      </div>
    );
  };
};

export default App;
