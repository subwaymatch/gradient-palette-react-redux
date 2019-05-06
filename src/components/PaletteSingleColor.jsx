import React, { Component } from "react";

class PaletteSingleColor extends Component {
  render() {
    const { color } = this.props;
    const style = {
      backgroundColor: "#" + color
    };
    return (
      <div className="palette-single-color" style={style}>
        {color}
      </div>
    );
  }
}

export default PaletteSingleColor;
