import { Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob';

import { CheckFilePermissions } from './permissions';
import { host } from '../api/config';
import platform from '../helpers/platform';

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
    fileCache: false,
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
      `${host}/mapi/document?url=${url}&mimeType=${contentType}&nameForFile=${name}`,
      {
        Authorization: `Bearer ${token}`,
        contentType: 'application/json',
      }
    )
    .then(async res => {
      if (platform.android) {
        if (await CheckFilePermissions('android')) {
          console.log('res', res);
          RNFetchBlob.android.actionViewIntent(res.path(), '');
        }
      }
      if (Platform.OS === 'ios') {
        RNFetchBlob.ios.previewDocument(res.data);
      }
    })
    .catch(err => {
      console.log('err', err);
    });
}
