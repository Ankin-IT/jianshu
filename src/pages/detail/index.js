import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Detail = (props) => {//无状态组件=>函数式组件
  return (
    <div onClick={() => props.history.push('list')}> detail123</div>
  )
}

export default  connect()(withRouter(Detail))
