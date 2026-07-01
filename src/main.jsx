import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Block all console outputs except console.info globally
const noop = () => {};
console.log = noop;
console.warn = noop;
console.error = noop;
console.debug = noop;
console.trace = noop;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
