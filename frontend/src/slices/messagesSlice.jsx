/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    fetchMessagesList: (state, { payload }) => {
      state.list = [...payload.messages];
    },
  },
});

export const { fetchMessagesList } = messagesSlice.actions;
export default messagesSlice.reducer;
