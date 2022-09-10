import React from "react";

import Item from "./Item";

class List extends React.Component {
    render () {
        const rows = [] 
        let total = 0
        for (let index = 0; index < this.props.items.length; index++) { 
            const item = this.props.items[index];
            const subtotal = item.price * item.qty
            total += subtotal

            rows.push(
                <Item id={item.id} name={item.name} price={item.price} qty={item.qty} total={subtotal} />
            )
        }

        if (rows.length > 0) 
            rows.push(
                <tr className='last-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><b>TOTAL</b></td>
                    <td className='amount-column'>{total}</td>
                </tr>
            )

        return (
            <div>
                <table className='list-table'>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                    {rows}
                </table>
                <div className='centered-label'><i>{rows.length === 0 ? 'No items have been added yet. Start billing by adding a new item.' : ''}</i></div>
            </div>
        ) 
    }
}

export default List