import './Card.css'

export default function Card({ person }) {
  return (
    <section className="card">
      <h2>{person.name}</h2>
      <p>
        <b>Job:</b> {person.job}
      </p>
      <p>
        <b>Country:</b> {person.country}
      </p>
      <p>
        <b>Age:</b> {person.age}
      </p>
      <p>
        <b>Net Worth:</b> {person.netWorth}
      </p>
    </section>
  )
}
