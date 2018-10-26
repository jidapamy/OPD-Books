import React from "react";
import {
    Grid, Segment, Container, Divider, Header,Icon
} from "semantic-ui-react";
import { patientField, groupInfoPatientField } from "../../../Static/Data/Field"

export default class FromAddressPatient extends React.Component {

    render() {
        return (
            <Grid.Column width={5}>
                <Segment.Group >
                    <Segment color='yellow' attached='top'>
                        <Icon color='yellow' name='pills' />
                        <span style={{ color: '#FFB100' }}> {patientField.allergy.label} : </span> {this.props.patient.allergy} <br />
                        <Icon color='yellow' name='medkit' />
                        <span style={{ color: '#FABD08' }}> {patientField.privilege.label} : </span> {this.props.patient.privilege}
                    </Segment>
                </Segment.Group >
                <Segment.Group >
                    <Segment color='teal'>
                        <h4><Icon name='child' />{groupInfoPatientField.parent.label}</h4>
                        <Divider />
                        <Container>
                            <Grid>
                                <Grid.Column width={6}>
                                    <Header.Subheader >
                                        {groupInfoPatientField.fatherName.label}
                    </Header.Subheader>
                                    <Header.Subheader >
                                        {groupInfoPatientField.motherName.label}
                    </Header.Subheader>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Header.Subheader >
                                        : {this.props.patient.fatherFirstname} {this.props.patient.fatherLastname}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.motherFirstname} {this.props.patient.motherLastname}
                                    </Header.Subheader>
                                </Grid.Column>
                            </Grid>
                        </Container>
                    </Segment>
                </Segment.Group>

                <Segment.Group >
                    <Segment color='teal'>
                        <h4><Icon name='home' />{groupInfoPatientField.address.label}</h4>
                        <Divider />
                        <Container>
                            <Grid>
                                <Grid.Column width={6}>
                                    <Header.Subheader >
                                        {patientField.typeofHouse.label}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        {patientField.address.label}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        {patientField.address.label}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        {patientField.address.label}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        {patientField.address.label}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        {patientField.address.label}
                                    </Header.Subheader>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Header.Subheader >
                                        : {this.props.patient.typeofHouse}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.address}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.subDistrict}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.district}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.province}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.zipcode}
                                    </Header.Subheader>

                                </Grid.Column>
                            </Grid>
                        </Container>

                    </Segment>

                </Segment.Group>

                <Segment.Group >

                    <Segment color='teal'>
                        <h4><Icon name='home' />{groupInfoPatientField.emerContact.label}</h4>
                        <Divider />
                        <Container>
                            <Grid>
                                <Grid.Column width={6}>
                                    <Header.Subheader >
                                        {groupInfoPatientField.emerName.label}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        {patientField.emerRelationship.label}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        {patientField.emerHomePhonenumber.label}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        {patientField.emerMobileNumber.label}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        {patientField.emerTypeofHouse.label}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        {patientField.emerAddress.label}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        {patientField.emerSubDistrict.label}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        {patientField.emerDistrict.label}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        {patientField.emerProvince.label}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        {patientField.emerZipcode.label}
                                    </Header.Subheader>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Header.Subheader >
                                        : {this.props.patient.emerTitle}{this.props.patient.emerFirstname} {this.props.patient.emerLastname}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.emerRelationship}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.emerHomePhonenumber}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.emerMobileNumber}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.emerTypeofHouse}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.emerAddress}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.emerSubDistrict}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.emerDistrict}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.emerProvince}
                                    </Header.Subheader>
                                    <Header.Subheader >
                                        : {this.props.patient.emerZipcode}
                                    </Header.Subheader>

                                </Grid.Column>
                            </Grid>
                        </Container>

                    </Segment>
                </Segment.Group>
            </Grid.Column>


        );
    }
}
