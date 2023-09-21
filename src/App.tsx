import { ThemeProvider } from 'styled-components';

import { Container } from './components/Container';
import { Context } from './context/context';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';

const App = () => {
  const { theme, toggleTheme } = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Context.Provider value={null}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Container toggleTheme={toggleTheme} theme={theme} />
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
