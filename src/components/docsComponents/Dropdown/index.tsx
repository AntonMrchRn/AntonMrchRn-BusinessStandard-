import React, { SetStateAction, useEffect, useState } from 'react';

import { TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import platform from '../../../helpers/platform';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { useUploadFiles } from '../../../hooks/useUploadFiles';
import { changeCompanyId } from '../../../redux/slices/docs';

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
  }, [companies]);

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
      <TouchableOpacity style={styles.upload} onPress={() => selectFiles()}>
        <Icon
          name="file-upload-outline"
          size={40}
          color={platform.brandColor}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Dropdown;
