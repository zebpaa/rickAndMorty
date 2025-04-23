import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { DataProvider } from './components';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);
