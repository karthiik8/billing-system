import React from "react";

class List extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // Select first item in the list by default if it exists
            selectedItem: (props.items.length > 0) ? props.items[0] : '',
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e, item) {
        // console.log(this.props.setSelectedItem)
        this.props.setSelectedItem(item)
    }

    render () {
        const rows = [], empty = this.props.items.length === 0
        let total = 0
        
        for (let i = 0; i < this.props.items.length; i++) { 
            const item = this.props.items[i];
            const subtotal = item.price * item.qty
            total += subtotal

            rows.push(
                <tr className="list-table-row" onClick={(e) => this.handleClick(e, item)}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                    <td>{subtotal}</td>
                </tr>
            )
        }

        if (!empty) 
            rows.push(
                <tr className="last-row">
                    <td colSpan="4"><b>FINAL TOTAL</b></td>
                    <td>{total}</td>
                </tr>
            )

        return (
            <div>
                <table className="list-table">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                    {rows}
                </table>
                <div className="centered-label"><i>{empty ? "No items have been added yet. Start billing by adding a new item." : ""}</i></div>
            </div>
        ) 
    }
}

export default List