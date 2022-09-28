import React, { Component } from "react"
// import { render } from "react-dom"
import Map from "./Map";
import classes from "./AnimationPage.module.css";

class AnimationPage extends Component {
  constructor() {
    super()
    this.state = { center: [0, 0] }
  }
  changeCenter = center => () => {
    this.setState({ center })
  }
  render() {
    return (
      <div className={{ textAlign: "center" }}>
        <div style={{ padding: "1rem 0" }}>
          <button
            className={classes.btn}
            onClick={this.changeCenter([-122.4194, 37.7749])}
          >
            {"San Francisco"}
          </button>
          <button
            className={classes.btn}
            onClick={this.changeCenter([151.2093, -33.8688])}
          >
            {"Sydney"}
          </button>
        </div>
        <Map center={this.state.center} />
      </div>
    )
  }
}

export default AnimationPage;

// render(<App />, document.getElementById("root"))
