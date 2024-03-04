import React, { useContext } from 'react';
import { X } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../context/authContext';
import { Context } from '../context/context';
import { useFirebase } from '../hooks/useFirebase';
import {
  ModalBackdrop,
  AuthBox,
  Heading,
  SubmitButtonWrapper,
  ErrorBox,
  ThemeButton
} from '../styles/sharedStyles';

const CloseButton = styled.div`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
`;

const CharacterRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const CharacterButton = styled(ThemeButton)`
  width: 100%;
  min-width: 320px;
`;

const LoadModal = ({ closeModal }) => {
  const { setCharacter } = useContext(Context);
  const { currentUser } = useAuth();
  const { characterList, loading, error } = useFirebase(currentUser);
  const navigate = useNavigate();

  const handleLoad = (id) => {
    const characterToLoad = characterList.find((char) => char.id === id);
    setCharacter(characterToLoad);
    navigate('/');
  };

  return (
    <ModalBackdrop>
      <AuthBox>
        <CloseButton onClick={() => closeModal()}>
          <X size={20} />
        </CloseButton>
        <Heading>L O A D</Heading>
        <div style={{ paddingBottom: '0.5rem' }}>Select your character:</div>
        {loading && loading}
        {characterList &&
          characterList.map((char) => {
            return (
              <CharacterRow key={char.id}>
                <CharacterButton onClick={() => handleLoad(char.id)}>
                  <code>{char.id.toUpperCase()}</code>
                </CharacterButton>
              </CharacterRow>
            );
          })}
        <SubmitButtonWrapper>
          <ErrorBox>{error && error}</ErrorBox>
        </SubmitButtonWrapper>
      </AuthBox>
    </ModalBackdrop>
  );
};

export default LoadModal;
