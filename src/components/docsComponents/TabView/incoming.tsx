import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { getIncomingDocs, getOutgoingDocs } from '../../../redux/slices/docs';

import Spacer from '../../Spacer';
import ItemDocument from './item';
import Loader from './Loader';
import styles from './style';

const renderItem = ({ item }: any) => {
  return (
    <>
      <Spacer size="S" />
      <ItemDocument data={item} />
      <Spacer size="S" />
    </>
  );
};

const renderNoData = () => {
  return (
    <>
      <Spacer size="S" />
      <Text style={styles.noData}>У вас нет входящих документов</Text>
      <Spacer size="S" />
    </>
  );
};

const Incoming = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.getDocs.incomingDocs);
  const companyId = useAppSelector(state => state.getDocs.comanyId);

  useEffect(() => {
    dispatch(getIncomingDocs(companyId));
  }, [companyId, dispatch]);

  return (
    <FlatList
      style={styles.scene}
      contentContainerStyle={styles.sceneContainer}
      renderItem={data ? renderItem : renderNoData}
      data={data}
      keyExtractor={item => item.documentId}
      refreshing={false}
      ListEmptyComponent={!data ? <Loader /> : renderNoData}
      onRefresh={() => dispatch(getOutgoingDocs(companyId))}
    />
  );
};

export default Incoming;
