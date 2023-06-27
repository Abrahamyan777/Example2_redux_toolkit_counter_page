import React from 'react';
import css from './countView.module.css'

const CountView = ({value}) => {
    return (
        <div className={css.countView}>
            <h1>Count:</h1>
            <h1>{value}</h1>
        </div>
    );
};

export default CountView;