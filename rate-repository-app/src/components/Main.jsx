import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import { Pressable } from 'react-native';
import AppBar from './AppBar';
import theme from '../theme';
const styles = StyleSheet.create({
  container: {
  
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackgroundColor,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Pressable >
        <AppBar />
      </Pressable>
      <RepositoryList />
    </View>
  );
};

export default Main;