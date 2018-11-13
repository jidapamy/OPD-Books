import React, { Component } from 'react';
import { Label, Segment, Form, Divider, Header } from 'semantic-ui-react'
import ErrorMessage from './ErrorMessage'
import { groupInfoPatientField } from "../../../Static/Data/Field"

const style = { 
    topicAllergy : {
        color: '#31A5BA',
        margin: 0,
        marginBottom:' 1%'
    },
    topicPrivilage: {
        color: '#31A5BA',
        margin: 0,
        marginBottom: ' 2%'
    },
    element : {
        padding: '0 2%'
    },
    errorElement : {
        padding: '0 2%',
        background: '#fff6f6',
        borderRadius: '5px',
        border: '1px solid #e0b4b4'
    }
}

export default class Allergy extends Component {

    state = {
        otherallergy: '',
        otherprivilege:'',
        disabledOtherallergy: true,
        disabledOtherprivilege: true,
    }

    chooseChoice = (field, value) => {
        if (!this.checkOther(value)) {
            this.setState({ ['disabledOther' + field]: true })
            this.setState({ ['other'+field]: '' })
        } else {
            this.setState({ ['disabledOther' + field]: false })
        }
        this.props.setFieldAndValidate(field, value)
    }

    checkOther = (value) => {
        if(value){
            if (value === 'not have' || value === 'Government officer' || value === 'Family of government officer' || value === 'Normal person' ||
                value === 'State enterprise officer' || value === 'Family of state enterprise officer') {
                return false;
            }
            return true;
        }
        return false
    }

    componentWillMount = () => {
        if(this.props.patient){
            if (this.props.patient.privilege && this.checkOther(this.props.patient.privilege)){
                this.setState({ 
                    otherprivilege: this.props.patient.privilege,
                    disabledOtherprivilege: false,
                })
            }
            if (this.props.patient.allergy && this.checkOther(this.props.patient.allergy)){
                this.setState({ 
                    otherallergy: this.props.patient.allergy ,
                    disabledOtherallergy: false,
                })
            }
        }
    }

    render() {
        return (
            <div>
                <Form>
                    <h5 style={{ ...style.topicAllergy, ...{ color: this.props.errorField.allergy ? '#9f3a38' : '#31A5BA' } }}>{groupInfoPatientField.allergy.label}<span style={{ color: '#db2828' }}> * </span> </h5>
                    <Form.Group inline style={this.props.errorField.allergy ? style.errorElement : style.element}>
                        <Form.Radio
                            label='No'
                            value='not have'
                            checked={this.props.patient.allergy === 'not have'}
                            onChange={(e, { value }) => this.chooseChoice('allergy', value)}
                            width={4}
                        />
                        <Form.Radio
                            label='Yes, Please specify'
                            value='other'
                            checked={!this.state.disabledOtherallergy}
                            onChange={(e, { value }) => this.chooseChoice('allergy', value)}
                        />
                        <Form.Input
                            label=''
                            placeholder='Please specify'
                            width={4}
                            disabled={this.state.disabledOtherallergy}
                            onChange={(e, { value }) => {
                                this.chooseChoice('allergy', value)
                                this.setState({ otherallergy: value })
                            }}
                            required={!this.state.disabledOtherallergy}
                            value={this.state.otherallergy}
                        />
                        <br></br>
                    </Form.Group>
                    <h5 style={{ ...style.topicPrivilage, ...{ color: this.props.errorField.privilege ? '#9f3a38' : '#31A5BA', marginBottom: this.props.errorField.privilege ? '1%' : ' 2%'} }}>{groupInfoPatientField.privilege.label}<span style={{ color: '#db2828' }}> *</span></h5>
                    <div style={this.props.errorField.privilege ? { ...style.errorElement, ...{ paddingTop: '1em' }} : {}}>
                    <Form.Group inline style={style.element}>
                    {/* <div> */}
                        <Form.Radio
                            value='Government officer'
                            label='Government officer'
                            checked={this.props.patient.privilege === 'Government officer'}
                            onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                            width={4}
                        />
                        <Form.Radio
                            value='Family of government officer'
                            label='Family of government officer'
                            checked={this.props.patient.privilege === 'Family of government officer'}
                            onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                            width={5}
                        />
                        <Form.Radio
                            value='Normal person'
                            label='Normal person'
                            checked={this.props.patient.privilege === 'Normal person'}
                            onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                            width={3}
                        />
                        {/* </div> */}
                    </Form.Group>

                    <Form.Group inline style={style.element}>
                    {/* <div> */}
                        <Form.Radio
                            value='State enterprise officer'
                            label='State enterprise officer'
                            checked={this.props.patient.privilege === 'State enterprise officer'}
                            onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                            width={4}
                        />
                        <Form.Radio
                            value='Family of state enterprise officer'
                            label='Family of state enterprise officer'
                            checked={this.props.patient.privilege === 'Family of state enterprise officer'}
                            onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                            width={5}
                        />
                        <Form.Radio
                            label='Other'
                            value='Other'
                            checked={this.checkOther(this.props.patient.privilege)}
                            onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                        />
                        <Form.Input
                            label=''
                            placeholder='Please specify other'
                            disabled={this.state.disabledOtherprivilege}
                            required={!this.state.disabledOtherprivilege}
                            onChange={e => {
                                this.chooseChoice('privilege', e.target.value)
                                this.setState({ otherprivilege: e.target.value })
                            }}
                            width={4}
                            value={this.state.otherprivilege}
                        />
                        {/* </div> */}
                    </Form.Group>
                    </div>
                </Form>
            </div>
        )
    }
}
