import { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Container } from './components/layout/Container';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import LoadModal from './components/auth/LoadModal';
import SaveModal from './components/auth/SaveModal';
import { Header } from './components/layout/Header';
import { CharacterContext } from './context/context';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';
import { sampleCharacter } from './models/character';
import { CharacterType } from './types';
import { ROUTES } from './constants';
import { AuthProvider } from './context/authContext';
import PrivateRoute from './components/auth/PrivateRoute';

const App = () => {
  const [character, setCharacter] = useState<CharacterType>(sampleCharacter);

  const value = useMemo(() => ({ character, setCharacter }), [character]);

  const { theme, toggleTheme } = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <AuthProvider>
      <CharacterContext.Provider value={value}>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <BrowserRouter>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Routes>
              <Route
                path={ROUTES.HOME}
                element={
                  <PrivateRoute>
                    <Container />
                  </PrivateRoute>
                }
              />
              <Route path={ROUTES.SIGNUP} element={<SignUp />} />
              <Route path={ROUTES.LOGIN} element={<Login />} />
              <Route path={ROUTES.LOAD} element={<LoadModal />} />
              <Route path={ROUTES.SAVE} element={<SaveModal />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CharacterContext.Provider>
    </AuthProvider>
  );
};

export default App;
