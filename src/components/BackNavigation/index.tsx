import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { BackArrow } from '../../assets/icons/backArrow';
import platform from '../../helpers/platform';

interface iBackNavigate {
  route: {
    params: {
      roleName: string;
    };
  };
}

const BackNavigation = ({
  route: {
    params: { roleName },
  },
}: iBackNavigate) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.lateralWrapper}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.goBack()}
        >
          <SvgXml xml={BackArrow} height="16" width="16" />
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>{roleName}</Text>
      <View style={styles.fix} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    ...platform.shadowLight,
  },
  btnBack: {
    width: 25,
    marginLeft: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lateralWrapper: {
    width: '15%',
    justifyContent: 'center',
  },
  fix: {
    width: '15%',
    height: '100%',
  },
  label: {
    fontSize: 15,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default BackNavigation;
