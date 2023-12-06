import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import {  useParams } from 'react-router-native';
import { Text } from 'react-native';
import theme from '../theme';
import * as Linking from 'expo-linking';

import  useRepository from '../hooks/useRepository'; 
import RepositoryItem from './RepositoryItem';


const RepositoryView =   () => {

  let { repositoryId } = useParams();
  const { repository } =  useRepository({ id: repositoryId });
    
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
  return (
    <View>
      <RepositoryItem repository={repository} />
        
      <Pressable style = {styles.linkContainer} onPress={() => Linking.openURL(repository?.url)}>    
        <Text style = {styles.linkText} >Open in GitHub</Text>
      </Pressable>
    </View>
  );
  
};

export default RepositoryView;