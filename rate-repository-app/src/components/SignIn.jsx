import Text from './Text';
import {  Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be at least 1 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(1, 'Password must be at least 1 characters')
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return(
    <View>
      <FormikTextInput style={styles.input} name="username" placeholder="Username" />
      <FormikTextInput style={styles.input} name="password" placeholder="Password" secureTextEntry/>
      <Pressable style={styles.pressable} onPress={() => onSubmit()}>
        <Text style={styles.pressableText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
   
    const { username, password } = values;
    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
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

export default SignIn;


