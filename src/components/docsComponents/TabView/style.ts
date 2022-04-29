import { StyleSheet } from 'react-native';

import platform from '../../../helpers/platform';

const styles = StyleSheet.create({
  wrapperLoader: {
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noData: {
    fontSize: 18,
  },
  scene: {
    paddingVertical: 7,
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  sceneContainer: {
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarIndicator: {
    backgroundColor: platform.brandColor,
    height: 2.5,
  },
  tabBar: {
    backgroundColor: '#dedede',
    borderTopWidth: 2,
    borderColor: '#d9d9d9',
    ...platform.shadow,
  },
  tabBarLabel: {
    color: '#0f0f0f',
  },
  itemDoc: {
    minHeight: 95,
    maxHeight: 120,
    width: '100%',
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemWprapper: {
    marginVertical: 2,
    minHeight: 95,
    maxHeight: 120,
    width: '93%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
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
