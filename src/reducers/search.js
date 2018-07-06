import { handleActions } from 'redux-actions';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

import defaultState from '../defaultState';

export default handleActions(
  {
    [searchRequest]: (state, { payload: { resultList } }) => {
      console.log('searchRequest');
      console.log('resultList =', resultList);
      return { ...state, search: { result: [...state.search.result], isFetching: true,  error: null } }; },
    [searchSuccess]: (state, { payload: { success } }) => {
      console.log('searchSuccess');
      console.log('success =', success);
      return { ...state, search: { result: [...state.search.result, ...success], isFetching: false,  error: null } }; },
    [searchFailure]: (state, { payload: { failure } }) => {
      console.log('searchFailure');
      console.log('failure =', failure);
      return { ...state, search: { result: [...state.search.result], isFetching: false,  error: failure } }; }
  },
  defaultState
);