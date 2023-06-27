import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const usersURL = 'https://jsonplaceholder.typicode.com/users'

const asyncRequest = async () => {
    const response = await fetch(usersURL)
    return await response.json()
}

export const getUsers = createAsyncThunk(usersURL,asyncRequest)

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        status: null,
        errors: null
    },
    reducers: {

    },
    extraReducers: {
        [getUsers.pending]: (state) => {
            // console.log(state)
            state.status = 'Loading'
            state.error = null
        },
        [getUsers.fulfilled]: (state , action) => {
            let i = 0
            while (i < 2000000000) i++
            state.status = 'Done'
            state.users = action.payload
        },
        [getUsers.rejected]: (state) => {
            state.error = ""
        }
    }
})


export default usersSlice.reducer