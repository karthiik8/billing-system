import React from "react";

class Summary extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            amountPaid: 0,
        }

        this.handleAmountInput = this.handleAmountInput.bind(this)
    }

    handleAmountInput(e) {
        this.setState({amountPaid: e.target.value})
    }

    render() {
        const { total, tax, discount } = this.props
        const balance = total - tax - discount
        const change = this.state.amountPaid - total

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
                        <input value={this.state.amountPaid} onChange={this.handleAmountInput} />
                    </li>
                    <li>
                        <label>Return Change</label>
                        <b>
                            {
                                change < 0
                                ? "Amound paid is insufficient!"
                                : change
                            }
                        </b>
                    </li>
                </ul>
                <div className="centered-label">
                    <button disabled={change < 0}>CHECKOUT</button>
                </div>
            </fieldset>
        )
    }
}

export default Summary