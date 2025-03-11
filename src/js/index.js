import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Make sure we have a DOM element to render to
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('React app successfully mounted.');
  } else {
    console.error('Root element not found. Cannot mount React app.');
  }
});
