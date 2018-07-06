import { handleActions } from 'redux-actions';
import { showRequest, showSuccess, showFailure } from '../actions/show';

import defaultState from '../defaultState';

export default handleActions(
  {
    [showRequest]: (state, { payload: { resultList } }) => {
      console.log('showRequest');
      console.log('resultList =', resultList);
      return { ...state, shows: { isFetching: true } }; },
    [showSuccess]: (state, { payload: { success } }) => {
      console.log('showSuccess');
      console.log('success =', success);
      return { ...state, shows: { entities: [...state.shows.entities, ...success], isFetching: false } }; },
    [showFailure]: (state, { payload: { failure } }) => {
      console.log('showFailure');
      console.log('failure =', failure);
      return { ...state, shows: { isFetching: false } }; }
  },
  defaultState
);