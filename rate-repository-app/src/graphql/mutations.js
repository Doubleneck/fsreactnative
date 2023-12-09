import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
mutation authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(user: $input) {
      id
      username
    }
  }
`;

export const CREATE_REVIEW = gql`
mutation CreateReviewMutation($input: CreateReviewInput!) {
    createReview(review: $input) {
      createdAt
      repositoryId
      rating
      repository {
        ownerName
        userHasReviewed
        name
        description
        
      }
    }
  }
 `;