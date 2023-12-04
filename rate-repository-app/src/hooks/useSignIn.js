import { useMutation } from '@apollo/client';
import  useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useNavigate} from 'react-router-native';
import { AUTHENTICATE} from '../graphql/mutations';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  const client = useApolloClient();
  const [mutate, result] = useMutation(AUTHENTICATE);
  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({ variables: { credentials: { username, password } } });
      const token = JSON.stringify(data.authenticate.accessToken);
      await authStorage.setAccessToken(token );
      client.resetStore();
      navigate('/');
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };
 
  return [signIn, result];
};

export default useSignIn;