import {
  PALETTE_SET_START_COLOR,
  PALETTE_SET_END_COLOR,
  PALETTE_SET_COLORS,
  PALETTE_SET_NUM_STEPS,
  PALETTE_REVERSE
} from "../actions";

export const initialPaletteState = {
  startColor: "#d7de63",
  endColor: "#226c45",
  numSteps: 10
};

function palette(state = initialPaletteState, action) {
  switch (action.type) {
    case PALETTE_SET_START_COLOR:
      return Object.assign({}, state, {
        startColor: action.payload.color
      });
    case PALETTE_SET_END_COLOR:
      return Object.assign({}, state, {
        endColor: action.payload.color
      });
    case PALETTE_SET_COLORS:
      return Object.assign({}, state, action.payload);
    case PALETTE_REVERSE:
      return Object.assign({}, state, {
        startColor: state.endColor,
        endColor: state.startColor
      });
    case PALETTE_SET_NUM_STEPS:
      return Object.assign({}, state, {
        numSteps: action.payload.numSteps
      });
    default:
      return state;
  }
}

export default palette;
