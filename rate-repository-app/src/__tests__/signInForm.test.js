import { render, fireEvent, screen , waitFor } from '@testing-library/react-native';
import { SignInForm } from '../components/SignIn';
import { Formik } from 'formik';

describe('SignIn', () => {
  describe('SingInForm', () => {
    it('calls function provided by onSubmit prop after pressing the signin button', async () => {
      const onSubmit = jest.fn();
      render(
        <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <SignInForm onSubmit={handleSubmit} />
          )}
        </Formik>
      );
      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'Kalle');
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
      fireEvent.press(screen.getByText('Sign In'));
      
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);  
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'Kalle',
          password: 'password',
        });
      });
    });
  });
});