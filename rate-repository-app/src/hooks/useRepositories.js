import { useQuery } from '@apollo/client';
//import { GET_REPOSITORIES } from '../graphql/queries';

import { gql } from '@apollo/client';
export const GET_REPOSITORIES = gql`
  query GetRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection){
    repositories (orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          fullName
          id
          language
          ownerAvatarUrl
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          description
        }
      }
    }
  }
`;
const useRepositories = (orderBy, orderDirection) => {
  console.log('orderBy', orderBy);
  console.log('orderDirection', orderDirection);
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection },
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data ? data.repositories : undefined, loading, error };
};

export default useRepositories;