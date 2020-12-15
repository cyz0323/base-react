import React from 'react';

function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.info = "aaa";
Person.prototype.say = function(){
    console.log("这是一个实例方法");
}


export default class Animal extends React.Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.age = props.age;
    }
    static info = "";
    
    static jiao(){
        console.log("动物的实例方法");
    }

    render(){
        return (<div>className</div>);
    }
}   
