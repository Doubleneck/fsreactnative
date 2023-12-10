import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useReviews from '../hooks/useReviews';
import { Text } from 'react-native';
import theme from '../theme';
import * as Linking from 'expo-linking';
import  useRepository from '../hooks/useRepository'; 
import {  useParams } from 'react-router-native';
import ReviewItem from './ReviewItem';
const RepositoryInfo = ({ repository }) => {
    
  return(
    <View>
      <RepositoryItem repository={repository} />
      <Pressable style = {styles.linkContainer} onPress={() => Linking.openURL(repository?.url)}>    
        <Text style = {styles.linkText} > Open in GitHub</Text>
      </Pressable>
    </View>);
};
 
const styles = StyleSheet.create({
  
  linkContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 8,
    marginTop: 8,
    margin: 8,
    alignSelf: 'center', 
    width: '90%',
  },
  linkText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center', 
  }, 
});

const SingleRepository = () => {
  let { repositoryId } = useParams();
  const { repository } =  useRepository({ id: repositoryId });
  const data = useReviews({ id: repository?.id });
  const reviews = data.reviews?.edges;
  const ItemSeparator = () => <View style={styles.separator} />;
  return (
    
    <FlatList style={styles.scrollView} 
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) =>  <ReviewItem review={item} />}
      keyExtractor={({ node }) => node.id} 
      ListHeaderComponent={() =>  <RepositoryInfo repository={repository} />}
    />
  );
};
  
export default SingleRepository;