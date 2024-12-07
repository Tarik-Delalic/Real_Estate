import './App.css';
import { Fragment, useEffect, useState } from 'react';
//This import is ok I've changed the path and now it got this squiggly underline
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  
  useEffect(() => {
    fetch('http://localhost:8080/admin')
      .then(response => response.json())
      .then(data => console.log(data.message))
      .catch(err => console.log(err))
  }, []);

  
  return (
    <Fragment>
      <Header></Header>

      <Footer></Footer>
    </Fragment>

  );
}

export default App;
