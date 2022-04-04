import React from 'react';
import { View } from 'react-native';

import Dropdown from '../../../components/docsComponents/Dropdown';
import TabViewExample from '../../../components/docsComponents/TabView';
import Spacer from '../../../components/Spacer';

import styles from './style';

const DocsScreen = () => {
  return (
    <View style={styles.container}>
      <Spacer size="M" />
      <View style={styles.containerDropdown}>
        <Dropdown />
      </View>
      <Spacer size="M" />
      <TabViewExample />
    </View>
  );
};

export default DocsScreen;
