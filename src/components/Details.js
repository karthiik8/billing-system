import React from "react"

class Details extends React.Component {
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
        const nonEditableFields = new Set(["id", "name"])

        let details

        // console.log(item)

        if (!empty)
            details = (
                <div>
                    <div>Modify values by editing the input fields below</div>
                    <ul className="details-container">
                        {Object.keys(item).map(
                            prop => (
                                <li key={prop}>
                                    <label>{prop.toUpperCase()}</label>
                                    {   
                                        // Check if field is editable
                                        (nonEditableFields.has(prop)) 
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
        else 
            details = (
                <div className="centered-label"><i>No item selected</i></div>
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