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
    Header,
    Image,
    Modal, Dimmer, Loader

} from "semantic-ui-react";
import { style } from "../../../Static/Style/QueueCss";
import BackgroundImage from "../../../Static/Img/BGForgot.png";
import styled from "styled-components";
import ForgotPasswordOnMobile from "./ForgotPasswordOnMobile";
import DatePicker from 'react-datepicker';
import onetimepass from '../../../Static/Img/2fa.svg'
import { patientField } from "../../../Static/Data/Field"
import moment from 'moment';
import swal from "sweetalert2";
import OTPfactor from "../../DemoExamples/OTPfactor";
import { getPatient, requestOTP, validateOTP, cancelRequestOTP, forgotPasswordVerify, confirmChangePassword } from "../../../Services/ManagePatientMethod";
import { confirmPopup, successPopup, errorPopup } from "../../SweetAlert"
import logo from "../../../Static/Img/Contianer/my.jpg";


const Wrapper = styled.div`
    background: url('${BackgroundImage}') no-repeat center fixed;
    background-size: 100% 100%;
`;

const DateBirthday = styled(DatePicker)`
    padding-left: 3rem !important;
    width: 21.5rem !important;
    margin-left: -4.5% !important; 
`

const styles = {
    icon: {
        fontSize: "17px",
        padding: "9px 5px",
        position: "absolute",
        color: '#868686',
        display: 'flex',
    },

};

const ImageSizeRow = styled(Image)`
  width: 150px;
  height: 150px;
`;



export default class ForgotPassword extends Component {
    state = {
        citizenId: '',
        newPassword: '',
        newPasswordConfirm: '',
        dob: null,
        step: 2,
        openOTP: false,
        requestId: "",
        mobileNumber: "",
        pin: "",
        loader: false,
        selectSend: "sms",
    }

    DateInput = () => {
        if (this.state.dob !== null || this.state.dob != undefined) {
            return <DateBirthday
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
        }
        return <DateBirthday
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


        />
    }

    nextStep = (pageNumber) => {
        // pageNumber = 1, pageNumber =2
        if (pageNumber == 1) {
            forgotPasswordVerify(this.state.citizenId, this.state.dob).then(res => {
                if (res.status) {
                    // ผ่าน
                    this.requestOTP()
                } else {
                    errorPopup(res.message)
                }
            })
        }
        if (pageNumber == 2) {
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
                                        return true
                                    }
                                    return false
                                })
                            } else {
                                errorPopup(res.message)
                            }
                        }
                        return false
                    })
                }
            })
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
                    openOTP: false,
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
                        openOTP: false,
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
                    openOTP: true,
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
                    openOTP: false,
                    openDetail: false,
                    pin: "",
                    citizenIdSearch: '',
                })
            } else {
                errorPopup(res.message)
            }
        })
    }

    render() {
        return (

            <Responsive {...Responsive.onlyMobile}>
                <Dimmer.Dimmable blurring dimmed={this.state.loader}>
                    <Dimmer page active={this.state.loader}>
                        <Loader size='massive' indeterminate>Loading</Loader>
                    </Dimmer>
                    <Wrapper className="login-form">
                        <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                    }
                `}</style>
                        <Container style={style.ContainerMobile}>

                            <p style={style.ForgotTopicMobile}>FORGOT PASSWORD</p>
                            <Segment style={style.DecoSegmentMobile}>
                                {this.state.step == 1 && <Grid>
                                    <Grid.Row style={style.circularZoneMobile2}>
                                            <Grid.Column>
                                            <ImageSizeRow src={logo} />
                                            </Grid.Column>
                                        </Grid.Row>
                                    <Grid.Row style={style.twoColumnButton2Mobile}>
                                        <Grid.Column>
                                            <Form>
                                                <Button.Group style={{ width: '48%' }}>
                                                    <Button basic={this.state.selectSend != "sms"} color='black'
                                                        onClick={() => this.setState({ selectSend: "sms" })}
                                                        style={style.areaButton}
                                                    >SMS Authentication</Button>
                                                    <Button basic={this.state.selectSend != "email"} color='black'
                                                        onClick={() => this.setState({ selectSend: "email" })}
                                                        style={style.areaButton}
                                                    >E-mail Authentication</Button>
                                                </Button.Group>
                                            </Form>
                                        </Grid.Column>
                                    </Grid.Row>

                                    <Grid.Row style={style.inputForgotZoneMobile}>
                                        <Grid.Column>
                                            <Form style={{ paddingLeft: '5%' }}>
                                                <Form.Group>
                                                    <Message style={style.bgDescriptionMobile}>
                                                        <Message.List>
                                                            <Message.Item>Choose authentication type.</Message.Item>
                                                            <Message.Item>Please, fill in the field , then click 'Send To Verify' button.</Message.Item>
                                                            <Message.Item>Waiting for <u>OTP</u> authentication.</Message.Item>
                                                        </Message.List>
                                                    </Message>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Input
                                                        icon='user'
                                                        iconPosition='left'
                                                        placeholder={patientField.citizenId.label}
                                                        style={style.inputIDMobile}
                                                        autoFocus
                                                        onChange={(e, { value }) => this.setState({ citizenId: e.target.value })}
                                                        value={this.state.citizenId}
                                                    />
                                                    <br />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Field style={{ display: 'flex'}} >
                                                        {this.DateInput()}
                                                        <Icon name="birthday" style={styles.icon} />
                                                    </Form.Field>
                                                </Form.Group>
                                                <Form.Group>
                                                </Form.Group>
                                                <Form.Group style={style.twoColumnButtonMobile1}>
                                                    <Button style={style.ButtonNext} onClick={() => this.setState({ openOTP: true })} >Send To Verify&nbsp;&nbsp;</Button>
                                                </Form.Group>
                                            </Form>
                                            <br />
                                        </Grid.Column>
                                    </Grid.Row>

                                </Grid>}


                                {/*----------------- ตั้ง Password ใหม่ ---------------------*/}
                                {/* <Grid.Row style={style.twoColumnButton2Mobile}> */}
                                {this.state.step == 2 && <Grid>
                                        <Grid.Row style={style.circularZoneMobile}>
                                            <Grid.Column>
                                            <ImageSizeRow src={logo} />
                                            </Grid.Column>
                                        </Grid.Row>
                                    {/* </Grid.Row> */}

                                    <Grid.Row style={style.inputForgotZoneMobile}>
                                        <Grid.Column>
                                            <Form style={{ paddingLeft: '5%' }}>
                                                <Form.Group>
                                                    <Message style={style.bgDescriptionMobile}>
                                                        <Message.List>
                                                        <Message.Item>Enter new password and confirm new password.&nbsp;<Icon name='key' /></Message.Item>
                                                        </Message.List>
                                                    </Message>
                                                </Form.Group>
                                                <Form.Group>
                                                <Input
                                                        type="password"
                                                        icon='lock'
                                                        iconPosition='left'
                                                        placeholder='New Password ...'
                                                        style={style.inputForgotMobile}
                                                        onChange={(e) => this.setState({ newPassword: e.target.value })}
                                                        value={this.state.newPassword}
                                                    />
                                                    <br />
                                                </Form.Group>
                                                <Form.Group>
                                                <Input 
                                                        type="password"
                                                        icon='lock'
                                                        iconPosition='left'
                                                        placeholder='Confirm New Password ...'
                                                        style={style.inputForgotMobile}
                                                        onChange={(e) => this.setState({ newPasswordConfirm: e.target.value })}
                                                        value={this.state.newPasswordConfirm}
                                                    />
                                                    
                                                </Form.Group>
                                                <Form.Group>
                                                </Form.Group>
                                                <Form.Group style={style.twoColumnButtonMobile1}>
                                                    <Button style={style.ButtonNext} onClick={() => this.setState({ openOTP: true })} >Submit</Button>
                                                </Form.Group>
                                            </Form>
                                            <br />
                                        </Grid.Column>
                                    </Grid.Row>
                                    </Grid>}
                                <Modal open={this.state.openOTP} onClose={() => this.setState({ openOTP: false, step: 1 })}>
                                    <OTPfactor
                                        requestId={this.state.requestId}
                                        mobileNumber={this.state.mobileNumber}
                                        validateOTP={this.validateOTP}
                                        requestOTP={this.requestOTP}
                                        pin={this.state.pin}
                                        cancelRequestOTP={this.cancelRequestOTP}
                                    />
                                </Modal>

                            </Segment>
                        </Container>
                    </Wrapper>
                </Dimmer.Dimmable>
            </Responsive>
        )
    }
}
