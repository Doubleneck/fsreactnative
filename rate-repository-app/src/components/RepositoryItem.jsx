import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import Text from './Text';
import theme from '../theme';
import RepositoryItemNumbers from './RepositoryItemNumbers';
  
const RepositoryItem = ({ repository }) => {
  return (
    <View testID="repositoryItem" style={styles.container} >
      <View style={theme.flexContainer}>
        <View style={theme.flexItemA}>
          <Image style={styles.avatar} source={{ uri: repository?.ownerAvatarUrl }} />
        </View>
        <View style={theme.flexItemB}>
          <Text testID="fullName" fontSize="subheading" fontWeight="bold" >{repository?.fullName}</Text>
          <Text testID="description" style={{ marginTop: 8, color: theme.colors.textSecondary }}  >{repository?.description}</Text>
          <View style={styles.languageContainer}>
            <Text testID="language" style={styles.languageText}>{repository?.language}</Text>
          </View>
        </View>
      </View>
      <View >
        <RepositoryItemNumbers repository={repository}  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    padding: 4,
    backgroundColor: theme.colors.componentBackgroundColor, 
  },
  avatar: {
    marginTop: 8,
    marginLeft: 8,
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },  
  languageContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 8,
    marginTop: 8,
    alignSelf: 'flex-start', 
  },
  languageText: {
    color: 'white',
    fontWeight: 'bold',
  }, 
});
export default RepositoryItem;

