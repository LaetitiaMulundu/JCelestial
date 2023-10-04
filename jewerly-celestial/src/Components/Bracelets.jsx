import React from 'react';
import './template/style.scss';
import Header from './Header';
import Footer from './Footer';
import BasPage from './BasPage';

const Bracelets = () => {
  return (
    <div>
    <nav className='head'>
    <Header/>
    <img src="images/Bracelet Chrétien.jpeg" alt="Bracelet Christ" className='Bracelet'/>
    <img src="images/bracelet.jpeg" alt="Bracelet C" className='Bracelet2'/>
    <img src="images/braceletchrist.jpeg" alt="Livre avec colombe" className='Bracelet3'/>
    
    </nav>
     
      <Footer/>
      <BasPage/>
       
  </div>
);
};

export default Bracelets;