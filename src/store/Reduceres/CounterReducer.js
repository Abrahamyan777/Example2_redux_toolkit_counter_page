import {createAction, createReducer} from "@reduxjs/toolkit";


const initialState = {
    count: 0
}

// const myCreateAction = (type) => {
//     return function (payload) {
//         if (payload) {
//             return {
//                 type,
//                 payload
//             }
//         }else{
//             return {
//                 type
//             }
//         }
//     }
// }
// custom createAction

export const increment = createAction("INCREMENT")
export const decrement = createAction("DECREMENT")


// export const counterReducer = createReducer(initialState, {
//     [increment]: function (state) {
//         state.count++
//     },
//     [decrement]: (state) => {
//         state.count -= 1
//     }
// })

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment , (state) => {
            state.count += 1
        })
        .addCase(decrement , (state) => {
            state.count += -1
        })
})