import React, { Component } from 'react';
import { Dropdown, Image, Menu, Button, Icon, Grid, Card, Segment, Header, Message, Label, TextArea, Form } from 'semantic-ui-react'
import {
    Container, Divider, Input
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import UnitHeight from '../../Static/Img/unitHeight.png'
import UnitWeight from '../../Static/Img/UnitWeight.png'
import Temperature from '../../Static/Img/temperature.png'
import Pulse from '../../Static/Img/Pulse.png'
import Blood from '../../Static/Img/Blood.png'
import Bmi from '../../Static/Img/bmi.png'
import styled from "styled-components";

import { patientField, mdrField } from "./../../Static/Data/Field"
import { color } from "./../../Static/Data/ColorPattern";
import { style } from "./../../Static/Style/QueueCss";
import moment from "moment";

const square = { width: 270, height: 110, backgroundColor: '#06ccc2', border: 0 }
const size = { fontSize: 50, marginTop: 10 }
const unit = { fontSize: 30, marginTop: 10 }
const Cheif = { backgroundColor: '#FFFFFF', border: 0 }

const UnitHeights = styled(Segment)`
  background: url(${UnitHeight}) !important;
  background-size: 100% 100%;
`;
const UnitWeights = styled(Segment)`
  background: url(${UnitWeight}) !important;
  background-size: 100% 100%;
`;
const Bmis = styled(Segment)`
  background: url(${Bmi}) !important;
  background-size: 100% 100%;
`;
const Temperatures = styled(Segment)`
  background: url(${Temperature}) !important;
  background-size: 100% 100%;
`;
const Pulses = styled(Segment)`
  background: url(${Pulse}) !important;
  background-size: 100% 100%;
`;
const Bloods = styled(Segment)`
  background: url(${Blood}) !important;
  background-size: 100% 100%;
`;
const SegmentG = styled(Segment)`
    border:0px;
    border-width: 0;
`;


export default class ShowFormNurse extends Component {
    state = {
        // date: moment().format("LL"),
        // time: moment().format("LT"),
        // clinic: "SIT KMUTT Clinic",
        height: 0,
        bodyWeight: 0,
        bmi: 0,
        temperature: 0,
        pulseRate: 0,
        respiratoryRate: 0,
        BP1: "",
        BP2: "",
        BP3: "",
        chiefComplaint: "",
        nurseName: "Mr. Dorothy Kendall",
    }
 
    componentWillMount = () => {
        console.log("componentWillMount",this.props.medicalRecord)
        if (this.props.medicalRecord){
            this.setState(this.props.medicalRecord);
        }
    }

    defaultState = () => {
        this.setState({
            height: 0,
            bodyWeight: 0,
            bmi: 0,
            temperature: 0,
            pulseRate: 0,
            respiratoryRate: 0,
            BP1: "",
            BP2: "",
            BP3: "",
            chiefComplaint: "",
            nurseName: ""
        })
    }

    showPopupConfirm = () => {
        this.props.showPopupConfirm(this.state);
        // this.defaultState()
    }

    showButtonForNurse = () => {
        if (this.props.empPosition === 2){
            return <Button
                fluid
                color="teal"
                content="Send To Doctor"
                icon="send"
                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                onClick={() => this.showPopupConfirm()}
            />
        }
    }

    calculateBMI = () => {
        if (this.state.height && this.state.bodyWeight) {
            let height = this.state.height / 100;
            let bmi = this.state.bodyWeight / (height * height);
            this.setState({ bmi: bmi.toFixed(2) });
        }
    }

    componentWillReceiveProps = (nextProps) => {
        console.log("componentWillReceiveProps", nextProps)
        this.setState(nextProps.medicalRecord);
        // if (nextProps.resetState){
        //     this.defaultState()
        // }
    }

    // showForDoctor = () => {
    //     return <div> <Grid>
    //         <Grid.Row columns={3} >
    //             <Grid.Column>
    //                 <UnitHeights style={square}>
    //                     <Header inverted as='h3'>{mdrField.height.label}</Header>
    //                     <Header as='h1' inverted style={size}>170 <span style={unit}>{mdrField.height.unit}</span></Header>
    //                 </UnitHeights>
    //             </Grid.Column>
    //             <Grid.Column>
    //                 <Pulses style={square}>
    //                     <Header inverted >{mdrField.temperature.label}</Header>
    //                     <Header as='h1' inverted style={size}>170 <span style={unit}>{mdrField.temperature.unit}</span></Header>
    //                 </Pulses>
    //             </Grid.Column>
    //             <Grid.Column>
    //                 <Bloods style={square}>
    //                     <Header inverted >{mdrField.BP1.label}</Header>
    //                     <Header as='h1' inverted style={size}>170 <span style={unit}>{mdrField.BP1.unit}</span></Header>
    //                 </Bloods>
    //             </Grid.Column>
    //         </Grid.Row>
    //         <Grid.Row columns={3}>
    //             <Grid.Column>
    //                 <UnitHeights style={square}>
    //                     <Header inverted as='h3'>{mdrField.bodyWeight.label}</Header>
    //                     <Header as='h1' inverted style={size}>170 <span style={unit}>{mdrField.bodyWeight.unit}</span></Header>
    //                 </UnitHeights>
    //             </Grid.Column>
    //             <Grid.Column>
    //                 <Pulses style={square}>
    //                     <Header inverted >{mdrField.pulseRate.label}</Header>
    //                     <Header as='h1' inverted style={size}>170 <span style={unit}>{mdrField.pulseRate.unit}</span></Header>
    //                 </Pulses>
    //             </Grid.Column>
    //             <Grid.Column>
    //                 <Bloods style={square}>
    //                     <Header inverted >{mdrField.BP2.label}</Header>
    //                     <Header as='h1' inverted style={size}>170 <span style={unit}>{mdrField.BP2.unit}</span></Header>
    //                 </Bloods>
    //             </Grid.Column>
    //         </Grid.Row>
    //         <Grid.Row columns={3}>
    //             <Grid.Column>
    //                 <UnitHeights style={square}>
    //                     <Header inverted as='h3'>{mdrField.bmi.label}</Header>
    //                     <Header as='h1' inverted style={size}>170 <span style={unit}>{mdrField.bmi.unit}</span></Header>
    //                 </UnitHeights>
    //             </Grid.Column>
    //             <Grid.Column>
    //                 <Pulses style={square}>
    //                     <Header inverted >{mdrField.respiratoryRate.label}</Header>
    //                     <Header as='h1' inverted style={size}>170 <span style={unit}>{mdrField.respiratoryRate.unit}</span></Header>
    //                 </Pulses>
    //             </Grid.Column>
    //             <Grid.Column>
    //                 <Bloods style={square}>
    //                     <Header inverted >{mdrField.BP3.label}</Header>
    //                     <Header as='h1' inverted style={size}>170 <span style={unit}>{mdrField.BP3.unit}</span></Header>
    //                 </Bloods>
    //             </Grid.Column>
    //         </Grid.Row>
    //     </Grid>

    //         <Header as='h4'>{mdrField.chiefComplaint.label}</Header>
    //         <Form>
    //             <TextArea autoHeight placeholder='Try adding multiple lines' style={{ minHeight: 100 }} />
    //         </Form>
    //     </div>
    // }
    
    // showForNurse = () => {
    //     const readOnly = this.props.empPosition != 2 ? true : false
    //     return <Segment style={{ marginTop: -20 }}>
    //         <Container style={{ padding: "1% 3%" }}>
    //             <Form style={{ paddingBottom: "1%" }} disabled>
    //                 <Form.Group widths="equal" >
    //                     <Form.Input width={2} label={mdrField.height.label} required>
    //                         <Input
    //                             label={{ basic: false, content: `${mdrField.height.unit}` }}
    //                             labelPosition="right"
    //                             placeholder=""
    //                             onChange={e => this.setState({ [mdrField.height.variable]: e.target.value })}
    //                             value={this.state[mdrField.height.variable]}
    //                             type="number"
    //                             min="0"
    //                             readOnly={readOnly}
    //                         />
    //                     </Form.Input>
    //                     <Form.Input width={2} label={mdrField.temperature.label} required >
    //                         <Input
    //                             label={{ basic: false, content: `${mdrField.temperature.unit}` }}
    //                             labelPosition="right"
    //                             placeholder=""
    //                             onChange={e => this.setState({ [mdrField.temperature.variable]: e.target.value })}
    //                             value={this.state[mdrField.temperature.variable]}
    //                             type="number"
    //                             min="0"
    //                             readOnly={readOnly}
    //                         />
    //                     </Form.Input>
    //                     <Form.Input width={2} label={mdrField.BP1.label}>
    //                         <Input
    //                             label={{ basic: false, content: `${mdrField.BP1.unit}` }}
    //                             labelPosition="right"
    //                             placeholder="- / -"
    //                             onChange={e => this.setState({ [mdrField.BP1.variable]: e.target.value })}
    //                             value={this.state[mdrField.BP1.variable]}
    //                             type="text"
    //                             min="0"
    //                             readOnly={readOnly}
    //                         />
    //                     </Form.Input>
    //                 </Form.Group>
    //                 <Form.Group widths="equal">
    //                     <Form.Input width={2} label={mdrField.bodyWeight.label} required>
    //                         <Input
    //                             label={{ basic: false, content: `${mdrField.bodyWeight.unit}` }}
    //                             labelPosition="right"
    //                             placeholder=""
    //                             onChange={e => this.setState({ [mdrField.bodyWeight.variable]: e.target.value })}
    //                             value={this.state[mdrField.bodyWeight.variable]}
    //                             type="number"
    //                             min="0"
    //                             readOnly={readOnly}
    //                         />
    //                     </Form.Input>
    //                     <Form.Input width={2} label={mdrField.pulseRate.label} required>
    //                         <Input
    //                             label={{ basic: false, content: `${mdrField.pulseRate.unit}` }}
    //                             labelPosition="right"
    //                             placeholder=""
    //                             onChange={e => this.setState({ [mdrField.pulseRate.variable]: e.target.value })}
    //                             value={this.state[mdrField.pulseRate.variable]}
    //                             type="number"
    //                             min="0"
    //                             readOnly={readOnly}
    //                         />
    //                     </Form.Input>
    //                     <Form.Input width={2} label={mdrField.BP2.label}>
    //                         <Input
    //                             label={{ basic: false, content: `${mdrField.BP2.unit}` }}
    //                             labelPosition="right"
    //                             placeholder="- / -"
    //                             onChange={e => this.setState({ [mdrField.BP2.variable]: e.target.value })}
    //                             value={this.state[mdrField.BP2.variable]}
    //                             type="text"
    //                             readOnly={readOnly}
    //                         />
    //                     </Form.Input>
    //                 </Form.Group>
    //                 <Form.Group widths="equal">
    //                     <Form.Input width={2} label={mdrField.bmi.label} required>
    //                         <Input
    //                             placeholder=""
    //                             onChange={e => this.setState({ [mdrField.bmi.variable]: e.target.value })}
    //                             value={this.state[mdrField.bmi.variable]}
    //                             type="number"
    //                             min="0"
    //                             readOnly={readOnly}
    //                         />
    //                     </Form.Input>
    //                     <Form.Input width={2} label={mdrField.respiratoryRate.label} required>
    //                         <Input
    //                             label={{ basic: false, content: `${mdrField.respiratoryRate.unit}` }}
    //                             labelPosition="right"
    //                             placeholder=""
    //                             onChange={e => this.setState({ [mdrField.respiratoryRate.variable]: e.target.value })}
    //                             value={this.state[mdrField.respiratoryRate.variable]}
    //                             type="number"
    //                             min="0"
    //                             readOnly={readOnly}
    //                         />
    //                     </Form.Input>
    //                     <Form.Input width={2} label={mdrField.BP3.label}>
    //                         <Input
    //                             label={{ basic: false, content: `${mdrField.BP3.unit}` }}
    //                             labelPosition="right"
    //                             placeholder="- / -"
    //                             onChange={e => this.setState({ [mdrField.BP3.variable]: e.target.value })}
    //                             value={this.state[mdrField.BP3.variable]}
    //                             type="text"
    //                             readOnly={readOnly}
    //                         />
    //                     </Form.Input>
    //                 </Form.Group>
    //                 <Form.Group widths="equal">
    //                     <Form.TextArea
    //                         required
    //                         label={mdrField.chiefComplaint.label}
    //                         placeholder="Enter Patient Symptoms ..."
    //                         onChange={e => this.setState({ [mdrField.chiefComplaint.variable]: e.target.value })}
    //                         value={this.state[mdrField.chiefComplaint.variable]}
    //                         readOnly={readOnly}
    //                     />
    //                 </Form.Group>
    //             </Form>
    //             <Grid>
    //                 <Grid.Row columns={3}>
    //                     <Grid.Column></Grid.Column>
    //                     <Grid.Column></Grid.Column>
    //                     <Grid.Column>
    //                         <div>{mdrField.nurseName.label}</div>
    //                         <div style={{ textAlign: "center" }}>{this.state[mdrField.nurseName.variable]}</div>
    //                         <Divider style={{ marginTop: "2px" }} />
    //                         <Button
    //                             fluid
    //                             color="teal"
    //                             content="Send To Doctor"
    //                             icon="send"
    //                             style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
    //                             onClick={() => this.props.showPopupConfirm()}
    //                         />
    //                     </Grid.Column>
    //                 </Grid.Row>
    //             </Grid>
    //         </Container>
    //     </Segment>
    // }

    // showTag = () => {
    //     if (this.props.empPosition === 2) {
    //         return this.showForNurse()
    //     }
    //     return this.showForDoctor()
    // }

    render() {
        console.log("Nurse",this.state)
        const readOnly = this.props.empPosition != 2 ? true : false
        return <Segment style={{ marginTop: -20 }}>
            <Container style={{ padding: "1% 3%" }}>
                <Form style={{ paddingBottom: "1%" }} disabled>
                    <Form.Group widths="equal" >
                        <Form.Input width={2} label={mdrField.height.label} required>
                            <Input
                                label={{ basic: false, content: `${mdrField.height.unit}` }}
                                labelPosition="right"
                                placeholder=""
                                onChange={e => this.setState({ [mdrField.height.variable]: e.target.value })}
                                value={this.state[mdrField.height.variable]}
                                type="number"
                                min="0"
                                readOnly={readOnly}
                                onBlur={() => this.calculateBMI()}
                            />
                        </Form.Input>
                        <Form.Input width={2} label={mdrField.temperature.label} required >
                            <Input
                                label={{ basic: false, content: `${mdrField.temperature.unit}` }}
                                labelPosition="right"
                                placeholder=""
                                onChange={e => this.setState({ [mdrField.temperature.variable]: e.target.value })}
                                value={this.state[mdrField.temperature.variable]}
                                type="number"
                                min="0"
                                readOnly={readOnly}
                            />
                        </Form.Input>
                        <Form.Input width={2} label={mdrField.BP1.label}>
                            <Input
                                label={{ basic: false, content: `${mdrField.BP1.unit}` }}
                                labelPosition="right"
                                placeholder="- / -"
                                onChange={e => this.setState({ [mdrField.BP1.variable]: e.target.value })}
                                value={this.state[mdrField.BP1.variable]}
                                type="text"
                                min="0"
                                readOnly={readOnly}
                            />
                        </Form.Input>
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Input width={2} label={mdrField.bodyWeight.label} required>
                            <Input
                                label={{ basic: false, content: `${mdrField.bodyWeight.unit}` }}
                                labelPosition="right"
                                placeholder=""
                                onChange={e => this.setState({ [mdrField.bodyWeight.variable]: e.target.value })}
                                value={this.state[mdrField.bodyWeight.variable]}
                                type="number"
                                min="0"
                                readOnly={readOnly}
                                onBlur={() => this.calculateBMI()}
                            />
                        </Form.Input>
                        <Form.Input width={2} label={mdrField.pulseRate.label} required>
                            <Input
                                label={{ basic: false, content: `${mdrField.pulseRate.unit}` }}
                                labelPosition="right"
                                placeholder=""
                                onChange={e => this.setState({ [mdrField.pulseRate.variable]: e.target.value })}
                                value={this.state[mdrField.pulseRate.variable]}
                                type="number"
                                min="0"
                                readOnly={readOnly}
                            />
                        </Form.Input>
                        <Form.Input width={2} label={mdrField.BP2.label}>
                            <Input
                                label={{ basic: false, content: `${mdrField.BP2.unit}` }}
                                labelPosition="right"
                                placeholder="- / -"
                                onChange={e => this.setState({ [mdrField.BP2.variable]: e.target.value })}
                                value={this.state[mdrField.BP2.variable]}
                                type="text"
                                readOnly={readOnly}
                            />
                        </Form.Input>
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Input width={2} label={mdrField.bmi.label} required>
                            <Input
                                placeholder=""
                                onChange={e => this.setState({ [mdrField.bmi.variable]: e.target.value })}
                                value={this.state[mdrField.bmi.variable]}
                                type="number"
                                min="0"
                                readOnly
                            />
                        </Form.Input>
                        <Form.Input width={2} label={mdrField.respiratoryRate.label} required>
                            <Input
                                label={{ basic: false, content: `${mdrField.respiratoryRate.unit}` }}
                                labelPosition="right"
                                placeholder=""
                                onChange={e => this.setState({ [mdrField.respiratoryRate.variable]: e.target.value })}
                                value={this.state[mdrField.respiratoryRate.variable]}
                                type="number"
                                min="0"
                                readOnly={readOnly}
                            />
                        </Form.Input>
                        <Form.Input width={2} label={mdrField.BP3.label}>
                            <Input
                                label={{ basic: false, content: `${mdrField.BP3.unit}` }}
                                labelPosition="right"
                                placeholder="- / -"
                                onChange={e => this.setState({ [mdrField.BP3.variable]: e.target.value })}
                                value={this.state[mdrField.BP3.variable]}
                                type="text"
                                readOnly={readOnly}
                            />
                        </Form.Input>
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.TextArea
                            required
                            label={mdrField.chiefComplaint.label}
                            placeholder="Enter Patient Symptoms ..."
                            onChange={e => this.setState({ [mdrField.chiefComplaint.variable]: e.target.value })}
                            value={this.state[mdrField.chiefComplaint.variable]}
                            readOnly={readOnly}
                        />
                    </Form.Group>
                </Form>
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column></Grid.Column>
                        <Grid.Column></Grid.Column>
                        <Grid.Column>
                            <div>{mdrField.nurseName.label}</div>
                            <div style={{ textAlign: "center" }}>{this.state[mdrField.nurseName.variable]}</div>
                            <Divider style={{ marginTop: "2px" }} />
                            {this.showButtonForNurse()}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    }
}