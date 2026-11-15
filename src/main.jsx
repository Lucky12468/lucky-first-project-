import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// Mark JavaScript as active only after this entry module has loaded.
document.documentElement.classList.add('js-ready');

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Lucky portfolio failed to render:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, background: '#0b0d0c', color: '#f1f2ed', fontFamily: 'Manrope, sans-serif' }}>
          <section style={{ maxWidth: 560, textAlign: 'center' }}>
            <p style={{ color: '#c6f36a', letterSpacing: '.14em', fontSize: 11 }}>LUCKY — PORTFOLIO</p>
            <h1 style={{ fontSize: 'clamp(30px, 6vw, 48px)', lineHeight: 1.1 }}>The page hit an error.</h1>
            <p style={{ color: '#a6ada4', lineHeight: 1.7 }}>The site encountered a rendering error. The diagnostic below identifies what needs fixing.</p>
            <pre style={{ margin: '22px 0', padding: 16, maxHeight: 220, overflow: 'auto', textAlign: 'left', whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', border: '1px solid #343b32', borderRadius: 6, background: '#121613', color: '#f0b7a8', fontSize: 12 }}>{String(this.state.error?.stack || this.state.error?.message || this.state.error)}</pre>
            <button onClick={() => window.location.reload()} style={{ padding: '13px 18px', border: 0, borderRadius: 4, background: '#c6f36a', color: '#11150c', fontWeight: 800, cursor: 'pointer' }}>Reload page</button>
          </section>
        </main>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('The #root element is missing from index.html');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
);
