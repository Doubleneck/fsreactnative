
import {  Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';
import Text from './Text';

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  ratingString : yup
    .number()
    .min(0)
    .max(100)
    .required('Rating is required'),
  text: yup
    .string()
    .optional()
});

export const CreateReviewForm = ({ onSubmit }) => {
  return(
    <View>
      <FormikTextInput style={styles.input} name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput style={styles.input} name="repositoryName" placeholder="Repository name" />
      <FormikTextInput style={styles.input} name="ratingString" placeholder="Rating between 0 and 100" />
      <FormikTextInput style={styles.input}  multiline  name="text" placeholder="Review" />
      <Pressable style={styles.pressable} onPress={() => onSubmit()}>
        <Text style={styles.pressableText}>Create a review</Text>
      </Pressable>
    </View>
  );
};

const CreateReview = () => {
  const [createNewReview] = useCreateReview();

  const onSubmit = async (values) => {
    
    const { ownerName, repositoryName, ratingString , text } = values;
    try {
      await createNewReview({ ownerName, repositoryName, ratingString, text });
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <Formik initialValues={{ ownerName: '', repositoryName: '', ratingString :'', text: '' }} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 8,
    marginTop: 8,
    margin: 8,
  },
  pressableText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }, 
  input: {
    padding: 8,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 8,
    paddingHorizontal: 8,
  },

});

export default CreateReview;
