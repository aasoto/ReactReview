import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { CallbackComponent } from './components/hooks/useCallback/CallbackComponent';
import { TasksList } from './components/hooks/useReducer/TasksList';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TasksList />
  </React.StrictMode>,
)
