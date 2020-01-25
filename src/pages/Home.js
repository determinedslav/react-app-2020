import React from 'react';
import QuantityInput from '../components/QuantityInput';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            counts: [1,2,3,4,5]
        }
    }

    changeCounts = () => {
        this.setState({
            counts : [8,2],
        })
    }

    getQuantityInputs = () => {
        const counts = this.state.counts;

        const inputs = counts.map(element => {
            return <QuantityInput key={element} count={element}/>
        })

        return inputs;
    }

    render(){
        return (
        <div>
            <button onClick={this.changeCounts} type="button" className="btn btn-primary mb-3">Click</button>
            {this.getQuantityInputs()}
        </div>
        )
    }
}

export default Home;