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
  setMedicalRecordForDoctor,
  getMedicalRecordForDoctor,
  // addHistoryVisitNumber,
  getHistoryVisitNumberPatient
} from "./../../Service/MedicalRecordMethod";

export default class MedicalRecordTreatment extends Component {
  state = {
    employee: this.props.location.state.userLogin,
    patient: {},
    medicalRecord: MedicalRecord,
    queueIdSelected : undefined,
    nurseName: this.props.location.state.userLogin.position === 2 ? this.props.location.state.userLogin.nameTitle + " " + this.props.location.state.userLogin.firstname + " " + this.props.location.state.userLogin.lastname : '',
    doctorName: this.props.location.state.userLogin.position === 3 ? this.props.location.state.userLogin.nameTitle + " " + this.props.location.state.userLogin.firstname + " " + this.props.location.state.userLogin.lastname : '',
    historyTreatment : []
  };

  getInfoPatient = (id, qId,vn) => {
    debugger
    let medicalRecord ={};
    this.setState({
      patient: getPatient(id, "String"),
      queueIdSelected: qId,
      medicalRecord : this.prepareMedicalRecord(vn),
      historyTreatment : getHistoryVisitNumberPatient(id)
    });
  };

  setMedicalRecordDetail = (field, value) => {
    this.state.medicalRecord[field] = value;
  };

  reState = () => {
    this.setState({ reState: "" });
  };

  sendToDoctor = async() => {
    console.log("send", this.state.medicalRecord);
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
    console.log("send", this.state.medicalRecord);
      if (this.state.queueIdSelected !== undefined) {
        addQueue(this.state.employee.position, this.state.patient.hospitalNumber, this.state.patient.citizenId, this.state.patient.nameTitle, this.state.patient.firstname, this.state.patient.lastname, true, this.state.medicalRecord.visitNumber);
        updateStatusQueue(this.state.employee.position, this.state.queueIdSelected, false);
        setMedicalRecordForDoctor(this.state.medicalRecord);
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
      // addHistoryVisitNumber(this.state.medicalRecord.doctorId,this.state.patient.citizenId,this.state.medicalRecord.visitNumber);
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
    debugger
    let medicalRecord = {};
    if (this.state.employee.position === 2) {
      medicalRecord.nurseId = this.state.employee.empId;
      medicalRecord.nurseName = this.state.nurseName;
      medicalRecord.visitNumber = this.VISITNUMBER + doctorQLength()+ "/3";
      medicalRecord.clinic = this.state.employee.clinic;
      medicalRecord.date=moment().format("LL"),
      medicalRecord.time=moment().format("LT")
    } else if(this.state.employee.position === 3){
      // if(vn){
        medicalRecord = getMedicalRecordForNurse(vn);
        medicalRecord.doctorId = this.state.employee.empId;
        medicalRecord.doctorName = this.state.doctorName;
        medicalRecord.appointment = moment().format("ll");
      // }
    }else{
      if(vn){
        let nurseForm = getMedicalRecordForNurse(vn);
        let doctorForm = getMedicalRecordForDoctor(vn);
        medicalRecord = {...nurseForm,...doctorForm}
      }
    }
    return medicalRecord;
  }

  render() {
    console.log("STAtE", this.state);
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
