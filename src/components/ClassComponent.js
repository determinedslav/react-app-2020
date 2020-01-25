import React from 'react';

class ClassComponentExample extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title : "Hello",
            name : "Alex"
        }
    }

    buttonOnClick = () => {
        this.setState({
            title : "Set new Title",
            name : "gosho"
        })
    }

    render(){
        return <div>
            <h1>{this.state.title}</h1>
            <h3>{this.state.name}</h3>
            <h4>{this.props.subtitle}</h4>
            <p>{this.props.description}</p>
            <button onClick={this.buttonOnClick} type="button" className="btn btn-primary">Click</button>
        </div>
    }
}

export default ClassComponentExample;