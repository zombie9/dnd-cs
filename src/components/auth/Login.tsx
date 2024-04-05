import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { routes } from '../../constants';
import { useAuth } from '../../context/authContext';
import {
  AuthBox,
  AuthField,
  Field,
  Heading,
  TextLabel,
  ModalBackdrop,
  ThemeButton,
  SubmitButtonWrapper,
  ErrorBox,
  CenterWrapper
} from '../../styles/sharedStyles';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { logIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError('');
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch (error) {
      console.error(error);
      setError('Failed to log in');
    }

    setLoading(false);
  };
  return (
    <ModalBackdrop>
      <AuthBox>
        <form onSubmit={handleSubmit}>
          <Heading>L O G I N</Heading>
          <Field>
            <TextLabel>Email</TextLabel>
            <AuthField type="email" name="email" autoComplete="on" ref={emailRef} />
          </Field>
          <Field>
            <TextLabel>Password</TextLabel>
            <AuthField type="password" name="password" ref={passwordRef} />
          </Field>
          <SubmitButtonWrapper>
            <ErrorBox>{error && error}</ErrorBox>
            <ThemeButton disabled={loading} type="submit">
              <code>S U B M I T</code>
            </ThemeButton>
          </SubmitButtonWrapper>
          <CenterWrapper>
            <Link to={routes.SIGNUP}>Need an account? Sign Up</Link>
          </CenterWrapper>
        </form>
      </AuthBox>
    </ModalBackdrop>
  );
};

export default Login;