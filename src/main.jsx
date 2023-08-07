import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { CallbackComponent } from './components/hooks/useCallback/CallbackComponent';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CallbackComponent />
  </React.StrictMode>,
)
