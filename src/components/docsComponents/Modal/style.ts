import { StyleSheet } from 'react-native';
import platform from '../../../helpers/platform';

const styles = StyleSheet.create({
  upload: {
    bottom: 1,
    marginLeft: 5,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closedModal: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  dropDown: {
    backgroundColor: '#e8e8e8',
    borderColor: platform.brandColor,
    borderWidth: 1.15,
    borderRadius: 18,
    height: 45,
    zIndex: 10,
  },
  wrapperDropdown: {
    flex: 0.7,
    justifyContent: 'center',
  },
  wrapperButton: {
    flex: 0.5,
    alignItems: 'center',
    zIndex: -1,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: platform.brandColor,
    borderRadius: 10,
    height: 40,
    width: '60%',
  },
  closed: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: platform.lightGray,
    borderRadius: 10,
    height: 40,
    width: '60%',
  },
  text: {
    fontSize: 14.4,
  },
  container: {
    alignItems: 'center',
    width: '100%',
  },
  wrapper: {
    justifyContent: 'space-between',
    zIndex: 1,
  },
  wrapperId: {
    justifyContent: 'space-between',
    zIndex: 2,
  },
  dropDownContainer: {
    paddingHorizontal: 5,
    paddingVertical: 12,
    borderColor: platform.brandColor,
    borderTopColor: '#e8e8e8',
    borderRadius: 18,
  },
  wrapperModal: {
    flex: 0.5,
    width: '100%',
    backgroundColor: platform.darkGray,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default styles;
