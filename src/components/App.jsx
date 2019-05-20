import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import PaletteControlBar from "./PaletteControlBar";
import PaletteDisplay from "./PaletteDisplay";
import GradientPalette from "gradient-palette";
import { paletteSetColors, paletteSetNumSteps } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleHistoryChange = this.handleHistoryChange.bind(this);
    this.didPop = false;
  }

  handleHistoryChange(location, action) {
    // location is an object like window.loaction
    console.log("history action=" + action);

    if (action === "POP") {
      const qValues = queryString.parse(location.search);

      if (
        qValues.start !== undefined &&
        qValues.end !== undefined &&
        (qValues.start !== this.props.startColor.substring(1) ||
          qValues.end !== this.props.endColor.substring(1))
      ) {
        this.didPop = true;
        this.props.dispatchSetColors("#" + qValues.start, "#" + qValues.end);

        if (
          qValues.steps !== undefined &&
          Number.parseInt(qValues.steps) !== this.props.numSteps
        ) {
          this.props.dispatchSetNumSteps(Number.parseInt(qValues.steps));
        }
      }
    } else if (action === "PUSH") {
    }
  }

  componentDidMount() {
    const { location, history } = this.props;

    const qValues = queryString.parse(location.search);

    // Listen for changes to the current location
    const unlisten = history.listen(this.handleHistoryChange);

    if (qValues.start !== undefined && qValues.end !== undefined) {
      this.props.dispatchSetColors("#" + qValues.start, "#" + qValues.end);

      if (qValues.steps !== undefined) {
        this.props.dispatchSetNumSteps(Number.parseInt(qValues.steps));
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { history, startColor, endColor, numSteps } = this.props;

    if (
      prevProps.startColor !== this.props.startColor ||
      prevProps.endColor !== this.props.endColor ||
      prevProps.numSteps !== this.props.numSteps
    ) {
      if (this.didPop === false) {
        history.push(
          "?start=" +
            startColor.substring(1) +
            "&end=" +
            endColor.substring(1) +
            "&steps=" +
            numSteps
        );
      }

      this.didPop = false;
    }
  }

  getPalette() {
    const { startColor, endColor, numSteps } = this.props;

    return GradientPalette.generate(startColor, endColor, numSteps);
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

const mapDispatchToProps = dispatch => ({
  dispatchSetColors: (startColor, endColor) =>
    dispatch(paletteSetColors(startColor, endColor)),
  dispatchSetNumSteps: numSteps => dispatch(paletteSetNumSteps(numSteps))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
