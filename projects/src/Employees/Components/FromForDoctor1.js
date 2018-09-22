import React, { Component } from 'react';
import {
  Grid, Menu, Segment, Container, Divider, Header,
  Icon, Image, Table, Label, List, Dropdown, Item,
  Responsive, Sidebar, Visibility, Statistic, Button,
  Modal, Popup, Form, TextArea, Pagination
} from 'semantic-ui-react'
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import UnitHeight from '../../Static/Img/unitHeight.png'
import UnitWeight from '../../Static/Img/UnitWeight.png'
import Temperature from '../../Static/Img/temperature.png'
import Pulse from '../../Static/Img/Pulse.png'
import Blood from '../../Static/Img/Blood.png'
import Bmi from '../../Static/Img/bmi.png'
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { style } from "./../../Static/Style/QueueCss";
import { patientField, mdrField } from "./../../Static/Data/Field"



export default class ShowFormNurse extends Component {
  state = {
    presentIllness: '',
    physicalExem: '',
    diagnosis: '',
    treatment: '',
    recommendation: '',
    appointment: null,
    doctorName: "Dr. Carmen Fulton"
  };

  defaultState = () => {
    this.setState({
      presentIllness: '',
      physicalExem: '',
      diagnosis: '',
      treatment: '',
      recommendation: '',
      appointment: null,
    })
  }

  showPopupConfirm = () => {
    console.log(this.state)
    this.props.showPopupConfirm(this.state);
  }

  showButtonForDoctor = () => {
    console.log("SHOW BUTTON DOCTOR", "emp=" + this.props.empPosition, "tab=" + this.props.tab)
    if ((this.props.empPosition === 3 && this.props.tab !== 2)) {
      //doctor
      return <Grid.Row columns={3} style={{ padding: 0 }}>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
        <Grid.Column>
           <Button
            fluid
            color="teal"
            content="Send To Pharmacy"
            icon="send"
            style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
            onClick={() => this.showPopupConfirm()}
          />
        </Grid.Column>
      </Grid.Row>
    }
  }

  showFieldOfDoctor = () => {
    if(this.props.empPosition === 3 ){
      return <div>
      <Form.Group widths="equal">
        <Form.TextArea
          required
          label={mdrField.presentIllness.label}
          placeholder="Enter Patient Symptoms ..."
          onChange={e => this.setState({ [mdrField.presentIllness.variable]: e.target.value })}
          value={this.state[mdrField.presentIllness.variable]}
        />
      </Form.Group>
        <Form.Group widths="equal">
          <Form.TextArea
            required
            label={mdrField.physicalExem.label}
            placeholder="Enter Patient Symptoms ..."
            onChange={e => this.setState({ [mdrField.physicalExem.variable]: e.target.value })}
            value={this.state[mdrField.physicalExem.variable]}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.TextArea
            required
            label={mdrField.diagnosis.label}
            placeholder="Enter Patient Symptoms ..."
            onChange={e => this.setState({ [mdrField.diagnosis.variable]: e.target.value })}
            value={this.state[mdrField.diagnosis.variable]}
          />
        </Form.Group>
      </div>
    }
  }

  componentWillMount = () => {
    console.log("componentWillMount", this.props.medicalRecord)
    if (this.props.medicalRecord) {
      this.setState(this.props.medicalRecord);
    }
  }

  componentWillReceiveProps = (nextProps) => {
    console.log("DOCTOR PROP", nextProps)
    // this.setState({ check : "เข้าไอสัส"});
    // this.setState({ doctorName:nextProps.doctorName })
    this.setState(nextProps.medicalRecord);
    // if (nextProps.resetState) {
    //   this.defaultState()
    // }
  }

  render() {
    const readOnly = (this.props.empPosition === 3 && this.props.tab !== 2) ? false : true
    console.log(this.state)
  return (
    <div>
      <Segment style={{ marginTop: -20 }}>
        <Container style={{ padding: "1% 3%" }}>
          <Form style={{ paddingBottom: "1%" }} disabled>
            {this.showFieldOfDoctor()}
            <Form.Group widths="equal">
              <Form.TextArea
                required
                label={mdrField.treatment.label}
                placeholder="Enter Patient Symptoms ..."
                onChange={e => this.setState({ [mdrField.treatment.variable]: e.target.value })}
                value={this.state[mdrField.treatment.variable]}
                readOnly={readOnly}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.TextArea
                required
                label={mdrField.recommendation.label}
                placeholder="Enter Patient Symptoms ..."
                onChange={e => this.setState({ [mdrField.recommendation.variable]: e.target.value })}
                value={this.state[mdrField.recommendation.variable]}
                readOnly={readOnly}
              />
            </Form.Group>
            {/* </Form> */}
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Form.Field
                    selected={this.state.appointment ? moment(this.state.appointment, 'DD/MM/YYYY') : this.state.appointment}
                    control={DatePicker}
                    label={mdrField.appointment.label}
                    minDate={moment()}
                    required
                    showDisabledMonthNavigation
                    dateFormatCalendar={"MMM YYYY"}
                    placeholderText="ex. 01/01/1990"
                    value={this.state.appointment}
                    onChange={(e) => this.setState({ [mdrField.appointment.variable]: e.format('DD/MM/YYYY') })}
                    readOnly={readOnly}
                  />
                </Grid.Column>
                <Grid.Column></Grid.Column>
                <Grid.Column style={{ alignSelf: "flex-end" }}>
                  <div>{mdrField.doctorName.label}</div>
                  <div style={{ textAlign: "center" }}>{this.state[mdrField.doctorName.variable]}</div>
                  <Divider style={{ margin: "0px", marginTop: "2px" }} />
                </Grid.Column>
              </Grid.Row>
              {this.showButtonForDoctor()}
            </Grid>
          </Form>
        </Container>
      </Segment>
    </div>

    // { this.showButtonForDoctor() }
    //       <Header as='h2'color='grey'>Medical Record</Header> 
    //       <Segment style={{backgroundColor:'#313334',color:'#FFFFFF',border:0}}>
    //           <Grid >
    //                 <Grid.Column width={5}>
    //                 <Icon name='calendar alternate outline' />
    //                     DATE: Mon 13 Augus 2018 
    //                 </Grid.Column>
    //                 <Grid.Column width={5}>
    //                    <Icon name='clock outline'/>
    //                    Time: 18:00 PM
    //                 </Grid.Column>
    //                 <Grid.Column width={5}>
    //                   <Icon name='file alternate outline'/>
    //                    VN: 1233/3
    //                 </Grid.Column>

    //                 <Grid.Row style={{marginTop:-20}}>
    //                 <Grid.Column width={5}>
    //                   <Icon name='star outline'/>
    //                       Pilivage:father Big
    //                 </Grid.Column>
    //                 <Grid.Column width={5}>
    //                   <Icon name='hospital outline'/>
    //                       Clinic: Kanonyabun Clinic
    //                 </Grid.Column>

    //           </Grid.Row>

    //           </Grid>
    //       </Segment> 


    //       <Icon />


    //  <Label size='large' color='yellow' icon>
    //       <Icon name='file alternate outline'/>
    //       VN: 1233/3
    //       <Icon />
    //   </Label>

    //   <Label  size='large' color='yellow' icon>
    //       <Icon name='star outline'/>
    //       Pilivage:father Big
    //       <Icon />
    //   </Label>

    //   <Label size='large' color='yellow' icon>
    //     <Icon name='hospital outline'/>
    //     Clinic: Kanonyabun Clinic
    //     <Icon />
    //   </Label>
    //       <h4><Icon name='clipboard outline' />Medical Record</h4>
    //       <Grid.Column width={6}>
    //         <Segment.Group >
    //           <Segment  >
    //             <Scrollbars autoHide style={{ height: 480 }}>
    //               <Container>

    //                 <Form>
    //                   <Form.TextArea label='Present Illness' placeholder='Tell us more about you...' />
    //                 </Form>
    //                 <br />
    //                 <Form>
    //                   <Form.TextArea label='Physical Exam' placeholder='Tell us more about you...' />
    //                 </Form>
    //                 <br />
    //                 <Form>
    //                   <Form.TextArea label='Investigation' placeholder='Tell us more about you...' />
    //                 </Form>
    //                 <br />
    //                 <Form>
    //                   <Form.TextArea label='Dianosis / impression' placeholder='Tell us more about you...' />
    //                 </Form>
    //                 <br />
    //                 <Form>
    //                   <Form.TextArea label='Treatment' placeholder='Tell us more about you...' />
    //                 </Form>
    //                 <br />
    //                 <Form>
    //                   <Form.TextArea label='Recommendation and Plan ' placeholder='Tell us more about you...' />
    //                 </Form>
    //                 <br /> <br />
    //                 <Grid>
    //                 <Grid.Row>
    //                   <Grid.Column width={4}>
    //                     <Icon name='calendar alternate outline' />F/D Date

    //                     <Form style={style.ColumnDates}>
    //                         <DatePicker
    //                             selected={this.state.startDate}
    //                             onChange={(e)=>this.handleChangeDate(e)}
    //                             minDate={moment()}
    //                             dateFormat="ddd DD MMMM YYYY"
    //                             showDisabledMonthNavigation
    //                             placeholderText="Select an appointment date"
    //                         />
    //                 </Form>
    //                   </Grid.Column>
    //                   <Grid.Column width={1}>

    //                   </Grid.Column>
    //                   <Grid.Column width={1}>
    //                   </Grid.Column>
    //                   <Grid.Column width={4}>
    //                   </Grid.Column>
    //                   <Grid.Column width={1}>
    //                   </Grid.Column>
    //                   <Grid.Column width={4}>
    //                       <Icon name='pencil alternate'/>SIGN
    //                       <Header style={{marginTop:10}} as='h4'>Dr.Nempoo Solamakmeesuk</Header>
    //                       <Divider style={{marginTop:-2}}/>


    //                   </Grid.Column>
    //                 </Grid.Row>
    //                 <Grid.Row style={{marginTop:-25}}>
    //                   <Grid.Column width={1}>
    //                   </Grid.Column>
    //                   <Grid.Column width={4}>
    //                   </Grid.Column>
    //                   <Grid.Column width={1}>
    //                   </Grid.Column>
    //                   <Grid.Column width={4}>
    //                   </Grid.Column>
    //                   <Grid.Column width={1}>
    //                   </Grid.Column>
    //                   <Grid.Column width={5}>
    //                       <Button
    //                           color="teal"
    //                           content="Send To Doctor"
    //                           icon="send"
    //                           style={style.ButtonNurse}
    //                           onClick={() => this.props.showPopupConfirm()}
    //                       />
    //                   </Grid.Column>
    //             </Grid.Row>
    //                 </Grid >

    //               </Container>
    //             </Scrollbars>
    //           </Segment>
    //         </Segment.Group>
    //       </Grid.Column> 
  )
}
}