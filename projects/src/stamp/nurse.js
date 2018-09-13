import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Button, Segment, Input, Grid, List, Label, Form, TextArea, Message, Tab, Card,Header  } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';
import { style } from './queueCss'
import PageTab1 from './pageTab1'
import swal from 'sweetalert2'
import { Scrollbars } from 'react-custom-scrollbars'

class Nurse extends React.Component {

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


    state = {}

    handleContextRef = contextRef => this.setState({ contextRef })

    handleToggle = () => this.setState({ active: !this.state.active })

  showPopupConfirm = async () => {
    swal({
      title: 'ยืนยันการบันทึกข้อมูล?',
      text: "ข้าพเจ้ายืนยันว่าข้อมูลที่กรอกถูกต้องตามความเป็นจริง",
      type: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#1FCB4A',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',

    }).then((result) => {
      if (result.value) {
          swal(
            'บันทึกข้อมูลสำเร็จ!',
            'xxxxxxxxxxxxxxxx',
            'success',
          )
      }
    })
  }




    render() {
        const panes = [
            { menuItem: 'ประวัติผู้ป่วย', render: () => <Tab.Pane><PageTab1/></Tab.Pane>}
          ]

          const { active, contextRef } = this.state
        return (

            <div style={style.centerr}>
                
                               
                <Grid columns='equal' style={style.box}>

                    <Grid.Column width={3}>
                        <Segment>
                            <p style={style.head}><b>Queue</b></p>
                            <Scrollbars style={{ width: 185, height: 400 }}>
                            <List divided relaxed>
                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            001
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN HP2312</List.Header>
                                                <List.Description as='a'>Mr. Tegan Mcloughlin</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>
                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            002
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>

                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            003
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>

                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            004
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>

                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            005
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>

                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            006
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>

                            <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            001
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>
                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            002
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>

                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            003
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>

                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            004
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>

                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            005
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>

                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            006
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>


                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            001
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>
                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            002
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>

                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            003
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>

                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            004
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>

                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            005
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>

                                <List.Item style={style.edit}>
                                    <Grid>

                                        <Grid.Column width={4} style={style.queueNo}>
                                            006
                                </Grid.Column>
                                        <Grid.Column width={12}>
                                            <List.Content>
                                                <List.Header as='a' style={style.hnNo}>HN 0000/00</List.Header>
                                                <List.Description as='a'>Notphattri Buntam</List.Description>
                                            </List.Content>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>

                                
                            </List>
                            </Scrollbars>
                        </Segment>
             

                    </Grid.Column>
                    
                    <Grid.Column width={5}>
                        
                        <Tab panes={panes} />
                      
                    </Grid.Column>

                    
                 

                        <Grid.Column>

                            <Segment width={8}>
                            <Header style={style.headForm} as='h5' block inverted color='grey'>
                                   
                                   <List divided relaxed>
                                   <List.Item >
                                       <Grid columns='three' style={style.headText}>
                                           <Grid.Row>
                                               <Grid.Column>
                                               Date: &nbsp;&nbsp;Sun, 26 Aug 2018
                                               </Grid.Column>
                                               <Grid.Column>
                                               Time: &nbsp;&nbsp;02:56 AM.
                                               </Grid.Column>
                                               <Grid.Column>
                                               VN: &nbsp;&nbsp;1067/3
                                               </Grid.Column>
                                           </Grid.Row>
                                           <Grid.Row style={style.headMargin}>
                                               <Grid.Column width={5}>
                                               Privilege: &nbsp;&nbsp;-
                                               </Grid.Column>
                                               <Grid.Column width={11}>
                                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clinic: &nbsp;&nbsp;คลินิกศูนย์แพทย์พัฒนา
                                               </Grid.Column>
                                           </Grid.Row>
                                       </Grid>
                                   </List.Item>
                                   </List>     
                               </Header>
                                <List divided relaxed>

                                    <List.Item><br />

                                        <Grid columns='three'>
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <p style={style.topic1}><b>HT:</b></p>
                                                    <Input
                                                        label={{ basic: true, content: 'cm.' }}
                                                        labelPosition='right'
                                                        placeholder='HT ...'
                                                        style={style.input1}
                                                    />
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <p style={style.topic2}><b>T:</b></p>
                                                    <Input
                                                        label={{ basic: true, content: 'C' }}
                                                        labelPosition='right'
                                                        placeholder='Temperature ...'
                                                        style={style.input2}
                                                    />
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <p style={style.topic3}><b>BP1:</b></p>
                                                    <Input
                                                        label={{ basic: true, content: 'mm/Hg' }}
                                                        labelPosition='right'
                                                        placeholder='BP1 ...'
                                                        style={style.input3}
                                                    />
                                                </Grid.Column>
                                            </Grid.Row>


                                            <Grid.Row style={style.Row}>
                                                <Grid.Column>
                                                    <p style={style.topic1}><b>BW:</b></p>
                                                    <Input
                                                        label={{ basic: true, content: 'Kg.' }}
                                                        labelPosition='right'
                                                        placeholder='BodyWeigh ...'
                                                        style={style.input1}
                                                    />
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <p style={style.topic2}><b>PR:</b></p>
                                                    <Input
                                                        label={{ basic: true, content: '/min' }}
                                                        labelPosition='right'
                                                        placeholder='PulseRate ...'
                                                        style={style.input2}
                                                    />
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <p style={style.topic3}><b>BP2:</b></p>
                                                    <Input
                                                        label={{ basic: true, content: 'mm/Hg' }}
                                                        labelPosition='right'
                                                        placeholder='BP2 ...'
                                                        style={style.input3}
                                                    />
                                                </Grid.Column>
                                            </Grid.Row>

                                            <Grid.Row style={style.Row}>
                                                <Grid.Column>
                                                    <p style={style.topic1}><b>BMI:</b></p>
                                                    <Input
                                                        label={{ basic: true, content: '-' }}
                                                        labelPosition='right'
                                                        placeholder='BMI ...'
                                                        style={style.input1}
                                                    />
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <p style={style.topic2}><b>RR:</b></p>
                                                    <Input
                                                        label={{ basic: true, content: '/min' }}
                                                        labelPosition='right'
                                                        placeholder='PR ...'
                                                        style={style.input2}
                                                    />
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <p style={style.topic3}><b>BP3:</b></p>
                                                    <Input
                                                        label={{ basic: true, content: 'mm/Hg' }}
                                                        labelPosition='right'
                                                        placeholder='BP3 ...'
                                                        style={style.input3}
                                                    />
                                                </Grid.Column>
                                            </Grid.Row>

                                        </Grid>
                                    </List.Item>

                                </List>



                                <Form>
                                    <p style={style.topicChief}><b>Chief Plaint</b></p>
                                    <Form.Field
                                        control={TextArea}
                                        placeholder='Enter Patient Symptoms ...'
                                        style={style.inputField} />
                                </Form>
                                <br />


                                <Grid columns='two'>
                                    <Grid.Row columns={2}>
                                        <Grid.Column>
                                        <p style={style.topicNameNurse}><b>ลงชื่อ</b></p>
                                            <Message style={style.ColumnNurse} visible>นางสาวพยาบาล จริงๆนะจ้ะ</Message>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Button 
                                                color='teal' 
                                                content='Send To Doctor' 
                                                icon='send' 
                                                style={style.ButtonNurse} 
                                                onClick =  { ()=>this.showPopupConfirm()}
                                                
                                            />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>

                                
                            </Segment>

                        </Grid.Column>

                </Grid>




            </div>




                );
            }
        }
        
export default Nurse;