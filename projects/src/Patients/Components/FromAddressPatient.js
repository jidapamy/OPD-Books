import React from "react";
import {
    Grid, Segment, Container, Divider, Header,Icon
} from "semantic-ui-react";

export default class FromAddressPatient extends React.Component {

    render() {
        return (
            <Grid.Column width={5}>
                <Segment color='yellow' attached='top'>
                    <Icon color='yellow' name='pills' />
                    <span style={{ color: '#FFB100' }}> Allergy : </span> {this.props.patient.allergy} <br />
                    <Icon color='yellow' name='medkit' />
                    <span style={{ color: '#FABD08' }}> Privilege : </span> {this.props.patient.privilege}
                </Segment>
                <Segment.Group >
                    <Segment >
                        <h4><Icon name='child' />In Case Under15 Year Old</h4>
                        <Divider />
                        <Container>
                            <Grid>
                                <Grid.Column width={6}>
                                    <Header.Subheader >
                                        Father Name
                    </Header.Subheader>
                                    <Header.Subheader >
                                        Mother Name
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
                        <h4><Icon name='home' />Address</h4>
                        <Divider />
                        <Container>
                            <Grid>
                                <Grid.Column width={6}>
                                    <Header.Subheader >
                                        Type Of House
                    </Header.Subheader>
                                    <Header.Subheader >
                                        Address
                    </Header.Subheader>
                                    <Header.Subheader >
                                        Sub District
                    </Header.Subheader>
                                    <Header.Subheader >
                                        District
                    </Header.Subheader>
                                    <Header.Subheader >
                                        Province
                    </Header.Subheader>
                                    <Header.Subheader >
                                        Zipcode
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
                        <h4><Icon name='home' />Emergency Address</h4>
                        <Divider />
                        <Container>
                            <Grid>
                                <Grid.Column width={6}>
                                    <Header.Subheader >
                                        Name
                    </Header.Subheader>
                                    <Header.Subheader >
                                        Relationship
                    </Header.Subheader>
                                    <Header.Subheader >
                                        Home Number
                    </Header.Subheader>
                                    <Header.Subheader >
                                        Phon Number
                    </Header.Subheader>
                                    <Header.Subheader >
                                        Type Of House
                    </Header.Subheader>
                                    <Header.Subheader >
                                        Address
                    </Header.Subheader>
                                    <Header.Subheader >
                                        Sub District
                    </Header.Subheader>
                                    <Header.Subheader >
                                        District
                    </Header.Subheader>
                                    <Header.Subheader >
                                        Province
                    </Header.Subheader>
                                    <Header.Subheader >
                                        Zipcode
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
