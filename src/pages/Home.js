import React from 'react';
import QuantityInput from '../components/QuantityInput';

class Home extends React.Component{


    render(){
        return <div>
            <QuantityInput count={5}/>
        </div>
    }
}

export default Home;