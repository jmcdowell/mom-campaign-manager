import NoteForm from '@/components/NoteForm';
import { getInvestigators } from '@/lib/db';
import Link from 'next/link';

export default function References() {
  const investigators = getInvestigators();

  return (
    <main className="page">
      <div className="container">
        <h1>References</h1>
        <p>This page contains references and useful links for the Campaign Manager.</p>
        <p>
          <Link href="/">Home</Link>
        </p>

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
                  <th>Product</th>
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
                    <td>{investigator.product}</td>
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
