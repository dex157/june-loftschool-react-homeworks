import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

const reducer = handleActions(
  {
    [searchRequest]: (state, { payload: { resultList } }) => {
      return { ...state, searchResults: [...resultList] };
    },
    [decrement]: (state, { payload: { amount } }) => {
      return { ...state, counter: state.counter + amount };
    }
  },
  defaultState
);