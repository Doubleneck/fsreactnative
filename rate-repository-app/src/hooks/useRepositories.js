import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, searchQuery) => {

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection, searchKeyword: searchQuery,},
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data ? data.repositories : undefined, loading, error };
};

export default useRepositories;