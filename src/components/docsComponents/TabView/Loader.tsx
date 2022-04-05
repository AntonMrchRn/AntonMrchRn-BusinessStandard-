import React from 'react';

import { ActivityIndicator } from 'react-native';
import platform from '../../../helpers/platform';

const Loader = () => (
  <ActivityIndicator size="large" color={platform.brandColor} />
);

export default Loader;
