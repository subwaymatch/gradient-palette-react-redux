import React, { Component } from "react";
import PaletteSingleColor from "./PaletteSingleColor";

class PaletteDisplay extends Component {
  render() {
    const { palette } = this.props;

    console.log("PaletteDisplay");
    console.log(palette);

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
