import NoteForm from '@/components/NoteForm';
import { getNotes, getInvestigators } from '@/lib/db';
import Link from 'next/link';

export default function Home() {
  const notes = getNotes();
  const investigators = getInvestigators();

  return (
    <main className="page">
      <div className="container">
        <h1>Campaign Manager</h1>
        <p>
          <Link href="/references">References</Link>
        </p>
        <NoteForm />

        <section className="notes">
          <h2>Saved Notes</h2>
          {notes.length === 0 ? (
            <p>No notes yet. Add one above to see SQLite in action.</p>
          ) : (
            notes.map((note) => (
              <article key={note.id} className="note">
                <h3>{note.title}</h3>
                <p>{note.body}</p>
                <span>{new Date(note.createdAt).toLocaleString()}</span>
              </article>
            ))
          )}
        </section>

        <section className="investigators">
          <h2>Investigators</h2>
          {investigators.length === 0 ? (
            <p>No investigators found.</p>
          ) : (
            <table className="investigators-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>STR</th>
                  <th>AGI</th>
                  <th>OBS</th>
                  <th>LOR</th>
                  <th>INF</th>
                  <th>WIL</th>
                  <th>Expansion</th>
                </tr>
              </thead>
              <tbody>
                {investigators.map((investigator) => (
                  <tr key={investigator.id}>
                    <td>{investigator.first_name} {investigator.last_name}</td>
                    <td>{investigator.description}</td>
                    <td>{investigator.strength}</td>
                    <td>{investigator.agility}</td>
                    <td>{investigator.observation}</td>
                    <td>{investigator.lore}</td>
                    <td>{investigator.influence}</td>
                    <td>{investigator.will}</td>
                    <td>{investigator.expansion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </main>
  );
}
