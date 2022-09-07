import React from "react";

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

export default Item