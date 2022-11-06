import { PermissionsAndroid } from 'react-native';

export const CheckFilePermissions = async platform => {
  if (platform === 'android') {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      if (
        granted['android.permission.READ_EXTERNAL_STORAGE'] &&
        granted['android.permission.WRITE_EXTERNAL_STORAGE']
      ) {
        // user granted permissions
        return true;
      } else {
        // user didn't grant permission... handle with toastr, popup, something...
        return false;
      }
    } catch (err) {
      // unexpected error
      return false;
    }
  } else {
    // platform is iOS
    return true;
  }
};

export const checkPermissions = async () => {
  await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
  );
  //OR
  await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
  );
  // For both, you can use as below and get as response the status in an array for each permission requested
  const result = await PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  ]);

  result[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] === 'granted' &&
    result[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] === 'granted';
};
