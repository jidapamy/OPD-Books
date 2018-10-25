import React, { Component } from 'react';
import { Message } from 'semantic-ui-react'

export default class ErrorMessage extends Component {
    render(){
        console.log(this.props.errorText)
        const errorList = this.props.errorText.map(msg => (msg.value))
        return (
            <Message
                hidden={this.props.errorText.length === 0}
                negative
                header='Invalid'
                list={errorList}
            />
        )
    }
}