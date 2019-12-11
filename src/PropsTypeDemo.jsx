import  React from "react"
// 验证资源类型
import PropTypes from 'prop-types';

export default class PropsTypeDemo extends React.Component{
// 组合

    render(){
        return(
            <div>
               hello chuhemiao:{this.props.title}
            </div>
        )
    }
}

// 检测当前传入的数据类型
// isRequired  必传类型
// 验证的三种方式： 默认值、类型验证、必选型验证
PropsTypeDemo.propTypes = {
    title: PropTypes.string
  };