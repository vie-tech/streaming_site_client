import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "nav",
    initialState: {
       navOption: null
    },
    reducers: {
        setNavOption: (state, action) => {
            state.navOption = action.payload
        }
    }
})


export const {setNavOption} = navSlice.actions
export default navSlice.reducer