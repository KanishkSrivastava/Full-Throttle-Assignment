import axios from 'axios';

import * as types from '../types';

const loading = () => {
  return { type: types.LOADING };
};
const doneLoading = () => {
  return { type: types.DONE_LOADING };
};

export const fetchPayments = (cost, time) => async dispatch => {
  const URL = `https://ftl-frontend-test.herokuapp.com/interest?amount=${cost}&numMonths=${time}`;
  dispatch(loading());
  try {
    const { data } = await axios.get(URL);
    const interestRate = `${(data.interestRate * 100).toFixed(0)} %`;
    const payload = { interestRate, monthlyPayments: data.monthlyPayment.amount, noOfPayments: data.numPayments };
    dispatch({ type: types.FEETCH_PAYMENTS, payload });
  } catch (error) {
    dispatch({ type: types.FEETCH_PAYMENTS_ERROR, payload: error });
  }
  dispatch(doneLoading());
};
