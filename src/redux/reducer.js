import * as types from './app-constants';
import { combineReducers } from 'redux';

const storageState = (state = {}, action) => {
  switch (action.type) {
    case types.ACTION_NEW_SITE:
      let items = state.lockboxItems;
      items.push(action.lockboxItem);
      return Object.assign({}, state, {lockboxItems: items});
    default:
      return state;
  }
};

const uiState = (state = {}, action) => {
  switch (action.type) {
    case types.ACTION_SHOW_PASSWORDS:
      return Object.assign({}, state, { isShowPwOn: action.isOn });
    case types.ACTION_FILTER_TABLE:
      return Object.assign({}, state, { filterText: action.filterText });
    case types.ACTION_PERSIST_INPUT_VALUE:
      return Object.assign({}, state, { [`${action.name}`]: action.value });
    default:
      return state;
  }
};

export const appReducer = combineReducers({
  uiState,
  storageState
});
