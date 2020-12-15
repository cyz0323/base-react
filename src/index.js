import React from 'react'; //创建组件、虚拟DOM、生命周期管理
import ReactDOM from 'react-dom';   // 把创建好的组件在页面中进行渲染
import MyPlug from '@/assets/js/index';
// 样式
import 'bootstrap/dist/css/bootstrap.css';
import cssObj from '@/assets/css/main.scss'
// 自定义组件的引入
import Hello from '@/components/Hello';
import ClassDemo from '@/components/ClassDemo';

const a = new MyPlug();
a.log();
console.log(cssObj);


ReactDOM.render(<div className={cssObj.contentBox}>
    <Hello/>
    <ClassDemo/>
    <button className="btn btn-primary">按钮</button>
</div>, document.getElementById("app"));