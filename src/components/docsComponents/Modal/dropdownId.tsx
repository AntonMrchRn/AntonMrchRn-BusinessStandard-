import React, { useEffect, useState } from 'react';

import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { getDocumentsID } from '../../../redux/slices/docs/actions';
import { changeSelectedId } from '../../../redux/slices/docs/docs';
import Spacer from '../../Spacer';

import styles from './style';

function DropdownModalId() {
  const dispatch = useAppDispatch();
  const documentsId = useAppSelector(state => state.getDocs.documentsId);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('fsdf');
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(getDocumentsID());
  }, [dispatch]);

  useEffect(() => {
    if (documentsId) {
      documentsId.map(item => {
        if (items.length < 4) {
          setItems((prev): any => [
            { label: item.text, value: +item.value },
            ...prev,
          ]);
        }
      });
    }
  }, [documentsId]);

  return (
    <View style={styles.wrapperId}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        onSelectItem={(item: any) => {
          dispatch(changeSelectedId(item.value));
        }}
        setItems={setItems}
        dropDownContainerStyle={styles.dropDownContainer}
        placeholder={'Выберите тип документов'}
        style={styles.dropDown}
        textStyle={styles.text}
        containerStyle={styles.container}
      />
      <Spacer size="L" />
    </View>
  );
}

export default DropdownModalId;
