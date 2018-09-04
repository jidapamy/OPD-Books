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
import { style } from "./../../Static/Style/QueueCss";
import Queues from "./../Components/ListQueues";
import TabDescription from "./../Components/TabDescription";
import NavbarHeader from "./../Components/NavHeader";
import FormMedicalRecord from "./../Components/FormMedicalRecord";

import { getPatient } from "./../../Service/ManagePatientMethod";

export default class MedicalRecordTreatment extends Component {
  state = {
    employee: this.props.location.state.userLogin,
    patient: {},
    medicalRecord: {}
  };

  getInfoPatient = (id, qId) => {
    console.log("getInfoPatient");
    this.setState({
      patient: getPatient(id, "String"),
      queueIdSelected: qId
    });
  };
  setMedicalRecordDetail = (field, value) => {
    this.state.medicalRecord[field] = value;
    // this.setState({[field]:value})
  };

  reState = () => {
    this.setState({ reState: "" });
  };

  componentWillMount = () => {
    console.log("----------- will mount Treatment");
    if (this.state.employee.position === 2) {
      // Nurse
      this.state.medicalRecord.visitNumber = "1067/3";
    } else if (this.state.employee.position === 3) {
      // Doctor
    }
  };
  render() {
    const empName =
      this.state.employee.nameTitle +
      " " +
      this.state.employee.firstname +
      "  " +
      this.state.employee.lastname;
    return (
      <div style={style.centerr}>
        <NavbarHeader empName={empName} />

        <Grid columns="equal" style={style.box}>
          <Grid.Column width={3}>
            <Queues
              getInfoPatient={this.getInfoPatient}
              position={this.state.employee.position}
              page="MedicalRecord"
            />
          </Grid.Column>
          <Grid.Column width={5} >
            <TabDescription
              patient={this.state.patient}
              empLogin={this.state.employee}
            />
          </Grid.Column>
          <Grid.Column>
            <FormMedicalRecord
              medicalRecord={this.state.medicalRecord}
              empLogin={this.state.empLogin}
              patient={this.state.patient}
              queueIdSelected={this.state.queueIdSelected}
              setMedicalRecordDetail={this.setMedicalRecordDetail}
              reState={this.reState}
              sendToDoctor={this.sendToDoctor}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
