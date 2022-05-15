import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  wrapperLogo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.3,
  },
  wrapperAuth: {
    alignItems: 'center',
    flex: 0.6,
    width: '100%',
  },
  error: {
    color: '#9e2323',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default styles;
