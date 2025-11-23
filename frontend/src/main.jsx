import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {import.meta.env.DEV && (() => {
      // Development-only click logger to help debug unresponsive links
      if (typeof window !== 'undefined') {
        window.addEventListener('click', (e) => {
          // Log the event target and the composed path to help identify blockers
          // eslint-disable-next-line no-console
          console.log('[click-logger] target:', e.target, 'path:', e.composedPath?.() || e.path || null);
        }, true);
      }
      return null;
    })()}
  </React.StrictMode>,
)
