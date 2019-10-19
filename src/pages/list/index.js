import React from 'react';

const List = (props) => {//无状态组件=>函数式组件
  return (
    <div onClick={() => props.history.push('/')} >list123</div>
  )
}

export default List
