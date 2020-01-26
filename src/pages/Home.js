import React from 'react';
import {connect} from 'react-redux';
import QuantityInput from '../components/QuantityInput';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            counts: [1,2,3,4,5],
            lists: ["Some list item", "another list item", "more list items"]
        }
        console.log(props.counter);
        console.log(props.setCounter);
    }

    changeCounts = () => {
        this.setState({
            counts : [8,2],
        })
    }
    changeList = () => {
        this.setState({
            lists : ["list item","second list item"],
        })
    }

    getQuantityInputs = () => {
        const counts = this.state.counts;

        const inputs = counts.map(element => {
            return <QuantityInput key={element} count={element}/>
        })

        return inputs;
    }

    getListInputs = () => {
        const lists = this.state.lists;

        const inputs = lists.map(element => {
            return <li class="list-group-item">{element}</li>
        })

        return inputs;
    }

    changeGlobalCount = () => {
        this.props.setCounter(10);
    }

    render(){
        return (
        <div>
            <button onClick={this.changeCounts} type="button" className="btn btn-primary mb-3">Click</button>
            {this.getQuantityInputs()}
            <button onClick={this.changeList} type="button" className="btn btn-primary mb-3">Click</button>
            <ul className="list-group">
            {this.getListInputs()}
            <button onClick={this.changeGlobalCount} type="button" className="btn btn-primary mb-3">changeglobalcount</button>
            </ul>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const setActionCount = count => {
    return {
        type: "INCREMENT_COUNT",
        payload: count,
    }
}

const mapStateToDispatch = dispatch => {
    return {
        setCounter: count => dispatch(setActionCount(count))
    }
}

export default connect(mapStateToProps, mapStateToDispatch) (Home);