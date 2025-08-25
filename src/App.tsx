import './styles/themes.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';
function App() {
  return (
    <>
      <Container>
        <Heading>Nego ney</Heading>
        <section>LOGO</section>
      </Container>

      <Container>
        <Heading>Nego ney</Heading>
        <section>MENU</section>
      </Container>
    </>
  );
}

export default App;
