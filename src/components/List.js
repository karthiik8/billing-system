import React from "react";

class List extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // Select first item in the list by default if it exists
            selectedItem: (props.items.length > 0) ? props.items[0] : '',
        }

        this.handleSelected = this.handleSelected.bind(this)
    }

    handleSelected(e, item, i) {
        // console.log(this.props.setSelectedItem)
        this.props.setSelectedItem(item, i)
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
                <tr tabIndex="0" onClick={(e) => this.handleSelected(e, item, i)} key={item.id} onFocus={(e) => this.handleSelected(e, item, i)}>
                    {Object.keys(item).map( 
                        prop => <td key={prop}>{item[prop]}</td>
                    )}
                    <td>{subtotal}</td>
                </tr>
            )
        }

        if (!empty) 
            rows.push(
                <tr className="last-row" key="last-row">
                    <td colSpan="4"><b>FINAL TOTAL</b></td>
                    <td>{total}</td>
                </tr>
            )

        return (
            <div>
                <table className="list-table">
                    <tbody>
                        <tr>
                            {/* {Object.keys(this.props.items[0]).map(
                                prop => <th>{prop.toUpperCase()}</th>
                            )} */}
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>SUBTOTAL</th>
                        </tr>
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