import React from 'react';
import './template/style.scss';
import Header from './Header';
import Footer from './Footer';
import BasPage from './BasPage';

const Boucles = () => {
  return (
    <div>
    <nav className='head'>
    <Header/>
    <img src="images/bouclesbranche.jpeg" alt="Boucle d'oreille SE" className='BO'/>
    <img src="images/boucles d'oreilles.jpeg" alt="Boucle" className='BDO'/>
    </nav>
     
      <Footer/>
      <BasPage/>
       
  </div>
);
};

export default Boucles;