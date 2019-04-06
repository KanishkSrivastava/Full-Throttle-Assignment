import * as types from '../types';
const initialState = { loading: false, interestRate: '25 %', monthlyPayments: 93.0, noOfPayments: 6 };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: true };
    case types.DONE_LOADING:
      return { ...state, loading: false };
    case types.FEETCH_PAYMENTS:
      const { interestRate, monthlyPayments, noOfPayments } = action.payload;
      return { ...state, interestRate, monthlyPayments, noOfPayments };
    default:
      return state;
  }
};
