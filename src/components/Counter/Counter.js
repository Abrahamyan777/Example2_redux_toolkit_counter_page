import React from 'react';
import CountView from "./CountView/CountView";
import css from './counter.module.css'
import {useDispatch, useSelector} from "react-redux";
// import {increment, decrement, counterSlice} from "../../store/slices/counterSlice";
import {logDOM} from "@testing-library/react";
import {decrement, increment} from "../../store/Reduceres/CounterReducer";

const Counter = () => {

    const {counterReducer} = useSelector(state => state)

    const dispatch = useDispatch()

    console.log(counterReducer)



    // console.log(counterSlice)
    // console.log(increment({
    //     a: 4
    // }))

    return (
        <div className={css.counter}>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <CountView value={counterReducer.count}/>
        </div>
    );
};

export default Counter;