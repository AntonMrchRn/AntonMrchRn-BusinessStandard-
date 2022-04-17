import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/types/types-external';
import { axiosInstance } from '../../api/axios/axiosInstance';

interface iParams {
  id_company: number;
}

export const getOutgoingDocs = createAsyncThunk(
  'docs/getOutgoingDocs',
  async (id_company: iParams, thunkApi) => {
    try {
      const { data } = await axiosInstance.get(
        `/mapi/document/Fromclient?offset=0&limit=100&companyId=${id_company}`
      );

      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue({
        error: error.message,
      });
    }
  }
);

export const getAllCompanies = createAsyncThunk(
  'docs/getAllCompanies',
  async (_, thunkApi) => {
    try {
      const { data } = await axiosInstance.get(
        'mapi/documents/availablecompanies'
      );

      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue({
        error: error.message,
      });
    }
  }
);

export interface CounterState {
  companies: WritableDraft<CounterState> | any;
  outgoingDocs: WritableDraft<CounterState> | any;
  comanyId: WritableDraft<CounterState> | any;
}

const initialState: CounterState = {
  companies: null,
  outgoingDocs: null,
  comanyId: 'outgoingDocs[0].value',
};

const getDocs = createSlice({
  name: 'getDocs',
  initialState,
  reducers: {
    changeCompanyId: (state, action) => {
      state.comanyId = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getOutgoingDocs.pending, (state, action) => {
      state.outgoingDocs = action.payload;
    });
    builder.addCase(getOutgoingDocs.fulfilled, (state, action) => {
      state.outgoingDocs = action.payload?.rows;
    });
    builder.addCase(getOutgoingDocs.rejected, (state, action) => {
      state.outgoingDocs = action.payload;
    });

    builder.addCase(getAllCompanies.pending, (state, action) => {
      state.companies = action.payload;
    });
    builder.addCase(getAllCompanies.fulfilled, (state, action) => {
      state.companies = action.payload;
    });
    builder.addCase(getAllCompanies.rejected, (state, action) => {
      state.companies = action.payload;
    });
  },
});

export const { changeCompanyId, comanyId } = getDocs.actions;

export default getDocs.reducer;
