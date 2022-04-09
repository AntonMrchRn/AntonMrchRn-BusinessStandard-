import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { Login, notLogin } from '../redux/slices/userAuth';

export const useCheckLogin = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.userAuth.isLogin);

  const checkLogin = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        dispatch(Login());
      } else {
        dispatch(notLogin());
      }
    } catch (e) {
      console.error("User didn't login", e);
    }
  };

  return [checkLogin, isAuth];
};
