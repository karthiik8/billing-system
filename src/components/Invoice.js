import React from "react"

import NewItem from "./NewItem"
import List from "./List"

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
            <div className='workspace-container'>
                <h1>INVOICE</h1>
                <NewItem updateList={this.updateList} />
                <List items={this.state.items} itemsPerPage='10' />
            </div>
        )
    }
}

export default Invoice