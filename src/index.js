import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Invoice from './Invoice'
import Summary from './Summary'

class App extends React.Component {
    render() {
        return (
            <div className='root-container'>
                <div className='banner'>
                    <h1 className='header'>BILLING SYSTEM</h1>
                </div>
                <div className='grid-upper-workspace'>
                    <Invoice />
                    <Summary />
                </div>
            </div>
        )
    }
}

// ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)