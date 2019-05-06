import React, { Component } from "react";
import PaletteColorsForm from "./PaletteColorsForm";
import PaletteButtons from "./PaletteButtons";
import PaletteMenu from "./PaletteMenu";

class PaletteControlBar extends Component {
  render() {
    return (
      <div id="palette-control-bar">
        <PaletteColorsForm />
        <PaletteButtons />
        <PaletteMenu />
      </div>
    );
  }
}

export default PaletteControlBar;
