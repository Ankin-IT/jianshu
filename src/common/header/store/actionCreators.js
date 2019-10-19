import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const seacrchFocus = () => ({
  type: constants.SEACTCH_FOCUS
})

export const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
})

export const getList = () => {
	console.log(1)
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=>{
			console.log('接口',res)
      dispatch(changeList(res.data))
    }).catch((err)=>{
      console.log(err)
    })
  }
}
