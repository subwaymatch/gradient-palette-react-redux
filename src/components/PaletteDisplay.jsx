import React, { Component } from "react";
import PaletteSingleColor from "./PaletteSingleColor";

const _ = require("lodash");

class PaletteDisplay extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // return _.isEqual(this.props.palette, nextProps.palette);
    return true;
  }

  render() {
    const { palette } = this.props;

    return (
      <div className="palette-display">
        {palette.map((color, idx) => {
          return <PaletteSingleColor key={idx} color={color} />;
        })}
      </div>
    );
  }
}

export default PaletteDisplay;
