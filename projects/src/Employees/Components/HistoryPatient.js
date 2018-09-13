import React, { Component } from 'react';
import {
  Grid, Menu, Segment, Container, Divider, Header,
  Icon, Image, Table, Label, List, Dropdown, Item,
  Responsive, Sidebar, Visibility, Statistic, Button,
  Modal, Popup, Form, TextArea, Pagination,Input
}from 'semantic-ui-react'
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { style } from "./../../Static/Style/QueueCss";
<<<<<<< HEAD:projects/src/Employees/Components/HistoryPatient.js


// const style = {
//   ImButton: {
//     cursor: 'pointer'
//   },
//   colorsort: {
//     color: "#00B5AD"
//   },
//   colorHis: {
//     color: "#AFB4B7",
//     fontSize: '12px',
//   },
//   colorDes: {
//     color: "#808B96  ",
//   },
//   colorNavMobile: {
//     color: "#62E6C5",
//   },
//   colorFontMobile: {
//     color: "##FFFFFF"
//   },
// }
const Years = [
  { key: 2012, text: '2012', value: 2012 },
  { key: 2013, text: '2012', value: 2013 },
  { key: 2014, text: '2012', value: 2014 },
  { key: 2015, text: '2012', value: 2015 },
  { key: 2016, text: '2016', value: 2016 },
  { key: 2017, text: '2017', value: 2017 },
  { key: 2018, text: '2018', value: 2018 },
  { key: 2019, text: '2019', value: 2019 },
  { key: 2020, text: '2020', value: 2020 },
  { key: 2021, text: '2021', value: 2021 },
  { key: 2022, text: '2022', value: 2022 },
  { key: 2023, text: '2023', value: 2023 },
  { key: 2024, text: '2024', value: 2024 },
  { key: 2025, text: '2025', value: 2025 },
  { key: 2026, text: '2026', value: 2026 },
  { key: 2027, text: '2027', value: 2027 },
  { key: 2028, text: '2028', value: 2028 },
  { key: 2029, text: '2029', value: 2029 },
  { key: 2030, text: '2030', value: 2030 },
  { key: 2031, text: '2031', value: 2031 },
]

export default class ShowFormNurse extends Component {
state = {
    openmodal: false
  }
handleChangeDate=(date)=> {
  console.log(date)
    this.setState({
      startDate: date
    });
  }

=======
import TreatmentHistory from "./TreatmentHistory";

export default class Tab2History extends React.Component {
>>>>>>> 1828b2a30f381c9425c11cea5c59a74c4dbf2835:projects/src/Employees/Components/Tab2History.js
  render() {

<<<<<<< HEAD:projects/src/Employees/Components/HistoryPatient.js

    return (
      <div>
       
<Header as='h2'color='grey'>Medical History</Header>
<Scrollbars autoHide style={{ height: 580 }}>
       <Table  striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>status</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell >Date</Table.HeaderCell>
        <Table.HeaderCell >Dr.Name</Table.HeaderCell>
        <Table.HeaderCell >Clinic</Table.HeaderCell>
        <Table.HeaderCell >More..</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
   
    <Table.Body>
    
      <Table.Row>
          
        <Table.Cell>Treatment</Table.Cell>
        <Table.Cell>Mr.surakiti Sopontanapt</Table.Cell>
        <Table.Cell >14/08/2018</Table.Cell>
        <Table.Cell >Dr.Sunisa Saponnakor</Table.Cell>
        <Table.Cell >Kukgument Clinic</Table.Cell>
        <Table.Cell ><Button circular textAlign='right' color='teal' icon='add'onClick={() => this.setState({ openmodal: true })} /></Table.Cell>
        
      </Table.Row>
       <Table.Row>
        <Table.Cell>Treatment</Table.Cell>
        <Table.Cell>Mr.surakiti Sopontanapt</Table.Cell>
        <Table.Cell >14/08/2018</Table.Cell>
        <Table.Cell >Dr.Sunisa Saponnakor</Table.Cell>
        <Table.Cell >Kukgument Clinic</Table.Cell>
        <Table.Cell ><Button circular textAlign='right' color='teal' icon='add'onClick={() => this.setState({ openmodal: true })} /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Treatment</Table.Cell>
        <Table.Cell>Mr.surakiti Sopontanapt</Table.Cell>
        <Table.Cell >14/08/2018</Table.Cell>
        <Table.Cell >Dr.Sunisa Saponnakor</Table.Cell>
        <Table.Cell >Kukgument Clinic</Table.Cell>
        <Table.Cell ><Button circular textAlign='right' color='teal' icon='add'onClick={() => this.setState({ openmodal: true })} /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Treatment</Table.Cell>
        <Table.Cell>Mr.surakiti Sopontanapt</Table.Cell>
        <Table.Cell >14/08/2018</Table.Cell>
        <Table.Cell >Dr.Sunisa Saponnakor</Table.Cell>
        <Table.Cell >Kukgument Clinic</Table.Cell>
        <Table.Cell ><Button circular textAlign='right' color='teal' icon='add'onClick={() => this.setState({ openmodal: true })} /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Treatment</Table.Cell>
        <Table.Cell>Mr.surakiti Sopontanapt</Table.Cell>
        <Table.Cell >14/08/2018</Table.Cell>
        <Table.Cell >Dr.Sunisa Saponnakor</Table.Cell>
        <Table.Cell >Kukgument Clinic</Table.Cell>
        <Table.Cell ><Button circular textAlign='right' color='teal' icon='add'onClick={() => this.setState({ openmodal: true })} /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Treatment</Table.Cell>
        <Table.Cell>Mr.surakiti Sopontanapt</Table.Cell>
        <Table.Cell >14/08/2018</Table.Cell>
        <Table.Cell >Dr.Sunisa Saponnakor</Table.Cell>
        <Table.Cell >Kukgument Clinic</Table.Cell>
        <Table.Cell ><Button circular textAlign='right' color='teal' icon='add'onClick={() => this.setState({ openmodal: true })} /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Treatment</Table.Cell>
        <Table.Cell>Mr.surakiti Sopontanapt</Table.Cell>
        <Table.Cell >14/08/2018</Table.Cell>
        <Table.Cell >Dr.Sunisa Saponnakor</Table.Cell>
        <Table.Cell >Kukgument Clinic</Table.Cell>
        <Table.Cell ><Button circular textAlign='right' color='teal' icon='add'onClick={() => this.setState({ openmodal: true })} /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Treatment</Table.Cell>
        <Table.Cell>Mr.surakiti Sopontanapt</Table.Cell>
        <Table.Cell >14/08/2018</Table.Cell>
        <Table.Cell >Dr.Sunisa Saponnakor</Table.Cell>
        <Table.Cell >Kukgument Clinic</Table.Cell>
        <Table.Cell ><Button circular textAlign='right' color='teal' icon='add'onClick={() => this.setState({ openmodal: true })} /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Treatment</Table.Cell>
        <Table.Cell>Mr.surakiti Sopontanapt</Table.Cell>
        <Table.Cell >14/08/2018</Table.Cell>
        <Table.Cell >Dr.Sunisa Saponnakor</Table.Cell>
        <Table.Cell >Kukgument Clinic</Table.Cell>
        <Table.Cell ><Button circular textAlign='right' color='teal' icon='add'onClick={() => this.setState({ openmodal: true })} /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Treatment</Table.Cell>
        <Table.Cell>Mr.surakiti Sopontanapt</Table.Cell>
        <Table.Cell >14/08/2018</Table.Cell>
        <Table.Cell >Dr.Sunisa Saponnakor</Table.Cell>
        <Table.Cell >Kukgument Clinic</Table.Cell>
        <Table.Cell ><Button circular textAlign='right' color='teal' icon='add'onClick={() => this.setState({ openmodal: true })} /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Treatment</Table.Cell>
        <Table.Cell>Mr.surakiti Sopontanapt</Table.Cell>
        <Table.Cell >14/08/2018</Table.Cell>
        <Table.Cell >Dr.Sunisa Saponnakor</Table.Cell>
        <Table.Cell >Kukgument Clinic</Table.Cell>
        <Table.Cell ><Button circular textAlign='right' color='teal' icon='add'onClick={() => this.setState({ openmodal: true })} /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Treatment</Table.Cell>
        <Table.Cell>Mr.surakiti Sopontanapt</Table.Cell>
        <Table.Cell >14/08/2018</Table.Cell>
        <Table.Cell >Dr.Sunisa Saponnakor</Table.Cell>
        <Table.Cell >Kukgument Clinic</Table.Cell>
        <Table.Cell ><Button circular textAlign='right' color='teal' icon='add'onClick={() => this.setState({ openmodal: true })} /></Table.Cell>
      </Table.Row>
     
     </Table.Body>
    
  </Table>
</Scrollbars>

  <Modal
          open={this.state.openmodal}
          onClose={() => this.setState({ openmodal: false })}
        >
        <Modal.Header textAlign='center'>Medical Records</Modal.Header>
        <Segment style={{backgroundColor:'#313334',color:'#FFFFFF',border:0,marginTop:-10,borderRadius:0}}>
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
          
          <Modal.Content style={{backgroundColor:'#FFFFFF',color:'#FFFFFF',border:0,marginTop:-15}}>
              <Scrollbars autoHide style={{ width: 850, height: 500 }}>
                <List divided relaxed>
                  <List.Item>
                    <Grid columns="three">
                      <Grid.Row>
                        <Grid.Column>
                          <p style={style.showTopic1}>
                            <b>HT:</b>
                          </p>
                          <Input
                            label={{ basic: true, content: "cm." }}
                            labelPosition="right"
                            placeholder="HT ..."
                            style={style.showInput1}
                            disabled
                          />
                        </Grid.Column>

                          <Grid.Column>
                          <p style={style.showTopic2}>
                            <b>T:</b>
                          </p>
                          <Input
                            label={{ basic: true, content: "C" }}
                            labelPosition="right"
                            placeholder="Temperature ..."
                            style={style.showInput2}
                            disabled
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <p style={style.showTopic3}>
                            <b>BP1:</b>
                          </p>
                          <Input
                            label={{ basic: true, content: "mm/Hg" }}
                            labelPosition="right"
                            placeholder="BP1 ..."
                            style={style.showInput3}
                            disabled
                          />
                        </Grid.Column>
                      </Grid.Row>
                      <br />
                      <Grid.Row>
                        <Grid.Column>
                          <p style={style.showTopic1}>
                            <b>BW:</b>
                          </p>
                          <Input
                            label={{ basic: true, content: "Kg." }}
                            labelPosition="right"
                            placeholder="BodyWeigh ..."
                            style={style.showInput1}
                            disabled
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <p style={style.showTopic2}>
                            <b>PR:</b>
                          </p>
                          <Input
                            label={{ basic: true, content: "/min" }}
                            labelPosition="right"
                            placeholder="PulseRate ..."
                            style={style.showInput2}
                            disabled
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <p style={style.showTopic3}>
                            <b>BP2:</b>
                          </p>
                          <Input
                            label={{ basic: true, content: "mm/Hg" }}
                            labelPosition="right"
                            placeholder="BP2 ..."
                            style={style.showInput3}
                            disabled
                          />
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <p style={style.showTopic1}>
                            <b>BMI:</b>
                          </p>
                          <Input
                            label={{ basic: true, content: "-" }}
                            labelPosition="right"
                            placeholder="BMI ..."
                            style={style.showInput1}
                            disabled
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <p style={style.showTopic2}>
                            <b>RR:</b>
                          </p>
                          <Input
                            label={{ basic: true, content: "/min" }}
                            labelPosition="right"
                            placeholder="PR ..."
                            style={style.showInput2}
                            disabled
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <p style={style.showTopic3}>
                            <b>BP3:</b>
                          </p>
                          <Input
                            label={{ basic: true, content: "mm/Hg" }}
                            labelPosition="right"
                            placeholder="BP3 ..."
                            style={style.showInput3}
                            disabled
                          />
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row />
                    </Grid>
                  </List.Item>
                  <Form>
                    <p style={style.showTopicChief}>
                      <b>Chief Plaint</b>
                    </p>
                    <Form.Field
                      control={TextArea}
                      placeholder="Enter Patient Symptoms ..."
                      style={style.showInputField}
                      disabled
                    />
                  </Form>
                  <br />
                  <Grid columns="three">
                    <Grid.Row columns={2}>
                      <Grid.Column />
                      <Grid.Column>
                        <p style={style.topicNameDoc}>
                          <b>ลงชื่อ</b>
                        </p>
                        <p style={style.ColumnDoc}>นางสาวพยาบาล จริงๆนะจ้ะ</p>
                        <p style={style.dividerDeco2}><Divider /></p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Form>
                    <p style={style.showTopicDoc}>
                      <b>Present Illness</b>
                    </p>
                    <Form.Field
                      control={TextArea}
                      placeholder="Enter Present Illness ..."
                      style={style.showInputFieldDoc}
                      disabled
                    />
                  </Form>
                  <Form>
                    <p style={style.showTopicDoc}>
                      <b>Physical Exam</b>
                    </p>
                    <Form.Field
                      control={TextArea}
                      placeholder="Enter Physical Exam ..."
                      style={style.showInputFieldDoc}
                      disabled
                    />
                  </Form>
                  <Form>
                    <p style={style.showTopicDoc}>
                      <b>Investigation</b>
                    </p>
                    <Form.Field
                      control={TextArea}
                      placeholder="Enter Investigation ..."
                      style={style.showInputFieldDoc}
                      disabled
                    />
                  </Form>
                  <Form>
                    <p style={style.showTopicDoc}>
                      <b>Diagnosis / Impression</b>
                    </p>
                    <Form.Field
                      control={TextArea}
                      placeholder="Enter Diagnosis / Impression ..."
                      style={style.showInputFieldDoc}
                      disabled
                    />
                  </Form>
                  <Form>
                    <p style={style.showTopicDoc}>
                      <b>Treatment</b>
                    </p>
                    <Form.Field
                      control={TextArea}
                      placeholder="Enter Treatment ..."
                      style={style.showInputFieldDoc}
                      disabled
                    />
                  </Form>
                  <Form>
                    <p style={style.showTopicDoc}>
                      <b>Recommendation and Plan</b>
                    </p>
                    <Form.Field
                      control={TextArea}
                      placeholder="Enter Recommendation and Plan ..."
                      style={style.showInputFieldDoc}
                      disabled
                    />
                  </Form>
                  <br />

                  <Grid columns="two">
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <p style={style.topicDate}>
                          <b>F/U Date</b>
                        </p>
                        <p style={style.ColumnDoc}>เสาร์, 18 สิงหาคม 2561</p>
                        <p style={style.dividerShowDate}><Divider /></p>
                      </Grid.Column>
                      <Grid.Column>
                        <p style={style.topicNameDoc}>
                          <b>ลงชื่อแพทย์ผู้รักษา</b>
                        </p>
                        <p style={style.ColumnDoc}>นพ. ประสม ประสงค์สุขสันต์</p>
                        <p style={style.dividerDeco2}><Divider /></p>
                      </Grid.Column>
=======
      <div style={style.cardCenter}>

        TEST!!! 
        {/* <Scrollbars autoHide style={{ width: 320, height: 407 }}>
          <Card style={style.contentPosition}>
            <Modal
              trigger={
                <Grid columns="two">
                  <Grid.Row style={style.rowScaleTop}>
                    <Grid.Column style={style.iconCard} width={4}>
                      <Popup
                        trigger={<Icon name="calendar alternate outline" />}
                        content="วันที่เข้ารับการรักษา"
                      />
                    </Grid.Column>
                    <Grid.Column style={style.textCard} width={12}>
                      25 มกราคม 2561
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row style={style.rowScale}>
                    <Grid.Column style={style.iconCard} width={4}>
                      <Popup
                        trigger={<Icon name="hospital outline" />}
                        content="คลินิกที่เข้ารับการรักษา"
                      />
                    </Grid.Column>
                    <Grid.Column style={style.textCard} width={12}>
                      คลินิกศูนย์แพทย์พัฒนา
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row style={style.rowScaleBottom}>
                    <Grid.Column style={style.iconCard} width={4}>
                      <Popup
                        trigger={<Icon name="user md" />}
                        content="แพทย์ที่รักษา"
                      />
                    </Grid.Column>
                    <Grid.Column style={style.textCard} width={12}>
                      นายแพทย์ใจดี สุขใจ
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              }
            >
              <Modal.Header>Medical Records</Modal.Header>
              <Modal.Content image>
                <Modal.Description>

                  <Header style={style.headFormShow} as="h5" block inverted color="grey">
                    <List divided relaxed>
                      <List.Item>
                        <Grid columns="three" style={style.headText}>
                          <Grid.Row>
                            <Grid.Column>
                              Date: &nbsp;&nbsp;Sun, 26 Aug 2018
                  </Grid.Column>
                            <Grid.Column>Time: &nbsp;&nbsp;02:56 AM.</Grid.Column>
                            <Grid.Column>VN: &nbsp;&nbsp;1067/3</Grid.Column>
                          </Grid.Row>
                          <Grid.Row style={style.headMarginShow}>
                            <Grid.Column width={5}>
                              Privilege: &nbsp;&nbsp;-
                  </Grid.Column>
                            <Grid.Column width={11}>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clinic:
                              &nbsp;&nbsp;คลินิกศูนย์แพทย์พัฒนา
                  </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </List.Item>
                    </List>
                  </Header>

                  <Scrollbars autoHide style={{ width: 870, height: 500 }}>
                    <List divided relaxed>
                      <List.Item>
                        <Grid columns="three">
                          <Grid.Row>
                            <Grid.Column>
                              <p style={style.showTopic1}>
                                <b>HT:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "cm." }}
                                labelPosition="right"
                                placeholder="HT ..."
                                style={style.showInput1}
                                disabled
                              />
                            </Grid.Column>

                            <Grid.Column>
                              <p style={style.showTopic2}>
                                <b>T:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "C" }}
                                labelPosition="right"
                                placeholder="Temperature ..."
                                style={style.showInput2}
                                disabled
                              />
                            </Grid.Column>

                            <Grid.Column>
                              <p style={style.showTopic3}>
                                <b>BP1:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "mm/Hg" }}
                                labelPosition="right"
                                placeholder="BP1 ..."
                                style={style.showInput3}
                                disabled
                              />
                            </Grid.Column>
                          </Grid.Row>
                          <br />

                          <Grid.Row>
                            <Grid.Column>
                              <p style={style.showTopic1}>
                                <b>BW:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "Kg." }}
                                labelPosition="right"
                                placeholder="BodyWeigh ..."
                                style={style.showInput1}
                                disabled
                              />
                            </Grid.Column>

                            <Grid.Column>
                              <p style={style.showTopic2}>
                                <b>PR:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "/min" }}
                                labelPosition="right"
                                placeholder="PulseRate ..."
                                style={style.showInput2}
                                disabled
                              />
                            </Grid.Column>

                            <Grid.Column>
                              <p style={style.showTopic3}>
                                <b>BP2:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "mm/Hg" }}
                                labelPosition="right"
                                placeholder="BP2 ..."
                                style={style.showInput3}
                                disabled
                              />
                            </Grid.Column>
                          </Grid.Row>

                          <Grid.Row>
                            <Grid.Column>
                              <p style={style.showTopic1}>
                                <b>BMI:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "-" }}
                                labelPosition="right"
                                placeholder="BMI ..."
                                style={style.showInput1}
                                disabled
                              />
                            </Grid.Column>

                            <Grid.Column>
                              <p style={style.showTopic2}>
                                <b>RR:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "/min" }}
                                labelPosition="right"
                                placeholder="PR ..."
                                style={style.showInput2}
                                disabled
                              />
                            </Grid.Column>
>>>>>>> 1828b2a30f381c9425c11cea5c59a74c4dbf2835:projects/src/Employees/Components/Tab2History.js

                            <Grid.Column>
                              <p style={style.showTopic3}>
                                <b>BP3:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "mm/Hg" }}
                                labelPosition="right"
                                placeholder="BP3 ..."
                                style={style.showInput3}
                                disabled
                              />
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row />
                        </Grid>
                      </List.Item>
                      <Form>
                        <p style={style.showTopicChief}>
                          <b>Chief Plaint</b>
                        </p>
                        <Form.Field
                          control={TextArea}
                          placeholder="Enter Patient Symptoms ..."
                          style={style.showInputField}
                          disabled
                        />
                      </Form>
                      <br />
                      <Grid columns="three">
                        <Grid.Row columns={2}>
                          <Grid.Column />
                          <Grid.Column>
                            <p style={style.topicNameDoc}>
                              <b>ลงชื่อ</b>
                            </p>
                            <p style={style.ColumnDoc}>นางสาวพยาบาล จริงๆนะจ้ะ</p>
                            <p style={style.dividerDeco2}><Divider /></p>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                      <Form>
                        <p style={style.showTopicDoc}>
                          <b>Present Illness</b>
                        </p>
                        <Form.Field
                          control={TextArea}
                          placeholder="Enter Present Illness ..."
                          style={style.showInputFieldDoc}
                          disabled
                        />
                      </Form>
                      <Form>
                        <p style={style.showTopicDoc}>
                          <b>Physical Exam</b>
                        </p>
                        <Form.Field
                          control={TextArea}
                          placeholder="Enter Physical Exam ..."
                          style={style.showInputFieldDoc}
                          disabled
                        />
                      </Form>
                      <Form>
                        <p style={style.showTopicDoc}>
                          <b>Investigation</b>
                        </p>
                        <Form.Field
                          control={TextArea}
                          placeholder="Enter Investigation ..."
                          style={style.showInputFieldDoc}
                          disabled
                        />
                      </Form>
                      <Form>
                        <p style={style.showTopicDoc}>
                          <b>Diagnosis / Impression</b>
                        </p>
                        <Form.Field
                          control={TextArea}
                          placeholder="Enter Diagnosis / Impression ..."
                          style={style.showInputFieldDoc}
                          disabled
                        />
                      </Form>
                      <Form>
                        <p style={style.showTopicDoc}>
                          <b>Treatment</b>
                        </p>
                        <Form.Field
                          control={TextArea}
                          placeholder="Enter Treatment ..."
                          style={style.showInputFieldDoc}
                          disabled
                        />
                      </Form>

<<<<<<< HEAD:projects/src/Employees/Components/HistoryPatient.js
                    </Grid.Row>
                    <br />
                  </Grid>
                </List>
              </Scrollbars>
           
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" onClick={() => this.setState({ openmodal: false })}>
              Close &nbsp;&nbsp;<Icon name="cancel" />
            </Button>
          </Modal.Actions>
        </Modal>
=======
                      <Form>
                        <p style={style.showTopicDoc}>
                          <b>Recommendation and Plan</b>
                        </p>
                        <Form.Field
                          control={TextArea}
                          placeholder="Enter Recommendation and Plan ..."
                          style={style.showInputFieldDoc}
                          disabled
                        />
                      </Form>
                      <br />

                      <Grid columns="two">
                        <Grid.Row columns={2}>
                          <Grid.Column>
                            <p style={style.topicTime}>
                              <b>F/U Date</b>
                            </p>
                            <Message style={style.ColumnDate} visible>
                              เสาร์, 18 สิงหาคม 2561
                            </Message>
                          </Grid.Column>
                          <Grid.Column>
                            <p style={style.topicNameDoc}>
                              <b>ลงชื่อแพทย์ผู้รักษา</b>
                            </p>
                            <p style={style.ColumnDoc}>นพ. ประสม ประสงค์สุขสันต์ </p>
                            <p style={style.dividerDeco2}><Divider /></p>
                          </Grid.Column>
                        </Grid.Row>
                        <br />
                      </Grid>
                    </List>
                  </Scrollbars>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="red">
                  Close &nbsp;&nbsp;<Icon name="cancel" />
                </Button>
              </Modal.Actions>
            </Modal>
          </Card>
        </Scrollbars> */}
>>>>>>> 1828b2a30f381c9425c11cea5c59a74c4dbf2835:projects/src/Employees/Components/Tab2History.js
      </div>
    )
  }
}