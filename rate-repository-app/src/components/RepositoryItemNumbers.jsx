import React from 'react';
import { View,  StyleSheet} from 'react-native';
import Text from './Text';
import theme from '../theme';

const formatCount = (count) => {
  if (count >= 1000) {
    const formattedCount = (count / 1000).toFixed(1); // Use toFixed to round to one decimal place
    return `${formattedCount}k`;
  }
  return count.toString();
};

const styles = StyleSheet.create({
  numbersContainer: {
    padding: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },  
  container: {
    padding: 4,
    backgroundColor: theme.colors.componentBackgroundColor,
    alignItems: 'center',
  },
});
  
const RepositoryItemNumbers = ({ repository }) => {
  return (
    <View testID="stargazersCount" style={styles.numbersContainer}>
      <View style={styles.container}>
        <Text fontWeight="bold">{formatCount(repository.stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>
      <View testID="forksCount" style={styles.container}>
        <Text fontWeight="bold">{formatCount(repository.forksCount)}</Text>
        <Text>Forks</Text>
      </View>
      <View testID="reviewCount" style={styles.container}>
        <Text fontWeight="bold">{formatCount(repository.reviewCount)}</Text>
        <Text>Reviews</Text>
      </View>
      <View testID="ratingAverage" style={styles.container}>
        <Text fontWeight="bold">{formatCount(repository.ratingAverage)}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryItemNumbers;
