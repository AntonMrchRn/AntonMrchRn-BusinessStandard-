import { StyleSheet } from 'react-native';
import platform from '../../../helpers/platform';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  containerHuman: {
    alignItems: 'flex-start',
  },
  wrapperMessageMy: {
    backgroundColor: platform.brandColor,
    maxWidth: '90%',
    marginLeft: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperMessageHuman: {
    backgroundColor: '#d9d7d7',
    maxWidth: '90%',
    marginLeft: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMy: {
    lineHeight: 18,
    color: '#f0f0f0',
    fontSize: 14,
    fontWeight: '500',
  },
  textHuman: {
    lineHeight: 18,
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
  },
  timeMy: {
    fontSize: 12,
    marginRight: 10,
    marginTop: 4,
    marginBottom: 16,
    color: platform.gray,
  },
  timeHuman: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 3,
    marginBottom: 16,
    color: platform.gray,
  },
});

export default styles;
