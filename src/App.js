import Container from './components/Container/Container';
import Calculator from './components/Calculator/Calculator';

import {useState} from 'react';


const App = () => {

  const [theme, setTheme] = useState('regular');

  return (
    <main className={`${theme} min-h-screen`}>      
      <Container>
        <Calculator setTheme={setTheme} />
      </Container>
    </main>

  );
};

export default App;