import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const OtherDropdown = (props) => {
    const field = props.field
    let arr = props.options

    const handleAddition = (value) => {
        arr.push({ key: value, text: value, value: value })
        props.setField(props.options, arr)
    }
    return (
        <Dropdown
            options={props.options}
            placeholder={props.placeholder}
            search
            selection
            allowAdditions
            additionLabel='other : '
            onAddItem={(e, { value }) => handleAddition(value)}
            value={props.value}
            onChange={(e, { value }) => props.setField(field, value)}
        />
    )
}

export default OtherDropdown