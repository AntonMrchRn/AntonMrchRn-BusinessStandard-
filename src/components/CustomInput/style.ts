import { StyleSheet } from 'react-native';
import platform from '../../helpers/platform';

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '70%',
    borderBottomColor: platform.tabBarInactiveColor,
    borderBottomWidth: 1.2,
    paddingRight: 10,
    paddingLeft: 3,
  },
  activeInput: {
    height: 40,
    width: '70%',
    borderBottomColor: platform.brandColor,
    borderBottomWidth: 1.8,
    paddingRight: 10,
    paddingLeft: 3,
  },
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    right: 5,
  },
});

export default styles;
