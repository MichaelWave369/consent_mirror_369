export const colors = {
  ink: '#182018',
  softInk: '#596459',
  moss: '#65734e',
  gold: '#a58b4f',
  cream: '#f7f3ea',
  paper: '#fffaf0',
  white: '#ffffff',
  border: '#ddd4c0',
  softBorder: '#eee1c7'
}

export const layout = {
  shell: {
    minHeight: '100vh',
    padding: 24,
    color: colors.ink,
    background: `radial-gradient(circle at top left, rgba(255, 230, 170, 0.9), transparent 360px), radial-gradient(circle at bottom right, rgba(183, 210, 170, 0.55), transparent 420px), ${colors.cream}`
  },
  container: {
    maxWidth: 1120,
    margin: '0 auto'
  },
  hero: {
    padding: 28,
    border: `1px solid ${colors.border}`,
    borderRadius: 28,
    background: 'rgba(255, 250, 240, 0.92)',
    boxShadow: '0 18px 70px rgba(40, 32, 18, 0.12)'
  },
  card: {
    padding: 20,
    border: `1px solid ${colors.border}`,
    borderRadius: 22,
    background: colors.white,
    boxShadow: '0 10px 36px rgba(40, 32, 18, 0.07)'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 18,
    marginTop: 18
  },
  stack: {
    display: 'grid',
    gap: 10
  },
  buttonPrimary: {
    padding: '10px 14px',
    borderRadius: 12,
    border: `1px solid ${colors.moss}`,
    background: colors.moss,
    color: colors.white,
    cursor: 'pointer'
  },
  buttonSoft: {
    padding: '10px 14px',
    borderRadius: 12,
    border: `1px solid ${colors.border}`,
    background: colors.paper,
    color: colors.ink,
    cursor: 'pointer'
  },
  field: {
    width: '100%',
    padding: 12,
    borderRadius: 12,
    border: `1px solid ${colors.border}`
  }
}
