import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import Text from './Text';
import theme from '../theme';
import RepositoryItemNumbers from './RepositoryItemNumbers';

const styles = StyleSheet.create({
  flexContainer: {
    padding: 4,
    display: 'flex',
    flexDirection: 'row',  
  },
  container: {
    padding: 4,
    backgroundColor: theme.colors.componentBackgroundColor, 
  },
  flexItemA: {
    padding: 4,
    flexGrow: 0,
    backgroundColor: 'white',
    maxWidth: '80%'
  },
  flexItemB: {
    marginTop: 8,
    marginLeft: 8,
    padding: 4,
    flexGrow: 0,
    backgroundColor: 'white',
    maxWidth: '80%'
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
  
const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.flexItemA}>
          <Image style={styles.avatar} source={{ uri: repository.ownerAvatarUrl }} />
        </View>
        <View style={styles.flexItemB}>
          <Text fontSize="subheading" fontWeight="bold" >{repository.fullName}</Text>
          <Text style={{ marginTop: 8, color: theme.colors.textSecondary }}  >{repository.description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.languageText}>{repository.language}</Text>
          </View>
        </View>
      </View>
      <View >
        <RepositoryItemNumbers repository={repository}  />
      </View>
      
    </View>
  );
};

export default RepositoryItem;

