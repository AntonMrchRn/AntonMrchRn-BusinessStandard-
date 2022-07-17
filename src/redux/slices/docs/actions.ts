import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../api/axios/axiosInstance';

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

export const getIncomingDocs = createAsyncThunk(
  'docs/getIncomingDocs',
  async (id_company: iParams, thunkApi) => {
    try {
      const { data } = await axiosInstance.get(
        `mapi/document/frombs?offset=0&limit=1000&companyId=${id_company}`
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

export const getDocumentsID = createAsyncThunk(
  'docs/getDocumentsID',
  async (_, thunkApi) => {
    try {
      const { data } = await axiosInstance.get(
        'mapi/document/fromclient/dockind'
      );
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue({
        error: error.message,
      });
    }
  }
);
