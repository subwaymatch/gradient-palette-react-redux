import React, { Component } from "react";
import { connect } from "react-redux";

class PaletteButtons extends Component {
  render() {
    return (
      <div id="palettebuttons-wrapper">
        <div>PaletteButtons Connected Component</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteButtons);
