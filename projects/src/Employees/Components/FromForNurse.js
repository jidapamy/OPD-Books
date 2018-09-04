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
  Header,
  Divider
} from "semantic-ui-react";
import { Scrollbars } from "react-custom-scrollbars";
import { style } from "./../../Static/Style/QueueCss";

export default class FromForNurse extends Component {
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
    chiefComplaint: "",
    nurseName: ""
  };

  componentWillMount = () => {
    let emp = this.props.empLogin;
    if (emp.position === 2) {
      //Nurse
      // this.setState({
      //   nurseName: emp.nameTitle + " " + emp.firstname + "  " + emp.lastname
      // });
    } else if (emp.position === 3) {
      this.setState(this.props.medicalRecord);
      // Doctor
    } else {
      // Pharmacy
    }
  };

  componentWillReceiveProps = (nextProps) => {
    this.cleanField();
    let emp = this.props.empLogin;
    if (emp.position === 3) {
      this.setState(nextProps.medicalRecord);
      // Doctor
    } 
  };

  setField = (field, value) => {
    this.props.setMedicalRecordDetail(field, value);
    this.setState({ [field]: value });
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

  buttonForNurse = () => {
    if (this.props.empLogin.position === 2) {
      return (
        <Button
            color="teal"
            content="Send To Doctor"
            icon="send"
            style={style.ButtonNurse}
            onClick={() => this.props.showPopupConfirm()}
            disabled={this.props.patient.citizenId == null}
        />
      );
    }
    return "";
  };

  cleanField = () => {
    this.setState({
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
    });
  };

  render() {
    const disabledNurseField =
      this.props.patient.citizenId == null ||
      this.props.empLogin.position !== 2;
    return (
      <div>
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
                    onChange={e =>
                      this.setField("respiratoryRate", e.target.value)}
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
            disabled={disabledNurseField}
            value={this.state.chiefComplaint}
          />
        </Form>
        <br />

         <Grid columns="two">
          <Grid.Row columns={2} style={style.ButtonNurse2}>
            <Grid.Column>

            </Grid.Column>
            <Grid.Column>
              <p style={style.topicNameDoc}>
                <b>Sign</b>
              </p>
              <p style={style.ColumnDoc}>{this.props.medicalRecord.nurseName}</p>
              <p style={style.dividerDeco}><Divider /></p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
              {this.buttonForNurse()}
            </Grid.Column> 
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
