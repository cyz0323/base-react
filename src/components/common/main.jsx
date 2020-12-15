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
            <div></div>
        );
    }
}