import React, { Component } from "react";
import PaletteColorInputs from "./PaletteColorInputs";
import PaletteButtons from "./PaletteButtons";
import PaletteMenu from "./PaletteMenu";

class PaletteControlBar extends Component {
  render() {
    return (
      <div id="palette-control-bar">
        <PaletteColorInputs />
        <PaletteButtons />
        <PaletteMenu />
      </div>
    );
  }
}

export default PaletteControlBar;
