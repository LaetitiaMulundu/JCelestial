import React from 'react';
import './template/style.scss';
import Header from './Header';
import Footer from './Footer'; 
import BasPage from './BasPage';

const Apropos = () => {
    return (
        <div>
        <nav className='head'>
        <Header/>
        
        </nav>
        <img src="images/JesusEau.png" alt="Jésus marchant sur l'eau" className='img-Jesus'/> 
       <img src="images/ColombeP.jpeg" alt="Livre avec colombe" className='Colombe'/>

      
          <Footer/>
          <BasPage/>
           
      </div>
      
    
        
    
    )}
    
        
    

export default Apropos;
