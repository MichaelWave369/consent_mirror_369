import { useMemo, useRef, useState } from 'react'
import mirrorSentences from '../data/mirror_sentences.json'
import signalRules from '../data/signal_rules.json'
import { printCardDeck } from './printDeck.js'
import { colors, layout } from './theme.js'

const STORAGE_KEY = 'consentmirror369.reflections.v1'

function analyzePhrase(text) {
  const lower = text.toLowerCase()
  return signalRules.filter(rule => rule.words.some(word => lower.includes(word)))
}

function loadReflections() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveReflections(items) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

function cleanImportedReflections(parsed) {
  if (!Array.isArray(parsed)) {
    throw new Error('Import file must contain an array of reflections.')
  }

  return parsed.map(item => ({
    id: typeof item.id === 'string' ? item.id : crypto.randomUUID(),
    createdAt: typeof item.createdAt === 'string' ? item.createdAt : new Date().toISOString(),
    phrase: typeof item.phrase === 'string' ? item.phrase : '',
    pattern: typeof item.pattern === 'string' ? item.pattern : 'Imported reflection',
    choice: typeof item.choice === 'string' ? item.choice : ''
  })).filter(item => item.phrase || item.choice)
}

function Eyebrow({ children }) {
  return <p style={{ textTransform: 'uppercase', letterSpacing: 2, fontWeight: 800, color: colors.moss, marginTop: 0 }}>{children}</p>
}

export default function App() {
  const importInputRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [search, setSearch] = useState('')
  const [phrase, setPhrase] = useState('If you cared about me, you would decide today.')
  const [choice, setChoice] = useState('I can care and still slow down before deciding.')
  const [reflections, setReflections] = useState(loadReflections)
  const [importStatus, setImportStatus] = useState('')

  const selected = mirrorSentences[selectedIndex]
  const analysis = useMemo(() => analyzePhrase(phrase), [phrase])
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return mirrorSentences
    return mirrorSentences.filter(item => [item.phrase, item.pattern, item.question, item.response].join(' ').toLowerCase().includes(q))
  }, [search])

  const primaryPattern = analysis[0]?.pattern || selected.pattern

  function addReflection() {
    const entry = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      phrase: phrase.trim(),
      pattern: primaryPattern,
      choice: choice.trim()
    }
    const next = [entry, ...reflections]
    setReflections(next)
    saveReflections(next)
    setImportStatus('Reflection saved locally.')
  }

  function clearReflections() {
    setReflections([])
    saveReflections([])
    setImportStatus('Local reflection log cleared.')
  }

  function exportReflections() {
    const blob = new Blob([JSON.stringify(reflections, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'consentmirror369-reflections.json'
    link.click()
    URL.revokeObjectURL(url)
    setImportStatus('Reflection log exported as JSON.')
  }

  function handleImport(event) {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result || '[]'))
        const cleaned = cleanImportedReflections(parsed)
        const next = [...cleaned, ...reflections]
        setReflections(next)
        saveReflections(next)
        setImportStatus(`Imported ${cleaned.length} reflection${cleaned.length === 1 ? '' : 's'} locally.`)
      } catch (error) {
        setImportStatus(error instanceof Error ? error.message : 'Could not import that file.')
      } finally {
        event.target.value = ''
      }
    }
    reader.readAsText(file)
  }

  return (
    <main style={layout.shell}>
      <div style={layout.container}>
        <section style={layout.hero}>
          <Eyebrow>ConsentMirror369 v0.7 · Lantern, not weapon</Eyebrow>
          <h1 style={{ fontSize: 'clamp(42px, 7vw, 78px)', lineHeight: 0.95, letterSpacing: '-0.06em', margin: 0 }}>Pressure literacy for clearer choice.</h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 820, color: colors.softInk }}>
            A humane framework for noticing pressure, naming patterns, pausing safely, and returning to consent without paranoia or counter-control.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 10 }}>
            {['Notice', 'Name', 'Pause', 'Choose'].map(step => (
              <span key={step} style={{ padding: '8px 12px', borderRadius: 999, border: `1px solid ${colors.border}`, background: colors.white, color: colors.moss, fontWeight: 700 }}>{step}</span>
            ))}
          </div>
        </section>

        <section style={layout.grid}>
          <div style={layout.card}>
            <Eyebrow>Analyzer</Eyebrow>
            <h2>Try the phrase analyzer</h2>
            <textarea
              value={phrase}
              onChange={event => setPhrase(event.target.value)}
              rows={5}
              style={layout.field}
            />
            <p style={{ color: colors.softInk }}>This is a reflection cue, not a verdict about anyone's intent.</p>
            {analysis.length > 0 ? (
              <div style={layout.stack}>
                {analysis.map(rule => (
                  <div key={rule.id} style={{ padding: 14, borderRadius: 16, background: colors.paper, border: `1px solid ${colors.softBorder}` }}>
                    <strong>{rule.pattern}</strong>
                    <p style={{ marginBottom: 0 }}>{rule.question}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No strong pattern match yet. Try a phrase that feels rushed, guilt-heavy, shaming, secretive, or confusing.</p>
            )}
          </div>

          <div style={layout.card}>
            <Eyebrow>Consent check</Eyebrow>
            <h2>Before saying yes</h2>
            <ul style={{ lineHeight: 1.8, paddingLeft: 20 }}>
              <li>Do I feel free to say no?</li>
              <li>Do I understand what I am agreeing to?</li>
              <li>Can I ask questions without punishment?</li>
              <li>Can I slow down without losing care or respect?</li>
              <li>Would this still feel right without fear, guilt, urgency, or shame?</li>
            </ul>
          </div>
        </section>

        <section style={{ ...layout.card, marginTop: 18 }}>
          <Eyebrow>Teaching deck</Eyebrow>
          <h2>Printable 17-card deck</h2>
          <p style={{ color: colors.softInk }}>Open the 17 Mirror Sentences as printable cards. Use your browser print dialog to print or save as PDF.</p>
          <button onClick={() => printCardDeck(mirrorSentences)} style={layout.buttonPrimary}>Print / Save PDF deck</button>
        </section>

        <section style={{ ...layout.card, marginTop: 18 }}>
          <Eyebrow>Private practice</Eyebrow>
          <h2>Local-only reflection log</h2>
          <p style={{ color: colors.softInk }}>Saved only in this browser through local storage. You can export, import, or clear it any time.</p>
          <label style={{ display: 'grid', gap: 8, marginBottom: 12 }}>
            What do I choose when I slow down?
            <textarea
              value={choice}
              onChange={event => setChoice(event.target.value)}
              rows={3}
              style={layout.field}
            />
          </label>
          <input
            ref={importInputRef}
            type="file"
            accept="application/json,.json"
            onChange={handleImport}
            style={{ display: 'none' }}
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <button onClick={addReflection} style={layout.buttonPrimary}>Save reflection</button>
            <button onClick={exportReflections} disabled={reflections.length === 0} style={layout.buttonSoft}>Export JSON</button>
            <button onClick={() => importInputRef.current?.click()} style={layout.buttonSoft}>Import JSON</button>
            <button onClick={clearReflections} disabled={reflections.length === 0} style={layout.buttonSoft}>Clear log</button>
          </div>
          {importStatus && <p style={{ color: colors.softInk }}>{importStatus}</p>}
          <div style={{ ...layout.stack, marginTop: 14 }}>
            {reflections.length === 0 ? (
              <p>No saved reflections yet.</p>
            ) : reflections.map(item => (
              <article key={item.id} style={{ padding: 14, borderRadius: 16, background: colors.paper, border: `1px solid ${colors.softBorder}` }}>
                <strong>{item.pattern}</strong>
                <p><em>{item.phrase}</em></p>
                <p>{item.choice}</p>
                <small>{new Date(item.createdAt).toLocaleString()}</small>
              </article>
            ))}
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18, marginTop: 18 }}>
          <div style={layout.card}>
            <Eyebrow>Browse</Eyebrow>
            <h2>The 17 Mirror Sentences</h2>
            <input
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder="Search phrases or patterns"
              style={{ ...layout.field, marginBottom: 12 }}
            />
            <div style={layout.stack}>
              {filtered.map(item => {
                const realIndex = mirrorSentences.findIndex(card => card.id === item.id)
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedIndex(realIndex)}
                    style={{ textAlign: 'left', padding: 12, borderRadius: 14, border: `1px solid ${colors.border}`, background: realIndex === selectedIndex ? '#f2e6c9' : colors.paper, cursor: 'pointer' }}
                  >
                    {item.phrase}
                  </button>
                )
              })}
            </div>
          </div>

          <div style={layout.card}>
            <Eyebrow>Selected mirror</Eyebrow>
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
