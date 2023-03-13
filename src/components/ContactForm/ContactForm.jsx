import React, { useState } from 'react';
import "./styles.scss"

function ContactForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message) {
      setError('Veuillez écrire un message');
      return;
    }
    const mailtoLink = `mailto:devred.jonathan@gmail.com?subject=${encodeURIComponent(
      'Demande de contact'
    )}&body=${encodeURIComponent(`${message}`)}`;
    window.location.href = mailtoLink;
  };


  return (

    <section className='message-section'>
    <form className='contact-form' onSubmit={handleSubmit}>
      <label className='general-subtitle'>Pour m'écrire un message :</label>
      <textarea className="message-text"
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Entrez votre message"
        required
      />

      <button className='submit'>Envoyer</button>

    </form>
    </section>
  );
}

export default ContactForm;
