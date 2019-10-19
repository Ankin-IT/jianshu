import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: '头部',
  list:[
		{name:'jack'},
		{name:'lucy'}
	]
});

export default (state = defaultState, action )=>{
  if(action.type === constants.SEACTCH_FOCUS){
    return state.set('focused','还是头部')
    // return {
    //   focused:'还是头部'
    // }
  }

  if(action.type === constants.CHANGE_LIST){
	
    return state.set('list', action.data);
    // return {
    //   focused:'还是头部'
    // }
  }
  return state;
}
