import React, { SetStateAction, useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
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
  );
}

export default Dropdown;
