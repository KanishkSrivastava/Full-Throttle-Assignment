import * as types from '../types';
import { fetchPayments } from './calculatePaymentsAction';
export const costSlider = cost => (dispatch, getState) => {
  dispatch({ type: types.CHANGE_COST, payload: { cost } });
  const { time } = getState().slider;
  dispatch(fetchPayments(cost, time));
};
export const timeSlider = time => (dispatch, getState) => {
  dispatch({ type: types.CHANGE_TIME, payload: { time } });
  const { cost } = getState().slider;
  dispatch(fetchPayments(cost, time));
};
