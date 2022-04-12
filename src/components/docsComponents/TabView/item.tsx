import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';
import platform from '../../../helpers/platform';
import { downloadFiles } from '../../../utils/downloadFiles';

import styles from './style';

interface iItem {
  data: {
    name: string;
    documentKind: string;
    createdDate: number;
    url: string;
    contentType: string;
  };
}

const ItemDocument = ({
  data: { name, documentKind, createdDate, url, contentType },
}: iItem) => {
  return (
    <TouchableOpacity
      style={styles.itemWprapper}
      onPress={() => downloadFiles(url, contentType, name)}
    >
      <View style={styles.itemDoc}>
        <View style={styles.blockText}>
          <Text style={styles.itemTitle}>{name}</Text>
          <Text style={styles.itemKind}>{documentKind}</Text>
          <Text style={styles.itemDate}>{createdDate}</Text>
        </View>
        <View style={styles.blockIcon}>
          <Icon name="download" size={39} color={platform.brandColor} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemDocument;
