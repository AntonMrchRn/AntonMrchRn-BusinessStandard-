import { StyleSheet } from 'react-native';
import platform from '../../../helpers/platform';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: platform.android ? 10 : 0,
  },
  input: {
    width: '80%',
    height: '100%',
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
  },
  btn: {
    maxWidth: '10%',
  },
  btnLeft: {
    maxWidth: '10%',
    zIndex: 2,
  },
});

export default styles;
