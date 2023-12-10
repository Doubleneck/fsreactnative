import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import theme from '../theme';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';

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
    outerContainer: {
      padding: 4,
      backgroundColor: theme.colors.mainBackgroundColor, 
    },
    ratingContainer: {
      
      backgroundColor: theme.colors.componentBackgroundColor,
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
    
    <View key={review.node.id} style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={theme.flexContainer}>
          <View style = {styles.ratingContainer} >
            <View style = {theme.flexItemA} >
              <Text style = {styles.ratingText } > {review.node.rating}</Text>
            </View>  
          </View>
          <View style = {theme.flexItemB} >
            <Text style = {styles.userText }> {review.node.user?.username}</Text>
            <Text style = {styles.userText }>{review.node.repository?.ownerName}/{review.node.repository?.name}</Text>
            <Text style = {styles.dateText } > { formattedDate}</Text>
            <Text style = {styles.textText } > {review.node.text}</Text>
          </View>
        </View>
      </View>
    </View>);
};
//
export default ReviewItem;