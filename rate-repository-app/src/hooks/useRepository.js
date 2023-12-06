import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ({id}) => {
  
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });
  
  console.log('data', data);
  console.log(data?.repository.fullName);
  return { repository: data ? data.repository : undefined, loading, error };
};

export default useRepository;