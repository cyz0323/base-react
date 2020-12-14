import React from 'react'; //创建组件、虚拟DOM、生命周期管理
import ReactDOM from 'react-dom';   // 把创建好的组件在页面中进行渲染

const mytest = <div>aaa</div>;


// 参数1：需要渲染的dom元素
// 元素2：渲染到指定的容器
ReactDOM.render(<mytest/>, document.getElementById("app"));