import React from "react";
import {
    Grid, Menu, Segment, Container, Divider, Header,
    Icon, Image, Table, Label, List, Dropdown, Item,
    Responsive, Sidebar, Visibility, Statistic, Button,
    Modal, Popup, Form, TextArea, Pagination
} from "semantic-ui-react";
import { Scrollbars } from 'react-custom-scrollbars';
//service
import { getPatient } from './../../Service/ManagePatientMethod';
import FromAddressPatient from './../Components/FromAddressPatient';

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

const style = {
    ImButton: {
        cursor: 'pointer'
    },
    colorsort: {
        color: "#00B5AD"
    },
    colorHis: {
        color: "#AFB4B7",
        fontSize: '12px',
    },
    colorDes: {
        color: "#808B96  ",
    },
    colorNavMobile: {
        color: "#62E6C5",
    },
    colorFontMobile: {
        color: "##FFFFFF"
    },
}
export default class FromHisProfilePatient extends React.Component {

    
   
    render() {
        return (
            
                
                <Grid.Column width={5}>
                <Segment.Group >
                    <Segment color='teal'>
                        <List divided relaxed>
                            <List.Item>

                                <List.Content floated='right'>
                                    <List.Description as='a' >
                                        <span style={style.colorsort}>
                                            <Icon name='calendar alternate outline' size='small' />
                                        </span> <Dropdown
                                            scrolling
                                            compact
                                            searchInput={{ type: 'number' }}
                                            options={Years}
                                            placeholder='Years'
                                        />
                                    </List.Description>
                                </List.Content>
                                <p><Icon name='history' />Medical History</p>
                            </List.Item>
                        </List>

                        <Divider />
                        <Container>
                            <Grid>
                                <Grid.Column >
                                    <Scrollbars autoHide style={{ height: 614 }}>
                                        <List divided relaxed>
                                            <List.Item>
                                                <List.Content>
                                                    <List.Content floated='right'>
                                                        <List.Description as='a' >
                                                            <Icon name='calendar alternate outline' size='small' />
                                                            <span style={style.colorHis}>11/07/2013</span>
                                                        </List.Description>
                                                    </List.Content>
                                                    <List.Header as='a'>Treatment</List.Header>
                                                    <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                                                    <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <List.Content floated='right'>
                                                        <List.Description as='a' >
                                                            <Icon name='calendar alternate outline' size='small' />
                                                            <span style={style.colorHis}>11/07/2013</span>
                                                        </List.Description>
                                                    </List.Content>
                                                    <List.Header as='a'>Treatment</List.Header>
                                                    <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                                                    <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <List.Content floated='right'>
                                                        <List.Description as='a' >
                                                            <Icon name='calendar alternate outline' size='small' />
                                                            <span style={style.colorHis}>11/07/2013</span>
                                                        </List.Description>
                                                    </List.Content>
                                                    <List.Header as='a'>Treatment</List.Header>
                                                    <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                                                    <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <List.Content floated='right'>
                                                        <List.Description as='a' >
                                                            <Icon name='calendar alternate outline' size='small' />
                                                            <span style={style.colorHis}>11/07/2013</span>
                                                        </List.Description>
                                                    </List.Content>
                                                    <List.Header as='a'>Treatment</List.Header>
                                                    <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                                                    <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <List.Content floated='right'>
                                                        <List.Description as='a' >
                                                            <Icon name='calendar alternate outline' size='small' />
                                                            <span style={style.colorHis}>11/07/2013</span>
                                                        </List.Description>
                                                    </List.Content>
                                                    <List.Header as='a'>Treatment</List.Header>
                                                    <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                                                    <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <List.Content floated='right'>
                                                        <List.Description as='a' >
                                                            <Icon name='calendar alternate outline' size='small' />
                                                            <span style={style.colorHis}>11/07/2013</span>
                                                        </List.Description>
                                                    </List.Content>
                                                    <List.Header as='a'>Treatment</List.Header>
                                                    <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                                                    <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <List.Content floated='right'>
                                                        <List.Description as='a' >
                                                            <Icon name='calendar alternate outline' size='small' />
                                                            <span style={style.colorHis}>11/07/2013</span>
                                                        </List.Description>
                                                    </List.Content>
                                                    <List.Header as='a'>Treatment</List.Header>
                                                    <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                                                    <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <List.Content floated='right'>
                                                        <List.Description as='a' >
                                                            <Icon name='calendar alternate outline' size='small' />
                                                            <span style={style.colorHis}>11/07/2013</span>
                                                        </List.Description>
                                                    </List.Content>
                                                    <List.Header as='a'>Treatment</List.Header>
                                                    <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                                                    <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <List.Content floated='right'>
                                                        <List.Description as='a' >
                                                            <Icon name='calendar alternate outline' size='small' />
                                                            <span style={style.colorHis}>11/07/2013</span>
                                                        </List.Description>
                                                    </List.Content>
                                                    <List.Header as='a'>Treatment</List.Header>
                                                    <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                                                    <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <List.Content floated='right'>
                                                        <List.Description as='a' >
                                                            <Icon name='calendar alternate outline' size='small' />
                                                            <span style={style.colorHis}>11/07/2013</span>
                                                        </List.Description>
                                                    </List.Content>
                                                    <List.Header as='a'>Treatment</List.Header>
                                                    <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                                                    <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <List.Content floated='right'>
                                                        <List.Description as='a' >
                                                            <Icon name='calendar alternate outline' size='small' />
                                                            <span style={style.colorHis}>11/07/2013</span>
                                                        </List.Description>
                                                    </List.Content>
                                                    <List.Header as='a'>Treatment</List.Header>
                                                    <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                                                    <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </Scrollbars>
                                </Grid.Column>
                            </Grid>
                        </Container>
                    </Segment>
                </Segment.Group>
            </Grid.Column>

           
          
        );
    }
}
