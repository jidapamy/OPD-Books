import React, { Component } from "react";
import ListQueues from "./../Components/ListQueues"
import TabDescription from "./../Components/TabDescription";
import FormMedicalRecord from "./../Components/FormMedicalRecord";

import { Button, Segment, Input, Grid, List, Label, Form, TextArea, Message, Tab, Card ,Visibility ,Sticky } from 'semantic-ui-react';
import { style } from "./../../Static/Style/QueueCss";

import { Employee } from "./../../Model/Employee";
import { MedicalRecord } from "./../../Model/MedicalRecord";
import moment from "moment";
import { getInfoPatient } from "./../../Service/Provider";

import { addQueue, updateStatusQueue } from "./../../Service/QueueMethod";


export default class MedicalRecordTreatment extends Component {
     state = {
        empLogin : {},
        patient : {},
        medicalRecord : MedicalRecord,
        age : '',
        reState: '',
        qList : [],

        // patientIdSelected : '',
        queueIdSelected : null,

        // visitNumber: '',
        // clinic: '',
        // height: null,
        // bodyWeight: null,
        // bmi: null,
        // temperature: null,
        // pulseRate: null,
        // respiratoryRate: null,
        // BP1: '',
        // BP2: '',
        // BP3: '',
        // chiefComplaint: '',

        // presentIllness: '',
        // physicalExem: '',
        // diagnosis: '',
        // treatment: '',
        // recommendation: '',
        // appointment: '',

        dateTime:moment().format("LLLL"),
    }

     getInfoPatient = (id,qId) => {
        this.setState({ 
            patient : getInfoPatient(id,qId),
            queueIdSelected : qId
        });
     }

     setMedicalRecordDetail = (field, value) => {
        this.state.medicalRecord[field] = value;
        // this.setState({[field]:value})
    }

    reState = () => {
        this.setState({ reState: "" });
    }

    sendToDoctor = () => {
      console.log(this.state.medicalRecord)
      if (this.state.queueIdSelected) {
        addQueue(this.state.empLogin.position, this.state.patient.hospitalNumber, this.state.patient.citizenId, this.state.patient.nameTitle, this.state.patient.firstname, this.state.patient.lastname, true, this.state.medicalRecord.visitNumber);
        let tmp = updateStatusQueue(this.state.empLogin.position,this.state.queueIdSelected,false);
        console.log(tmp)
        this.setState({
          // patientIdSelected: "",
          queueIdSelected : null,
          patient : {},
        //   age : '',
          medicalRecord : {}
        });
        // this.cleanField();
        // this.prepareQueue();
        alert("Success!!" + this.state.medicalRecord);
      } else {
        alert("กรุณาเลือกผู้ป่วยที่จะรับการรักษา")
      }
        this.reState();
    }

    componentWillMount = () => {
        console.log("----------- will mount Treatment")
        this.state.empLogin.position = 2;
      if(this.state.empLogin.position === 2) {
        // Nurse
        this.state.medicalRecord.visitNumber = "1067/3";
      }else if (this.state.empLogin.position === 3) {
        // Doctor
        
      }
    }

    render(){
        return <div>
            <Grid columns="equal" style={style.box}>
              <Grid.Column width={3}>
                <ListQueues 
                    getInfoPatient={this.getInfoPatient} 
                    empLogin={this.state.empLogin}/>
              </Grid.Column>

              <Grid.Column width={5}>
                <TabDescription patient={this.state.patient} />
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
          </div>;
    }
}