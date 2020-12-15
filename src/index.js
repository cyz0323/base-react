import React from 'react'; //创建组件、虚拟DOM、生命周期管理
import ReactDOM from 'react-dom';   // 把创建好的组件在页面中进行渲染
import MyPlug from '@/assets/js/index';
// 样式
import 'bootstrap/dist/css/bootstrap.css';
import cssObj from '@/assets/css/main.scss'
// 自定义组件的引入
import MainComponent from '@/components/common/main';


ReactDOM.render( <MainComponent/>, document.getElementById("app"));