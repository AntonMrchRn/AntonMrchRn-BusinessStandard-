import React, { useEffect } from 'react';

import { PermissionsAndroid, View } from 'react-native';

import Dropdown from '../../../components/docsComponents/Dropdown';
import TabViewDocs from '../../../components/docsComponents/TabView';
import Spacer from '../../../components/Spacer';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { getAllCompanies } from '../../../redux/slices/docs/actions';

import styles from './style';

const DocsScreen = () => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(state => state.getDocs.companies);

  useEffect(() => {
    const checkPermissions = async () => {
      const readGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );
      //OR
      const writeGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      // For both, you can use as below and get as response the status in an array for each permission requested
      const result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      const isGranted =
        result[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] ===
          'granted' &&
        result[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] ===
          'granted';
    };
    checkPermissions();
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
