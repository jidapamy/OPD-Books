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
    Modal, Dimmer, Loader

} from "semantic-ui-react";
import { style } from "../../../Static/Style/QueueCss";
import BackgroundImage from "../../../Static/Img/BGForgot.png";
import styled, { ThemeProvider } from "styled-components";
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
    width: 32rem !important;
    margin-left: -3.5% !important; 
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





export default class ForgotPassword_test extends Component {
    state = {
        citizenId: '',
        newPassword: '',
        newPasswordConfirm: '',
        dob: null,
        step: 1,
        openOTP: false,
        requestId: "",
        mobileNumber: "",
        pin: "",
        loader: false,
        selectSend: "sms",

    }


    componentWillReceiveProps = (nextProps) => {
        this.setState({ selectSend: nextProps.tab });
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
        console.log(this.state)
        return (
            <span>
                {/* <Responsive {...Responsive.onlyComputer} minWidth={Responsive.onlyTablet.minWidth}> */}
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

                            <Container style={style.Container}>
                                <p style={style.ForgotTopic}>FORGOT PASSWORD</p>
                                <Segment style={style.DecoSegment}>
                                    {this.state.step == 1 && 
                                    <div>
                                        <div style={{ margin:'5% 5%' }}> <ImageSizeRow centered src={logo} /> </div>
                                                <div centered>
                                                    <Form.Group>
                                                        <Message style={{ padding: '10% 10%' }}>
                                                            {/* <Message style={style.decoDescription}> */}
                                                                <Message.List>
                                                                    <Message.Item>Choose authentication type.</Message.Item>
                                                                    <Message.Item>Please, fill in the field , then click 'Send To Verify' button.</Message.Item>
                                                                    <Message.Item>Waiting for <u>OTP</u> authentication.</Message.Item>
                                                                </Message.List>
                                                            </Message>
                                                    </Form.Group>

                                                    <Grid>
                                                        <Form>
                                                        {/* <Form style={{ paddingLeft: '15.5%' }}> */}
                                                            <Form.Group >
                                                                <Button.Group style={{ padding: '10% 10%' }}>
                                                            {/* <Button.Group style={style.twoColumnButton2}> */}
                                                                <Button basic={this.state.selectSend != "sms"} color='black'
                                                                    onClick={() => this.setState({ selectSend: "sms" })}
                                                                >SMS Authentication</Button>
                                                                <Button basic={this.state.selectSend != "email"} color='black'
                                                                    onClick={() => this.setState({ selectSend: "email" })}
                                                                >E-mail Authentication</Button>
                                                            </Button.Group>
                                                            </Form.Group>
                                                        </Form>
                                                    </Grid>

                                                    <Grid>
                                                    <Form>
                                                        <Form.Group style={{ padding: '10% 10%' }}>
                                                            <Input
                                                                icon='user'
                                                                iconPosition='left'
                                                                placeholder={patientField.citizenId.label}
                                                                style={style.inputForgot}
                                                                autoFocus
                                                                onChange={(e, { value }) => this.setState({ citizenId: e.target.value })}
                                                                value={this.state.citizenId}
                                                            />
                                                            <br />
                                                        </Form.Group>
                                                        <Form.Group style={{ padding: '10% 10%' }}>
                                                            <Form.Field style={{ display: 'flex' }} >
                                                                {this.DateInput()}
                                                                <Icon name="birthday" style={styles.icon} />
                                                            </Form.Field>
                                                        {/* </Form.Group>
                                                        <Form.Group> */}
                                                        </Form.Group>
                                                        <Form.Group style={{ padding: '10% 10%' }}>
                                                         {/* <Form.Group style={style.twoColumnButton}> */}
                                                        {/* <Form.Group style={style.twoColumnButton}> */}
                                                            <Button style={style.ButtonNext} onClick={() => this.setState({ openOTP: true })} >Send To Verify</Button>
                                                        </Form.Group>
                                                    </Form>
                                                    </Grid>
                                                </div>
                                                    <br />
                                                {/* </Grid.Column>
                                            </Grid.Row> */}
                                            
                                        {/* </Container> */}
                                    {/*</Grid>}*/}
                                    </div>}



                                    {/*----------------- ตั้ง Password ใหม่ ---------------------*/}

                                    {this.state.step == 2 && <Grid>
                                        <Grid.Row style={style.circularZone}>
                                            <Grid.Column>
                                            <ImageSizeRow src={logo} />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row >
                                            <Grid.Column style={style.inputForgotZone}>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Container>
                                            <Grid.Row style={style.inputForgotZone}>
                                                <Grid.Column>

                                                    <Form style={{ paddingLeft: '15.5%' }}>
                                                        <Form.Group>
                                                            <Message style={style.decoDescription}>
                                                                <Message.List>
                                                                    <Message.Item>Enter new password and confirm new password.&nbsp;<Icon name='key' />
                                                                    </Message.Item>
                                                                </Message.List>
                                                            </Message>

                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Input
                                                                type="password"
                                                                icon='lock'
                                                                iconPosition='left'
                                                                placeholder='New Password ...'
                                                                style={style.inputForgot}
                                                                onChange={(e) => this.setState({ newPassword: e.target.value })}
                                                                value={this.state.newPassword}
                                                            />
                                                        </Form.Group>

                                                        <Form.Group>
                                                        <Input
                                                                type="password"
                                                                icon='lock'
                                                                iconPosition='left'
                                                                placeholder='Confirm New Password ...'
                                                                style={style.inputForgot}
                                                                onChange={(e) => this.setState({ newPasswordConfirm: e.target.value })}
                                                                value={this.state.newPasswordConfirm}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group style={style.twoColumnButton}>
                                                            <Button style={style.ButtonNext} onClick={() => this.setState({ openOTP: true })} >Submit</Button>
                                                        </Form.Group>
                                                    </Form>
                                                    <br />
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Container>
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
                {/* </Responsive> */}
                {/* <ForgotPasswordOnMobile /> */}
            </span>
        )
    }
}
