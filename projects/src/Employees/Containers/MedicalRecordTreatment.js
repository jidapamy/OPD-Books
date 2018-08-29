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
import moment from "moment";

import { style } from "./../../Static/Style/QueueCss";
import Queues from "./../Components/ListQueues";
import TabDescription from "./../Components/TabDescription";
import NavbarHeader from "./../Components/NavHeader";
import FormMedicalRecord from "./../Components/FormMedicalRecord";

import { getPatient } from "./../../Service/ManagePatientMethod";
import { MedicalRecord } from "./../../Model/MedicalRecord";
import {
  addQueue,
  getQueues,
  updateStatusQueue,
  doctorQLength
} from "./../../Service/QueueMethod";
import {
  setMedicalRecordForNurse,
  getMedicalRecordForNurse,
  setMedicalRecordForDocter,
  getMedicalRecordForDocter
} from "./../../Service/MedicalRecordMethod";

export default class MedicalRecordTreatment extends Component {
  state = {
    employee: this.props.location.state.userLogin,
    patient: {},
    medicalRecord: MedicalRecord,
    queueIdSelected : undefined,
    nurseName: this.props.location.state.userLogin.position === 2 ? this.props.location.state.userLogin.nameTitle + " " + this.props.location.state.userLogin.firstname + " " + this.props.location.state.userLogin.lastname : '',
    doctorName: this.props.location.state.userLogin.position === 3 ? this.props.location.state.userLogin.nameTitle + " " + this.props.location.state.userLogin.firstname + " " + this.props.location.state.userLogin.lastname : '',
  };

  getInfoPatient = (id, qId,vn) => {
    let medicalRecord ={};
    console.log(id, qId, vn);
    this.setState({
      patient: getPatient(id, "String"),
      queueIdSelected: qId,
      medicalRecord : this.prepareMedicalRecord(vn)
    });
  };

  setMedicalRecordDetail = (field, value) => {
    this.state.medicalRecord[field] = value;
  };

  reState = () => {
    this.setState({ reState: "" });
  };

  sendToDoctor = async() => {
    console.log("queueIdSelected", this.state.queueIdSelected);
      if (this.state.queueIdSelected !== undefined) {
        addQueue(this.state.employee.position, this.state.patient.hospitalNumber, this.state.patient.citizenId, this.state.patient.nameTitle, this.state.patient.firstname, this.state.patient.lastname, true, this.state.medicalRecord.visitNumber);
        updateStatusQueue(this.state.employee.position, this.state.queueIdSelected, false);
        setMedicalRecordForNurse(this.state.medicalRecord);
        this.setState({
          queueIdSelected : null,
          patient : {},
          medicalRecord : {}
        });
        return true;
      } 
      return false
    }

  sendToPharmacy = async() => {
    console.log("queueIdSelected",this.state.queueIdSelected)
      if (this.state.queueIdSelected !== undefined) {
        addQueue(this.state.employee.position, this.state.patient.hospitalNumber, this.state.patient.citizenId, this.state.patient.nameTitle, this.state.patient.firstname, this.state.patient.lastname, true, this.state.medicalRecord.visitNumber);
        updateStatusQueue(this.state.employee.position, this.state.queueIdSelected, false);
        setMedicalRecordForDocter(this.state.medicalRecord);
        this.setState({
          queueIdSelected : null,
          patient : {},
          medicalRecord : {}
        });
        return true;
      } 
      return false
    }

  sendToPayment = async() => {
    if (this.state.queueIdSelected !== undefined) {
      updateStatusQueue(this.state.employee.position, this.state.queueIdSelected, false);
      this.setState({
        queueIdSelected: null,
        patient: {},
        medicalRecord: {}
      });
      return true;
    }
    return false;
  }

  componentWillMount = () => {
    this.state.medicalRecord = this.prepareMedicalRecord('');
    let qList = getQueues(this.state.employee.position);
    if(qList.length!==0){
      this.getInfoPatient(qList[0].citizenId, qList[0].key, qList[0].visitNumber);
      this.setState({ queueIdSelected: qList[0].key });
    }
  };
  
  VISITNUMBER = 1071;

  prepareMedicalRecord = (vn) =>{
    let medicalRecord = {};
    if (this.state.employee.position === 2) {
      medicalRecord.nurseId = this.state.employee.empId;
      medicalRecord.nurseName = this.state.nurseName;
      medicalRecord.visitNumber = this.VISITNUMBER + doctorQLength()+ "/3";
      medicalRecord.clinic = this.state.employee.clinic;
      medicalRecord.date=moment().format("LL"),
      medicalRecord.time=moment().format("LT")
    } else if(this.state.employee.position === 3){
      medicalRecord = getMedicalRecordForNurse(vn);
      medicalRecord.doctorId = this.state.employee.empId;
      medicalRecord.doctorName = this.state.doctorName;
      medicalRecord.appointment = moment().format("ll");
    }else{
      console.log("PHARMACY!!!")
      let nurseForm = getMedicalRecordForNurse(vn);
      let doctorForm = getMedicalRecordForDocter(vn);
      medicalRecord = {...nurseForm,...doctorForm}
    }
    console.log('prepare',medicalRecord)
    return medicalRecord;
  }

  render() {
    const empName = this.state.employee.nameTitle + " " + this.state.employee.firstname +"  " +this.state.employee.lastname;
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
          <Grid.Column width={5}>
            <TabDescription
              patient={this.state.patient}
              empLogin={this.state.employee}
            />
          </Grid.Column>
          <Grid.Column>
            <FormMedicalRecord
              medicalRecord={this.state.medicalRecord}
              empLogin={this.state.employee}
              patient={this.state.patient}
              queueIdSelected={this.state.queueIdSelected}
              setMedicalRecordDetail={this.setMedicalRecordDetail}
              reState={this.reState}
              sendToDoctor={this.sendToDoctor}
              sendToPharmacy={this.sendToPharmacy}
              sendToPayment={this.sendToPayment}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
