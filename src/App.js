import { Container } from '@chakra-ui/react';
import './App.css';
import News from './components/News';
import Search from './components/Search';
import Buttons from './components/Buttons';
function App() {
  return (
    <Container>
      <Search/>
      <Buttons/>
      <News/>
    </Container>
  );
}

export default App;
