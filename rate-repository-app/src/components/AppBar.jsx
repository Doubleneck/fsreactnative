import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme.js';
import AppBarTab from './AppBarTab.jsx';
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appbarBackgroundColor,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab text="Repositories" />
  </View>;
};

export default AppBar;