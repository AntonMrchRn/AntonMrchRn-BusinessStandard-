import * as React from 'react';

import { View } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styles from './style';
import Outgoing from './outgoing';
import Incoming from './incoming';

const LazyPlaceholder = () => <View style={styles.scene} />;

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={styles.tabBarIndicator}
    style={styles.tabBar}
    labelStyle={styles.tabBarLabel}
    getLabelText={({ route }) => route.title}
  />
);

export default class TabViewDocs extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Исходящие' },
      { key: 'second', title: 'Входящие' },
    ],
  };

  _handleIndexChange = (index: number) => this.setState({ index });

  _renderLazyPlaceholder = () => <LazyPlaceholder />;

  render() {
    return (
      <TabView
        lazy
        navigationState={this.state}
        renderTabBar={renderTabBar}
        renderScene={SceneMap({
          first: Outgoing,
          second: Incoming,
        })}
        renderLazyPlaceholder={this._renderLazyPlaceholder}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}
