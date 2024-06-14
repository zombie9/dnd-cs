import React, { useContext, useRef } from 'react';
import { Upload } from 'react-bootstrap-icons';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';

import { Box } from '../../styles/sharedStyles';
import { storage } from '../../firebase';

import styled from 'styled-components';

import { CharacterContext } from '../../context/context';

const IntersectingLabel = styled.label`
  position: absolute;
  font-size: 0.7rem;
  top: -0.5rem;
  left: 0.2rem;
  padding: 0 0.5em;
  z-index: 10;
  background: ${({ theme }) => theme.panel};
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TraitsBox = styled(Box)`
  margin-bottom: 0;
`;

const ProtraitBox = styled.div`
  border: 1px solid ${({ theme }) => theme.secondary};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Traits: React.FC = () => {
  const { character, setCharacter } = useContext(CharacterContext);
  const hiddenFileInput = useRef(null);
  const { traits } = character;

  const handleClick = () => {
    if (!hiddenFileInput.current) return;
    const fileInput = hiddenFileInput.current as HTMLInputElement;
    fileInput.click();
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const fileUploaded = event.target.files[0];
    console.log('upload', fileUploaded.name);
  };

  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>, index: number) => {
    console.log(index, 'change', event.currentTarget.value);
    const traitsEntries = traits;
    const traitToChange = traitsEntries[index];
    const newTrait = {
      ...traitToChange,
      value: event.currentTarget.value
    };
    traitsEntries[index] = newTrait;
    setCharacter({
      ...character,
      traits: traitsEntries
    });
  };

  return (
    <>
      <TraitsBox>
        <InputWrapper>
          <textarea
            spellCheck="false"
            value={traits[0].value}
            onChange={(event) => handleChange(event, 0)}
          />
          <IntersectingLabel>{traits[0].label.toUpperCase()}</IntersectingLabel>
        </InputWrapper>
      </TraitsBox>
      <TraitsBox>
        <ProtraitBox>
          <IntersectingLabel>PORTRAIT</IntersectingLabel>
          <Upload size={50} onClick={handleClick} />
          <input
            type="file"
            onChange={handleUpload}
            ref={hiddenFileInput}
            style={{ display: 'none' }}
          />
        </ProtraitBox>
      </TraitsBox>

      <TraitsBox>
        <InputWrapper>
          <textarea
            spellCheck="false"
            value={traits[2].value}
            onChange={(event) => handleChange(event, 2)}
          />
          <IntersectingLabel>{traits[2].label.toUpperCase()}</IntersectingLabel>
        </InputWrapper>
      </TraitsBox>
      <TraitsBox>
        <InputWrapper>
          <textarea
            spellCheck="false"
            value={traits[3].value}
            onChange={(event) => handleChange(event, 3)}
          />
          <IntersectingLabel>{traits[3].label.toUpperCase()}</IntersectingLabel>
        </InputWrapper>
      </TraitsBox>
    </>
  );
};
