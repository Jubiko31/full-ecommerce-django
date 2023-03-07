import { Container } from 'react-bootstrap'
import { Header, Footer } from '../components'

function App() {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome</h1>
        </Container>
      </main>
        <Footer />
    </div>
  );
}

export default App;
