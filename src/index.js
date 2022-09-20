import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Workspace from './components/Workspace'

class App extends React.Component {
    render() {
        return (
            <div className='root-container'>
                <div className='banner'>
                    <h2 className='header'>ONLINE BILLING SYSTEM</h2>
                </div>
                <Workspace />
            </div>
        )
    }
}

// ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)