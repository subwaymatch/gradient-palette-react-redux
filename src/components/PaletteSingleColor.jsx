import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Item, Separator, contextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.min.css";
import { paletteSetStartColor, paletteSetEndColor } from "../actions";

class PaletteSingleColor extends Component {
  constructor(props) {
    super(props);

    this.contextMenuId = "context_menu_" + props.idx;
    this.handleContextMenu = this.handleContextMenu.bind(this);

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

  render() {
    const { color } = this.props;
    const style = {
      backgroundColor: color
    };
    return (
      <div
        className="palette-single-color"
        onContextMenu={this.handleContextMenu}
        style={style}
      >
        {color}

        <this.SingleColorContextMenu />
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
