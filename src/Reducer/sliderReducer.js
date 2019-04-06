import * as types from '../types';
const initialState = { cost: 500, time: 6 };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_COST:
      const { cost } = action.payload;
      return { ...state, cost };
    case types.CHANGE_TIME:
      const { time } = action.payload;
      return { ...state, time };
    default:
      return state;
  }
};
