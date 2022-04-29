import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

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
      renderItem={renderItem}
      data={data}
      keyExtractor={item => item.documentId}
      refreshing={false}
      ListEmptyComponent={<Loader />}
      onRefresh={() => dispatch(getOutgoingDocs(companyId))}
    />
  );
};

export default Incoming;
