import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { CounterComponent } from './components/hooks/counter/CounterComponent';
import { FormComponent } from './components/hooks/useForm/FormComponent';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormComponent />
  </React.StrictMode>,
)
