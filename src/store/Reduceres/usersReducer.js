import {createAction, createReducer} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: []
}

const usersURL = 'https://jsonplaceholder.typicode.com/users'

export const getUsersAsync = () => {
    return async dispatch => {
        const {data} = await axios.get(usersURL)
        dispatch(getUsers(data))
    }

}

export const getUsers = createAction("GET_USERS")

export const usersReducer = createReducer(initialState , (builder) => {
    builder
        .addCase(getUsers , (state , action) => {
            state.users = action.payload
        })
})