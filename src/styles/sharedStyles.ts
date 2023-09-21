import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  padding: 1rem;
  background: ${({ theme }) => theme.panel};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  font-size: 1rem;

  @media only screen and (min-width: 720px) {
    padding: 2rem;
  }
`;

export const AuthBox = styled(Box)`
  max-width: 560px;
`;

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`;

export const BoxHeader = styled.h2`
  margin-top: 0;
  font-size: 1.2rem;
  margin-bottom: 1.6rem;
`;

export const BoxBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 720px) {
    flex-direction: row;
  }
`;

export const ModalBackdrop = styled.div`
  z-index: 9999;
  position: fixed;
  background-color: hsla(0, 0%, 0%, 0.8);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SinglePod = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75em;
`;

export const PersonaDescriptionField = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
`;

export const FieldLabel = styled.label`
  min-width: 8rem;
  text-transform: capitalize;
`;

export const TextLabel = styled.label`
  min-width: 8rem;
  text-transform: capitalize;
  padding-top: 0.2rem;
  font-size: 1rem;
  /* align-self: flex-start; */
`;

export const DualPod = styled.ul`
  padding: 0;
  margin: 0;

  & li:nth-child(odd) {
    padding-right: 1em;
  }
  & li:nth-child(even) {
    padding-left: 1em;
  }

  @media only screen and (min-width: 720px) {
    & li:nth-child(odd) {
      border-right: 1px solid ${({ theme }) => theme.secondary};
      padding-right: 2em;
    }
    & li:nth-child(even) {
      padding-left: 2em;
    }
  }
`;

export const StatBlock = styled.li`
  box-sizing: border-box;
  display: inline-block;
  min-width: 50%;
  list-style-type: none;

  @media only screen and (min-width: 720px) {
    min-width: 50%;
  }
`;

export const NumberField = styled.input`
  width: 6rem;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  background: none;
`;

export const SkillBlock = styled.div`
  margin-bottom: 1.6rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  align-items: center;
`;

export const StatField = styled.select`
  margin-right: 0.6rem;
  width: 5rem;
  height: 2.1rem;
  text-align: center;
  font-size: 0.8rem;

  option {
    background-color: ${({ theme }) => theme.panel};
    text-align: left;

    &:hover {
      background-color: ${({ theme }) => theme.background} !important;
    }
  }
`;

export const DescriptionField = styled.textarea`
  flex-grow: 1;
  margin-right: 0.6rem;
`;

export const LevelField = styled.input`
  width: 4rem;
  height: 1.4rem;
  text-align: center;
`;

export const SkillLabel = styled.input`
  height: 1.4rem;
  margin-right: 0.6rem;
`;

export const DiceBox = styled.div`
  width: 5.4rem;
  text-align: center;
  height: 1.6rem;
`;

export const ThemeButton = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.mid};
  cursor: pointer;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  font-size: 0.8rem;
  text-decoration: none;
  line-height: 1.2rem;

  &:hover {
    background: ${({ theme }) => theme.panel};
  }
`;

export const Heading = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const AuthField = styled.input`
  @media only screen and (min-width: 420px) {
    width: 24em;
  }

  &:invalid {
    border: 1px solid red;
  }
`;

export const ErrorBox = styled.div`
  color: red;
`;
