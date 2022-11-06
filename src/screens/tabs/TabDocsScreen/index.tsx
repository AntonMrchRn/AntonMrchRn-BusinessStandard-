import React, { useEffect } from 'react';

import { PermissionsAndroid, View } from 'react-native';

import Dropdown from '../../../components/docsComponents/Dropdown';
import TabViewDocs from '../../../components/docsComponents/TabView';
import Spacer from '../../../components/Spacer';
import platform from '../../../helpers/platform';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { getAllCompanies } from '../../../redux/slices/docs/actions';
import { checkPermissions } from '../../../utils/permissions';

import styles from './style';

const DocsScreen = () => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(state => state.getDocs.companies);

  useEffect(() => {
    if (platform.android) {
      checkPermissions();
    }
  }, []);

  useEffect(() => {
    dispatch(getAllCompanies());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Spacer size="M" />
      <View style={styles.containerDropdown}>
        <Dropdown companies={companies} />
      </View>
      <Spacer size="M" />
      <TabViewDocs />
    </View>
  );
};

export default DocsScreen;
