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


export default class InfoPatientMobile extends React.Component {

    render() {
        return (
            <div>
            <Segment style={{ borderRadius: '1.3rem' }}>
                    <h4><Icon name='stethoscope' />Allergy</h4>
                    <Divider />
                    <br />
                <Grid style={{ paddingLeft: '3em' }}>

                    <Grid.Row>
                        <Grid.Column >
                                <Header as='h5'><Icon name='pills' />Allergy : {this.props.patient.allergy}</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <Header as='h5'><Icon name='star outline' />Privilege : {this.props.patient.privilege}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ borderRadius: '1.3rem' }}>
                    <h4><Icon name='text telephone' />Contact</h4>
                    <Divider />
                    <br />
                    <Grid style={{ paddingLeft: '3em' }}>

                        <Grid.Row>
                            <Grid.Column >
                                <Header as='h5'><Icon name='phone' />Phone No. : {this.props.patient.mobileNumber}</Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column >
                                <Header as='h5'><Icon name='phone' />Home No. : {this.props.patient.homePhonenumber}</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Segment>



            <Segment style={{ borderRadius: '1.3rem' }}>
                    <h4><Icon name='file alternate outline' />Information</h4>
                    <Divider />
                    <br />
                <Grid style={{ paddingLeft: '3em' }}>
                    <Grid.Row>
                        <Grid.Column >
                            <Header as='h5'><Icon name='birthday cake' />Birth Day : {this.props.patient.dob}</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <Header as='h5'><Icon name='transgender' />Gender : {this.props.patient.gender}</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <Header as='h5'><Icon name='tint' />Blood Group : {this.props.patient.bloodgroup}</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <Header as='h5'><Icon name='heart outline' />Status : {this.props.patient.status}</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <Header as='h5'><Icon name='world' />Nation : {this.props.patient.nationality}</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <Header as='h5'><Icon name='flag' />Country : {this.props.patient.country}</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <Header as='h5'><Icon name='university' />Religion : {this.props.patient.religion}</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <Header as='h5'><Icon name='suitcase' />Occupartion : {this.props.patient.occupartion}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <br />
            </div>
        );
    }
}

