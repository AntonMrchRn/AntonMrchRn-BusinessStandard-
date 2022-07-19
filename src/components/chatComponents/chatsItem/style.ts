import { StyleSheet } from 'react-native';
import platform from '../../../helpers/platform';

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    ...platform.shadowChat,
  },
  wrapperContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: 70,
    borderRadius: 15,
  },
  wrapperAvatar: {
    backgroundColor: '#f0f0f0',
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperTime: {
    height: 70,
    maxWidth: '15%',
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  wrapperMessages: {
    height: '100%',
    width: '83%',
    marginLeft: 12,
    flexGrow: 1,
  },
  name: {
    fontSize: 14,
    color: platform.darkGray,
    fontWeight: '500',
    width: '90%',
  },
  time: {
    fontSize: 12,
    marginBottom: 5,
    color: platform.darkGray,
  },
  text: {
    fontSize: 13,
    color: platform.lightGray,
    paddingTop: 5,
    paddingRight: 30,
  },
});

export default styles;
