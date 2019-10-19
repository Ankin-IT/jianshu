import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {//无状态组件=>函数式组件
  return (
    <div>
			<div onClick={() => props.history.push('detail')} > home123</div>
			<div onClick={props.handelHomeClick}>点击获取homer redux的</div>
			<div>{props.homeTitle}</div>
		</div>
  )
}

const mapStateToProps = (state) =>{
	return {
		homeTitle:state.getIn(['home','homeTitle'])
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		handelHomeClick(){
			const action = {
				type: "home_click"
			}
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
