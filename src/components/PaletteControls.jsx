import React, { Component } from "react";
import { connect } from "react-redux";
import { paletteRandomize, paletteReverse } from "../actions";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import RCTooltip from "rc-tooltip";
import Slider from "rc-slider";
const Handle = Slider.Handle;

class PaletteControls extends Component {
  constructor(props) {
    super(props);

    this.handleStepsChange = this.handleStepsChange.bind(this);
  }

  handleStepsChange(values) {
    const { value, dragging, index, ...restProps } = values;

    console.log("handleStepsChange, value=" + value);

    return (
      <RCTooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="bottom"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </RCTooltip>
    );
  }

  render() {
    const { dispatchPaletteRandomize, dispatchPaletteReverse } = this.props;

    return (
      <div id="palette-controls-wrapper">
        <Tooltip
          animation="shift"
          duration={100}
          animateFill={false}
          hideOnClick={false}
          title="Reverse"
          position="bottom"
          distance={-2}
          theme="light"
        >
          <div className="control-button" onClick={dispatchPaletteReverse}>
            <i className="icon ion-ios-swap" />
          </div>
        </Tooltip>

        <Tooltip
          animation="shift"
          duration={100}
          animateFill={false}
          hideOnClick={false}
          title="Randomize"
          position="bottom"
          distance={-2}
          theme="light"
        >
          <div className="control-button" onClick={dispatchPaletteRandomize}>
            <i className="icon ion-ios-shuffle" />
          </div>
        </Tooltip>

        <div id="steps-slider-wrapper">
          <label className="slider-title"># Steps</label>
          <Slider
            min={2}
            max={20}
            defaultValue={10}
            handle={this.handleStepsChange}
            trackStyle={{
              backgroundColor: "#ccc"
            }}
            handleStyle={{
              borderColor: "#ccc"
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  startColor: state.palette.startColor,
  endColor: state.palette.endColor
});

const mapDispatchToProps = dispatch => ({
  dispatchPaletteRandomize: () => dispatch(paletteRandomize()),
  dispatchPaletteReverse: () => dispatch(paletteReverse())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteControls);
