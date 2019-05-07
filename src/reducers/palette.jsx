import {
  PALETTE_SET_START_COLOR,
  PALETTE_SET_END_COLOR,
  PALETTE_SET_COLORS,
  PALETTE_SET_NUM_STEPS
} from "../actions";

const initialState = {
  startColor: "#d7de63",
  endColor: "#226c45",
  numSteps: 8
};

function palette(state = initialState, action) {
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
    case PALETTE_SET_NUM_STEPS:
      return Object.assign({}, state, {
        numSteps: action.payload.numSteps
      });
    default:
      return state;
  }
}

export default palette;
