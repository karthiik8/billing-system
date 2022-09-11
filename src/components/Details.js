import React from "react"

class Details extends React.Component {
    nonEditableFields = new Set(["id", "name"])

    constructor(props) {
        super(props)

        this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit(e, field) {
        let item = this.props.item
        item[field] = e.target.value
        this.props.updateSelectedItem(item)
    }

    render() {
        const empty = this.props.item === null
        // This should always be props.item and not state.item! 
        // Fetching state will only cause old data to persist and will not update to a newly selected item
        const item = this.props.item
        let details

        // console.log(item)

        details = (
            <div>
                <div className="centered-label"><i>{empty ? "No item selected" : "Modify values by editing the input fields below"}</i></div>
                <ul className="details-container">
                    {empty ? "" : Object.keys(item).map(
                        prop => (
                            <li key={prop}>
                                <label>{prop.toUpperCase()}</label>
                                {   
                                    // Check if field is editable
                                    (this.nonEditableFields.has(prop)) 
                                    ? <input value={item[prop]} disabled />
                                    : <input defaultValue={item[prop]} onChange={(e) => this.handleEdit(e, prop)} key={item.id} />
                                    // Changing the key to the current item's ID will cause the default value to re-render.
                                    // If we do not do this, the input element will not refresh and old data will persist.
                                }
                            </li>
                        )
                    )}
                </ul>
            </div>
        )

        return (
            <fieldset className="workspace-container-child rounded-border">
                <legend><h1>{(empty) ? "DETAILS" : item.name}</h1></legend>
                {details}
            </fieldset>
        )
    }
}

export default Details