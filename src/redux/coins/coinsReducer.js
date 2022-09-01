import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  coins: [],
  info: {},
  lifecycle: { loading: 'initial' },
};

export const getCoins = createAsyncThunk('coins/getCoins', async () => {
  const response = await fetch('https://api.coinlore.net/api/tickers/', {
    method: 'GET',
  });
  if (response.ok) {
    return response.json();
  }
  throw response;
});

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.fulfilled, (state, action) => ({
        lifecycle: { loading: 'initial' },
        coins: action.payload.data,
        info: action.payload.info,
      }))
      .addCase(getCoins.pending, (state) => ({
        ...state,
        lifecycle: { loading: 'pending' },
      }))
      .addCase(getCoins.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }));
  },
});

// export const { reserve } = rocketSlice.actions;
export default coinsSlice.reducer;
