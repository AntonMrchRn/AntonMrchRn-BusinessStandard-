import { useState } from 'react';
import { Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

export const useUploadFiles = () => {
  const [files, setFiles] = useState([]);

  const selectFiles = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      await res.map(item => files.push(item));
      console.log('res', files);
      setFiles([]);
    } catch (err) {
      setFiles([]);
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  return [selectFiles];
};
