import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords did not match');
    }
    try {
      setError('');
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError('Failed to create account');
    }
    setLoading(false);
  };

  return (
    <ModalBackdrop>
      <AuthBox>
        <Heading>S I G N U P</Heading>
        <Field>
          <TextLabel>Email</TextLabel>
          <AuthField type="email" ref={emailRef} />
        </Field>
        <Field>
          <TextLabel>Password</TextLabel>
          <AuthField type="password" ref={passwordRef} />
        </Field>
        <Field>
          <TextLabel>Confirm Password</TextLabel>
          <AuthField type="password" ref={passwordConfirmRef} />
        </Field>
        <SubmitButtonWrapper>
          <ErrorBox>{error && error}</ErrorBox>
          <ThemeButton disabled={loading} type="submit" onClick={handleSubmit}>
            <code>S U B M I T</code>
          </ThemeButton>
        </SubmitButtonWrapper>
        <CenterWrapper>
          <Link to={routes.LOGIN}>Already have an account? Log In</Link>
        </CenterWrapper>
      </AuthBox>
    </ModalBackdrop>
  );
};

export default SignUp;
