import { Container } from 'react-bootstrap'
import { Header, Footer } from '../components'
import HomeScreen from '../screens/HomeScreen';

function App() {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
        <Footer />
    </div>
  );
}

export default App;
