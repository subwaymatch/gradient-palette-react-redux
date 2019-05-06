export const PALETTE_SET_START_COLOR = "PALETTE_SET_START_COLOR";

export const paletteSetStartColor = hexString => ({
  type: PALETTE_SET_START_COLOR,
  payload: {
    color: hexString
  }
});

export const PALETTE_SET_END_COLOR = "PALETTE_SET_END_COLOR";

export const paletteSetEndColor = hexString => ({
  type: PALETTE_SET_END_COLOR,
  payload: {
    color: hexString
  }
});

export const PALETTE_SET_NUM_STEPS = "PALETTE_SET_NUM_STEPS";

export const paletteSetNumSteps = numSteps => ({
  type: PALETTE_SET_NUM_STEPS,
  payload: {
    numSteps
  }
});
