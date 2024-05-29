import {configureStore} from '@reduxjs/toolkit'
import appSlice from './features/appSlice'
import navSlice from './features/navSlice'
const store = configureStore({
    reducer: {
     appState: appSlice,
     navState: navSlice,
    }
})


export default store