import { Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob';

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
