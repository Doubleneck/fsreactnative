import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { FlatList, View, StyleSheet } from 'react-native';

import { GET_USER_REVIEWS } from '../graphql/queries';

import  useAuthStorage from '../hooks/useAuthStorage';
import ReviewItem from './ReviewItem';
    
const Myreviews =  () => {
  const authStorage =  useAuthStorage();
  const token = authStorage.getAccessToken();
  const [reviews, setReviews] = useState([]);
  const { data } = useQuery(GET_USER_REVIEWS, {
    context: {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
    fetchPolicy: 'cache-and-network',
  });
    
  useEffect(() => {
    if (data) {
      setReviews(data.me.reviews.edges);
    }
  });
  
  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  
  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View >
      <FlatList
        data={reviews}
        renderItem={({item}) => <ReviewItem review={item} />}
        keyExtractor={({id}) => id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
 
};

export default Myreviews;