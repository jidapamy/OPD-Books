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
        </Form>

        <Grid columns="two">
          <Grid.Row columns={2} style={style.ButtonNurse2}>
            <Grid.Column>
              <p style={style.topicTime}>
                <b>F/U Date</b>
              </p>
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
              <p style={style.dividerDeco}><Divider /></p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column />
            <Grid.Column>
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
      </div>
    );
  }
}
