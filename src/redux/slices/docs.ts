import { Alert, Platform } from 'react-native';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/types/types-external';
import RNFetchBlob from 'rn-fetch-blob';
import { axiosInstance } from '../../api/axios/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface iParams {
  id_company: number;
}

export const getOutgoingDocs = createAsyncThunk(
  'docs/get',
  async ({ id_company }: iParams, thunkApi) => {
    try {
      const { data } = await axiosInstance.get(
        `/mapi/document/Fromclient?offset=0&limit=100?companyId=${id_company}`
      );

      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue({
        error: error.message,
      });
    }
  }
);

export async function downloadFiles(
  url: string,
  contentType: string,
  name: string
) {
  const token = await AsyncStorage.getItem('token');
  const {
    dirs: { DownloadDir, DocumentDir },
  } = RNFetchBlob.fs;
  const aPath = Platform.select({ ios: DocumentDir, android: DownloadDir });

  RNFetchBlob.config({
    fileCache: true,
    path: aPath + `/${name}`,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      description: 'File downloaded by download manager.',
      title: `Файл ${name} сохранен`,
      path: `${aPath}/${name}`,
      mime: contentType,
    },
  })
    .fetch(
      'GET',
      `http://bs.yamoguopt.info/mapi/document?url=${url}&mimeType=${contentType}&nameForFile=${name}`,
      {
        Authorization: `Bearer ${token}`,
        contentType: 'application/json',
      }
    )
    .then(res => {
      RNFetchBlob.android.actionViewIntent(res.path(), '');
      Alert.alert('Файл успешно сохранен');
    })
    .catch(err => {
      console.error('Ошибка загрузки ', err);
    });
}

export interface CounterState {
  company: WritableDraft<CounterState> | any;
}

const initialState: CounterState = {
  company: null,
};

const getDocs = createSlice({
  name: 'getDocs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getOutgoingDocs.pending, (state, action) => {
      state.company = action.payload;
    });
    builder.addCase(getOutgoingDocs.fulfilled, (state, action) => {
      state.company = action.payload?.rows;
    });
    builder.addCase(getOutgoingDocs.rejected, (state, action) => {
      state.company = action.payload;
    });
  },
});

export default getDocs.reducer;
