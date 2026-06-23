'use client';

import { FormEvent, useState } from 'react';

export default function NoteForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body }),
    });

    if (!response.ok) {
      setMessage('Failed to save note.');
      return;
    }

    setTitle('');
    setBody('');
    setMessage('Note saved! Refresh the page to see the updated list.');
  }

  return (
    <section className="note-form">
      <h2>Add a new note</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>
        <label>
          Body
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            required
          />
        </label>
        <button type="submit">Save note</button>
      </form>
      {message ? <p className="message">{message}</p> : null}
    </section>
  );
}
