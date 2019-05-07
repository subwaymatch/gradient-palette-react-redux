import React, { Component } from "react";
import { SketchPicker } from "react-color";

class PaletteColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayColorPicker: false,
      color: ""
    };

    this.handleColorDisplayClick = this.handleColorDisplayClick.bind(this);
    this.handleColorPickerClose = this.handleColorPickerClose.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      color: this.props.color
    });
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
    this.setState({
      color: color.hex
    });

    this.props.onColorUpdate(color.hex);
  }

  render() {
    return (
      <div className="color-display-wrapper">
        <div className="color-display" onClick={this.handleColorDisplayClick}>
          <span
            className="color-circle"
            style={{
              backgroundColor: this.state.color
            }}
          />
          <span className="hex-text">{this.state.color.substring(1)}</span>
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
              color={this.state.color}
              onChangeComplete={this.handleColorChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default PaletteColorPicker;
