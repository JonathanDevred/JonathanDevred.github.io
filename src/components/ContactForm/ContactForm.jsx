import React, { useState } from 'react';

function ContactForm() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">Message :</label>
      <textarea
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Entrez votre message"
        required
      ></textarea>

      {error && <div>{error}</div>}

      <button type="submit">
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;
