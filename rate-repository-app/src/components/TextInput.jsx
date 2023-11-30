import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({});
// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, error,secureTextEntry, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={textInputStyle} secureTextEntry={secureTextEntry} {...props} />;
};

export default TextInput;