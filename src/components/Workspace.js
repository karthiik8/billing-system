import React from "react";

import NewItem from "./NewItem"
import List from "./List"
import Details from "./Details"

class Workspace extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            selectedItem: null,
            selectedIndex: null,
        }

        // This line is important but I do not know what it does
        // Refer https://stackoverflow.com/questions/2236747/what-is-the-use-of-the-javascript-bind-method
        // and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
        // This line is necessary to bind the this keyword of updateList to this class. Without it, the function will 
        // not be able to access this class' state
        this.addItem = this.addItem.bind(this)
        this.setSelectedItem = this.setSelectedItem.bind(this)
        this.updateSelectedItem = this.updateSelectedItem.bind(this)
    }

    addItem(item) {
        this.setState(prevState => ({
            items: [...prevState.items, item]
        }))
        this.setSelectedItem(item)
    }

    setSelectedItem(item, i) {
        // Set the selected item along with its index (useful for knowing which item is to be updated)
        this.setState({
            selectedItem: item,
            selectedIndex: i
        })
    }

    updateSelectedItem(newItem) {
        let newItemsList = this.state.items
        newItemsList[this.state.selectedIndex] = newItem
        this.setState({
            items: newItemsList
        })
    }

    render() {
        return (
            <div className="workspace-container">
                <div>
                    <fieldset className="rounded-border">
                        <legend><h1>INVOICE</h1></legend>
                        <NewItem addItem={this.addItem} />
                        <List items={this.state.items} setSelectedItem={this.setSelectedItem} />
                    </fieldset>
                </div>
                <div>
                    <Details item={this.state.selectedItem} updateSelectedItem={this.updateSelectedItem} />
                </div>
            </div>
        )
    }
}

export default Workspace