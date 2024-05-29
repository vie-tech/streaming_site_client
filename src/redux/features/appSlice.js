import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: 'app_state',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        setIsLoggedIn: (state, action)=>{
            state.isLoggedIn = action.payload
        }
    }

})

export const { setIsLoggedIn } = appSlice.actions;

export default appSlice.reducer;