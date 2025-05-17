import React, { useState } from 'react';
import guestbookData from '../data/guestbook.json';
import Layout from "../components/layout";
import '../components/style.css';

// Simple form for adding a guestbook entry
const SignForm = ({ onAddSignature }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSubmitting(true);
    await onAddSignature({ name, message });
    setName('');
    setMessage('');
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Naam</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            disabled={submitting}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Bericht</label>
        <div className="control">
          <textarea
            className="textarea"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            disabled={submitting}
            placeholder="Hier kunt u uw bericht achterlaten..."
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-success" type="submit" disabled={submitting}>
            {submitting ? 'Versturen...' : 'Verstuur'}
          </button>
        </div>
      </div>
    </form>
  );
};

// Simple component to display guestbook entries
const Signatures = ({ sigData }) => (
  <div>
    {sigData && sigData.length > 0 ? (
      [...sigData].reverse().map((entry, idx) => (
        <div key={idx} className="box" style={{ marginBottom: '1rem' }}>
          <strong>{entry.name}</strong>
          <span style={{ float: 'right', color: '#888', fontSize: '0.9em' }}>
            {entry.date ? new Date(entry.date).toLocaleDateString() : ''}
          </span>
          <p style={{ marginTop: '0.5em' }}>{entry.message}</p>
        </div>
      ))
    ) : (
      <p>Nog geen berichten.</p>
    )}
  </div>
);

const Gastenboek = () => {
  const [sigData, setSigData] = useState(guestbookData);

  // Function to add a new signature by POSTing to Netlify Function
  const addSignature = async (newEntry) => {
    try {
      const response = await fetch('/.netlify/functions/submit-guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry),
      });

      if (!response.ok) {
        throw new Error('Failed to submit guestbook entry');
      }

      // Optionally update UI immediately (entry will appear after next build)
      setSigData(prev => [{ ...newEntry, date: new Date().toISOString() }, ...prev]);
    } catch (error) {
      console.error(error);
      alert('Er is iets misgegaan bij het versturen van uw bericht.');
    }
  };

  return (
    <Layout>
      <div className="container has-background-white" id="page-container">

        <h2 className="title is-2 has-text-centered">Gastenboek</h2>
        <hr className="hr" />

        <div className="container">
          Wij zouden het leuk vinden als u een bericht achterlaat in ons gastenboek als u in ons appartement
          heeft verbleven. Wij hopen dat u een prettig verblijf heeft gehad en hopen u in de toekomst
          nogmaals te mogen ontvangen.
        </div>
        <br />

        <div className="container">
          <h2 className="title is-5">Schrijf in ons gastenboek</h2>
          <SignForm onAddSignature={addSignature} />
        </div>

        <br />
        <br />

        <div className="container">
          <h2 className="title is-5">Berichten van onze bezoekers</h2>
          <Signatures sigData={sigData} />
        </div>

      </div>
    </Layout>
  );
};

export default Gastenboek;