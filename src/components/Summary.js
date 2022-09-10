import React from "react"

class Summary extends React.Component {
    render() {
        const empty = this.props.item === null
        return (

            <fieldset className="workspace-container-child rounded-border">
                <legend><h1>{(empty) ? "DETAILS" : this.props.item.name}</h1></legend>
                <div>
                    {empty ? "No item selected" : ""}
                </div>
            </fieldset>
        )
    }
}

export default Summary