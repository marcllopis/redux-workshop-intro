import { INCREASE, DECREASE } from "../actions";

const initialState = {
  count: 0,
  title: "Hey from the redux store!",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREASE: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
};

export default reducer;
