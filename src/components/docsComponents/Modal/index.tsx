import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import platform from '../../../helpers/platform';
import DropdownModal from './dropdownCompanies';
import DropdownModalId from './dropdownId';
import Spacer from '../../Spacer';
import { useUploadFiles } from '../../../hooks/useUploadFiles';

function CustomModal() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectFiles] = useUploadFiles();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <TouchableOpacity style={styles.upload} onPress={toggleModal}>
      <Icon name="file-upload-outline" size={47} color={platform.brandColor} />
      <Modal isVisible={isModalVisible}>
        <TouchableOpacity onPress={toggleModal} style={styles.closedModal} />
        <View style={styles.wrapperModal}>
          <View style={styles.wrapperDropdown}>
            <DropdownModalId />
            <DropdownModal />
          </View>
          <View style={styles.wrapperButton}>
            <TouchableOpacity style={styles.button} onPress={selectFiles}>
              <Text style={styles.label}>Выбрать файл</Text>
            </TouchableOpacity>
            <Spacer />
            <TouchableOpacity style={styles.closed} onPress={toggleModal}>
              <Text style={styles.label}>Закрыть</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

export default CustomModal;
