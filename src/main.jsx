import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { CounterComponent } from './components/hooks/counter/CounterComponent';
import { FormComponent } from './components/hooks/useForm/FormComponent';
import { FetchData } from './components/hooks/useFetch/FetchData';
import { MemoData } from './components/hooks/useMemo/MemoData';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoData />
  </React.StrictMode>,
)
