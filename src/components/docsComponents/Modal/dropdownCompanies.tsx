import React, { useEffect, useState } from 'react';

import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { changeSelectedCompany } from '../../../redux/slices/docs';
import Spacer from '../../Spacer';

import styles from './style';

function DropdownModal() {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(state => state.getDocs.companies);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (companies) {
      setItems(companies);
    }
  }, [companies]);

  return (
    <View style={styles.wrapper}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        onSelectItem={(item: any) => {
          dispatch(changeSelectedCompany(item.value));
        }}
        setItems={setItems}
        dropDownContainerStyle={styles.dropDownContainer}
        placeholder={'Выберите компанию'}
        style={styles.dropDown}
        textStyle={styles.text}
        containerStyle={styles.container}
      />
      <Spacer size="L" />
    </View>
  );
}

export default DropdownModal;
