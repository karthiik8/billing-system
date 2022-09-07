import React from "react";

import Item from "./Item";

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
                <h2>Item List</h2>
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

export default List