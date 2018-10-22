import React, { Component } from 'react';
import { Button, Grid, Segment, Form } from 'semantic-ui-react'
import { Container, Divider, Input } from 'semantic-ui-react'
import { mdrField } from "../../Static/Data/Field"

export default class ShowFormNurse extends Component {
    state = {
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
    }

    showButtonForNurse = () => {
        if (this.props.empPosition === 2){
            return <Button
                fluid
                content="Send To Doctor"
                icon="send"
                style={{ display: "block", marginLeft: "auto", marginRight: "auto", backgroundColor: '#31A5BA', color: '#FFF' }}
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
        this.setState(nextProps.medicalRecord);
        if (nextProps.resetState){
            this.defaultState()
        }
    }

    render() {
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