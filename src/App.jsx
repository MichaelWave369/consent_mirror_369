import { useMemo, useState } from 'react'

const mirrorSentences = [
  { phrase: 'Everyone knows...', pattern: 'Social pressure', question: 'Who exactly is everyone, and what evidence are they using?', response: 'I am open to hearing the evidence, but I do not want to decide based only on what people supposedly think.' },
  { phrase: 'You are smart, so you will agree...', pattern: 'Flattery pressure', question: 'Am I being respected, or praised into agreement?', response: 'I appreciate the compliment, but I still need to think for myself.' },
  { phrase: 'After everything I have done for you...', pattern: 'Guilt pressure', question: 'Was there a clear agreement, or is obligation being created after the fact?', response: 'I appreciate what you have done. I still need to make this decision clearly.' },
  { phrase: 'Do not overthink it.', pattern: 'Discernment pressure', question: 'Why is my need to think being discouraged?', response: 'Thinking carefully is how I make good decisions. I am going to take the time I need.' },
  { phrase: 'You only have one chance.', pattern: 'Urgency pressure', question: 'What happens if I slow down?', response: 'If this choice cannot survive a pause, I am not comfortable saying yes.' },
  { phrase: 'Real friends or real family do this.', pattern: 'Identity pressure', question: 'Is my identity being honored, or used as a leash?', response: 'My care is real, but it does not require me to surrender my judgment.' },
  { phrase: 'I am just asking questions.', pattern: 'Leading question fog', question: 'Are these questions opening clarity or steering me toward a preset answer?', response: 'I am willing to discuss honest questions, but I want us to name the actual claim being suggested.' },
  { phrase: 'You are too sensitive.', pattern: 'Emotional dismissal', question: 'Is my experience being understood, or erased?', response: 'You do not have to agree with my feelings, but I need them to be treated with respect.' },
  { phrase: 'Trust me.', pattern: 'Evidence bypass', question: 'What evidence, history, or accountability supports trust here?', response: 'Trust matters to me. I need enough information to make a clear decision.' },
  { phrase: 'If you loved me, you would...', pattern: 'Love as pressure', question: 'Is love being invited, or used as a test?', response: 'I do love you. I will not prove love by abandoning my boundaries.' },
  { phrase: 'They do not want you to know...', pattern: 'Hidden enemy hook', question: 'Is this expanding my clarity, or narrowing my world?', response: 'I am willing to look at evidence, but I do not want fear to make my decision for me.' },
  { phrase: 'You are either with us or against us.', pattern: 'False binary', question: 'What options are being hidden?', response: 'I do not accept only two choices if the situation is more complex than that.' },
  { phrase: 'You owe me.', pattern: 'Obligation pressure', question: 'What was freely given, what was agreed, and what is now being demanded?', response: 'I want to be fair, but I do not want obligation to override my consent.' },
  { phrase: 'Only I understand you.', pattern: 'Isolation pressure', question: 'Is this connection supporting my wider life, or cutting me off from it?', response: 'I value being understood, but healthy connection does not require isolation.' },
  { phrase: 'Do not tell anyone.', pattern: 'Secrecy pressure', question: 'Would this situation survive gentle outside light?', response: 'I am not comfortable being pressured into secrecy.' },
  { phrase: 'You will regret this.', pattern: 'Fear pressure', question: 'Is this wisdom, or intimidation?', response: 'I hear your concern. I am still going to make this choice from clarity, not fear.' },
  { phrase: 'This is for your own good.', pattern: 'Care without consent', question: 'Do I still have choice?', response: 'Care should include my consent. I need to be part of decisions about my own life.' }
]

const signalRules = [
  { pattern: 'Urgency pressure', words: ['now', 'today', 'last chance', 'one chance', 'hurry', 'immediately'], question: 'What changes if I slow this decision down?' },
  { pattern: 'Guilt pressure', words: ['after everything', 'owe', 'ungrateful', 'for me', 'least you could do'], question: 'Is appreciation being turned into obligation?' },
  { pattern: 'Identity pressure', words: ['real friend', 'real family', 'real believer', 'good person', 'loyal'], question: 'Is belonging being made conditional?' },
  { pattern: 'Love as pressure', words: ['if you loved', 'if you cared', 'prove you love', 'prove you care'], question: 'Do I feel free to care and still say no?' },
  { pattern: 'Fear pressure', words: ['regret', 'sorry', 'bad things', 'or else', 'you will lose'], question: 'Is fear replacing clear information?' },
  { pattern: 'Secrecy pressure', words: ['do not tell', "don't tell", 'keep this secret', 'between us'], question: 'Would this survive gentle outside light?' },
  { pattern: 'Evidence bypass', words: ['trust me', 'believe me', 'no need to ask', 'because I said'], question: 'What information would help me decide clearly?' },
  { pattern: 'False binary', words: ['with us or against us', 'only two choices', 'either', 'or else'], question: 'What other options might be hidden?' }
]

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
          <p style={{ textTransform: 'uppercase', letterSpacing: 2, fontWeight: 800, color: '#65734e' }}>ConsentMirror369 v0.2</p>
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
                  <div key={rule.pattern} style={{ padding: 14, borderRadius: 14, background: '#fffaf0', border: '1px solid #eee1c7' }}>
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
                const realIndex = mirrorSentences.indexOf(item)
                return (
                  <button
                    key={item.phrase}
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
