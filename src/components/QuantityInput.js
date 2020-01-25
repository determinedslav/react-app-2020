import React, {useState} from 'react';

const QuantityInput = props => {

    const [count, setCount] = useState(props.count);

    const getQuantityMessage = count => {
        if (count > 7) {
            return (
                <div class="alert alert-success">
                    Satisfactory condition
                </div>
            ) 
        }
        if (count < 3) {
            return (
                <div class="alert alert-danger">
                    Imminant danger
                </div>
            ) 
        }
        return (
            <div class="alert alert-warning">
                Uncertant state
            </div>
        ) 
    }

    return(
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button onClick={() => setCount(count - 1) } className="btn btn-outline-danger" type="button"><i className = "fa fa-minus-circle"></i></button>
                </div>
                <input readOnly value={count} type="text" className="form-control text-center" aria-label="" aria-describedby="basic-addon1"/>
                <div className="input-group-append">
                    <button onClick={() => setCount(count + 1) } className="btn btn-outline-success" type="button"><i className = "fa fa-plus-circle"></i></button>
               </div>
            </div>

            {getQuantityMessage(count)}  
        </div>
    )
}

export default QuantityInput