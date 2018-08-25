import React from 'react';
import moment from 'moment';
import { Button, Segment, Input, Grid, List, Label, Form, TextArea, Message, Tab, Card ,Header } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';
import { style } from './queueCss'
import PageTab1 from './pageTab1'
import swal from 'sweetalert2'
import { Scrollbars } from 'react-custom-scrollbars'

class Pharmacy extends React.Component {

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
                                <Form>
                                    <p style={style.topicDoc} ><b>Treatment</b></p>
                                    <Form.Field
                                        control={TextArea}
                                        placeholder='Enter Treatment ...'
                                        style={style.inputFieldDoc} disabled />
                                </Form>

                                <Form>
                                    <p style={style.topicDoc}><b>Recommendation and Plan</b></p>
                                    <Form.Field
                                        control={TextArea}
                                        placeholder='Enter Recommendation and Plan ...'
                                        style={style.inputFieldDoc} disabled />
                                </Form>

                                <Grid columns='two'>
                                    <Grid.Row columns={2}>
                                        <Grid.Column>
                                            <p style={style.topicTime}><b>F/U Date</b></p>
                                            <Message style={style.ColumnDate} visible>เสาร์, 18 สิงหาคม 2561</Message>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <p style={style.topicNameDoc}><b>ลงชื่อแพทย์ผู้รักษา</b></p>
                                            <Message style={style.ColumnDoc} visible>นพ. ประสม ประสงค์สุขสันต์</Message>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={2}>
                                        <Grid.Column>
                                            
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Button 
                                                color='teal' 
                                                content='Send To Payment' 
                                                icon='send' 
                                                style={style.ButtonDoctor} 
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
        
export default Pharmacy;