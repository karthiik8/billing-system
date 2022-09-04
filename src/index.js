import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Billing System</h1>
                <div>
                    <div className='grid-child-element'>
                        <List />
                        <Summary />
                    </div>
                    <div className='grid-control-panel-child-element'>
                        <ControlPanel />
                    </div>
                </div>
            </div>
        )
    }
}

class List extends React.Component {
    items = [
        {
            id: '123456789',
            name: 'POTATOES', 
            price: 60,
            qty: 1
        },
        {
            id: '987456321',
            name: 'ONIONS',
            price: 100,
            qty: 2
        }
    ]

    render () {
        const rows = []
        for (let index = 0; index < this.items.length; index++) { 
            const item = this.items[index];
            rows.push(
                <Item id={item.id} name={item.name} price={item.price} qty={item.qty} total={item.price * item.qty} />
            )
        }

        return (
            <div>
                <table className='table'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    {rows}
                </table>
            </div>
        ) 
    }
}

class Item extends React.Component {
    render () {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.qty}</td>
                <td>{this.props.total}</td>
            </tr>
        )
    }
}

class Summary extends React.Component {
    render() {
        return (
            <div>
                <h1>Summary</h1>
                <h2>Customer Details</h2>
                <h2>Transaction Details</h2>
            </div>
        )
    }
}

class ControlPanel extends React.Component {
    render() {
        return (
            <div>
                <h1>Control Panel</h1>
                <button>Add Item</button>
                <button>Remove Item</button>
                <button>Complete Transaction</button>
                <button>Cancel Transaction</button>
            </div>
        )
    }
}

// ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)