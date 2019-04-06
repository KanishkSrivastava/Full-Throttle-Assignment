import { combineReducers } from 'redux';
import sliderReducer from './Reducer/sliderReducer';
import paymentsReducer from './Reducer/calculatePaymentsReducer';
export default combineReducers({ slider: sliderReducer, payment: paymentsReducer });
