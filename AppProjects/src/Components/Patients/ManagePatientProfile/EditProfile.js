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
import { confirmPopup, successPopup, errorPopup } from "../../SweetAlert"
import { requestOTP, cancelRequestOTP, validateOTP } from "../../../Services/ManagePatientMethod";

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
        changeMobileNumber:false,

        email: null,
        passwordConfirmEmail: '',
        errorEmail: false,
        errorDupEmail:false,

        oldPassword:'',
        newPassword:'',
        newPasswordConfirm:'',
        errorPassword:false,

        mobileNumber: null,
        otp:'',
        requestId:'',
        mobileNumberbind:'',
        sendOTP:false
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
                mobileNumber: null,
                otp:''
            })
        }
    }

    close = () => this.setState({ open: false })

    confirm = (group, dataForOTP=null) => {
        this.props.validateEdit(group, dataForOTP)
    }

    setField = (field, value) => {
        this.setState({ [field]: value })
    }

    editEmail = (e) => {
        if (this.state.email != this.props.state.patient.email) {
            if (this.state.editEmail === false) {
                // false > true : ถ้าเป็น true >> พิมพ์ได้
                this.inputEmail.focus()
            }
            if (this.state.email == null) {
                this.setState({
                    email: this.props.state.patient.email,
                    editEmail: true,
                    passwordConfirmEmail: ''
                })
            } else {
                this.setState({
                    editEmail: true,
                    passwordConfirmEmail: '',
                    errorEmail: false
                })
            }
        }else{
            errorPopup("Your Email has not been changed.")
        }
    }

    submitEmail = async () => {
        if (!await checkEmail(this.state.email)){
            if (await checkPassword(this.props.state.patient.citizenId, this.state.passwordConfirmEmail)) {
                this.props.setFieldAndValidate("newEmail", this.state.email)
                this.confirm("changeEmail")
            } else {
                errorPopup('Please re-enter your password', 'Your password was incorrect.').then(res => {
                    this.inputPasswordEmail.focus()
                    this.setState({ passwordConfirmEmail: '' })
                })
            }
        }else{
            errorPopup('This E-mail is already exists in the system. Please re-enter your new email', 'Email Duplicated!').then(res => {
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
                errorPopup('Please re-enter your password', 'Your password was incorrect.').then(res => {
                    this.inputOldPassword.focus()
                    this.setState({ oldPassword: '', newPassword: '', newPasswordConfirm: '' })
                })
            }
        }
    }

    showRequestOTP = () => {
        if (this.state.sendOTP) {
            return <div>
                <p style={{ color: '#277e8e', fontSize: '12px' }}> 
                    The system has sent OTP Password to your mobile phone : <span style={{ color: "#000" }}>{this.state.mobileNumberbind}</span> <br />
                Reference Code : <span style={{ color : "#000" }}>{this.state.requestId}</span> </p>
                <Form.Group widths={3}>
                    <Form.Input
                        label="OTP Password"
                        placeholder="OTP Password"
                        required
                        value={this.state.otp}
                        onChange={(e) => { this.setState({ otp : e.target.value }) }}
                    />
                </Form.Group>
                 <p style={{ color: '#277e8e', fontSize: '12px' }}> 
                    * If you want to change your mobile phone, please push 
                    <span style={{ color: '#ba3131'}}> Cancel </span> button. <br/>
                  </p>
                <Button
                    disabled={!this.state.otp}
                    onClick={() => this.submitValidateOTP(this.state.otp)}
                >
                    Submit
                </Button>
            </div>
        }
    }

    showButtonStatusRequest = () => {
        if(this.state.sendOTP){
            return <div><Label
                as='a'
                onClick={() => this.requestOTP(this.state.requestId)}
                // onClick={() => this.setState({ sendOTP: !this.state.sendOTP })}
                style={{ color: '#31A5BA', backgroundColor: '#FFF', fontSize: 12, marginTop: '22px', padding: '10px' }}>
                Request for OTP Password again <Icon name="redo" size='large' style={{ color: '#31A5BA' }} />
            </Label>
                <Label
                    as='a'
                    onClick={() => this.cancelRequestOTP(this.state.requestId)}
                    // onClick={() => this.setState({ sendOTP: !this.state.sendOTP })}
                    style={{ color: '#ba3131', backgroundColor: '#FFF', fontSize: 12, marginTop: '22px', padding: '10px' }}>
                    Cancel <Icon name="cancel" size='large' style={{ color: '#ba3131' }} />
                </Label>
            </div>
        }
        return <Label
            as='a'
            onClick={() => this.requestOTP()}
            // onClick={() => this.setState({ sendOTP: !this.state.sendOTP })}
            style={{ color: '#31A5BA', backgroundColor: '#FFF', fontSize: 12, marginTop: '22px', padding: '10px' }}>
            Request OTP <Icon name="send" size='large' style={{ color: '#31A5BA' }} />
        </Label>
    }

    requestOTP = (requestId = null) => {
        // console.log(this.state.mobileNumber,this.props.state.patient.mobileNumber)
        if (this.state.mobileNumber != this.props.state.patient.mobileNumber){
        let data = {
            requestId: requestId,
            citizenId: this.props.state.patient.citizenId,
            mobileNumber: this.state.mobileNumber
        }
        swal({
            title: 'The system is sending OTP Password to your mobile phone',
            html: 'Please do not close this popup.!',
            onOpen: () => {
                swal.showLoading()
                requestOTP(data).then(res => {
                   swal.close()
                    if (res.status) {
                        this.setState({
                            requestId: res.data.requestId,
                            mobileNumberbind: res.data.mobileNumber,
                            sendOTP: true,
                            mobileNumber: data.mobileNumber
                        });
                    } else {
                        errorPopup(res.message)
                    }
                })
            },
        })
        }else{
            errorPopup("Your mobile number has not been changed.")
        }
    }

    cancelRequestOTP = (requestOTP) => {
        swal({
            title: 'The system is cenceling your request OTP',
            html: 'Please do not close this popup.!',
            onOpen: () => {
                swal.showLoading()
                cancelRequestOTP(requestOTP).then(res => {
                   swal.close()
                    if (res.status) {
                        this.setState({
                            otp: "",
                            sendOTP: false,
                            mobileNumber:null
                            // changeMobileNumber: false
                        })
                    } else {
                        errorPopup(res.message)
                    }
                })
            }
        })
    }

    submitValidateOTP = (pin) => {
        // console.log('submitValidateOTP')
        let data = {
            pin: pin,
            requestId: this.state.requestId,
            citizenId: this.props.state.patient.citizenId
        }
        // console.log(data)
        this.props.setFieldAndValidate("newMobileNumber", this.state.mobileNumber)
        this.confirm('changeMobileNumber',data)
        // swal({
        //     title: 'The system is validating OTP Password',
        //     html: 'Please do not close this popup.!',
        //     onOpen: () => {
        //         swal.showLoading()
        //         validateOTP(data).then(res => {
        //            swal.close()
        //             if (res.status) {
        //                 this.setState({
        //                     otp: "",
        //                     sendOTP: false,
        //                     changeMobileNumber: false
        //                 })
        //             } else {
        //                 this.setState({
        //                     otp: "",
        //                 })
        //                 if (res.statusCode == '17') {
        //                     // ผิดเกิด 3 ครั้ง
        //                     this.setState({
        //                         otp: "",
        //                         sendOTP: false,
        //                     })
        //                 }
        //                 errorPopup(res.message)
        //             }
        //         })
        //     }
        // })
    }

    render() {
        // console.log(this.state,this.props)
        const { info, address, emer, parent, allergy, changePassword, changeEmail, editEmail, changeMobileNumber } = this.state
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


                <Segment style={changeEmail ? itemActiveStyle : itemStyle} vertical onClick={() => this.setState({ changeEmail: !this.state.changeEmail, email: this.props.state.patient.email, passwordConfirmEmail: '', errorDupEmail: false })}>
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
                                <Form.Field required icon='mail' iconPosition='left' error={this.state.email == '' || this.state.errorEmail || this.state.errorDupEmail}>
                                    <label>{patientField.email.label}</label>
                                    <input class="otp"
                                        // readOnly={!editEmail}
                                        ref={(e) => this.inputEmail = e}
                                        value={this.state.email != null ? this.state.email : this.props.state.patient.email}
                                        onBlur={() => this.validateEmail()}
                                        onChange={(e) => this.setState({ email: e.target.value, errorDupEmail: false })}
                                        icon={<Icon name="edit" size='large' style={{ color: '#31A5BA', padding: '14%' }} />}
                                    />
                                </Form.Field>
                                <Label
                                    as='a'
                                    onClick={() => this.editEmail()}
                                    style={{ color: '#31A5BA', backgroundColor: '#FFF', fontSize: 12, marginTop: '22px', padding: '10px' }}>
                                    Edit email <Icon name="edit" size='large' style={{ color: '#31A5BA' }} />
                                </Label>
                                {/* <Label
                                    circular as='a'
                                    onClick={() => this.editEmail()}
                                    style={{ color: '#31A5BA', backgroundColor: '#FFF', fontSize: 12, width: '38px', height: '38px', marginTop: '2%' }}>
                                    <Icon name="edit" size='large' style={{ color: '#31A5BA', padding: '14%' }} />
                                </Label> */}
                                {/* <Icon onClick={() => this.editEmail()} link style={{ color: '#31A5BA', backgroundColor: '#FFF', fontSize: 16 }} circular color='teal' name='edit' /> */}
                            </Form.Group>
                            {this.showComfirmChangeEmail()}
                        </Form>
                    </Segment>}
                </Transition.Group>


                <Segment style={changeMobileNumber ? itemActiveStyle : itemStyle} vertical
                    onClick={() => this.setState({
                        changeMobileNumber: !this.state.changeMobileNumber, 
                        sendOTP:false,
                        mobileNumber: this.props.state.patient.mobileNumber,
                    }) }
                >
                    <h4 ><Icon name='mail' />Change Mobile Number <Icon style={{ float: 'right' }} name={changeMobileNumber ? 'angle down' : 'angle left'} /></h4></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided size='mini' >
                    {changeMobileNumber && <Segment style={elimentStyle} vertical >
                        <Form text >
                            <Form.Group widths="3">
                                {/* <p>state:{this.state.mobileNumber} || props:{this.props.state.patient.mobileNumber}</p> */}
                                <Form.Input
                                    label={patientField.mobileNumber.label}
                                    required
                                    value={this.state.mobileNumber != null ? this.state.mobileNumber : this.props.state.patient.mobileNumber}
                                    onChange={(e) => { this.setState({ mobileNumber: e.target.value }) }}
                                    readOnly={this.state.sendOTP}
                                />
                                {this.showButtonStatusRequest()}
                                {/* <Label
                                    as='a'
                                    // onClick={() => this.requestOTP()}
                                    onClick={ () => this.setState({ sendOTP: !this.state.sendOTP })}
                                    style={{ color: '#31A5BA', backgroundColor: '#FFF', fontSize: 12, marginTop: '22px', padding: '10px' }}>
                                    Request OTP <Icon name="send" size='large' style={{ color: '#31A5BA'}} />
                                </Label> */}
                            </Form.Group>
                            {this.showRequestOTP()}
                        </Form>
                    </Segment>}
                </Transition.Group>

            </div>
        );
    }
}
