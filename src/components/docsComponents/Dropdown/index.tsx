import React, { useState } from 'react';

import DropDownPicker from 'react-native-dropdown-picker';

import styles from './style';

function Dropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Кузнецов Сергей Сергеевич', value: 'Кузнецов' },
    { label: 'Громов Олег Андреевич', value: 'Громов' },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
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
