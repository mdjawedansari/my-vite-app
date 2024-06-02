// src/App.jsx
import React from 'react';
import DataDisplay from './DataDisplay';
import './App.css';
import { Dashboard } from './components/Dashboard';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Dashboard />
            </header>
        </div>
    );
}

export default App;
