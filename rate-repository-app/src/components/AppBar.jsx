import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme.js';
import AppBarTab from './AppBarTab.jsx';
import { Link } from "react-router-native";
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appbarBackgroundColor,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <Link to="/">
      <AppBarTab text="Repositories" />
    </Link>
    <Link to="/signin">
      <AppBarTab text="Sign in" />
    </Link>
    
  </View>;
};

export default AppBar;