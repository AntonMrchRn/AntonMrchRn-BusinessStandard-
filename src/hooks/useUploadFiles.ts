import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DocumentPicker from 'react-native-document-picker';
import { axiosInstance } from '../api/axios/axiosInstance';
import { useAppSelector } from './useRedux';
import { host } from '../api/config';

export const useUploadFiles = () => {
  const [files, setFiles] = useState<any>(null);
  const companiesId = useAppSelector(state => state.getDocs.selectedId);
  const selectedCompany = useAppSelector(
    state => state.getDocs.selectedCompany
  );

  const requesID = async () => {
    await axiosInstance.get('mapi/document/fromclient/dockind');
  };

  useEffect(() => {
    requesID();
    if (files != null) {
      const upload = async () => {
        await uploadImage();
      };
      upload();
    }
  }, [files]);

  const uploadImage = async () => {
    const token = await AsyncStorage.getItem('token');
    const data = new FormData();
    console.log('files', files);

    data.append('Files', files);
    data.append('CompanyId', selectedCompany);
    data.append('DocumentKindId', companiesId);

    let response = await fetch(`${host}/mapi/document`, {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 201) {
      Alert.alert('Файл успешно загружен');
    } else {
      Alert.alert('Ошибка при загрузке. Проверьте выбранные поля.');
    }
  };

  const selectFiles = async () => {
    try {
      const file = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });

      file.map(item => setFiles(item));
    } catch (err) {
      setFiles(null);
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return [selectFiles, uploadImage];
};
