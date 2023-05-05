import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './styles/variables.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
