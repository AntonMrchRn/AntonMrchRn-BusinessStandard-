import React, { useEffect } from 'react';

import { FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { getOutgoingDocs } from '../../../redux/slices/docs';

import Spacer from '../../Spacer';
import ItemDocument from './item';
import Loader from './Loader';
import styles from './style';

const renderItem = ({ item }: any) => {
  return (
    <>
      <ItemDocument data={item} />
      <Spacer size="L" />
    </>
  );
};

const Outgoing = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.getDocs.outgoingDocs);
  const companyId = useAppSelector(state => state.getDocs.comanyId);

  useEffect(() => {
    dispatch(getOutgoingDocs(companyId));
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

export default Outgoing;
