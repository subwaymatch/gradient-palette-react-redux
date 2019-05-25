import React, { Component } from "react";

class PaletteMenu extends Component {
  render() {
    return (
      <div id="palette-menu-wrapper">
        <div>Curated Palettes</div>
        <div className="control-button">
          <i className="icon ion-ios-more" />
        </div>
      </div>
    );
  }
}

export default PaletteMenu;
