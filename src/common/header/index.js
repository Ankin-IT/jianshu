import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

const Header = (props) => {//无状态组件=>函数式组件
  return (
    <div onClick={props.handelChange}>
		{props.focused}
		</div>
  )
}

const mapStateToProps =(state)=>{
  return {
    focused:state.getIn(['header','focused']),
    list:state.getIn(['header','list']),
    // focused:state.get('header').get('focused')
  }
}

const mapDispathToProps = (dispatch)=>{
  return {
    handelChange(){
      dispatch(actionCreators.getList())
      dispatch(actionCreators.seacrchFocus());
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps )(Header);
