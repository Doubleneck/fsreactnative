import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    padding: 8,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  errorStyle: {
    borderColor: 'red',
    borderWidth: 1,
  },

});

const TextInput = ({ style, error,secureTextEntry, ...props }) => {
  const textInputStyle = [styles.input, style, error ? styles.errorStyle : null];

  return <NativeTextInput style={textInputStyle} secureTextEntry={secureTextEntry} {...props} />;
};

export default TextInput;