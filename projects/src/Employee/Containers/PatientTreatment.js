import React, { Component } from "react";
import { Grid, Segment, List, Label, Form, Input, Divider, Header, Button } from "semantic-ui-react";
import { MedicalRecord } from './../../Model/MedicalRecord'
import { Patient } from "./../../Model/Patient";
import moment from "moment";

import EmpHeader from "./../Components/EmpHeader";

export default class PatientTreatment extends Component {
    state = {
        patient : Patient,
        medicalRecord : MedicalRecord,
        age : '',
    }

     calculateAge = () => {
        let dob = "" + this.state.patient.dob;
        let arr = dob.split("/"); // 01/01/1999
        let year = ((+(moment().format('YYYY'))) - (+arr[2]));
        let month = ((+(moment().format('MM'))) - (+arr[1]));
        let tmp = year + " ปี"
        if (year === 0) {
            month = month
            tmp = year + " ปี " + month + " เดือน"
        }
        this.setState({ age : tmp})
    }

    setMedicalRecordDetail = (field, value) => {
        this.state.medicalRecord[field] = value;
    }

    render() {
        return (
        <div>
        <EmpHeader/>
        <Grid>
            <Grid.Column width={3}>
              <Segment>
                <List divided relaxed>
                  <List.Item>
                    <List.Icon name="github" size="large" verticalAlign="middle" />
                    <List.Content>
                      <List.Header as="a">
                        Semantic-Org/Semantic-UI
                      </List.Header>
                      <List.Description as="a">
                        Updated 10 mins ago
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="github" size="large" verticalAlign="middle" />
                    <List.Content>
                      <List.Header as="a">
                        Semantic-Org/Semantic-UI-Docs
                      </List.Header>
                      <List.Description as="a">
                        Updated 22 mins ago
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="github" size="large" verticalAlign="middle" />
                    <List.Content>
                      <List.Header as="a">
                        Semantic-Org/Semantic-UI-Meteor
                      </List.Header>
                      <List.Description as="a">
                        Updated 34 mins ago
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
            </Grid.Column>

            <Grid.Column width={6}>
              <Segment>
                <p>
                  <Label>{moment().format("LLLL")}</Label>{" "}
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
                  {" "}
                  โรคประจำตัว : {
                    this.state.patient.congenitalDisease
                  }{" "}
                </p>
                <p> สิ่งที่แพ้ : {this.state.patient.allergy} </p>
                <p> สิทธิการรักษา : {this.state.patient.privilege} </p>
              </Segment>
            </Grid.Column>

            <Grid.Column width={7}>
              <Segment>
                <Label as="a" color="blue" ribbon>
                  For Nurse
                </Label>
                <Form>
                  <p>
                    <Label>VN : {this.state.patient.visitNumber}</Label>
                  </p>
                  <Form.Group widths="equal">
                    <Form.Input width={2} labelPosition="right" type="text" placeholder="">
                      <Label basic>HT</Label>
                      <input onChange={e => this.setMedicalRecordDetail("height", e.target.value)} />
                      <Label>cm.</Label>
                    </Form.Input>
                    <Form.Input width={2} labelPosition="right" type="text" placeholder="">
                      <Label basic>T</Label>
                      <input onChange={e => this.setMedicalRecordDetail("temperature", e.target.value)} />
                      <Label>C.</Label>
                    </Form.Input>
                    <Form.Input width={3} labelPosition="right" type="text" placeholder="">
                      <Label basic>BP1</Label>
                      <input onChange={e => this.setMedicalRecordDetail("BP1", e.target.value)} />
                      <Label>mmHg</Label>
                    </Form.Input>
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input width={2} labelPosition="right" type="text" placeholder="">
                      <Label basic>BW</Label>
                      <input onChange={e => this.setMedicalRecordDetail("bodyWeight", e.target.value)} />
                      <Label>Kg.</Label>
                    </Form.Input>
                    <Form.Input width={2} labelPosition="right" type="text" placeholder="">
                      <Label basic>PR</Label>
                      <input onChange={e => this.setMedicalRecordDetail("pulseRate", e.target.value)} />
                      <Label>/min</Label>
                    </Form.Input>
                    <Form.Input width={3} labelPosition="right" type="text" placeholder="">
                      <Label basic>BP2</Label>
                      <input onChange={e => this.setMedicalRecordDetail("BP2", e.target.value)} />
                      <Label>mmHg</Label>
                    </Form.Input>
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input width={2} labelPosition="left" type="text" placeholder="">
                      <Label basic>BMI</Label>
                      <input onChange={e => this.setMedicalRecordDetail("bmi", e.target.value)} />
                    </Form.Input>
                    <Form.Input width={2} labelPosition="right" type="text" placeholder="">
                      <Label basic>RR</Label>
                      <input onChange={e => this.setMedicalRecordDetail("respiratoryRate", e.target.value)} />
                      <Label>/min</Label>
                    </Form.Input>
                    <Form.Input width={3} labelPosition="right" type="text" placeholder="">
                      <Label basic>BP3</Label>
                      <input onChange={e => this.setMedicalRecordDetail("BP3", e.target.value)} />
                      <Label>mmHg</Label>
                    </Form.Input>
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.TextArea 
                        label="Chief Complaint" 
                        placeholder="" 
                        onChange={e => this.setMedicalRecordDetail("chiefComplaint", e.target.value)}
                    />
                  </Form.Group>
                  <Button color="teal" content="Next" icon="right arrow" labelPosition="right" />
                </Form>
                <Divider />
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
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.TextArea 
                        label="Physical Exem" 
                        placeholder="" 
                        onChange={e => this.setMedicalRecordDetail("physicalExem", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.TextArea 
                        label="Diagnosis" 
                        placeholder="" 
                        onChange={e => this.setMedicalRecordDetail("diagnosis", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.TextArea 
                        label="Treatment" 
                        placeholder="" 
                        onChange={e => this.setMedicalRecordDetail("treatment", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.TextArea 
                        label="Recommendation" 
                        placeholder="" 
                        onChange={e => this.setMedicalRecordDetail("recommendation", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.TextArea 
                        label="Appointment" 
                        placeholder="" 
                        onChange={e => this.setMedicalRecordDetail("appointment", e.target.value)}
                    />
                  </Form.Group>
                </Form>
                <Button content="Next" icon="right arrow" labelPosition="right" />
              </Segment>
            </Grid.Column>
          </Grid>
          </div>
        );
  }
}
