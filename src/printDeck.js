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
    <article class="card">
      <p class="eyebrow">ConsentMirror369 · Card ${index + 1}</p>
      <h2>${escapeHtml(card.pattern)}</h2>
      <p class="label">Pressure phrase</p>
      <p>${escapeHtml(card.phrase)}</p>
      <p class="label">Mirror question</p>
      <p>${escapeHtml(card.question)}</p>
      <p class="label">Boundary response</p>
      <p>${escapeHtml(card.response)}</p>
    </article>
  `).join('')

  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>ConsentMirror369 Printable Card Deck</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 24px; color: #182018; }
    h1 { margin: 0 0 8px; }
    .intro { margin-bottom: 18px; color: #596459; }
    .deck { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
    .card { border: 1px solid #d8ccb4; border-radius: 18px; padding: 18px; min-height: 280px; page-break-inside: avoid; background: #fffaf0; }
    .eyebrow, .label { text-transform: uppercase; letter-spacing: 1.5px; font-size: 11px; font-weight: 700; color: #65734e; }
    h2 { margin: 0 0 12px; font-size: 24px; }
    p { line-height: 1.45; }
    @media print {
      body { margin: 12mm; }
      .deck { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .card { break-inside: avoid; }
    }
  </style>
</head>
<body>
  <h1>ConsentMirror369 Printable Card Deck</h1>
  <p class="intro">A reflection deck for noticing pressure, pausing safely, and returning to clear choice. A pattern is a cue, not a verdict.</p>
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
