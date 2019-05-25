import React, { Component } from "react";
import { connect } from "react-redux";
import { paletteRandomize, paletteReverse } from "../actions";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

class PaletteControls extends Component {
  render() {
    const { dispatchPaletteRandomize, dispatchPaletteReverse } = this.props;

    return (
      <div id="palette-controls-wrapper">
        <Tooltip
          animation="shift"
          duration={100}
          animateFill={false}
          hideOnClick={false}
          title="Reverse"
          position="bottom"
          distance={-2}
          theme="light"
        >
          <div className="button" onClick={dispatchPaletteReverse}>
            <i className="icon ion-ios-swap" />
          </div>
        </Tooltip>

        <Tooltip
          animation="shift"
          duration={100}
          animateFill={false}
          hideOnClick={false}
          title="Randomize"
          position="bottom"
          distance={-2}
          theme="light"
        >
          <div className="button" onClick={dispatchPaletteRandomize}>
            <i className="icon ion-ios-shuffle" />
          </div>
        </Tooltip>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  startColor: state.palette.startColor,
  endColor: state.palette.endColor
});

const mapDispatchToProps = dispatch => ({
  dispatchPaletteRandomize: () => dispatch(paletteRandomize()),
  dispatchPaletteReverse: () => dispatch(paletteReverse())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteControls);
