import { useMemo, useState } from 'react'
import mirrorSentences from '../data/mirror_sentences.json'
import signalRules from '../data/signal_rules.json'

function analyzePhrase(text) {
  const lower = text.toLowerCase()
  return signalRules.filter(rule => rule.words.some(word => lower.includes(word)))
}

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [search, setSearch] = useState('')
  const [phrase, setPhrase] = useState('If you cared about me, you would decide today.')

  const selected = mirrorSentences[selectedIndex]
  const analysis = useMemo(() => analyzePhrase(phrase), [phrase])
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return mirrorSentences
    return mirrorSentences.filter(item => [item.phrase, item.pattern, item.question, item.response].join(' ').toLowerCase().includes(q))
  }, [search])

  return (
    <main style={{ minHeight: '100vh', padding: 24, background: '#f7f3ea', color: '#182018' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <section style={{ padding: 24, border: '1px solid #ddd4c0', borderRadius: 24, background: '#fffaf0' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: 2, fontWeight: 800, color: '#65734e' }}>ConsentMirror369 v0.3</p>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 72px)', lineHeight: 1, margin: 0 }}>Pressure literacy for clearer choice.</h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 780 }}>
            A humane framework for noticing pressure, naming patterns, pausing safely, and returning to consent.
          </p>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18, marginTop: 18 }}>
          <div style={{ padding: 20, border: '1px solid #ddd4c0', borderRadius: 20, background: 'white' }}>
            <h2>Try the phrase analyzer</h2>
            <textarea
              value={phrase}
              onChange={event => setPhrase(event.target.value)}
              rows={5}
              style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid #ddd4c0' }}
            />
            <p style={{ color: '#596459' }}>This is a reflection cue, not a verdict about anyone's intent.</p>
            {analysis.length > 0 ? (
              <div style={{ display: 'grid', gap: 10 }}>
                {analysis.map(rule => (
                  <div key={rule.id} style={{ padding: 14, borderRadius: 14, background: '#fffaf0', border: '1px solid #eee1c7' }}>
                    <strong>{rule.pattern}</strong>
                    <p style={{ marginBottom: 0 }}>{rule.question}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No strong pattern match yet. Try adding a phrase that feels rushed, guilt-heavy, shaming, secretive, or confusing.</p>
            )}
          </div>

          <div style={{ padding: 20, border: '1px solid #ddd4c0', borderRadius: 20, background: 'white' }}>
            <h2>Consent check</h2>
            <ul style={{ lineHeight: 1.8 }}>
              <li>Do I feel free to say no?</li>
              <li>Do I understand what I am agreeing to?</li>
              <li>Can I ask questions without punishment?</li>
              <li>Can I slow down without losing care or respect?</li>
              <li>Would this still feel right without fear, guilt, urgency, or shame?</li>
            </ul>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 360px) 1fr', gap: 18, marginTop: 18 }}>
          <div style={{ padding: 20, border: '1px solid #ddd4c0', borderRadius: 20, background: 'white' }}>
            <h2>The 17 Mirror Sentences</h2>
            <input
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder="Search phrases or patterns"
              style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid #ddd4c0', marginBottom: 12 }}
            />
            <div style={{ display: 'grid', gap: 10 }}>
              {filtered.map(item => {
                const realIndex = mirrorSentences.findIndex(card => card.id === item.id)
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedIndex(realIndex)}
                    style={{ textAlign: 'left', padding: 12, borderRadius: 14, border: '1px solid #ddd4c0', background: realIndex === selectedIndex ? '#f2e6c9' : '#fffaf0', cursor: 'pointer' }}
                  >
                    {item.phrase}
                  </button>
                )
              })}
            </div>
          </div>

          <div style={{ padding: 24, border: '1px solid #ddd4c0', borderRadius: 20, background: 'white' }}>
            <p style={{ textTransform: 'uppercase', letterSpacing: 2, fontWeight: 800, color: '#65734e' }}>Selected mirror</p>
            <h2>{selected.phrase}</h2>
            <p><strong>Possible pattern:</strong> {selected.pattern}</p>
            <p><strong>Mirror question:</strong> {selected.question}</p>
            <p><strong>Boundary response:</strong> {selected.response}</p>
            <hr />
            <h3>Pause protocol</h3>
            <p>I am not deciding under pressure. I am going to slow down, ask questions, and come back when I feel clear.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
