import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

async function enableMocking(): Promise<ServiceWorkerRegistration | undefined> {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  const { worker } = await import('./mocks/browser');
  return worker.start();
}

enableMocking().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
