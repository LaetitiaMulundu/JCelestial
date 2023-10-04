import React from 'react';
import './template/style.scss';
import Header from './Header';
import Footer from './Footer';
import BasPage from './BasPage';

const Toutcollect = () => {
    return (
        <div>
        <nav className='head'>
        <Header/>
        <img src="images/CollierS-E.jpeg" alt="Collier Saint-Esprit" className='SE'/>
        <img src="images/colliersJesus.jpeg" alt="Collier Jesus" className='Jesus'/>
        <img src="images/bouclesbranche.jpeg" alt="Boucle d'oreille SE" className='BO'/>
        <img src="images/boucles d'oreilles.jpeg" alt="Boucle" className='BDO'/>
        <img src="images/Bracelet Chrétien.jpeg" alt="Bracelet Christ" className='Bracelet'/>
        <img src="images/bracelet.jpeg" alt="Bracelet C" className='Bracelet2'/>
        <img src="images/braceletchrist.jpeg" alt="Livre avec colombe" className='Bracelet3'/>
        </nav>
         
        <Footer/>
        <BasPage/>
           
      </div>
    );
};

export default Toutcollect;

