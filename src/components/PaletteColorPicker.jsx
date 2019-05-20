import React, { Component } from "react";
import { SketchPicker } from "react-color";

class PaletteColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayColorPicker: false
    };

    this.handleColorDisplayClick = this.handleColorDisplayClick.bind(this);
    this.handleColorPickerClose = this.handleColorPickerClose.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorDisplayClick() {
    this.setState(prevState => ({
      displayColorPicker: !prevState.displayColorPicker
    }));
  }

  handleColorPickerClose() {
    this.setState({
      displayColorPicker: false
    });
  }

  handleColorChange(color) {
    this.props.onColorUpdate(color.hex);
  }

  render() {
    return (
      <div className="color-display-wrapper">
        <div className="color-display" onClick={this.handleColorDisplayClick}>
          <span
            className="color-circle"
            style={{
              backgroundColor: this.props.color
            }}
          />
          <span className="hex-text">{this.props.color.substring(1)}</span>
        </div>

        {this.state.displayColorPicker && (
          <div className="color-picker-wrapper">
            <div
              className="close-cover"
              onClick={this.handleColorPickerClose}
            />
            <SketchPicker
              disableAlpha={true}
              presetColors={[]}
              color={this.props.color}
              onChangeComplete={this.handleColorChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default PaletteColorPicker;
