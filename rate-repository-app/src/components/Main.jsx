import React, { useEffect } from 'react';
import {  StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate, useNavigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import theme from '../theme';

import { useApolloClient } from '@apollo/client';
import  useAuthStorage from '../hooks/useAuthStorage';

import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackgroundColor,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const SignOut = () => {
  const navigate = useNavigate();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  useEffect(() => {
    const signOut = async () => {
      authStorage.removeAccessToken();
      apolloClient.resetStore();
      navigate('/signin');
    };

    signOut();
  }, [authStorage, apolloClient, navigate]);

  return null; 
};

const Main = () => {
  
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repositories/:repositoryId" element={<SingleRepository/>} />
        <Route path="/createreview" element={<CreateReview/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;