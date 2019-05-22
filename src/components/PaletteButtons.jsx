import React, { Component } from "react";
import { connect } from "react-redux";
import { paletteRandomize, paletteReverse } from "../actions";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

class PaletteButtons extends Component {
  render() {
    const { dispatchPaletteRandomize, dispatchPaletteReverse } = this.props;

    return (
      <div id="palette-buttons-wrapper">
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
          title="Copy link to clipboard"
          position="bottom"
          distance={-2}
          theme="light"
        >
          <div className="button">
            <i className="icon ion-ios-link" />
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
)(PaletteButtons);
