import React from "react";

import "./list.css"

class List extends React.Component {
    selectedIndex = null;

    constructor(props) {
        super(props)

        this.state = {
            // Select first item in the list by default if it exists
            selectedItem: (props.items.length > 0) ? props.items[0] : '',
        }

        this.handleSelected = this.handleSelected.bind(this)
    }

    handleSelected(e, item, i) {
        this.selectedIndex = i;
        this.props.setSelectedItem(item, this.selectedIndex)
    }

    render () {
        const rows = [], empty = this.props.items.length === 0
        let total = 0
        
        for (let i = 0; i < this.props.items.length; i++) { 
            const item = this.props.items[i];
            const subtotal = item.price * item.qty
            total += subtotal

            rows.push(
                // TODO: Change key for tr since more than one item can contain the same ID
                <tr className={this.selectedIndex === i ? "selected" : ""} onClick={(e) => this.handleSelected(e, item, i)} key={item.id}>
                    {Object.keys(item).map( 
                        prop => <td key={prop}>{item[prop]}</td>
                    )}
                    <td>{subtotal}</td>
                </tr>
            )
        }

        if (!empty) 
            rows.push(
                <tr key="last-row">
                    <td colSpan="4">FINAL TOTAL</td>
                    <td>{total}</td>
                </tr>
            )

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {/* {Object.keys(this.props.items[0]).map(
                                prop => <th>{prop.toUpperCase()}</th>
                            )} */}
                            <th className="id">ID</th>
                            <th className="name">NAME</th>
                            <th className="price">PRICE</th>
                            <th className="qty">QUANTITY</th>
                            <th className="subtotal">SUBTOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                {
                    empty 
                    ? <div className="centered-label"><i>No items have been added yet. Start billing by adding a new item.</i></div> 
                    : <></>
                }
            </div>
        ) 
    }
}

export default List