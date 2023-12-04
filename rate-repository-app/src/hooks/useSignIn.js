import { gql, useMutation } from '@apollo/client';

const AUTHENTICATE = gql`
mutation authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const signIn = async ({ username, password }) => {
    try {
      const data = await mutate({ variables: { credentials: { username, password } } });
      return data; 
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };
 
  return [signIn, result];
};

export default useSignIn;