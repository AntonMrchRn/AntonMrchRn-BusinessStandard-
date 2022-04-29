import { StyleSheet } from 'react-native';
import platform from '../../../helpers/platform';

const styles = StyleSheet.create({
  input: {
    backgroundColor: platform.brandColor,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 12,
    ...platform.shadow,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});

export default styles;
