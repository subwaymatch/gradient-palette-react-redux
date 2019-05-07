import GradientPalette from "gradient-palette";

export const PALETTE_SET_START_COLOR = "PALETTE_SET_START_COLOR";

export const paletteSetStartColor = hex => ({
  type: PALETTE_SET_START_COLOR,
  payload: {
    color: hex
  }
});

export const PALETTE_SET_END_COLOR = "PALETTE_SET_END_COLOR";

export const paletteSetEndColor = hex => ({
  type: PALETTE_SET_END_COLOR,
  payload: {
    color: hex
  }
});

export const PALETTE_SET_COLORS = "PALETTE_SET_COLORS";

export const paletteSetColors = (startHex, endHex) => ({
  type: PALETTE_SET_COLORS,
  payload: {
    startColor: startHex,
    endColor: endHex
  }
});

export const paletteRandomize = () => ({
  type: PALETTE_SET_COLORS,
  payload: {
    startColor: GradientPalette.getRandomHex(),
    endColor: GradientPalette.getRandomHex()
  }
});

export const PALETTE_SET_NUM_STEPS = "PALETTE_SET_NUM_STEPS";

export const paletteSetNumSteps = numSteps => ({
  type: PALETTE_SET_NUM_STEPS,
  payload: {
    numSteps
  }
});
