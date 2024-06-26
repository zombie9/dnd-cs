import { doc, setDoc } from 'firebase/firestore';
import { useContext, useState, useRef } from 'react';
import { X } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../../context/authContext';
import { CharacterContext } from '../../context/context';
import { db } from '../../firebase';

import {
  ModalBackdrop,
  AuthBox,
  ThemeButton,
  AuthField,
  Heading,
  Field,
  TextLabel,
  SubmitButtonWrapper,
  ErrorBox
} from '../../styles/sharedStyles';

const CloseButton = styled.div`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
`;

const SaveModal = () => {
  const { character } = useContext(CharacterContext);
  const { currentUser } = useAuth();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // event.preventDefault();
    try {
      setError('');
      setLoading(true);
      const id = nameRef.current?.value;
      if (!id) {
        setError('Name is required');
        setLoading(false);
        return;
      }
      const docRef = doc(db, 'characters', id);
      const docToSave = {
        ...character,
        userId: currentUser?.uid || '1234567890'
      };
      delete docToSave.id;
      await setDoc(docRef, docToSave);
    } catch (error) {
      console.error(error);
      setError('Failed to save character');
    }
    setLoading(false);
    navigate('/');
  };

  return (
    <ModalBackdrop>
      <AuthBox>
        <CloseButton onClick={() => navigate('/')}>
          <X size={20} />
        </CloseButton>
        <Heading>S A V E</Heading>
        <Field>
          <TextLabel>Name:</TextLabel>
          <AuthField ref={nameRef} type="text" defaultValue={character.id || ''} />
        </Field>
        <SubmitButtonWrapper>
          <ErrorBox>{error && error}</ErrorBox>
          <ThemeButton disabled={loading} type="submit" onClick={handleSubmit}>
            <code>S U B M I T</code>
          </ThemeButton>
        </SubmitButtonWrapper>
      </AuthBox>
    </ModalBackdrop>
  );
};

export default SaveModal;
