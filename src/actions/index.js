export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export function increaseCounter(count) {
  return {
    type: INCREASE,
    count,
  };
}

export function decreaseCounter(count) {
  return {
    type: DECREASE,
    count,
  };
}
