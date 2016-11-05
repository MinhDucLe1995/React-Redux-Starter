import React from 'react';

const Counter = (props) => {
    return (
        <div class="card">
            <div class="card-block">
                <h4 class="card-title">Counter</h4>
                <p>Value: {props.counter.value}</p>
                <button type="button" onClick={props.counter.incValue} class="btn btn-xs btn-success">+</button>
                <button type="button" onClick={props.counter.decValue} class="btn btn-xs btn-danger">-</button>
            </div>
        </div>
    );
};

export default Counter;