import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

const rootDOM = document.getElementById('root');

if (rootDOM) {
  ReactDOM.createRoot(rootDOM).render(<App />);
}
