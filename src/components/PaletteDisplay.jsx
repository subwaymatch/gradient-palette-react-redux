import React, { Component } from "react";
import PaletteSingleColor from "./PaletteSingleColor";

const _ = require("lodash");

class PaletteDisplay extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("==========================================");
    console.log("PaletteDisplay.shouldComponentUpdate()");
    console.log(
      this.props.palette[0] +
        ", " +
        this.props.palette[this.props.palette.length - 1]
    );

    console.log("nextProps.palette");
    console.log(
      nextProps.palette[0] +
        ", " +
        nextProps.palette[nextProps.palette.length - 1]
    );

    return !_.isEqual(this.props.palette, nextProps.palette);
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
