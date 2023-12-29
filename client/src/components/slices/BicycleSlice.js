import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import request from '../../services/request';

const bicycleAdapter = createEntityAdapter();

const initialState = bicycleAdapter.getInitialState({
  heroesLoadingStatus: 'idle',
});

export const fetchBicycles = createAsyncThunk('bicycles/fetchBicycles', async () => {
  return await request();
});

const bicycleSlice = createSlice({
  name: 'bicycles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBicycles.pending, (state) => {
        state.heroesLoadingStatus = 'loading';
      })
      .addCase(fetchBicycles.fulfilled, (state, action) => {
        state.heroesLoadingStatus = 'idle';
        bicycleAdapter.setAll(state, action.payload);
      })
      .addCase(fetchBicycles.rejected, (state) => {
        state.heroesLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const { reducer } = bicycleSlice;
export default reducer;

export const { selectAll } = bicycleAdapter.getSelectors((state) => state.bicycles);
