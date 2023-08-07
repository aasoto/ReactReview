import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { ConsumeAPIApp } from './components/hooks/API/ConsumeAPIApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConsumeAPIApp />
  </React.StrictMode>,
)
