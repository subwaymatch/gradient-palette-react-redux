import React, { Component } from "react";
import { connect } from "react-redux";
import PaletteControlBar from "./PaletteControlBar";
import PaletteDisplay from "./PaletteDisplay";
import GradientPalette from "gradient-palette";

class App extends Component {
  getPalette() {
    const { startColor, endColor, numSteps } = this.props;

    return GradientPalette.calculateSteps(startColor, endColor, numSteps);
  }

  render() {
    return (
      <div id="app">
        <PaletteControlBar />
        <div id="main-palette-display-wrapper">
          <PaletteDisplay palette={this.getPalette()} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  startColor: state.palette.startColor,
  endColor: state.palette.endColor,
  numSteps: state.palette.numSteps
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
