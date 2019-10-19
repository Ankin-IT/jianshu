import { fromJS } from 'immutable';

const defaultState = fromJS({
	homeTitle: ''
})

export default (state=defaultState, action)=>{
	console.log('action-name',action)
	if(action.type === 'home_click'){
		return state.set('homeTitle','首页')
	}
	return state;
}