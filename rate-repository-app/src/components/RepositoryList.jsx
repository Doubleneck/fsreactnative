import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { Button, Menu, Divider, PaperProvider, Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { Text } from 'react-native';
import theme from '../theme';
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {
  
  const [selectedOrderBy, setSelectedOrderBy] = useState('CREATED_AT');
  const [selectedOrderDirection, setSelectedOrderDirection] = useState('DESC');
  const [menuText, setMenuText] = useState('Latest repositories' );
  const [visible, setVisible] = React.useState(false);
 
  const [searchQuery, setSearchQuery] = React.useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 1000);
  const { repositories } = useRepositories(selectedOrderBy, selectedOrderDirection, debouncedSearchQuery);
 
  const onChangeSearch = query => setSearchQuery(query);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    
    <PaperProvider>
      <Searchbar style={{ margin: 10, backgroundColor: 'white' }}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View
        style={{
          paddingTop: 10,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}  ><Text style={{ color: theme.colors.textPrimary }}>{menuText}</Text></Button>}>
          <Menu.Item
            onPress={() => {
              setSelectedOrderBy('CREATED_AT');
              setSelectedOrderDirection('DESC');
              setMenuText('Latest repositories');
            }}
            title="Latest repositories"
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              setSelectedOrderBy('RATING_AVERAGE');
              setSelectedOrderDirection('DESC');
              setMenuText('Highest rated repositories');
            }}
            title="Highest rated repositories"
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              setSelectedOrderBy('RATING_AVERAGE');
              setSelectedOrderDirection('ASC');
              setMenuText('Lowest rated repositories');
            }}
            title="Lowest rated repositories"
          />
        </Menu>
      </View>
      <RepositoryListContainer repositories={repositories} />
    </PaperProvider>
    
  );
};


export const RepositoryListContainer = ({ repositories }) => {
  const  navigate = useNavigate();
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;


  const handlePress = async (id) => {
    await navigate(`/repositories/${id}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => handlePress(item.id)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export default RepositoryList;

