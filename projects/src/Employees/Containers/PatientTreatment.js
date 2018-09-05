import React, { Component } from "react";
import { Grid, Segment, List, Label, Form, Input, Divider, Header, Button } from "semantic-ui-react";
import { MedicalRecord } from './../../Model/MedicalRecord'
import { Patient } from "./../../Model/Patient";
import moment from "moment";

// import EmpHeader from "./../Components/EmpHeader";
import { getAccountLogin, logout } from "./../../Service/EmpReducer";

import { addQueue , getQueues , updateStatusQueue } from "./../../Service/QueueMethod"
import { Employee } from "./../../Model/Employee";

import { defaultAccount, contract, web3 } from "./../../Lib/Web3";


export default class PatientTreatment extends Component {
    state = {
        empLogin : this.props.location.state.userLogin,
        patient : {},
        medicalRecord : MedicalRecord,
        age : '',
        reState: '',
        qList : [],

        // patientIdSelected : '',
        queueIdSelected : null,

        visitNumber: '',
        clinic: '',
        height: null,
        bodyWeight: null,
        bmi: null,
        temperature: null,
        pulseRate: null,
        respiratoryRate: null,
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

        dateTime:moment().format("LLLL"),
    }

     calculateAge = () => {
       debugger;
        let dob = "" + this.state.patient.dob;
        let year = +moment().format("YYYY") - +dob.substring(6,10);
        let month = +moment().format("MM") - +dob.substring(3, 5);
        let tmp = year + " ปี"
        if (year === 0) {
            month = month
            tmp = year + " ปี " + month + " เดือน"
        }
        this.setState({ age : tmp})
    }

    setMedicalRecordDetail = (field, value) => {
        this.state.medicalRecord[field] = value;
        this.setState({[field]:value})
    }

    empLogout = () => {
      this.props.history.push({
        pathname: "/signinForEmployee",
      });
      logout();
    }

    componentWillMount = () => {
      this.prepareQueue();
      if(this.state.empLogin.position === 2) {
        // Nurse
        this.state.medicalRecord.visitNumber = "1067/3";
      }else if (this.state.empLogin.position === 3) {
        // Doctor
        
      }
    }

    prepareQueue = async() => {
      let qList = await getQueues(this.state.empLogin.position);
      if(qList){
        this.setState({qList:qList})
      }
    }

    getInfoPatient = (id,qId) => {
      let infoPatient1 = contract.getInfoPatientPart1(web3.fromAscii(id));
      let infoPatient2 = contract.getInfoPatientPart2(web3.fromAscii(id));
      let infoPatient3 = contract.getInfoPatientPart3(web3.fromAscii(id));
      let patientAllergy = contract.getPatientAllergy(web3.fromAscii(id));

      let patient = this.state.patient
      patient.hospitalNumber = web3.toAscii(infoPatient1[1]);
      patient.citizenId = web3.toAscii(infoPatient1[2]);
      patient.dob = web3.toAscii(infoPatient2[0]);
      patient.nameTitle = web3.toAscii(infoPatient2[1]);
      patient.firstname = web3.toAscii(infoPatient2[2]);
      patient.lastname = web3.toAscii(infoPatient2[3]);
      patient.gender = web3.toAscii(infoPatient2[4]);
      patient.congenitalDisease = web3.toAscii(infoPatient3[0]);
      patient.bloodgroup = web3.toAscii(infoPatient3[1]);
      patient.nationality = web3.toAscii(infoPatient3[3]);
      patient.allergy = web3.toAscii(patientAllergy[0]);
      patient.privilege = web3.toAscii(patientAllergy[1]);

      this.setState({ 
        patient : patient,
        // patientIdSelected : patient.citizenId ,
        queueIdSelected : qId
      })
      this.calculateAge();
     }

    showQList = () => {
      let tmp;
      console.log("qList.length : ",this.state.qList.length);
      if(this.state.qList.length != 0){
        console.log('qList',this.state.qList)
        if(this.state.qList[0].status){
          console.log("qList[0]", this.state.qList[0].citizenId);
          tmp = this.state.qList.map(q => (
          <List.Item onClick={() => this.getInfoPatient(q.citizenId,q.queueId)}>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">
                HN : {q.hospitalNumber}
              </List.Header>
              <List.Description as="a">
                {q.title}{q.firstname} {q.lastname}
              </List.Description>
            </List.Content>
          </List.Item>
        ))
        return tmp;
      }
    }
      return <List.Item>ไม่มีคิวผู้ป่วยเข้ารับการรักษา</List.Item>;
    }

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

    sendToDoctor = () => {
      console.log(this.state.medicalRecord)
      if (this.state.queueIdSelected) {
        addQueue(this.state.empLogin.position, this.state.patient.hospitalNumber, this.state.patient.citizenId, this.state.patient.nameTitle, this.state.patient.firstname, this.state.patient.lastname, true, this.state.visitNumber);
        let tmp = updateStatusQueue(this.state.empLogin.position,this.state.queueIdSelected,false);
        console.log(tmp)
        this.setState({
          // patientIdSelected: "",
          queueIdSelected : null,
          patient : {},
          age : '',
          medicalRecord : {}
        });
        this.cleanField();
        this.prepareQueue();
        alert("Success!!" + this.state.medicalRecord);
      } else {
        alert("กรุณาเลือกผู้ป่วยที่จะรับการรักษา")
      }
    }

    sendToPharmacy = () => {
      console.log(this.state.medicalRecord)
      if (this.state.queueIdSelected) {
        addQueue(3, this.state.patient.hospitalNumber, this.state.patient.citizenId, this.state.patient.nameTitle, this.state.patient.firstname, this.state.patient.lastname, true, this.state.visitNumber);
        let tmp = updateStatusQueue(3,this.state.queueIdSelected,false);
        console.log(tmp)
        this.setState({
          // patientIdSelected: "",
          queueIdSelected : null,
          patient : {},
          medicalRecord : {}
        });
        this.prepareQueue();
      } else {
        alert("กรุณาเลือกผู้ป่วยที่จะรับการรักษา")
      }
    }

    calculateBMI = () => {
      console.log("TEST BMI")
      if(this.state.medicalRecord.height && this.state.medicalRecord.bodyWeight){
        let height = this.state.medicalRecord.height/100;
        let bmi = this.state.medicalRecord.bodyWeight / (height * height);
        this.state.medicalRecord.bmi = bmi.toFixed(2);
        this.setState({ reState: "" });
      }
    }

    render() {
      console.log(this.state.medicalRecord)
        return (
        <div>
        {/* <EmpHeader empLogout={this.empLogout} accountLogin={this.props.location.state.userLogin}/> */}
        <Grid>
            <Grid.Column width={3}>
              <Segment>
                <List divided relaxed>
                  {this.showQList()}
                </List>
              </Segment>
            </Grid.Column>

            <Grid.Column width={6}>
              <Segment>
                <p>
                  <Label>{moment().format("LLLL")}</Label>
                </p>
                <p> HN : {this.state.patient.hospitalNumber} </p>
                <p>
                  {" "}
                  ชื่อ : {this.state.patient.nameTitle}
                  {this.state.patient.firstname} {this.state.patient.lastname}
                </p>
                <p> เลขบัตรประชาชน : {this.state.patient.citizenId} </p>
                <p> เพศ : {this.state.patient.gender} </p>
                <p> อายุ : {this.state.age} </p>
                <p> สัญชาติ : {this.state.patient.nationality} </p>
                <p> หมู่เลือด : {this.state.patient.bloodgroup} </p>
                <p>
                  โรคประจำตัว : {
                    this.state.patient.congenitalDisease
                  }
                </p>
                <p> สิ่งที่แพ้ : {this.state.patient.allergy} </p>
                <p> สิทธิการรักษา : {this.state.patient.privilege} </p>
              </Segment>
            </Grid.Column>

            <Grid.Column width={7}>
              <Segment>
                <div>
                <Label as="a" color="blue" ribbon>
                  For Nurse
                </Label>
                <Form>
                  <p>
                    <Label>VN : {this.state.medicalRecord.visitNumber}</Label>
                  </p>
                  <Form.Group widths="equal">
                    <Form.Input width={2} labelPosition="right" type="text" placeholder="">
                      <Label basic>HT</Label>
                      <input 
                        onChange={e => this.setMedicalRecordDetail("height", e.target.value)} 
                        onBlur={() => this.calculateBMI()}
                        disabled={this.state.empLogin.position !== 2}
                        style={{background: this.state.empLogin.position !== 2 ? "#DCDCDC": "" }}
                        value={this.state.height}
                      />
                      <Label>cm.</Label>
                    </Form.Input>
                    <Form.Input width={2} labelPosition="right" type="text" placeholder="">
                      <Label basic>T</Label>
                      <input 
                        onChange={e => this.setMedicalRecordDetail("temperature", e.target.value)} 
                        disabled={this.state.empLogin.position !== 2}
                        style={{background: this.state.empLogin.position !== 2 ? "#DCDCDC": "" }}
                        value={this.state.temperature}
                      />
                      <Label>C.</Label>
                    </Form.Input>
                    <Form.Input width={3} labelPosition="right" type="text" placeholder="">
                      <Label basic>BP1</Label>
                      <input 
                        onChange={e => this.setMedicalRecordDetail("BP1", e.target.value)} 
                        disabled={this.state.empLogin.position !== 2}
                        style={{background: this.state.empLogin.position !== 2 ? "#DCDCDC": "" }}
                        value={this.state.BP1}
                      />
                      <Label>mmHg</Label>
                    </Form.Input>
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input width={2} labelPosition="right" type="text" placeholder="">
                      <Label basic>BW</Label>
                      <input 
                        onChange={e => this.setMedicalRecordDetail("bodyWeight", e.target.value)}
                        onBlur={() => this.calculateBMI()} 
                        disabled={this.state.empLogin.position !== 2}
                        style={{background: this.state.empLogin.position !== 2 ? "#DCDCDC": "" }}
                      />
                      <Label>Kg.</Label>
                    </Form.Input>
                    <Form.Input width={2} labelPosition="right" type="text" placeholder="">
                      <Label basic>PR</Label>
                      <input 
                        onChange={e => this.setMedicalRecordDetail("pulseRate", e.target.value)} 
                        disabled={this.state.empLogin.position !== 2}
                        style={{background: this.state.empLogin.position !== 2 ? "#DCDCDC": "" }}
                      />
                      <Label>/min</Label>
                    </Form.Input>
                    <Form.Input width={3} labelPosition="right" type="text" placeholder="">
                      <Label basic>BP2</Label>
                      <input 
                        onChange={e => this.setMedicalRecordDetail("BP2", e.target.value)} 
                        disabled={this.state.empLogin.position !== 2}
                        style={{background: this.state.empLogin.position !== 2 ? "#DCDCDC": "" }}
                        value={this.state.BP2}
                      />
                      <Label>mmHg</Label>
                    </Form.Input>
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input width={2} labelPosition="left" type="text" placeholder="">
                      <Label basic>BMI</Label>
                      <input 
                        onChange={e => this.setMedicalRecordDetail("bmi", e.target.value)} 
                        value={this.state.medicalRecord.bmi}
                        disabled={this.state.empLogin.position !== 2}
                        style={{background: this.state.empLogin.position !== 2 ? "#DCDCDC": "" }}
                      />
                    </Form.Input>
                    <Form.Input width={2} labelPosition="right" type="text" placeholder="">
                      <Label basic>RR</Label>
                      <input 
                        onChange={e => this.setMedicalRecordDetail("respiratoryRate", e.target.value)} 
                        disabled={this.state.empLogin.position !== 2}
                        style={{background: this.state.empLogin.position !== 2 ? "#DCDCDC": "" }}
                      />
                      <Label>/min</Label>
                    </Form.Input>
                    <Form.Input width={3} labelPosition="right" type="text" placeholder="">
                      <Label basic>BP3</Label>
                      <input 
                        onChange={e => this.setMedicalRecordDetail("BP3", e.target.value)} 
                        disabled={this.state.empLogin.position !== 2}
                        style={{background: this.state.empLogin.position !== 2 ? "#DCDCDC": "" }}
                        value={this.state.BP3}
                      />
                      <Label>mmHg</Label>
                    </Form.Input>
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.TextArea 
                        label="Chief Complaint" 
                        placeholder="" 
                        onChange={e => this.setMedicalRecordDetail("chiefComplaint", e.target.value)}
                        disabled={this.state.empLogin.position !== 2}
                        style={{background: this.state.empLogin.position !== 2 ? "#DCDCDC": "" }}
                        value={this.state.chiefComplaint}
                    />
                  </Form.Group>
                  <Button 
                    color="teal" 
                    content="Next" 
                    icon="right arrow" 
                    labelPosition="right" 
                    onClick={()=> this.sendToDoctor()}
                    disabled={this.state.empLogin.position !== 2 && this.state.queueIdSelected}
                  />
                </Form>
                <Divider />
                </div>
                <Label as="a" color="blue" ribbon>
                  For Doctor
                </Label>
                <p />
                <Form>
                  <Form.Group widths="equal">
                    <Form.TextArea 
                        label="Present Illness" 
                        placeholder="" 
                        onChange={e => this.setMedicalRecordDetail("presentIllness", e.target.value)}
                        disabled={this.state.empLogin.position !== 3}
                        style={{background: this.state.empLogin.position !== 3 ? "#DCDCDC": "" }}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.TextArea 
                        label="Physical Exem" 
                        placeholder="" 
                        onChange={e => this.setMedicalRecordDetail("physicalExem", e.target.value)}
                        disabled={this.state.empLogin.position !== 3}
                        style={{background: this.state.empLogin.position !== 3 ? "#DCDCDC": "" }}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.TextArea 
                        label="Diagnosis" 
                        placeholder="" 
                        onChange={e => this.setMedicalRecordDetail("diagnosis", e.target.value)}
                        disabled={this.state.empLogin.position !== 3}
                        style={{background: this.state.empLogin.position !== 3 ? "#DCDCDC": "" }}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.TextArea 
                        label="Treatment" 
                        placeholder="" 
                        onChange={e => this.setMedicalRecordDetail("treatment", e.target.value)}
                        disabled={this.state.empLogin.position !== 3}
                        style={{background: this.state.empLogin.position !== 3 ? "#DCDCDC": "" }}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.TextArea 
                        label="Recommendation" 
                        placeholder="" 
                        onChange={e => this.setMedicalRecordDetail("recommendation", e.target.value)}
                        disabled={this.state.empLogin.position !== 3}
                        style={{background: this.state.empLogin.position !== 3 ? "#DCDCDC": "" }}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.TextArea 
                        label="Appointment" 
                        placeholder="" 
                        onChange={e => this.setMedicalRecordDetail("appointment", e.target.value)}
                        disabled={this.state.empLogin.position !== 3}
                        style={{background: this.state.empLogin.position !== 3 ? "#DCDCDC": "" }}
                    />
                  </Form.Group>
                </Form>
                <Button content="Next" icon="right arrow" labelPosition="right" color="teal" disabled={this.state.empLogin.position !== 3}/>
              </Segment>
            </Grid.Column>
          </Grid>
          </div>
        );
  }
}
