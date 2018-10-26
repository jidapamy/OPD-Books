import React from "react";
import {
    Segment, Icon, Form, Input, Transition, Dropdown, Select, Menu, Container, Button, Grid, Label
} from "semantic-ui-react";
import swal from 'sweetalert2';
import {
    titleNameChildData, genderData, cardTypeData, titleNameParentData, bloodgroupData,
    nationalityData, religionData, statusData, countryData
} from '../../../Static/Data/FormData'
import { patientField, groupInfoPatientField, pattern } from "../../../Static/Data/Field"
import InfoPatient from '../../../Components/Patients/ManagePatientProfile/InfoPatient';
import HomeAddress from '../../../Components/Patients/ManagePatientProfile/HomeAddress'
import EmergencyContact from '../../../Components/Patients/ManagePatientProfile/EmergencyContact'
import PatientParent from '../../../Components/Patients/ManagePatientProfile/PatientParent'
import Allergy from '../../../Components/Patients/ManagePatientProfile/Allergy'
import ErrorMessage from '../../../Components/Patients/ManagePatientProfile/ErrorMessage'
import { checkPassword, checkEmail} from '../../../Services/ManagePatientMethod'
import Password from './Password'
const provincesData = require('../../../Static/Data/Provinces')

let inputEmail = React.createRef();

const itemStyle = {
    paddingLeft: '1.5%',
    paddingRight: '1.5%',
    color: '#000',
};

const itemActiveStyle = {
    paddingLeft: '1.5%',
    paddingRight: '1.5%',
    backgroundColor: '#31A5BA',
    color: '#FFF'

};
const elimentStyle = {
    paddingLeft: '1.5%',
    paddingRight: '1.5%',
    backgroundColor: '#F7F7F7',
};
const headerSetting = {
    color: '#8A8A8A',
};

export default class EditProfile extends React.Component {
    state = {
        info: false,
        address: false,
        emer: false,
        parent: false,
        allergy: false,
        open: false,
        changePassword: false,
        changeEmail: false,
        editEmail: false,

        email: null,
        passwordConfirmEmail: '',
        errorEmail: false,
        errorDupEmail:false,

        oldPassword:'',
        newPassword:'',
        newPasswordConfirm:'',
        errorPassword:false

    }
    componentWillMount() {
        this.setState(this.props.state)
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.state.editSuccess){
            this.setState({
                [nextProps.state.editSuccess]: false,
                editEmail: false,
                oldPassword: '',
                newPassword: '',
                newPasswordConfirm: '',
                errorPassword: false,
                passwordConfirmEmail: '',
                errorEmail: false,
            })
        }
    }

    close = () => this.setState({ open: false })

    confirm = (group) => {
        this.props.validateEdit(group)
    }

    setField = (field, value) => {
        this.setState({ [field]: value })
    }

    editEmail = (e) => {
        if (this.state.editEmail === false) {
            // false > true : ถ้าเป็น true >> พิมพ์ได้
            this.inputEmail.focus()
        }
        if(this.state.email==null){
            this.setState({
                email: this.props.state.patient.email,
                editEmail: !this.state.editEmail,
                passwordConfirmEmail:''
            })
        }else{
            this.setState({
                editEmail: !this.state.editEmail,
                passwordConfirmEmail: '',
                errorEmail:false
            })
        }
    }

    submitEmail = async () => {
        if (!await checkEmail(this.state.email)){
            if (await checkPassword(this.props.state.patient.citizenId, this.state.passwordConfirmEmail)) {
                console.log("Match ")
                this.props.setFieldAndValidate("newEmail", this.state.email)
                this.confirm("changeEmail")
            } else {
                swal(
                    'Your password was incorrect.',
                    'Please re-enter your password',
                    'error',
                ).then(res => {
                    this.inputPasswordEmail.focus()
                    this.setState({ passwordConfirmEmail: '' })
                })
            }
        }else{
            swal(
                'Email Duplicated!',
                'This E-mail is already exists in the system. Please re-enter your new email',
                'error',
            ).then(res => {
                this.inputEmail.focus()
                this.setState({ errorDupEmail: true })
            })
        }
    }

    showComfirmChangeEmail = () => {
        if (this.state.editEmail) {
            return <div>
                <Form.Group widths={3}>
                    <Form.Field icon='lock' iconPosition='left' required>
                        <label>{patientField.password.label}</label>
                        <input
                            type='password'
                            onChange={(e) => this.setState({ passwordConfirmEmail: e.target.value })}
                            value={this.state.passwordConfirmEmail}
                            ref={(e) => this.inputPasswordEmail = e}
                            placeholder="Password"
                        />
                    </Form.Field>
                </Form.Group>
                <p style={{ color: '#277e8e', fontSize: '12px' }}> * For your security, you must re-enter your password to continue. </p>
                <Button
                    disabled={!this.state.passwordConfirmEmail}
                    onClick={() => this.submitEmail()}
                >
                    Submit
                </Button>
            </div>
        }
    }

    validateEmail = () => {
        if (this.state.email) {
            if (!this.state.email.match(pattern.email.pattern)) {
                this.setState({ errorEmail: true })
            } else {
                this.setState({ errorEmail: false })
            }
        }
    }

    validatePassword = () => {
        if (this.state.newPassword && this.state.newPasswordConfirm) {
            if (this.state.newPassword === this.state.newPasswordConfirm){
                if (!this.state.newPassword.match(pattern.password.pattern)) {
                    this.setState({ errorPassword : true })
                } else {
                    this.setState({ errorPassword: false })
                }
            }else{
                this.setState({ errorPassword: true })
            }
        }
    }

    submitPassword = async () => {
        this.validatePassword()
        if (!this.state.errorPassword){
            if (await checkPassword(this.props.state.patient.citizenId, this.state.oldPassword)) {
                this.props.setFieldAndValidate("oldPassword", this.state.oldPassword)
                this.props.setFieldAndValidate("newPassword", this.state.newPassword)
                this.props.setFieldAndValidate("newPasswordConfirm", this.state.newPasswordConfirm)
                this.confirm("changePassword")
            } else {
                swal(
                    'Your password was incorrect.',
                    'Please re-enter your password',
                    'error',
                ).then(res => {
                    this.inputOldPassword.focus()
                    this.setState({ oldPassword: '', newPassword: '', newPasswordConfirm:'' })
                })
            }
        }
    }

    render() {
        console.log(this.state)
        const { info, address, emer, parent, allergy, changePassword, changeEmail, editEmail } = this.state
        return (
            <div>
                <h4 style={headerSetting}>General Account Setting</h4>
                <Segment style={info ? itemActiveStyle : itemStyle} vertical onClick={() => this.setField("info", !this.state.info)}>
                    <h4 ><Icon name='file alternate outline' />{groupInfoPatientField.info.label}<Icon style={{ float: 'right' }} name={info ? 'angle down' : 'angle left'} /></h4></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided size='mini' >
                    {info && <Segment style={elimentStyle} vertical >
                        <Form>
                            <InfoPatient style={{ borderRadius: '20px' }}
                                errorText={this.state.errorInfo}

                                patient={this.props.state.patient}
                                age={this.props.state.age}
                                cardType={this.props.state.cardType}
                                errorField={this.props.state.errorField}

                                editStatus={this.props.editStatus}
                                setPatientDetail={this.props.setPatientDetail}
                                setField={this.props.setField}
                                setFieldAndValidate={this.props.setFieldAndValidate}
                                requiredAllParentField={this.props.requiredAllParentField}
                            />
                            <Button onClick={() => this.confirm('info')}>Submit</Button>
                        </Form>
                    </Segment>}
                </Transition.Group>

                <Segment style={address ? itemActiveStyle : itemStyle} vertical onClick={() => this.setField("address", !this.state.address)}>
                    <h4><Icon name='home' />{groupInfoPatientField.address.label}<Icon style={{ float: 'right' }} name={address ? 'angle down' : 'angle left'} /></h4></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided  >
                    {address &&
                        <Segment style={elimentStyle} vertical>
                            <Form>
                                <HomeAddress
                                    field='home'
                                    errorField={this.props.state.errorField}
                                    patient={this.props.state.patient}

                                    setPatientDetail={this.props.setPatientDetail}
                                    setFieldAndValidate={this.props.setFieldAndValidate}
                                />
                                <Button onClick={() => this.confirm('address')}>Submit</Button>
                            </Form>
                        </Segment >}
                </Transition.Group>


                <Segment style={emer ? itemActiveStyle : itemStyle} vertical onClick={() => this.setField("emer", !this.state.emer)}>
                    <h4><Icon name='home' />{groupInfoPatientField.emerContact.label}<Icon style={{ float: 'right' }} name={emer ? 'angle down' : 'angle left'} /></h4>
                </Segment>
                <Transition.Group animation={'slide down'} duration={350} divided size='mini' >
                    {emer &&
                        <Segment style={elimentStyle} vertical>
                            <Form>
                                <EmergencyContact
                                    errorField={this.props.state.errorField}
                                    patient={this.props.state.patient}
                                    errorText={this.state.errorEmer}
                                    cardType={this.props.state.cardType}
                                    requiredAllEmerField={this.props.state.requiredAllEmerField}

                                    editStatus={this.props.editStatus}
                                    setPatientDetail={this.props.setPatientDetail}
                                    setFieldAndValidate={this.props.setFieldAndValidate}
                                    setField={this.props.setField}
                                />
                                <Button onClick={() => this.confirm('emer')}>Submit</Button>
                            </Form>
                        </Segment >}
                </Transition.Group>



                <Segment style={parent ? itemActiveStyle : itemStyle} vertical onClick={() => this.setField("parent", !this.state.parent)}>
                    <h4><Icon name='child' />{groupInfoPatientField.parent.label}<Icon style={{ float: 'right' }} name={parent ? 'angle down' : 'angle left'} /></h4></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided  >
                    {parent &&
                        <Segment style={elimentStyle} vertical>
                            <Form>
                                <PatientParent
                                    errorField={this.props.state.errorField}
                                    patient={this.props.state.patient}
                                    errorText={this.state.errorEmer}
                                    cardType={this.props.state.cardType}
                                    requiredAllParentField={this.props.state.requiredAllParentField}

                                    setPatientDetail={this.props.setPatientDetail}
                                    setFieldAndValidate={this.props.setFieldAndValidate}
                                />
                                <Button onClick={() => this.confirm('parent')}>Submit</Button>
                            </Form>
                        </Segment >}
                </Transition.Group>

                {/* <Segment style={allergy ? itemActiveStyle : itemStyle} vertical onClick={() => this.setField("allergy", !this.state.allergy)}>
                    <h4><Icon name='pills' />{groupInfoPatientField.allergyNPrivilege.label}<Icon style={{ float: 'right' }} name={allergy ? 'angle down' : 'angle left'} /></h4>
                </Segment>
                <Transition.Group animation={'slide down'} duration={350} divided  >
                    {allergy &&
                        <Segment style={elimentStyle} vertical>
                            <Form>
                                <Allergy
                                    errorField={this.props.state.errorField}
                                    patient={this.props.state.patient}
                                    errorText={this.state.errorEmer}
                                    cardType={this.props.state.cardType}

                                    setPatientDetail={this.props.setPatientDetail}
                                    setFieldAndValidate={this.props.setFieldAndValidate}
                                />
                                <Button onClick={() => this.confirm('allergy')}>Submit</Button>
                            </Form>
                        </Segment >}
                </Transition.Group> */}

                <br /><h3 style={headerSetting}>Security Setting</h3>
                <Segment style={changeEmail ? itemActiveStyle : itemStyle} vertical onClick={() => this.setState({ changeEmail: !this.state.changeEmail, email: this.props.state.patient.email, passwordConfirmEmail:'',errorDupEmail:false })}>
                    <h4 ><Icon name='mail' />Change Email <Icon style={{ float: 'right' }} name={changeEmail ? 'angle down' : 'angle left'} /></h4></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided size='mini' >
                    {changeEmail && <Segment style={elimentStyle} vertical >
                        <Form text >
                            {this.state.errorEmail && 
                                <p style={{ color: '#dd1037', fontSize: '12px' }}>
                                Please include an '@' and enter the part following '@' in the email address. <span style={{ color: '#000', fontSize: '14px' }}>'{this.state.email}'</span> is incomplete.
                                </p>
                            }
                            <Form.Group widths="3">
                                <Form.Field required icon='mail' iconPosition='left' error={this.state.email==''||this.state.errorEmail||this.state.errorDupEmail}>
                                    <label>{patientField.email.label}</label>
                                    <input class="otp"
                                        readOnly={!editEmail}
                                        ref={(e) => this.inputEmail = e}
                                        value={this.state.email != null ? this.state.email : this.props.state.patient.email}
                                        onBlur={() => this.validateEmail()}
                                        onChange={(e) => this.setState({ email: e.target.value, errorDupEmail:false})}
                                        icon={<Icon name="edit" size='large' style={{ color: '#31A5BA', padding: '14%' }} />}
                                    />
                                </Form.Field>
                                
                                <Label
                                    circular as='a'
                                    onClick={() => this.editEmail()}
                                    style={{ color: '#31A5BA', backgroundColor: '#FFF', fontSize: 12, width: '38px', height: '38px', marginTop: '2%' }}>
                                    <Icon name="edit" size='large' style={{ color: '#31A5BA', padding: '14%' }} />
                                </Label>
                                {/* <Icon onClick={() => this.editEmail()} link style={{ color: '#31A5BA', backgroundColor: '#FFF', fontSize: 16 }} circular color='teal' name='edit' /> */}
                            </Form.Group>
                            {this.showComfirmChangeEmail()}
                        </Form>
                    </Segment>}
                </Transition.Group>
                <Segment style={changePassword ? itemActiveStyle : itemStyle} vertical onClick={() => this.setState({ changePassword: !this.state.changePassword, newPassword: '', newPasswordConfirm: '', oldPassword: '', errorPassword:false, })}>
                    <h4 ><Icon name='lock' />Change Password <Icon style={{ float: 'right' }} name={changePassword ? 'angle down' : 'angle left'} /></h4></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided size='mini' >
                    {changePassword && <Segment style={elimentStyle} vertical >
                        <Form>
                            <p style={{ color: '#277e8e', fontSize: '12px' }}> * Password must be 8-20 characters long, including a number, and a letter. </p>
                            <Form.Group widths={3}>
                            <Form.Field required>
                                <label>Old Password</label>
                                <input class="otp"
                                    ref={(e) => this.inputOldPassword = e}
                                    value={this.state.oldPassword}
                                    onChange={(e) => { this.setState({ oldPassword: e.target.value }) }}
                                    autoFocus
                                    type='password'
                                    placeholder="Old Password"
                                />
                            </Form.Field>
                            </Form.Group>
                            <Form.Group widths={3}>
                            <Form.Input
                                label='New Password'
                                required
                                type='password'
                                value={this.state.newPassword}
                                onChange={(e) => { this.setState({ newPassword: e.target.value})}}
                                error={ this.state.errorPassword }
                                onBlur={() => this.validatePassword()}
                                placeholder="New Password"

                            />
                            </Form.Group>
                            <Form.Group widths={3}>
                            <Form.Input
                                label='Comfirm New Password'
                                required
                                type='password'
                                value={this.state.newPasswordConfirm}
                                onBlur={()=>this.validatePassword()}
                                onChange={(e) => { this.setState({ newPasswordConfirm: e.target.value}) }}
                                error={this.state.errorPassword}
                                placeholder='Comfirm New Password'
                            />
                            </Form.Group>
                            {this.state.errorPassword && this.state.newPassword === this.state.newPasswordConfirm &&
                                <p style={{ color: '#dd1037', fontSize: '12px' }}>
                                   Password must be 8-20 characters long, including a number, and a letter.
                                </p>
                            }
                            {this.state.errorPassword && this.state.newPassword != this.state.newPasswordConfirm &&
                                <p style={{ color: '#dd1037', fontSize: '12px' }}>
                                   Your password and confirm password does not match.
                                </p>
                            }
                            <Button
                                disabled={!this.state.oldPassword || this.state.newPassword.length < 7 || this.state.newPasswordConfirm.length < 7 || this.state.errorPassword}
                                onClick={() => this.submitPassword()}
                            >
                                Submit
                            </Button>
                        </Form>
                    </Segment>}
                </Transition.Group>

            </div>
        );
    }
}
