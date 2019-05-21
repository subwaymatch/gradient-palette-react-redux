import React, { Component } from "react";
import { connect } from "react-redux";
import { paletteRandomize } from "../actions";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

class PaletteButtons extends Component {
  render() {
    const { dispatchPaletteRandomize } = this.props;

    return (
      <div id="palette-buttons-wrapper">
        <Tooltip
          animation="shift"
          duration={200}
          animateFill={false}
          hideOnClick={false}
          title="Randomize Palette"
          position="bottom"
          distance={-10}
        >
          <div className="button" onClick={dispatchPaletteRandomize}>
            <i className="icon ion-ios-shuffle" />
          </div>
        </Tooltip>

        <Tooltip
          animation="shift"
          duration={200}
          animateFill={false}
          hideOnClick={false}
          title="Copy Link to Clipboard"
          position="bottom"
          distance={-10}
        >
          <div className="button">
            <i className="icon ion-ios-link" />
          </div>
        </Tooltip>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  dispatchPaletteRandomize: () => {
    console.log("***PALETTE RANDOMIZE***");
    dispatch(paletteRandomize());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteButtons);
