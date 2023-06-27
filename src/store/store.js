import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./Reduceres/CounterReducer";
import {usersReducer} from "./Reduceres/usersReducer";


const reducer = combineReducers({
    counterReducer,
    usersReducer
})

const store = configureStore({reducer})

export default store