import React, { Component } from 'react';
import { Label, Segment, Form, Radio } from 'semantic-ui-react'
import ErrorMessage from './ErrorMessage'

export default class Allergy extends Component {

    state = {
        otherallergy: '',
        otherprivilege:'',
        disabledOtherallergy: true,
        disabledOtherprivilege: true,
    }

    chooseChoice = (field, value) => {
        if (value === 'not have' || value === 'ข้าราชการ' || value === 'ครอบครัวข้าราชการ' || value === 'รัฐวิสาหิจ' ||
            value === 'ครอบครัวรัฐวิสาหกิจ' || value === 'บุคคลทั่วไป') {
            this.setState({ ['disabledOther' + field]: true })
            this.setState({ ['other'+field]: '' })
        } else {
            this.setState({ ['disabledOther' + field]: false })
        }
        this.props.setFieldAndValidate(field, value)
    }

    render() {
        return (
            <div>
                <Segment style={{ borderRadius: '2rem' }}>
                    <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>ประวัติการแพ้ยา อาหาร และสารอื่นๆ (History of Food Or Drug Allergy)</h4></Label>
                    <br/><br/>
                    <ErrorMessage
                        errorText={this.props.errorText}
                        cardType={this.props.cardType}
                    />
                    <Segment color={this.props.errorField.allergy ? 'red' : 'teal'} style={{ borderRadius: '2rem' }}>
                        <h3 >คุณมีประวัติการแพ้หรือไม่<span style={{ color: 'red' }}> * </span></h3 >
                        <br></br>
                        <Form.Group inline>
                            <Form.Radio
                                label='ไม่เคยมีประวัติแพ้ ( No )'
                                value='not have'
                                checked={this.props.patient.allergy === 'not have'}
                                onChange={(e, { value }) => this.chooseChoice('allergy', value)}
                            />
                            <Form.Radio
                                label='มีประวัติแพ้, โปรดระบุ (Yes, Please specify)'
                                value='other'
                                checked={!this.state.disabledOtherallergy}
                                onChange={(e, { value }) => this.chooseChoice('allergy', value)}
                            />
                            <Form.Input
                                label=''
                                placeholder='โปรดระบุสิ่งที่แพ้'
                                width={4}
                                disabled={this.state.disabledOtherallergy}
                                onChange={(e, { value }) => {
                                    this.chooseChoice('allergy', value)
                                    this.setState({ otherallergy: value})
                                }}
                                required={!this.state.disabledOtherallergy}
                                value={this.state.otherallergy}
                            />
                            <br></br>
                        </Form.Group>
                    </Segment>
                    <Segment color={this.props.errorField.privilege ? 'red' : 'teal'} style={{ borderRadius: '2rem' }}>
                        <h3>สิทธิในการรักษา<span style={{ color: 'red' }}>*</span></h3>
                        <br></br>
                        <Form.Group inline>
                            <Form.Radio
                                value='ข้าราชการ'
                                label='ข้าราชการ'
                                checked={this.props.patient.privilege === 'ข้าราชการ'}
                                width={4}
                                onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                            />
                            <Form.Radio
                                value='ครอบครัวข้าราชการ'
                                label='ครอบครัวข้าราชการ'
                                checked={this.props.patient.privilege === 'ครอบครัวข้าราชการ'}
                                width={4}
                                onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                            />
                            <Form.Radio
                                value='รัฐวิสาหิจ'
                                label='รัฐวิสาหิจ'
                                checked={this.props.patient.privilege === 'รัฐวิสาหิจ'}
                                width={2}
                                onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                            />
                        </Form.Group>

                        <Form.Group inline>
                            <Form.Radio
                                value='ครอบครัวรัฐวิสาหกิจ'
                                label='ครอบครัวรัฐวิสาหกิจ'
                                width={4}
                                checked={this.props.patient.privilege === 'ครอบครัวรัฐวิสาหกิจ'}
                                onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                            />
                            <Form.Radio
                                value='บุคคลทั่วไป'
                                label='บุคคลทั่วไป'
                                width={4}
                                checked={this.props.patient.privilege === 'บุคคลทั่วไป'}
                                onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                            />
                            <Form.Radio
                                label='อื่นๆ'
                                value='other'
                                checked={!this.state.disabledOtherprivilege}
                                onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                            />
                            <Form.Input
                                label=''
                                placeholder='โปรดระบุสิทธิ์การรักษาอื่นๆ'
                                width={4}
                                disabled={this.state.disabledOtherprivilege}
                                required={!this.state.disabledOtherprivilege}
                                onChange={e => {
                                    this.chooseChoice('privilege', e.target.value)
                                    this.setState({ otherprivilege: e.target.value })
                                }}
                                value={this.state.otherprivilege}
                            />
                            <br></br>
                        </Form.Group>
                    </Segment>
                </Segment>
                <br></br>
            </div>
        )
    }
}
