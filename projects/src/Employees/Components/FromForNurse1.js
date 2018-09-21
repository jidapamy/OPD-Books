import React, { Component } from 'react';
import {
    Grid, Menu, Segment, Container, Divider, Header,
    Icon, Image, Table, Label, List, Dropdown, Item,
    Responsive, Sidebar, Visibility, Statistic, Button,
    Modal, Popup, Form, TextArea, Pagination, Input
} from 'semantic-ui-react'
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { style } from "./../../Static/Style/QueueCss";


// const style = {
//   ImButton: {
//     cursor: 'pointer'
//   },
//   colorsort: {
//     color: "#00B5AD"
//   },
//   colorHis: {
//     color: "#AFB4B7",
//     fontSize: '12px',
//   },
//   colorDes: {
//     color: "#808B96  ",
//   },
//   colorNavMobile: {
//     color: "#62E6C5",
//   },
//   colorFontMobile: {
//     color: "##FFFFFF"
//   },
// }


export default class ShowFormNurse extends Component {
    state = {
        openmodal: false
    }
    cleanField = () => {
        this.setState({
            visitNumber: "",
            clinic: "",
            bodyHeight: 0,
            bodyWeight: 0,
            bmi: 0,
            temperature: 0,
            pulseRate: 0,
            respiratoryRate: 0,
            BP1: "",
            BP2: "",
            BP3: "",
            chiefComplaint: ""
        });
    };


    // buttonForNurse = () => {
    //     if (this.props.empLogin.position === 2) {
    //       return (
    //         <Button
    //             color="teal"
    //             content="Send To Doctor"
    //             icon="send"
    //             style={style.ButtonNurse}
    //             onClick={() => this.props.showPopupConfirm()}
    //             disabled={this.props.patient.citizenId == null}
    //         />
    //       );
    //     }
    // }
    handleChangeDate = (date) => {
        console.log(date)
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <div>
                <Header as='h2' color='grey'>MedicalRecord Treatment</Header>
                <Segment style={{ backgroundColor: '#00B5AD', color: '#FFFFFF', border: 0, borderRadiun: '0 0 0 10' }}>
                    <Grid >
                        <Grid.Column width={5}>
                            <Icon name='calendar alternate outline' />
                            DATE: Mon 13 Augus 2018
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Icon name='clock outline' />
                            Time: 18:00 PM
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name='file alternate outline' />
                            VN: 1233/3
                        </Grid.Column>
                        <Grid.Row style={{ marginTop: -20 }}>
                            <Grid.Column width={5}>
                                <Icon name='star outline' />
                                Pilivage:father Big
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Icon name='hospital outline' />
                                Clinic: Kanonyabun Clinic
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment style={{ marginTop: -20 }}>
                    <Container>
                        <br />
                        <Grid >
                            <Grid.Column width={1}>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header floated='left' as='h4'>Body Height (HT)</Header>
                                <Input
                                    label={{ color: 'teal', basic: false, content: "cm" }}
                                    labelPosition="right"
                                    placeholder=""
                                    onChange={e => this.setField("bodyHeight", e.target.value)}
                                    value={this.state.bodyHeight}
                                    type="number"
                                    min="0"
                                />

                            </Grid.Column>
                            <Grid.Column width={1}>

                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Header as='h4'>Temperature (T)</Header>
                                <Input
                                    label={{ color: 'teal', basic: false, content: "°C " }}
                                    labelPosition="right"
                                    placeholder=""
                                    onChange={e => this.setField("temperature", e.target.value)}
                                    value={this.state.temperature}
                                    type="number"
                                    min="0"
                                />

                            </Grid.Column>
                            <Grid.Column width={1}>

                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header as='h4'>Blood Pressure (BP1)</Header>
                                <Input
                                    label={{ color: 'teal', basic: false, content: "mmHg" }}
                                    labelPosition="right"
                                    placeholder=""
                                    onChange={e => this.setField("BP1", e.target.value)}
                                    value={this.state.BP1}
                                    type="number"
                                    min="0"
                                />

                            </Grid.Column>


                            <Grid.Row>
                                <Grid.Column width={1}>

                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Header floated='left' as='h4'>Body Weight (BW)</Header>
                                    <Input
                                        label={{ color: 'teal', basic: false, content: "Kg" }}
                                        labelPosition="right"
                                        placeholder=""
                                        onChange={e => this.setField("bodyWeight", e.target.value)}
                                        onBlur={() => this.calculateBMI()}
                                        value={this.state.bodyWeight}
                                        type="number"
                                        min="0"
                                    />

                                </Grid.Column>
                                <Grid.Column width={1}>

                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Header as='h4'>PulseRate (PR 1)</Header>
                                    <Input
                                        label={{ color: 'teal', basic: false, content: "min" }}
                                        labelPosition="right"
                                        placeholder=""
                                        onChange={e => this.setField("pulseRate", e.target.value)}
                                        value={this.state.pulseRate}
                                        type="number"
                                        min="0"
                                    />

                                </Grid.Column>
                                <Grid.Column width={1}>

                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Header as='h4'>Blood Pressure (BP2)</Header>
                                    <Input
                                        label={{ color: 'teal', basic: false, content: "mmHg" }}
                                        labelPosition="right"
                                        placeholder=""
                                        onChange={e => this.setField("BP2", e.target.value)}
                                        value={this.state.BP2}
                                        type="number"
                                        min="0"
                                    />

                                </Grid.Column>
                            </Grid.Row>


                            <Grid.Row>
                                <Grid.Column width={1}>

                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Header floated='left' as='h4'>Body Mass Index (BMI)</Header>
                                    <Input
                                        label={{ color: 'teal', basic: false, content: "--" }}
                                        labelPosition="right"
                                        placeholder=""
                                        value={this.state.bmi}
                                        type="number"
                                        min="0"
                                    />

                                </Grid.Column>
                                <Grid.Column width={1}>

                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Header as='h4'>Respiratory Rate (RR)</Header>
                                    <Input
                                        label={{ color: 'teal', basic: false, content: "min" }}
                                        labelPosition="right"
                                        placeholder=""
                                        onChange={e => this.setField("respiratoryRate", e.target.value)}
                                        value={this.state.respiratoryRate}
                                        type="number"
                                        min="0"
                                    />

                                </Grid.Column>
                                <Grid.Column width={1}>

                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Header as='h4'>Blood Pressure (BP3)</Header>
                                    <Input
                                        label={{ color: 'teal', basic: false, content: "mmHg" }}
                                        labelPosition="right"
                                        placeholder=""
                                        onChange={e => this.setField("BP2", e.target.value)}
                                        value={this.state.BP3}
                                        type="number"
                                        min="0"
                                    />

                                </Grid.Column>
                                <br />
                            </Grid.Row>

                            <Grid.Column width={1}>

                            </Grid.Column>
                            <Grid.Column width={15}>
                                <Header as='h3'>Body Height</Header>
                                <Form>

                                    <Form.Field
                                        control={TextArea}
                                        placeholder="Enter Patient Symptoms ..."
                                        style={style.inputField}
                                        onChange={e => this.setField("chiefComplaint", e.target.value)}
                                        value={this.state.chiefComplaint}
                                    />


                                </Form>
                            </Grid.Column>

                        </Grid>
                        <br />

                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={1}>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                </Grid.Column>
                                <Grid.Column width={1}>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                </Grid.Column>
                                <Grid.Column width={1}>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Header as='h4'>Sign</Header>
                                    <Header style={{ marginTop: -5 }} as='h4'>Dr.Nempoo Solamakmeesuk</Header>
                                    <Divider style={{ marginTop: -10 }} />


                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style={{ marginTop: -25 }}>
                                <Grid.Column width={1}>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                </Grid.Column>
                                <Grid.Column width={1}>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                </Grid.Column>
                                <Grid.Column width={1}>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Button
                                        color="yellow"
                                        content="Send To Doctor"
                                        icon="send"
                                        style={style.ButtonNurse}
                                        onClick={() => this.props.showPopupConfirm()}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </Container>
                </Segment>
            </div>
        )
    }
}
