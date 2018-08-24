import React, { Component } from "react";
import {
  Button,
  Segment,
  Input,
  Grid,
  List,
  Label,
  Form,
  TextArea,
  Message,
  Tab,
  Card,
  Visibility,
  Sticky,
  Header
} from "semantic-ui-react";

import { style } from "./../../Static/Style/QueueCss";

export default class FormMedicalRecord extends Component {
  state = {
    visitNumber: "",
    clinic: "",
    height: 0,
    bodyWeight: 0,
    bmi: 0,
    temperature: 0,
    pulseRate: 0,
    respiratoryRate: 0,
    BP1: "",
    BP2: "",
    BP3: "",
    chiefComplaint: ""
  };

  calculateBMI = () => {
    if (
      this.props.medicalRecord.height &&
      this.props.medicalRecord.bodyWeight
    ) {
      let height = this.props.medicalRecord.height / 100;
      let bmi = this.props.medicalRecord.bodyWeight / (height * height);
      this.props.medicalRecord.bmi = bmi.toFixed(2);
      this.setState({ bmi: bmi.toFixed(2) });
    }
  };

  setField = (field, value) => {
    this.props.setMedicalRecordDetail(field, value);
    this.setState({ [field]: value });
  };

  buttonForNurse = () => {
    if (this.props.empLogin.position === 2) {
      return (
        <Button
          color="teal"
          content="Send To Doctor"
          icon="send"
          style={style.ButtonNurse}
          onClick={() => this.props.sendToDoctor()}
          disabled={this.props.patient.citizenId == null}
        />
      );
    }
    return "";
  };

  cleanField = () => {
      this.setState({
        visitNumber: '',
        clinic: '',
        height: 0,
        bodyWeight: 0,
        bmi: 0,
        temperature: 0,
        pulseRate: 0,
        respiratoryRate: 0,
        BP1: '',
        BP2: '',
        BP3: '',
        chiefComplaint: '',

        presentIllness: '',
        physicalExem: '',
        diagnosis: '',
        treatment: '',
        recommendation: '',
        appointment: '',
      })
    }

//   sendToDoctor = () => {
//     console.log(this.props.medicalRecord);
//     this.props.reState();
//       if (this.props.queueIdSelected) {
//         addQueue(this.props.empLogin.position, this.props.patient.hospitalNumber, this.props.patient.citizenId, this.props.patient.nameTitle, this.props.patient.firstname, this.props.patient.lastname, true, this.props.visitNumber);
//         let tmp = updateStatusQueue(this.props.empLogin.position, this.props.queueIdSelected, false);
//         console.log(tmp)
//         this.setState({
//     //       // patientIdSelected: "",
//     //       queueIdSelected : null,
//     //       patient : {},
//           age : '',
//     //       medicalRecord : {}
//         });
//         this.cleanField();
//     //     this.prepareQueue();
//         alert("Success!!" + this.state.medicalRecord);
//       } else {
//         alert("กรุณาเลือกผู้ป่วยที่จะรับการรักษา")
//       }
//   };

//   disabledNurseField = this.props.patient.citizenId == null || this.props.empLogin.position !== 2;

  render() {
    const disabledNurseField = this.props.patient.citizenId == null || this.props.empLogin.position !== 2;
      return (
      <Segment width={8}>
        <Label as="a" color="teal" ribbon style={style.ribbonNur}>
          Please Fill Out This Section ( For Nurse )
        </Label>
        <List divided relaxed>
          <List.Item>
            <br />
            <Grid columns="three">
              <Grid.Row>
                <Grid.Column>
                  <p style={style.topic1}>
                    <b>HT:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "cm." }}
                    labelPosition="right"
                    placeholder=""
                    style={style.input1}
                    onChange={e => this.setField("height", e.target.value)}
                    onBlur={() => this.calculateBMI()}
                    disabled={disabledNurseField}
                    value={this.state.height}
                    type="number"
                    min="0"
                  />
                </Grid.Column>

                <Grid.Column>
                  <p style={style.topic2}>
                    <b>T:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "C" }}
                    labelPosition="right"
                    placeholder=""
                    style={style.input2}
                    onChange={e => this.setField("temperature", e.target.value)}
                    disabled={disabledNurseField}
                    value={this.state.temperature}
                    type="number"
                    min="0"
                  />
                </Grid.Column>

                <Grid.Column>
                  <p style={style.topic3}>
                    <b>BP1:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "mm/Hg" }}
                    labelPosition="right"
                    placeholder=""
                    style={style.input3}
                    onChange={e => this.setField("BP1", e.target.value)}
                    disabled={disabledNurseField}
                    value={this.state.BP1}
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.Row}>
                <Grid.Column>
                  <p style={style.topic1}>
                    <b>BW:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "Kg." }}
                    labelPosition="right"
                    placeholder=""
                    style={style.input1}
                    onChange={e => this.setField("bodyWeight", e.target.value)}
                    onBlur={() => this.calculateBMI()}
                    disabled={disabledNurseField}
                    value={this.state.bodyWeight}
                    type="number"
                    min="0"
                  />
                </Grid.Column>

                <Grid.Column>
                  <p style={style.topic2}>
                    <b>PR:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "/min" }}
                    labelPosition="right"
                    placeholder=""
                    style={style.input2}
                    onChange={e => this.setField("pulseRate", e.target.value)}
                    disabled={disabledNurseField}
                    value={this.state.pulseRate}
                    type="number"
                    min="0"
                  />
                </Grid.Column>

                <Grid.Column>
                  <p style={style.topic3}>
                    <b>BP2:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "mm/Hg" }}
                    labelPosition="right"
                    placeholder=""
                    style={style.input3}
                    onChange={e => this.setField("BP2", e.target.value)}
                    disabled={disabledNurseField}
                    value={this.state.BP2}
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.Row}>
                <Grid.Column>
                  <p style={style.topic1}>
                    <b>BMI:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "-" }}
                    labelPosition="right"
                    placeholder=""
                    style={style.input1}
                    value={this.state.bmi}
                    disabled={disabledNurseField}
                    type="number"
                    min="0"
                  />
                </Grid.Column>

                <Grid.Column>
                  <p style={style.topic2}>
                    <b>RR:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "/min" }}
                    labelPosition="right"
                    placeholder=""
                    style={style.input2}
                    onChange={e => this.setField("respiratoryRate", e.target.value)}
                    disabled={disabledNurseField}
                    value={this.state.respiratoryRate}
                    type="number"
                    min="0"
                  />
                </Grid.Column>

                <Grid.Column>
                  <p style={style.topic3}>
                    <b>BP3:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "mm/Hg" }}
                    labelPosition="right"
                    placeholder=""
                    style={style.input3}
                    onChange={e => this.setField("BP3", e.target.value)}
                    disabled={disabledNurseField}
                    value={this.state.BP3}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </List.Item>
        </List>

        <Form>
          <p style={style.topicChief}>
            <b>Chief Plaint</b>
          </p>
          <Form.Field
            control={TextArea}
            placeholder="Enter Patient Symptoms ..."
            style={style.inputField}
            onChange={e => this.setField("chiefComplaint", e.target.value)}
            disabled={this.props.empLogin.position !== 2}
            value={this.state.chiefComplaint}
          />
        </Form>
        <br />

        <Grid columns="two">
          <Grid.Row columns={2}>
            <Grid.Column>
              <p style={style.topicNameNurse}>
                <b>Sign</b>
              </p>
              <Message style={style.ColumnNurse} visible>
                นางสาวพยาบาล จริงๆนะจ้ะ
              </Message>
            </Grid.Column>
            <Grid.Column>{this.buttonForNurse()}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
