import { useNavigate} from 'react-router-native';
import  useAuthStorage from '../hooks/useAuthStorage';
import { CREATE_REVIEW } from '../graphql/mutations';
import {  useMutation } from '@apollo/client';

const useCreateReview = () => {
  const navigate = useNavigate();
  const authStorage = useAuthStorage(); // Assuming you have a hook to get the authentication token
  authStorage.getAccessToken();

  const [mutate, result] = useMutation(CREATE_REVIEW, {
    context: {
      headers: {
        authorization: authStorage.getAccessToken(),
      },
    },
  });

  const create = async ({ ownerName, repositoryName, ratingString, text }) => {
    
    const userRatingInput = ratingString; 
    const rating = parseInt(userRatingInput, 10);
    try {
      const { data } = await mutate({ variables: {input: { ownerName, repositoryName, rating, text  } } });
      navigate(`/repositories/${data.createReview.repositoryId}`);
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };
 
  return [create, result];
};

export default useCreateReview;
