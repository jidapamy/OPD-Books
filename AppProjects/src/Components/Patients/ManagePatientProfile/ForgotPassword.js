import React, { Component } from "react";
import {
    Input,
    Container,
    Icon,
    Button,
    Segment,
    Grid,
    Responsive,
    List,
    Form,
    Message,
    Image,
    Modal, Dimmer, Loader, Header
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import { style, Wrapper } from "../../../Static/Style/QueueCss";
import styled, { ThemeProvider } from "styled-components";
// import ForgotPasswordOnMobile from "./ForgotPasswordOnMobile";
import DatePicker from 'react-datepicker';
import onetimepass from '../../../Static/Img/2fa.svg'
import { patientField } from "../../../Static/Data/Field"
import moment from 'moment';
import swal from "sweetalert2";
import OTPfactor from "../../DemoExamples/OTPfactor";
import { getPatient, requestOTP, validateOTP, cancelRequestOTP, forgotPasswordVerify, confirmChangePassword } from "../../../Services/ManagePatientMethod";
import { confirmPopup, successPopup, errorPopup } from "../../SweetAlert"
import logo from "../../../Static/Img/Contianer/my.jpg";
import BGLogoLogin from '../../../Static/Img/LogoLogin.svg'
import { generateVerificationCode } from '../../../Services/Utils'
import { pattern } from "../../../Static/Data/Field"


const DateBirthday = styled(DatePicker)`
    padding-left: 40px !important;
    /* margin-left: -3% !important;  */
`
const FixDatePickerTimer = styled.span`
  & .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    padding-left: unset;
    padding-right: unset;
    width: 100px;
  }
  & .react-datepicker__input-container {
    width:100%;
  }
  & .react-datepicker-wrapper {
    width:100%;
  }
  /* & .react-datepicker {
    width: 314px;
  } */
`;

const styles = {
    icon: {
        fontSize: "17px",
        padding: "9px 5px",
        position: "absolute",
        color: '#868686',
        display: 'flex',
        left: '7px'
    },

};

const ImageSizeRow = styled(Image)`
  width: 150px;
  height: 150px;
`;





export default class ForgotPassword extends Component {
    state = {
        citizenId: '',
        dob: null,
        loader: false,
        selectSend: "sms",

        newPassword: '',
        newPasswordConfirm: '',
        errorPassword: false,

        step: 1,

        openSMSOTP: false,
        openEmailOTP: false,

        requestId: "",
        mobileNumber: "",
        pin: "",

        email: '',
        genVerificationCode: '',
        userVerificationCode: '',
    }

    style = {
        ImButton: {
            cursor: 'pointer'
        }
    }


    componentWillReceiveProps = (nextProps) => {
        this.setState({ selectSend: nextProps.tab });
    }

    DateInput = () => {
        if (this.state.dob !== null || this.state.dob != undefined) {
            return <FixDatePickerTimer><DateBirthday
                placeholderText={patientField.dob.label}
                selected={moment(this.state.dob, 'DD/MM/YYYY')}
                onChange={(value) => this.setState({ dob: value.format('DD/MM/YYYY') })}
                dateFormatCalendar={"MMM YYYY"}
                minDate={moment().subtract(145, "year")}
                maxDate={moment().add(0, "year")}
                showYearDropdown
                showMonthDropdown
                required
                value={this.state.dob}
            />
            </FixDatePickerTimer>
        }
        return <FixDatePickerTimer><DateBirthday
            placeholderText={patientField.dob.label}
            selected={this.state.dob}
            onChange={(value) => this.setState({ dob: value.format('DD/MM/YYYY') })}
            dateFormatCalendar={"MMM YYYY"}
            minDate={moment().subtract(145, "year")}
            maxDate={moment().add(0, "year")}
            showYearDropdown
            showMonthDropdown
            required
            value={this.state.dob}
        /></FixDatePickerTimer >
    }

    nextStep = (pageNumber) => {
        // pageNumber = 1, pageNumber =2
        if (pageNumber == 1) {
            //Request
            this.setState({ loader: true })
            if (this.state.selectSend == 'sms') {
                //SMS
                forgotPasswordVerify(this.state.citizenId, this.state.dob).then(res => {
                    if (res.status) {
                        // ผ่าน
                        this.requestOTP()
                    } else {
                        this.setState({ loader: false })
                        errorPopup(res.message)
                    }
                })
            } else {
                //EMAIL
                let genVerificationCode = generateVerificationCode()
                forgotPasswordVerify(this.state.citizenId, this.state.dob, genVerificationCode).then(res => {
                    if (res.status) {
                        this.setState({
                            email: res.data.email,
                            genVerificationCode: genVerificationCode,
                            openEmailOTP: true,
                            loader: false
                        })
                    } else {
                        this.setState({ loader: false })
                        errorPopup(res.message)
                    }
                })
            }
        } else if (pageNumber == 2) {
            //Validate
            // if (this.state.selectSend == 'sms') {
            //SMS
            if(this.validatePassword()){
                let data = {
                    citizenId: this.state.citizenId,
                    newPassword: this.state.newPassword,
                    newPasswordConfirm: this.state.newPasswordConfirm,
                }
                swal({
                    title: 'System is saving data.',
                    html: 'Please do not close this popup.!',
                    onOpen: () => {
                        swal.showLoading()
                        confirmChangePassword(data).then(res => {
                            if (res) {
                                swal.disableLoading()
                                if (res.status) {
                                    successPopup('You have successfully logged into the system').then(res => {
                                        if (res) {
                                            this.props.history.push("/signin")
                                            return
                                        }
                                        return
                                    })

                                } else {
                                    errorPopup(res.message)
                                }
                            }
                            return
                        })
                    }
                })
            }else{
                if (this.state.newPassword === this.state.newPasswordConfirm){
                    errorPopup('Password must be 8-20 characters long, including a number, and a letter.')
                }else{
                    errorPopup('Your password and confirm password does not match.')
                }
            }
        }
    }


    validateOTP = (pin) => {
        let data = {
            pin: pin,
            requestId: this.state.requestId,
            citizenId: this.state.citizenId
        }
        this.setState({ loader: true })
        validateOTP(data).then(res => {
            if (res.status) {
                this.setState({
                    step: 2,
                    openSMSOTP: false,
                    pin: "",
                    loader: false,
                })
            } else {
                this.setState({
                    pin: "",
                    loader: false,
                })
                if (res.statusCode == '17') {
                    this.setState({
                        pin: "",
                        openSMSOTP: false,
                        citizenIdSearch: '',
                    })
                }
                errorPopup(res.message)
            }
        })
    }

    requestOTP = (requestId = null) => {
        let data = {
            requestId: requestId,
            citizenId: this.state.citizenId
        }
        this.setState({ loader: true })
        requestOTP(data).then(res => {
            if (res.status) {
                this.setState({
                    requestId: res.data.requestId,
                    mobileNumber: res.data.mobileNumber,
                    openSMSOTP: true,
                    loader: false,
                });
            } else {
                this.setState({
                    pin: "",
                    loader: false,
                })
                errorPopup(res.message)
            }
        })
    }

    cancelRequestOTP = (requestOTP) => {
        cancelRequestOTP(requestOTP).then(res => {
            if (res.status) {
                this.setState({
                    openSMSOTP: false,
                    openDetail: false,
                    pin: "",
                    citizenIdSearch: '',
                })
            } else {
                errorPopup(res.message)
            }
        })
    }


    validateEmail = () => {
        swal({
            title: 'System is saving data.',
            html: 'Please do not close this popup.!',
            onOpen: () => {
                swal.showLoading()
                setTimeout(() => {
                    swal.close()
                    if (this.state.genVerificationCode === this.state.userVerificationCode) {
                        this.setState({
                            email: '',
                            genVerificationCode: '',
                            openEmailOTP: false,
                            userVerificationCode: '',
                            generateVerificationCode: '',
                            dob: null,
                            step: 2,
                        })
                    } else {
                        errorPopup('Verification code was incorrect').then(res => {
                            this.setState({ userVerifiedCode: '' })
                        })
                    }
                }, 150);
            }
        })
    }

    validatePassword = () => {
        if (this.state.newPassword && this.state.newPasswordConfirm) {
            if (this.state.newPassword === this.state.newPasswordConfirm) {
                if (!this.state.newPassword.match(pattern.password.pattern)) {
                    this.setState({ errorPassword: true })
                    return false
                } else {
                    this.setState({ errorPassword: false })
                    return true
                }
            } else {
                this.setState({ errorPassword: true })
                return false
            }
        }
    }

    render() {
        return (
            <span>
                <Dimmer.Dimmable blurring dimmed={this.state.loader}>
                    <Dimmer page active={this.state.loader}>
                        <Loader size='massive' indeterminate>Loading</Loader>
                    </Dimmer>
                    <Wrapper style={{ height: '100vh' }}>
                        <Container style={style.Container}>
                            <p style={style.ForgotTopic}>FORGOT PASSWORD</p>
                            <div style={{ margin: '3% 5%' }}>
                                <Link to="/">  <Image style={this.style.ImButton} verticalAlign='middle' src={BGLogoLogin} size='medium' /> </Link>
                            </div>
                            <Segment style={{ borderRadius: '1.5rem', padding: '5%' }}>
                                {this.state.step == 1 &&
                                    <div>
                                        <div centered>
                                            <Form>
                                                <Message>
                                                    <Message.List>
                                                        <Message.Item>Choose authentication type.</Message.Item>
                                                        <Message.Item>Please, fill in the field , then click 'Send To Verify' button.</Message.Item>
                                                        <Message.Item>Waiting for <u>{this.state.selectSend == 'sms' ? 'OTP password' : 'verification password'}</u> to authentication.</Message.Item>
                                                    </Message.List>
                                                </Message>

                                                <Form.Group widths="equal">
                                                    <Form.Field>
                                                        <Button.Group widths='2'>
                                                            <Button
                                                                basic={this.state.selectSend != "sms"}
                                                                color='black'
                                                                fluid
                                                                onClick={() => this.setState({ selectSend: "sms" })}>
                                                                SMS
                                                            </Button>
                                                            <Button
                                                                basic={this.state.selectSend != "email"}
                                                                fluid
                                                                color='black'
                                                                onClick={() => this.setState({ selectSend: "email" })}>
                                                                E-mail
                                                            </Button>
                                                        </Button.Group>
                                                    </Form.Field>
                                                </Form.Group>
                                            </Form>

                                            <div>
                                                <Form>
                                                    <Form.Group widths="equal" >
                                                        <Form.Input
                                                            icon='user'
                                                            iconPosition='left'
                                                            placeholder={patientField.citizenId.label}
                                                            autoFocus
                                                            onChange={(e, { value }) => this.setState({ citizenId: e.target.value })}
                                                            value={this.state.citizenId}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group widths='equal' >
                                                        <Form.Field
                                                            style={{ display: 'flex' }}
                                                            control={this.DateInput}
                                                            required
                                                            placeholderText="ex. 01/01/1990"
                                                        />
                                                        <Icon name="birthday" style={styles.icon} />
                                                    </Form.Group>
                                                    <Form.Group widths="equal" style={{ marginBottom: '0px' }}>
                                                        <Form.Button disabled={!this.state.dob || !this.state.citizenId} style={style.ButtonNext} fluid onClick={() => this.nextStep(1)} >Send To Verify</Form.Button>
                                                        {/* <Form.Button disabled={!this.state.dob || !this.state.citizenId} style={style.ButtonNext} fluid onClick={() => this.setState({ openEmailOTP: true })} >Send To Verify</Form.Button> */}

                                                    </Form.Group>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>}





                                {/*----------------- ตั้ง Password ใหม่ ---------------------*/}

                                {this.state.step == 2 &&
                                    <div >
                                        <div centered>
                                            <Form>
                                                <Message>
                                                    <Message.List>
                                                        <Message.Item>Enter new password and confirm new password.&nbsp;<Icon name='key' /></Message.Item>
                                                        <Message.Item>Password must be 8-20 characters long, including a number, and a letter.</Message.Item>
                                                    </Message.List>
                                                </Message>
                                                {this.state.errorPassword && this.state.newPassword === this.state.newPasswordConfirm &&
                                                    <p style={{ color: '#dd1037', fontSize: '12px', textAlign: 'left' }}>
                                                        * Password must be 8-20 characters long, including a number, and a letter.
                                             </p>
                                                }
                                                {this.state.errorPassword && this.state.newPassword != this.state.newPasswordConfirm &&
                                                <p style={{ color: '#dd1037', fontSize: '12px', textAlign: 'left'  }}>
                                                        * Your password and confirm password does not match.
                                            </p>
                                                }
                                                <Form.Group widths="equal" >
                                                    <Form.Input
                                                        type="password"
                                                        icon='lock'
                                                        iconPosition='left'
                                                        placeholder='New Password ...'
                                                        autoFocus
                                                        onChange={(e) => this.setState({ newPassword: e.target.value })}
                                                        value={this.state.newPassword}
                                                        onBlur={() => this.validatePassword()}
                                                    />
                                                </Form.Group>
                                                <Form.Group widths="equal" >
                                                    <Form.Input
                                                        type="password"
                                                        icon='lock'
                                                        iconPosition='left'
                                                        placeholder='Confirm New Password ...'
                                                        onChange={(e) => this.setState({ newPasswordConfirm: e.target.value })}
                                                        value={this.state.newPasswordConfirm}
                                                        onBlur={() => this.validatePassword()}
                                                    />
                                                </Form.Group>
                                                <Form.Group widths="equal" style={{ marginBottom: '0px' }}>
                                                <Form.Button disabled={!this.state.newPassword || !this.state.newPasswordConfirm || this.state.errorPassword } style={style.ButtonNext} fluid onClick={() => this.nextStep(2)} >Submit</Form.Button>
                                                </Form.Group>
                                            </Form>

                                        </div>
                                    </div>
                                }

                                <Modal open={this.state.openSMSOTP} onClose={() => this.cancelRequestOTP(this.state.requestId)}>
                                    <OTPfactor
                                        requestId={this.state.requestId}
                                        mobileNumber={this.state.mobileNumber}
                                        validateOTP={this.validateOTP}
                                        requestOTP={this.requestOTP}
                                        pin={this.state.pin}
                                        cancelRequestOTP={this.cancelRequestOTP}
                                    />
                                </Modal>

                                <Modal open={this.state.openEmailOTP} onClose={() => this.setState({ openEmailOTP: false, step: 1 })}>
                                    <Segment >
                                        <br />
                                        <Header as='h3' icon textAlign='center'>
                                            <Icon name="mail" size='massive' />
                                            Confirm verification password
                                            <Header.Subheader>
                                                The system has sent verification password to your email: <span style={{ fontWeight: '900', color: 'rgb(50, 135, 150)' }}>{this.state.email} </span>
                                                {/* The system has sent verification password to your email: <span style={{ fontWeight:'900',color: 'rgb(50, 135, 150)' }}>jidapa40@hotmail.com</span> */}
                                            </Header.Subheader>
                                        </Header>
                                        <Container style={{ width: '50%' }}>
                                            <Form>
                                                <Form.Group widths="equal">
                                                    <Form.Input
                                                        type="password"
                                                        icon='lock'
                                                        iconPosition='left'
                                                        placeholder='Verification password'
                                                        onChange={(e) => this.setState({ userVerificationCode: e.target.value })}
                                                        value={this.state.userVerificationCode}
                                                    />
                                                </Form.Group>
                                                <Form.Group widths="equal">
                                                    <Form.Button
                                                        disabled={!this.state.userVerificationCode}
                                                        style={style.ButtonNext} fluid
                                                        onClick={() => this.validateEmail()} >
                                                        Submit
                                                    </Form.Button>
                                                </Form.Group>
                                            </Form>
                                        </Container>
                                    </Segment>
                                </Modal>



                            </Segment>
                        </Container>
                    </Wrapper>
                </Dimmer.Dimmable>
            </span>
        )
    }
}