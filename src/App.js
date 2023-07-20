import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './Routing';

function App() {
  const [login, setLogin] = useState(false);
    const changeLogin = (val) => {
        setLogin(val);
    }
  return (
    <>
     <Header value={login} setValue={changeLogin}/>
     <Routing value={login} setValue={changeLogin}/>
     <Footer/>
    </>
  );
}

export default App;
