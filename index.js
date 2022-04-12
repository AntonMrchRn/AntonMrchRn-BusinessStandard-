import { AppRegistry } from 'react-native';
import App from './src/core/App';
import { name as appName } from './app.json';
import { LogBox } from 'react-native';

AppRegistry.registerComponent(appName, () => App);

LogBox.ignoreLogs(['Require cycle:']);
