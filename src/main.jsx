import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import './index.css'; // Ensure this line is present before the app.css import
// import './app.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
