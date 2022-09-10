import React from "react";

import NewItem from "./NewItem"
import List from "./List"
import Summary from "./Summary"

class Workspace extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            selectedItem: null,
        }

        // This line is important but I do not know what it does
        // Refer https://stackoverflow.com/questions/2236747/what-is-the-use-of-the-javascript-bind-method
        // and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
        // This line is necessary to bind the this keyword of updateList to this class. Without it, the function will 
        // not be able to access this class' state
        this.addItem = this.addItem.bind(this)
        this.setSelectedItem = this.setSelectedItem.bind(this)
    }

    addItem(item) {
        this.setState(prevState => ({
            items: [...prevState.items, item]
        }))
    }

    setSelectedItem(item) {
        this.setState({
            selectedItem: item
        })
    }

    render() {
        return (
            <div className="workspace-container">
                <div className="workspace-container-child">
                    <h1>INVOICE</h1>
                    <NewItem addItem={this.addItem} />
                    <List items={this.state.items} setSelectedItem={this.setSelectedItem} />
                </div>
                <Summary item={this.state.selectedItem} />
            </div>
        )
    }
}

export default Workspace