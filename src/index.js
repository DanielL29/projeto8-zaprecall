import React from 'react';
import ReactDOM from 'react-dom/client'; // versão 17 'react-dom'
import App from './App'; 
import './index.css'

// versão 17
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// versão 18
ReactDOM.createRoot(document.getElementById('root')).render(<App />);