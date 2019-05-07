import React, { Component } from "react";
import { connect } from "react-redux";
import {
  paletteSetStartColor,
  paletteSetEndColor,
  paletteSetNumSteps
} from "../actions";
import PaletteColorPicker from "./PaletteColorPicker";

class PaletteColorInputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numSteps: 10
    };

    this.onStartColorUpdate = this.onStartColorUpdate.bind(this);
    this.onEndColorUpdate = this.onEndColorUpdate.bind(this);
    this.onNumStepsChange = this.onNumStepsChange.bind(this);
  }
  onStartColorUpdate(hex) {
    this.props.dispatchPaletteSetStartColor(hex);
  }

  onEndColorUpdate(hex) {
    this.props.dispatchPaletteSetEndColor(hex);
  }

  onNumStepsChange(e) {
    const numSteps = Number.parseInt(e.target.value);
    this.props.dispatchPaletteSetNumSteps(numSteps);

    this.setState({
      numSteps
    });
  }

  render() {
    return (
      <div id="palette-color-inputs">
        <PaletteColorPicker
          color={this.props.startColor}
          onColorUpdate={this.onStartColorUpdate}
        />
        <PaletteColorPicker
          color={this.props.endColor}
          onColorUpdate={this.onEndColorUpdate}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  startColor: state.palette.startColor,
  endColor: state.palette.endColor
});

const mapDispatchToProps = dispatch => ({
  dispatchPaletteSetStartColor: hex => dispatch(paletteSetStartColor(hex)),
  dispatchPaletteSetEndColor: hex => dispatch(paletteSetEndColor(hex)),
  dispatchPaletteSetNumSteps: numSteps => dispatch(paletteSetNumSteps(numSteps))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteColorInputs);
