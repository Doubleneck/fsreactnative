import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useReviews from '../hooks/useReviews';
import { Text } from 'react-native';
import theme from '../theme';
import * as Linking from 'expo-linking';
import  useRepository from '../hooks/useRepository'; 
import {  useParams } from 'react-router-native';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';


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

  

const ReviewItem = ({ review }) => {
  const styles = StyleSheet.create({
  
    userText: {  
      fontWeight: 'bold',
      padding: 3,
    }, 
    dateText: {  
      color: 'grey',
      padding: 3,
    }, 
    textText: {
      padding: 5,
    },
    ratingText: {  
      fontWeight: 'bold',
      color:theme.colors.primary,
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 2,
      borderColor:theme.colors.primary,
      display: 'flex',
      textAlign: 'center', 
      lineHeight: 36,
      paddingRight: 3,
    }, 
    container: {
      padding: 4,
      backgroundColor: theme.colors.componentBackgroundColor, 
    },
    ratingContainer: {
      
      
      padding: 8,
      marginTop: 8,
      margin: 8,
      alignSelf: 'left', 
      width: '15%',
    },
  });

  const originalDate = new Date(review.node.createdAt);
  const formattedDate = format(originalDate, 'dd.MM.yyyy', { locale: enGB });

  return(
    
    <View key={review.node.id} style={styles.container}>
      <View style={theme.flexContainer}>
        <View style = {styles.ratingContainer} >
          <View style = {theme.flexItemA} >
            <Text style = {styles.ratingText } > {review.node.rating}</Text>
          </View>  
        </View>
        <View style = {theme.flexItemB} >
          <Text style = {styles.userText }> {review.node.user.username}</Text>
          <Text style = {styles.dateText } > { formattedDate}</Text>
          <Text style = {styles.textText } > {review.node.text}</Text>
        </View>
      </View>
    </View>);
};
  
const SingleRepository = () => {
  let { repositoryId } = useParams();
  const { repository } =  useRepository({ id: repositoryId });
  const data = useReviews({ id: repository?.id });
  const reviews = data.reviews?.edges;
 
  return (
    
    <FlatList style={styles.scrollView}
      data={reviews}
      renderItem={({ item }) =>  <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() =>  <RepositoryInfo repository={repository} />}
    />
  );
};
  
export default SingleRepository;