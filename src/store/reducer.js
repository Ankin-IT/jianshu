import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import homeReducer from '../pages/home/store/reducer.js';

const reducer = combineReducers({
  header: headerReducer,
	home: homeReducer
})

export default reducer;
