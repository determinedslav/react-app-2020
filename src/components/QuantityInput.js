import React from 'react';

const QuantityInput = props => {
    return(
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button class="btn btn-outline-danger" type="button"><i className = "fa fa-minus-circle"></i></button>
            </div>
            <input type="text" class="form-control" aria-label="" aria-describedby="basic-addon1"/>
            <div class="input-group-append">
                <button class="btn btn-outline-success" type="button"><i className = "fa fa-plus-circle"></i></button>
            </div>
        </div>
    )
}

export default QuantityInput