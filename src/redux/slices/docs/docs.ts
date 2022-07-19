import { createSlice } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/types/types-external';
import {
  getAllCompanies,
  getDocumentsID,
  getIncomingDocs,
  getOutgoingDocs,
} from './actions';

export interface CounterState {
  companies: WritableDraft<CounterState> | any;
  outgoingDocs: WritableDraft<CounterState> | any;
  incomingDocs: WritableDraft<CounterState> | any;
  comanyId: WritableDraft<CounterState> | string;
  documentsId: WritableDraft<CounterState> | any;
  selectedCompany: WritableDraft<CounterState> | any;
  selectedId: WritableDraft<CounterState> | any;
}

const initialState: CounterState = {
  companies: null,
  outgoingDocs: null,
  incomingDocs: null,
  documentsId: null,
  comanyId: 'outgoingDocs[0].value',
  selectedCompany: null,
  selectedId: null,
};

const getDocs = createSlice({
  name: 'getDocs',
  initialState,
  reducers: {
    changeCompanyId: (state, action) => {
      state.comanyId = action.payload;
    },
    changeSelectedCompany: (state, action) => {
      state.selectedCompany = action.payload;
    },
    changeSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
  },
  extraReducers: builder => {
    // outgoing docs
    builder.addCase(getOutgoingDocs.pending, (state, action) => {
      state.outgoingDocs = action.payload;
    });
    builder.addCase(getOutgoingDocs.fulfilled, (state, action) => {
      state.outgoingDocs = action.payload?.rows;
    });
    builder.addCase(getOutgoingDocs.rejected, (state, action) => {
      state.outgoingDocs = action.payload;
    });
    // incoming docs
    builder.addCase(getIncomingDocs.pending, (state, action) => {
      state.incomingDocs = action.payload;
    });
    builder.addCase(getIncomingDocs.fulfilled, (state, action) => {
      state.incomingDocs = action.payload?.rows;
    });
    builder.addCase(getIncomingDocs.rejected, (state, action) => {
      state.incomingDocs = action.payload;
    });
    // all companies
    builder.addCase(getAllCompanies.pending, (state, action) => {
      state.companies = action.payload;
    });
    builder.addCase(getAllCompanies.fulfilled, (state, action) => {
      state.companies = action.payload;
    });
    builder.addCase(getAllCompanies.rejected, (state, action) => {
      state.companies = action.payload;
    });
    // get docs id
    builder.addCase(getDocumentsID.pending, (state, action) => {
      state.documentsId = action.payload;
    });
    builder.addCase(getDocumentsID.fulfilled, (state, action) => {
      state.documentsId = action.payload;
    });
    builder.addCase(getDocumentsID.rejected, (state, action) => {
      state.documentsId = action.payload;
    });
  },
});

export const {
  changeSelectedCompany,
  changeCompanyId,
  changeSelectedId,
  comanyId,
  selectedCompany,
  selectedId,
} = getDocs.actions;

export default getDocs.reducer;
