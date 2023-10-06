import React from 'react';
import './template/style.scss';
import Header from './Header';
import Footer from './Footer';
import BasPage from './BasPage';

const Contact = () => {
    return (
      <div>
        <nav className='head'>
          <Header />
        </nav>
  
        <main>
          <h1>Contactez-nous</h1>
          <form action="mailto:adresse_email@exemple.com" method="post" encType="text/plain">
            <label htmlFor="nom">Nom :</label>
            <input type="text" id="nom" name="nom" required />
  
            <label htmlFor="email">E-mail :</label>
            <input type="email" id="email" name="email" required />
  
            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" rows="4" required></textarea>
  
            <input type="submit" value="Envoyer" />
          </form>
        </main>
  
        <Footer />
        <BasPage />
      </div>
    );
  };
  
  export default Contact;