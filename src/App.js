import { useState, useEffect } from 'react';
import { Header } from './components/search/Header';
import { Stays } from './components/main/Stays';

function App() {
  const [location, setLocation] = useState('');
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [close, setClose] = useState(true);

  return (
    <div className="App" style={{opacity: !close?'0.7':'1'}}>
      <Header close={close} setClose={setClose} location={location} setLocation={setLocation} adult={adult} setAdult={setAdult} children={children} setChildren={setChildren}/>
      <Stays close={close} setClose={setClose} location={location} adult={adult} children={children}/>
    </div>
  );
}

export default App;
