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
    <table>
  
  <tr>
      <td><img src="images/Bracelet Chrétien.jpeg" alt="Bracelet Christ" className='Bracelet'/></td>
      <td><img src="images/bracelet.jpeg" alt="Bracelet C" className='Bracelet2'/></td>
      <td><img src="images/braceletchrist.jpeg" alt="Livre avec colombe" className='Bracelet3'/></td>
  </tr>
  <tr>
      <td className='text'>$15</td>
      <td className='text'>$20</td>
      <td className='text'>$75</td>
  </tr>
  <tr>
      <td className='text'>nom</td>
      <td className='text'>nom</td>
      <td className='text'>nom</td>
  </tr>

</table>
    
    
    </nav>
     
      <Footer/>
      <BasPage/>
       
  </div>
);
};

export default Bracelets;