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

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            { Object.entries(this.state.fishes).map(([key, details]) => <Fish key={key} details={details}/>) }
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
