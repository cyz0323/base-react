import React from 'react';

export default class MainComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            date: new Date()
        }
    }

    render(){
        return (
            <div className="contentBox">
                <button onClick={this.myClick} className="btn btn-primary">按钮</button>
            </div>
        );
    }

    myClick = () => {
        console.log("点击事件");
    }
}