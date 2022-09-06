import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Billing System</h1>
                <div>
                    <div className='grid-upper-workspace'>
                        <Invoice />
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

// TODO: Refactor each Component into its own file

class Invoice extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }

        // This line is important but I do not know what it does
        // Refer https://stackoverflow.com/questions/2236747/what-is-the-use-of-the-javascript-bind-method
        // and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
        // This line is necessary to bind the this keyword of updateList to this class. Without it, the function will 
        // not be able to access this class' state
        this.updateList = this.updateList.bind(this)
    }

    updateList(item) {
        this.setState(prevState => ({
            items: [...prevState.items, item]
        }))
    }

    render() {
        return (
            <div>
                <NewItem updateList={this.updateList} />
                <List items={this.state.items} />
            </div>
        )
    }
}

class NewItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            qty: '',
        }

        this.handleIdChange = this.handleIdChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleQtyChange = this.handleQtyChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleIdChange(e) {
        this.setState({id: e.target.value})
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    handleQtyChange(e) {
        this.setState({qty: e.target.value})
    }

    handleSubmit(e) {
        this.props.updateList({
            id: this.state.id,
            name: this.state.name,
            price: 50,  // TODO: Must remove this placeholder price value
            qty: this.state.qty
        })

        // Reset state for the next item to be added
        this.setState({
            id: '',
            name: '',
            qty: ''
        })
    }
 
    render() {
        return (
            <div>
                <h2>{this.state.name === '' ? 'Add Item' : this.state.name}</h2>
                <div>
                    <input type='text' placeholder='Product ID' value={this.state.id} onChange={this.handleIdChange}/>
                    <input type='text' placeholder='Product Name' value={this.state.name} onChange={this.handleNameChange}/>
                    <input type='text' placeholder='Quantity' value={this.state.qty} onChange={this.handleQtyChange}/>
                    <input type='submit' value='Done' onClick={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

class List extends React.Component {
    render () {
        const rows = []
        for (let index = 0; index < this.props.items.length; index++) { 
            const item = this.props.items[index];
            rows.push(
                <Item id={item.id} name={item.name} price={item.price} qty={item.qty} total={item.price * item.qty} />
            )
        }

        return (
            <div>
                <h2>Invoice</h2>
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
                <div className='centered-label'><i>{rows.length === 0 ? 'No items have been added yet. Start billing by adding a new item.' : 'End of list.'}</i></div>
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
                <h2>Summary</h2>
                <h3>Customer Details</h3>
                <h3>Transaction Details</h3>
            </div>
        )
    }
}

class ControlPanel extends React.Component {
    render() {
        return (
            <div>
                <h1>Control Panel</h1>
                <button>Complete Transaction</button>
                <button>Cancel Transaction</button>
            </div>
        )
    }
}

// ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)