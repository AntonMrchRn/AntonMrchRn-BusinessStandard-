import { StyleSheet } from 'react-native';

import platform, { opacify } from '../../../helpers/platform';

const styles = StyleSheet.create({
  wrapperLoader: {
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scene: {
    paddingHorizontal: 7,
    paddingTop: 20,
  },
  sceneContainer: {
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarIndicator: {
    backgroundColor: platform.brandColor,
  },
  tabBar: {
    backgroundColor: '#dedede',
    borderTopWidth: 0.5,
    borderColor: platform.brandColor,
  },
  tabBarLabel: {
    color: '#0f0f0f',
  },
  itemDoc: {
    minHeight: 95,
    maxHeight: 120,
    width: '100%',
    borderWidth: 1.2,
    borderLeftColor: platform.lightGray,
    borderLeftWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 15,
    borderColor: platform.lightGray,
  },
  itemWprapper: {
    minHeight: 95,
    maxHeight: 120,
    width: '100%',
    flexDirection: 'row',
    ...platform.shadow,
  },
  blockText: {
    width: '80%',
    height: '100%',
    justifyContent: 'space-between',
    marginRight: 5,
  },
  blockDoc: {
    width: '100%',
    height: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
  },
  blockIcon: {
    width: '20%',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: platform.gray,
  },
  itemDate: {
    fontSize: 12,
  },
  itemKind: {
    fontSize: 13,
  },
});

export default styles;
