import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// deleted   </React.StrictMode>, because it was rendering my app twices, which was causing some problems while fetching the API so app was taking too long to load

// https://stackoverflow.com/questions/48846289/why-is-my-react-component-is-rendering-twice
