import {configureStore} from '@reduxjs/toolkit'
import appSlice from './features/appSlice'
import navSlice from './features/navSlice'
import liveStreamSlice from './features/liveStreamSlice'


const store = configureStore({
    reducer: {
     appState: appSlice,
     navState: navSlice,
     liveStreamState: liveStreamSlice,
    }
})


export default store