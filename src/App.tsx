import { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { Container } from './components/Container';
import { CharacterContext } from './context/context';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';
import { sampleCharacter } from './models/character';
import { CharacterType } from './types';

const App = () => {
  const [character, setCharacter] = useState<CharacterType>(sampleCharacter);

  const value = useMemo(() => ({ character, setCharacter }), [character]);

  const { theme, toggleTheme } = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <CharacterContext.Provider value={value}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Container toggleTheme={toggleTheme} theme={theme} />
      </ThemeProvider>
    </CharacterContext.Provider>
  );
};

export default App;
