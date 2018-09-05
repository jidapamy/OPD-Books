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
  Header,
  Divider
} from "semantic-ui-react";

import { style } from "./../../Static/Style/QueueCss";

export default class FromForDoctor extends Component {
  state = {
    visitNumber: "",
    presentIllness: '',
    physicalExem: '',
    diagnosis: '',
    treatment: '',
    recommendation: '',
    appointment: this.props.medicalRecord.appointment,
  };

  setField = (field, value) => {
    this.props.setMedicalRecordDetail(field, value);
    this.setState({ [field]: value });
  };

  submit = () => {
    this.props.showPopupConfirm();
    this.cleanField();
  }

  cleanField = () => {
    this.setState({
      visitNumber: "",
      presentIllness: '',
      physicalExem: '',
      diagnosis: '',
      treatment: '',
      recommendation: '',
      appointment: this.props.medicalRecord.appointment,
    });
  };

  componentWillReceiveProps = (nextProps) => {
    let emp = nextProps.empLogin;
    if (emp.position === 4) { // Pharmacy
      this.setState(nextProps.medicalRecord);
    } 
  };

  componentWillMount = () => {
    let emp = this.props.empLogin;
     if (emp.position === 4) {
       // Pharmacy
       this.setState(this.props.medicalRecord);
     } 
  };


  showfield = (disabledDoctorField) => {
    if(this.props.empLogin.position === 3){
      return <span>
      <p style={style.topicDoc}>
              <b>Present Illness</b>
            </p>
            <Form.Field
              control={TextArea}
              placeholder="Enter Present Illness ..."
              style={style.inputFieldDoc}
              onChange={e => this.setField("presentIllness", e.target.value)}
              value={this.state.presentIllness}
              disabled={disabledDoctorField}
            />
            <p style={style.topicDoc}>
              <b>Physical Exam</b>
            </p>
            <Form.Field
              control={TextArea}
              placeholder="Enter Physical Exam ..."
              style={style.inputFieldDoc}
              onChange={e => this.setField("physicalExem", e.target.value)}
              value={this.state.physicalExem}
              disabled={disabledDoctorField}
            />
          
            <p style={style.topicDoc}>
              <b>Diagnosis / Impression</b>
            </p>
            <Form.Field
              control={TextArea}
              placeholder="Enter Diagnosis / Impression ..."
              style={style.inputFieldDoc}
              onChange={e => this.setField("diagnosis", e.target.value)}
              value={this.state.diagnosis}
              disabled={disabledDoctorField}
            />
            </span>
    }
    return ''
  }

  render() {
    let disabledDoctorField = false;
    disabledDoctorField = this.props.patient.citizenId == null || this.props.empLogin.position !== 3;
    console.log("DOCTOR FORM PROPS:!!",this.props)
    console.log("DOCTOR FORM STATE:!!", this.state);
    
    return <div>
        <Form>
          {this.showfield(disabledDoctorField)}
          <p style={style.topicDoc}>
            <b>Treatment</b>
          </p>
          <Form.Field 
            control={TextArea} 
            placeholder="Enter Treatment ..." 
            style={style.inputFieldDoc} 
            onChange={e => this.setField("treatment", e.target.value)} 
            value={this.state.treatment} 
            disabled={disabledDoctorField}/>

          <p style={style.topicDoc}>
            <b>Recommendation and Plan</b>
          </p>
          <Form.Field 
            control={TextArea} 
            placeholder="Enter Recommendation and Plan ..." 
            style={style.inputFieldDoc} 
            onChange={e => this.setField("recommendation", e.target.value)} 
            value={this.state.recommendation} 
            disabled={disabledDoctorField}/>
        </Form>

        <Grid columns="two">
          <Grid.Row columns={2} style={style.ButtonNurse2}>
            <Grid.Column>
              <p style={style.topicTime}>
                <b>F/U Date</b>
              </p>
              <Message style={style.ColumnDate} visible>
                {this.state.appointment}
              </Message>
            </Grid.Column>
            <Grid.Column>
              <p style={style.topicNameDoc}>
                <b>Sign</b>
              </p>
              <p style={style.ColumnDoc}>{this.props.medicalRecord.doctorName}</p>
              <p style={style.dividerDeco}><Divider /></p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column />
            <Grid.Column>
              <Button color="teal" content="Send To Pharmacy" icon="send" style={style.ButtonDoctor} onClick={() => this.submit()} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
  }
}
