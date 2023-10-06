import React from 'react';
import './template/style.scss';
import Header from './Header';
import Footer from './Footer';
import BasPage from './BasPage';

const dimensionsbijoux = () => {
    return (
        <div>
        <nav className='head'>
          <Header/>
        </nav>
        
        <div className='Dimensions'>
          
          <p></p>
          
        </div>
        
        <Footer/>
        <BasPage/>
      </div>
    );
  };

export default dimensionsbijoux;