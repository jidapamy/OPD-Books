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
import DatePicker from 'react-datepicker';
import moment from 'moment';



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

<<<<<<< HEAD
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div>

        <Form>
          <p style={style.topicDoc}>
            <b>Present Illness</b>
          </p>
          <Form.Field
            control={TextArea}
            placeholder="Enter Present Illness ..."
            style={style.inputFieldDoc}
          />
        </Form>
        <Form>
          <p style={style.topicDoc}>
            <b>Physical Exam</b>
          </p>
          <Form.Field
            control={TextArea}
            placeholder="Enter Physical Exam ..."
            style={style.inputFieldDoc}
          />
        </Form>
        <Form>
          <p style={style.topicDoc}>
            <b>Investigation</b>
          </p>
          <Form.Field
            control={TextArea}
            placeholder="Enter Investigation ..."
            style={style.inputFieldDoc}
          />
        </Form>
        <Form>
          <p style={style.topicDoc}>
            <b>Diagnosis / Impression</b>
          </p>
          <Form.Field
            control={TextArea}
            placeholder="Enter Diagnosis / Impression ..."
            style={style.inputFieldDoc}
          />
        </Form>
        <Form>
          <p style={style.topicDoc}>
            <b>Treatment</b>
          </p>
          <Form.Field
            control={TextArea}
            placeholder="Enter Treatment ..."
            style={style.inputFieldDoc}
          />
        </Form>

        <Form>
          <p style={style.topicDoc}>
            <b>Recommendation and Plan</b>
          </p>
          <Form.Field
            control={TextArea}
            placeholder="Enter Recommendation and Plan ..."
            style={style.inputFieldDoc}
          />
=======
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
>>>>>>> 1c72c534c6d697cb7993a88e64167d42d9136ca0
        </Form>

        <Grid columns="two">
          <Grid.Row columns={2} style={style.ButtonNurse2}>
            <Grid.Column>
              <p style={style.topicTime}>
                <b>F/U Date</b>
              </p>
<<<<<<< HEAD
              <Form style={style.ColumnDate}>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  minDate={moment()}
                  dateFormat="DD/MM/YYYY"
                  showDisabledMonthNavigation
                  placeholderText="Select an appointment date"
                  
                />
              </Form>
            </Grid.Column>
            <Grid.Column>
              <p style={style.topicNameDoc}>
                <b>ลงชื่อแพทย์ผู้รักษา</b>
              </p>
              <p style={style.ColumnDoc}>นพ. ประสม ประสงค์สุขสันต์ </p>
=======
              <Message style={style.ColumnDate} visible>
                {this.state.appointment}
              </Message>
            </Grid.Column>
            <Grid.Column>
              <p style={style.topicNameDoc}>
                <b>Sign</b>
              </p>
              <p style={style.ColumnDoc}>{this.props.medicalRecord.doctorName}</p>
>>>>>>> 1c72c534c6d697cb7993a88e64167d42d9136ca0
              <p style={style.dividerDeco}><Divider /></p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column />
            <Grid.Column>
<<<<<<< HEAD
              <Button
                color="teal"
                content="Send To Pharmacy"
                icon="send"
                style={style.ButtonDoctor}
                onClick={() => this.showPopupConfirm()}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div >
    );
=======
              <Button color="teal" content="Send To Pharmacy" icon="send" style={style.ButtonDoctor} onClick={() => this.submit()} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
>>>>>>> 1c72c534c6d697cb7993a88e64167d42d9136ca0
  }
}
