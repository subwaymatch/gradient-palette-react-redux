import React, { Component } from "react";
import PaletteColorInputs from "./PaletteColorInputs";
import PaletteControls from "./PaletteControls";
import PaletteMenu from "./PaletteMenu";

class PaletteControlBar extends Component {
  render() {
    return (
      <div id="palette-control-bar">
        <PaletteColorInputs />
        <PaletteControls />
        <PaletteMenu />
      </div>
    );
  }
}

export default PaletteControlBar;
