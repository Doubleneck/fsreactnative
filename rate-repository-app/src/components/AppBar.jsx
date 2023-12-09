import { View, StyleSheet,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme.js';
import AppBarTab from './AppBarTab.jsx';
import { Link } from "react-router-native";
import useUser from '../hooks/useUser';

const AppBar = () => {
  const user = useUser();

  return <View style={styles.container}>
    <ScrollView horizontal style={styles.scrollView}>
      <Link to="/">
        <AppBarTab text="Repositories" />
      </Link>
      {user ? (
        <>
          <Link to="/createreview">
            <AppBarTab text="Create a review" />
          </Link>

          <Link to="/signout">
            <AppBarTab text="Sign out" />
          </Link>
        </>
      ) : (
        <>
          <Link to="/signup">
            <AppBarTab text="Sign up" />
          </Link>
          <Link to="/signin">
            <AppBarTab text="Sign in" />
          </Link>
        </>
        
      )}
    </ScrollView>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appbarBackgroundColor,
  },
  scrollView: {
    flexDirection: 'row',
  },
});

export default AppBar;