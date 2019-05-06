import React, { Component } from "react";
import { connect } from "react-redux";

class PaletteColorsForm extends Component {
  render() {
    return (
      <div id="palette-colors-form-wrapper">
        <input type="text" value="d7de63" placeholder="ffffff" />
        <input type="text" value="226c45" placeholder="000000" />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteColorsForm);
