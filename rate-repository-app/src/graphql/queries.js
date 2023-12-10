import { gql } from '@apollo/client';

export const GET_USER_INFO = gql`
  query GetUserInfo {
    me {
      id
      username
    }
  }
`;

// export const GET_USER_REVIEWS = gql`
// query Me {
//   me {
//   reviews {
//     edges {
//       node {
//         user {
//           reviews {
//             edges {
//               node {
//                 rating
//                 createdAt
//                 text
//                 repository {
//                   ownerName
//                   name
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//   }
// }`;
export const GET_USER_REVIEWS = gql`
query Me {
  me {
    username
    reviews {
      edges {
        node {
          id
          rating
          text
          createdAt
          repository {
            ownerName
            name
          }
        }
      }
    }
  }
}`;

export const GET_REPOSITORIES = gql`
  query GetRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
    repositories (orderBy: $orderBy, orderDirection: $orderDirection searchKeyword: $searchKeyword) {
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

export const GET_REVIEWS = gql`
query GetReviews($id: ID!) {
  repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

