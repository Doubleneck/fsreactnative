import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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

export const GET_REPOSITORY = gql`
  query GetRepository($id: ID!) {
    repository(id: $id) {
      fullName
      id
      language
      ownerAvatarUrl
      ratingAverage
      reviewCount
      stargazersCount
      forksCount
      description
      url
    }
  }
`;

export const GET_USER_INFO = gql`
  query GetUserInfo {
    me {
      id
      username
    }
  }
`;