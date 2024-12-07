import './App.css';
import { Fragment, useEffect, useState } from 'react';
//This import is ok I've changed the path and now it got this squiggly underline
import Header from './components/Header';


const App = () => {
  const [message, setMessage] = useState()
  useEffect(() => {
    fetch('http://localhost:8080/admin')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(err => console.log(err))
  }, []);

  const funk = () => {
    console.log(message);
  }
  return (
  <Header></Header>

  );
}

export default App;
