import React, { SetStateAction, useEffect, useState } from 'react';

import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { useUploadFiles } from '../../../hooks/useUploadFiles';
import { changeCompanyId } from '../../../redux/slices/docs';
import CustomModal from '../Modal';

import styles from './style';

interface iCompanies {
  companies: SetStateAction<{ label: string; value: string }[]>;
}

function Dropdown({ companies }: iCompanies) {
  const dispatch = useAppDispatch();
  const companyId = useAppSelector(state => state.getDocs.comanyId);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [selectFiles] = useUploadFiles();
  const [items, setItems] = useState([
    {
      label: 'Пушкин Александр Сергеевич ИП (с сотрудниками)',
      value: 'Пушкин',
    },
  ]);

  useEffect(() => {
    if (companies) {
      setItems(companies);
      dispatch(changeCompanyId(companies[0].value));
    }
  }, [companies, dispatch]);

  return (
    <View style={styles.wrapper}>
      <DropDownPicker
        open={open}
        value={companyId}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        onSelectItem={(item: any) => {
          dispatch(changeCompanyId(item.value));
        }}
        setItems={setItems}
        dropDownContainerStyle={styles.dropDownContainer}
        placeholder={items[0].label}
        style={styles.dropDown}
        textStyle={styles.text}
        containerStyle={styles.container}
      />
      <CustomModal selectFiles={selectFiles} />
    </View>
  );
}

export default Dropdown;
