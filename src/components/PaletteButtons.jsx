import React, { Component } from "react";
import { connect } from "react-redux";

import { paletteRandomize } from "../actions";

class PaletteButtons extends Component {
  render() {
    const { dispatchPaletteRandomize } = this.props;

    return (
      <div id="palette-buttons-wrapper">
        <button onClick={dispatchPaletteRandomize}>
          <i className="icon ion-ios-shuffle" />
          <span>Randomize</span>
        </button>

        <button>
          <i className="icon ion-ios-link" />
          <span>Link</span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  dispatchPaletteRandomize: () => {
    console.log("paletteRandomize action");
    console.log(paletteRandomize());

    dispatch(paletteRandomize());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteButtons);
