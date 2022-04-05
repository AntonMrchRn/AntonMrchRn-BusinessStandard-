import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { host } from '../config';

export const axiosInstance = axios.create({
  baseURL: host,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(async config => {
  config.headers!.Authorization = `Bearer ${await AsyncStorage.getItem(
    'token'
  )}`;

  return config;
});
