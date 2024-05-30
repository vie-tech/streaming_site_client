import { createSlice } from "@reduxjs/toolkit";

const liveStreamSlice = createSlice({
  name: "liveStream",
  initialState: {
    guestLiveStreams: [],
    mainUsersLiveStreams: []
  },
  reducers: {
    setGuestLiveStream: (state, action) => {
      state.guestLiveStreams.push(action.payload);
    },
    setMainUsersLiveStreams: (state, action) => {
      state.mainUsersLiveStreams.push(action.payload);
    }
  }
});

export const { setGuestLiveStream, setMainUsersLiveStreams } = liveStreamSlice.actions;
export default liveStreamSlice.reducer;