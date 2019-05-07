import React, { Component } from "react";
import { connect } from "react-redux";
import { paletteSetStartColor, paletteSetEndColor } from "../actions";
import PaletteColorPicker from "./PaletteColorPicker";

class PaletteColorInputs extends Component {
  constructor(props) {
    super(props);

    this.onStartColorUpdate = this.onStartColorUpdate.bind(this);
    this.onEndColorUpdate = this.onEndColorUpdate.bind(this);
  }
  onStartColorUpdate(hex) {
    this.props.dispatchPaletteSetStartColor(hex);
  }

  onEndColorUpdate(hex) {
    this.props.dispatchPaletteSetEndColor(hex);
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
  dispatchPaletteSetEndColor: hex => dispatch(paletteSetEndColor(hex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteColorInputs);
