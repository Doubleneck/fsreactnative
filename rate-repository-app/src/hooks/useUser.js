import { useQuery } from '@apollo/client';
import  useAuthStorage from './useAuthStorage';
import { GET_USER_INFO } from '../graphql/queries';

const useUser = () => {
 
  const authStorage = useAuthStorage();
  const token = authStorage.getAccessToken();
  const { loading, error, data } = useQuery(GET_USER_INFO, {
    context: {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  });
  
  if (loading) return <p> loading </p>; 
  if (error) {
    console.error('Error fetching user info:', error);
    return null;
  }
  return data.me;
};

export default useUser;