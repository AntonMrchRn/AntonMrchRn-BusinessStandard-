import { StyleSheet } from 'react-native';
import platform from '../../../../helpers/platform';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerChat: {
    flex: 1,
    marginBottom: platform.ios ? 10 : 0,
  },
  list: {
    backgroundColor: '#f0f0f0',
  },
  wrapperList: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default styles;
