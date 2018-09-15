import React, { Component } from 'react';
import {
  Grid, Menu, Segment, Container, Divider, Header,
  Icon, Image, Table, Label, List, Dropdown, Item,
  Responsive, Sidebar, Visibility, Statistic, Button,
  Modal, Popup, Form, TextArea, Pagination
}from 'semantic-ui-react'
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



export default class ShowFormNurse extends Component {
state = {
    visitNumber: "",
    presentIllness: '',
    physicalExem: '',
    diagnosis: '',
    treatment: '',
    recommendation: '',
    // appointment: this.props.medicalRecord.appointment,
  };
handleChangeDate=(date)=> {
  console.log(date)
    this.setState({
      startDate: date
    });
  }

  render() {


    return (
      <div>
        <Header as='h2'color='grey'>Medical Record</Header> 
        <Segment style={{backgroundColor:'#313334',color:'#FFFFFF',border:0}}>
            <Grid >
                  <Grid.Column width={5}>
                  <Icon name='calendar alternate outline' />
                      DATE: Mon 13 Augus 2018 
                  </Grid.Column>
                  <Grid.Column width={5}>
                     <Icon name='clock outline'/>
                     Time: 18:00 PM
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Icon name='file alternate outline'/>
                     VN: 1233/3
                  </Grid.Column>

                  <Grid.Row style={{marginTop:-20}}>
                  <Grid.Column width={5}>
                    <Icon name='star outline'/>
                        Pilivage:father Big
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Icon name='hospital outline'/>
                        Clinic: Kanonyabun Clinic
                  </Grid.Column>
              
            </Grid.Row>

            </Grid>
        </Segment>
       
        
        {/* <Icon /> */}
    

    {/* <Label size='large' color='yellow' icon>
        <Icon name='file alternate outline'/>
        VN: 1233/3
        <Icon />
    </Label> */}

    {/* <Label  size='large' color='yellow' icon>
        <Icon name='star outline'/>
        Pilivage:father Big
        <Icon />
    </Label> */}

    {/* <Label size='large' color='yellow' icon>
      <Icon name='hospital outline'/>
      Clinic: Kanonyabun Clinic
      <Icon />
    </Label> */}
          <p></p>        
        {/* <h4><Icon name='clipboard outline' />Medical Record</h4> */}
        <Grid.Column width={6}>
          <Segment.Group >
            <Segment  >
              <Scrollbars autoHide style={{ height: 480 }}>
                <Container>
                 
                  <Form>
                    <Form.TextArea label='Present Illness' placeholder='Tell us more about you...' />
                  </Form>
                  <br />
                  <Form>
                    <Form.TextArea label='Physical Exam' placeholder='Tell us more about you...' />
                  </Form>
                  <br />
                  <Form>
                    <Form.TextArea label='Investigation' placeholder='Tell us more about you...' />
                  </Form>
                  <br />
                  <Form>
                    <Form.TextArea label='Dianosis / impression' placeholder='Tell us more about you...' />
                  </Form>
                  <br />
                  <Form>
                    <Form.TextArea label='Treatment' placeholder='Tell us more about you...' />
                  </Form>
                  <br />
                  <Form>
                    <Form.TextArea label='Recommendation and Plan ' placeholder='Tell us more about you...' />
                  </Form>
                  <br /> <br />
                  <Grid>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <Icon name='calendar alternate outline' />F/D Date
                  
                      <Form style={style.ColumnDates}>
                          <DatePicker
                              selected={this.state.startDate}
                              onChange={(e)=>this.handleChangeDate(e)}
                              minDate={moment()}
                              dateFormat="ddd DD MMMM YYYY"
                              showDisabledMonthNavigation
                              placeholderText="Select an appointment date"
                          />
                  </Form>
                    </Grid.Column>
                    <Grid.Column width={1}>
                      
                    </Grid.Column>
                    <Grid.Column width={1}>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    </Grid.Column>
                    <Grid.Column width={1}>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Icon name='pencil alternate'/>SIGN
                        <Header style={{marginTop:10}} as='h4'>Dr.Nempoo Solamakmeesuk</Header>
                        <Divider style={{marginTop:-2}}/>
                           
                        
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:-25}}>
                    <Grid.Column width={1}>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    </Grid.Column>
                    <Grid.Column width={1}>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    </Grid.Column>
                    <Grid.Column width={1}>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Button
                            color="teal"
                            content="Send To Doctor"
                            icon="send"
                            style={style.ButtonNurse}
                            onClick={() => this.props.showPopupConfirm()}
                        />
                    </Grid.Column>
              </Grid.Row>
                  </Grid >

                </Container>
              </Scrollbars>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </div>
    )
  }
}