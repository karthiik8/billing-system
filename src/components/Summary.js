import React from "react";

class Summary extends React.Component {
    render() {
        const { total, tax, discount } = this.props
        const balance = total - tax - discount

        return (
            <fieldset className="rounded-border">
                <legend><h1>SUMMARY</h1></legend>
                <ul className="details-container">
                    <li>
                        <label>Gross Total</label>
                        <b>{total}</b>
                    </li>
                    <li>
                        <label>+ Tax</label>
                        <b>{tax}</b>
                    </li>
                    <li>
                        <label>- Discount</label>
                        <b>{discount}</b>
                    </li>
                    <li>
                        <label><b>NET BALANCE</b></label>
                        <b>{balance}</b>
                    </li>
                    <li>
                        <label>Amount Paid</label>
                        <input />
                    </li>
                    <li>
                        <label>Return Change</label>
                        <b>0</b>
                    </li>
                </ul>
                <div className="centered-label">
                    <button>CHECKOUT</button>
                </div>
            </fieldset>
        )
    }
}

export default Summary