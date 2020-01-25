import React, {useState, useEffect} from 'react';

const FunctionalComponent = props => {
    const [count, setCount] = useState(props.count);
    useEffect(() => {
        console.log("logged")
    },[])
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + props.count) } type="button" className="btn btn-primary">Click</button>
            <button onClick={() => setCount(count - props.count) } type="button" className="btn btn-primary">Click</button>
        </div>
    )
}

export default FunctionalComponent