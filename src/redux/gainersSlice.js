import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=3a50c9290eb377d677aba64d1291708d';

const initialState = {
  gainers: [],
  gainersLoading: false,
  gainersError: null,
};

export const fetchGainers = createAsyncThunk(
  'gainers/fetchGainers',
  async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const gainersSlice = createSlice({
  name: 'gainers',
  initialState,
  reducers: {
    filterGainers:
    (state, action) => state.gainers.filter((gainer) => gainer.name !== action.payload),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGainers.pending, (state) => {
        state.gainersLoading = true;
      })
      .addCase(fetchGainers.fulfilled, (state, action) => {
        state.gainersLoading = false;
        state.gainers = action.payload;
      })
      .addCase(fetchGainers.rejected, (state, action) => {
        state.gainersLoading = 'failed';
        state.gainersError = action.payload;
      });
  },
});

export const selectGainers = (state) => state.gainers.gainers;
export const selectGainersLoading = (state) => state.gainers.gainersLoading;
export const selectGainersError = (state) => state.gainers.gainersError;
export const { addABook, removeABook } = gainersSlice.actions;
export default gainersSlice.reducer;
