import { View, StyleSheet,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme.js';
import AppBarTab from './AppBarTab.jsx';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appbarBackgroundColor,
  },
  scrollView: {
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal style={styles.scrollView}>{}
      <Link to="/">
        <AppBarTab text="Repositories" />
      </Link>
      <Link to="/signin">
        <AppBarTab text="Sign in" />
      </Link> 
    </ScrollView>
  </View>;
};

export default AppBar;