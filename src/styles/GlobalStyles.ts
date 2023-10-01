import { createGlobalStyle } from 'styled-components';

import Montserrat from '../assets/fonts/Montserrat-Regular.ttf';
import RobotoMono from '../assets/fonts/RobotoMono-Light.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: normal;
    src: url(${RobotoMono});
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: normal;
    src: url(${Montserrat});
  }

  :root {
    font-size: 13px;

    @media only screen and (min-width: 720px) {
      font-size: 15px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    transition: background-color 0.5s linear;
    font-family: 'Montserrat';

    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
  }

  code {
    font-family: 'Roboto Mono';
  }

  a {
    color: ${({ theme }) => theme.mid};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.primary};
      text-decoration: underline;
    }
  }

  input[type=text], textarea, select {
    padding: 0.6rem 0.5rem;
    box-sizing: border-box;
    width: 100%;
    background: none;
    border: 1px solid ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    font-size: 1rem;
    font-family: 'Montserrat';

    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.primary};
    }

    ::placeholder {
      color: ${({ theme }) => theme.mid};
    }
  }

  input[type=checkbox] {
    outline: none;
    content: none;
    appearance: none;
    margin: 0;

    &:before {
      content: "";
      display: block;
      width: 0.5rem;
      height: 0.5rem;
      border: 1px solid ${({ theme }) => theme.mid};
      border-radius: 50%;
    }

    &:checked:before {
      background-color: ${({ theme }) => theme.mid};
    }
  }

  textarea {
    position: relative;
    resize: none;
    white-space: pre-wrap;
    height: 100%;
    padding-top: 1.3rem;
    font-size: 0.9rem;
  }

  svg {
    cursor: pointer;
    path {
      fill: ${({ theme }) => theme.mid};
    }

    &:hover {
      path {
        fill: ${({ theme }) => theme.primary};
      }
    }
  }
`;
