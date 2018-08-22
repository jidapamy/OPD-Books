import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Button, Segment, Input, Grid, List, Label, Form, TextArea, Message, Tab, Card ,Visibility ,Sticky } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';
import { style } from './queueCss'
import PageTab1 from './pageTab1'
import PageTab2 from './pageTab2'

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




    render() {
        const panes = [
            { menuItem: 'ประวัติผู้ป่วย', render: () => <Tab.Pane><PageTab1/></Tab.Pane>}
          ]

          const { active, contextRef } = this.state
        return (

            <div>
                
                <Grid columns='equal' style={style.box}>

                    <Grid.Column width={3}>
                    <Sticky context={contextRef}>
            
                        <Segment>
                            <p style={style.head}><b>Queue</b></p>

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

                                

                            </List>

                        </Segment>
                    </Sticky>

                    </Grid.Column>
                    
                    <Grid.Column width={5}>
                        <Sticky>
                        <Tab panes={panes} />
                        </Sticky>
                    </Grid.Column>

                    
                 

                        <Grid.Column>
                            <Segment width={8}>
                                <Label as='a' color='teal' ribbon style={style.ribbonDoc}>
                                    Please Fill Out This Section ( Form Doctor )
                            </Label> <br /><br />
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
                                            <Button color='teal' content='Send To Payment' icon='send' style={style.ButtonDoctor} />
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