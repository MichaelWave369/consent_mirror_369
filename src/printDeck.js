function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export function printCardDeck(cards) {
  const cardHtml = cards.map((card, index) => `
    <article class="card front">
      <p class="eyebrow">ConsentMirror369 · Card ${index + 1}</p>
      <h2>${escapeHtml(card.pattern)}</h2>
      <p class="label">Pressure phrase</p>
      <p>${escapeHtml(card.phrase)}</p>
      <p class="label">Mirror question</p>
      <p>${escapeHtml(card.question)}</p>
      <p class="label">Boundary response</p>
      <p>${escapeHtml(card.response)}</p>
    </article>
    <article class="card back">
      <div class="sigil">CM369</div>
      <h2>Lantern, not weapon.</h2>
      <p>Pressure reduces choice. Clarity restores choice.</p>
      <div class="steps">
        <span>Notice</span>
        <span>Name</span>
        <span>Pause</span>
        <span>Choose</span>
      </div>
      <p class="small">A pattern is a cue, not proof.</p>
    </article>
  `).join('')

  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>ConsentMirror369 Printable Card Deck</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 24px; color: #182018; background: #f7f3ea; }
    h1 { margin: 0 0 8px; }
    .intro { margin-bottom: 18px; color: #596459; }
    .deck { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
    .card { border: 1px solid #d8ccb4; border-radius: 18px; padding: 18px; min-height: 300px; page-break-inside: avoid; background: #fffaf0; position: relative; overflow: hidden; }
    .front { background: #fffaf0; }
    .back { display: grid; place-items: center; text-align: center; background: radial-gradient(circle at top left, #ffe9b2, transparent 55%), radial-gradient(circle at bottom right, #dbe9d2, transparent 55%), #fffaf0; }
    .back:before { content: ''; position: absolute; inset: 14px; border: 1px dashed #a58b4f; border-radius: 14px; pointer-events: none; }
    .sigil { width: 88px; height: 88px; border: 2px solid #65734e; border-radius: 999px; display: grid; place-items: center; font-weight: 800; letter-spacing: 1px; color: #65734e; background: rgba(255,255,255,.55); }
    .steps { display: flex; gap: 6px; flex-wrap: wrap; justify-content: center; }
    .steps span { border: 1px solid #d8ccb4; border-radius: 999px; padding: 6px 9px; background: rgba(255,255,255,.65); font-size: 12px; font-weight: 700; }
    .small { font-size: 12px; color: #596459; }
    .eyebrow, .label { text-transform: uppercase; letter-spacing: 1.5px; font-size: 11px; font-weight: 700; color: #65734e; }
    h2 { margin: 0 0 12px; font-size: 24px; }
    p { line-height: 1.45; }
    @media print {
      body { margin: 12mm; background: white; }
      .deck { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .card { break-inside: avoid; }
    }
  </style>
</head>
<body>
  <h1>ConsentMirror369 Printable Card Deck</h1>
  <p class="intro">A reflection deck for noticing pressure, pausing safely, and returning to clear choice. A pattern is a cue, not a verdict. Each front card is followed by a matching card back.</p>
  <section class="deck">${cardHtml}</section>
</body>
</html>`

  const printWindow = window.open('', '_blank')
  if (!printWindow) return
  printWindow.document.write(html)
  printWindow.document.close()
  printWindow.focus()
  printWindow.print()
}
