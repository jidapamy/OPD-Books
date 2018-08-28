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
  Header
} from "semantic-ui-react";
import { Scrollbars } from "react-custom-scrollbars";

import { style } from "./../../Static/Style/QueueCss";
import FromForNurse from './FromForNurse'
import FromForDoctor from "./FromForDoctor";


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

      presentIllness: "",
      physicalExem: "",
      diagnosis: "",
      treatment: "",
      recommendation: "",
      appointment: ""
    });
  };

  render() {
    return <Segment width={8} raised>
        <Header style={style.headForm} as="h5" block inverted color="grey">
          <List divided relaxed>
            <List.Item>
              <Grid columns="three" style={style.headText}>
                <Grid.Row>
                  <Grid.Column>
                    Date: &nbsp;&nbsp;Sun, 26 Aug 2018
                  </Grid.Column>
                  <Grid.Column>Time: &nbsp;&nbsp;02:56 AM.</Grid.Column>
                  <Grid.Column>VN: &nbsp;&nbsp;1067/3</Grid.Column>
                </Grid.Row>
                <Grid.Row style={style.headMargin}>
                  <Grid.Column width={5}>
                    Privilege: &nbsp;&nbsp;-
                  </Grid.Column>
                  <Grid.Column width={11}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clinic:
                    &nbsp;&nbsp;คลินิกศูนย์แพทย์พัฒนา
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </List.Item>
          </List>
        </Header>

        <Scrollbars autoHide style={{height: 600 }}>
          <br />
          <FromForNurse />
          <br />
          <FromForDoctor />
        </Scrollbars>
      </Segment>;
  }
}
