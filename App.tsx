// import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Welcome } from './src/pages/Welcome';

export default function App() {
  return (
    //"ThemeProvider" faz com q tudo q esteja dentro dele possa usar os "themes" q eu criei (mas acho q n precisa depois testa de forma similar ao projeto rpg)
    <ThemeProvider theme={theme}>
      {/* <StatusBar style='auto'/> */}
      <Welcome />
    </ThemeProvider>
  );
}


