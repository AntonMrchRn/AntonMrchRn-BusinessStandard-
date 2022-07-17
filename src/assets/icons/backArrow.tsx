import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import platform from '../../helpers/platform';

export const BackArrow = `
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 13L1 7L7 1" stroke=${platform.brandColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default () => <SvgXml xml={BackArrow} width="100%" height="100%" />;
