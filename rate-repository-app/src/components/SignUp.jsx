import Text from './Text';
import {  Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import * as yup from 'yup';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be at least 5 characters')
    .max(30, 'Username must be at most 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 1 characters')
    .max(50, 'Password must be at most 50 characters')
    .required('Password is required'),
  
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], "Passwords must match")
    .required('Password confirm is required')
});

const useSignUp = () => {

  const [mutate, result] = useMutation(CREATE_USER);
  const signUp = async ({ username, password }) => {
    try {
      await mutate({ variables: { input: { username, password } } });
    
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  return [signUp, result];
};


export const SignUpForm = ({ onSubmit }) => {
  return(
    <View>
      <FormikTextInput style={styles.input} name="username" placeholder="Username" />
      <FormikTextInput style={styles.input} name="password" placeholder="Password" secureTextEntry/>
      <FormikTextInput style={styles.input} name="passwordConfirmation" placeholder="Password confirmation" secureTextEntry/>
      <Pressable style={styles.pressable} onPress={() => onSubmit()}>
        <Text style={styles.pressableText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signUp({ username, password });
    } catch (e) {
      console.log(e);
      return;
    }
    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={{ username: '', password: '', passwordConfirmation: '' }} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
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

export default SignUp;