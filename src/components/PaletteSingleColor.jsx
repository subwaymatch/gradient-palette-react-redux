import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Item, Separator, contextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.min.css";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import copy from "copy-to-clipboard";
import { paletteSetStartColor, paletteSetEndColor } from "../actions";

class PaletteSingleColor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCopied: false
    };

    this.contextMenuId = "context_menu_" + props.idx;
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.copyColorToClipboard = this.copyColorToClipboard.bind(this);

    console.log("this.contextMenuId=" + this.contextMenuId);
  }

  SingleColorContextMenu = () => {
    const {
      color,
      dispatchPaletteSetStartColor,
      dispatchPaletteSetEndColor
    } = this.props;

    return (
      <Menu
        id={this.contextMenuId}
        style={{ fontSize: "14px", lineHeight: "1.4" }}
      >
        <Item disabled>Copy {color} to clipboard</Item>
        <Item disabled>Copy {color.substring(1)} to clipboard</Item>
        <Separator />
        <Item
          onClick={e => {
            dispatchPaletteSetStartColor(color);
          }}
        >
          Set as start color
        </Item>
        <Item
          onClick={e => {
            dispatchPaletteSetEndColor(color);
          }}
        >
          Set as end color
        </Item>
      </Menu>
    );
  };

  handleContextMenu(e) {
    e.preventDefault();
    contextMenu.show({
      id: this.contextMenuId,
      event: e,
      props: {}
    });
  }

  copyColorToClipboard(includeSharp = true) {
    copy(this.props.color);

    console.log("Successfully copied");

    this.setState({
      isCopied: true
    });

    setTimeout(() => {
      this.setState({
        isCopied: false
      });
    }, 1000);
  }

  render() {
    const { color } = this.props;
    const style = {
      backgroundColor: color
    };

    const clipboardIconClassname = this.state.isCopied
      ? "ion-md-checkmark"
      : "ion-md-copy";
    const clipboardTooltipText = this.state.isCopied
      ? "Copied!"
      : "Copy " + color + " to clipboard";

    return (
      <div
        className="palette-single-color-wrapper"
        onContextMenu={this.handleContextMenu}
      >
        <div className="palette-single-color" style={style}>
          <div className="show-on-hover">
            <div className="color-text">{color}</div>

            <Tooltip
              animation="shift"
              duration={100}
              animateFill={false}
              hideOnClick={false}
              title={clipboardTooltipText}
              position="bottom"
              distance={10}
              size="small"
              theme="light"
            >
              <div
                className="clipboard-button"
                onClick={this.copyColorToClipboard}
              >
                <i className={"icon " + clipboardIconClassname} />
              </div>
            </Tooltip>
          </div>

          <this.SingleColorContextMenu />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  dispatchPaletteSetStartColor: color => dispatch(paletteSetStartColor(color)),
  dispatchPaletteSetEndColor: color => dispatch(paletteSetEndColor(color))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteSingleColor);
