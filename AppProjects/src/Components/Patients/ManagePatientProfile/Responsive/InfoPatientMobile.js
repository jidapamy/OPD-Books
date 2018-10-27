import React from "react";
import { Grid, Segment, Divider, Header, Icon } from "semantic-ui-react";
import { groupInfoPatientField, patientField } from "../../../../Static/Data/Field"

const color = {
    label: { color: '#31A5BA' }
}
export default class InfoPatientMobile extends React.Component {
    render() {
        return (
            <div>
                <Segment.Group >
                    <Segment color="teal" attached='top'>
                        <Icon style={color.label} name='birthday cake' />
                        <span style={color.label} > {patientField.dob.label} : </span> {this.props.patient.allergy} <br />

                        <Icon style={color.label} name='transgender' />
                        <span style={color.label} > {patientField.gender.label} : </span> {this.props.patient.gender}<br />

                        <Icon style={color.label} name='tint' />
                        <span style={color.label} > {patientField.bloodgroup.label} : </span> {this.props.patient.bloodgroup} <br />

                        <Icon style={color.label} name='heart outline' />
                        <span style={color.label} > {patientField.status.label} : </span> {this.props.patient.status}<br />

                        <Icon style={color.label} name='world' />
                        <span style={color.label} > {patientField.nationality.label} : </span> {this.props.patient.nationality} <br />

                        <Icon style={color.label} name='flag' />
                        <span style={color.label} > {patientField.country.label} : </span> {this.props.patient.country}<br />

                        <Icon style={color.label} name='university' />
                        <span style={color.label} > {patientField.religion.label} : </span>  {this.props.patient.religion} <br />

                        <Icon style={color.label} name='suitcase' />
                        <span style={color.label} > {patientField.occupartion.label} : </span> {this.props.patient.occupartion}<br />
                    </Segment>
                </Segment.Group >
            </div>

            // <div>
            // <Segment style={{ borderRadius: '1.3rem' }}>
            //         <h4><Icon name='stethoscope' />{groupInfoPatientField.allergyNPrivilege.label}</h4>
            //         <Divider />
            //         <br />
            //     <Grid style={{ paddingLeft: '3em' }}>
            //         <Grid.Row>
            //             <Grid.Column >
            //                 <Header as='h5'><Icon name='pills' />{patientField.allergy.label} : {this.props.patient.allergy}</Header>
            //             </Grid.Column>
            //         </Grid.Row>
            //         <Grid.Row>
            //             <Grid.Column >
            //                     <Header as='h5'><Icon name='star outline' />{patientField.privilege.label} : {this.props.patient.privilege}</Header>
            //             </Grid.Column>
            //         </Grid.Row>
            //     </Grid>
            // </Segment>

            // <Segment style={{ borderRadius: '1.3rem' }}>
            //         <h4><Icon name='text telephone' />Contact</h4>
            //         <Divider />
            //         <br />
            //         <Grid style={{ paddingLeft: '3em' }}>
            //             <Grid.Row>
            //                 <Grid.Column >
            //                     <Header as='h5'><Icon name='phone' />Phone No. : {this.props.patient.mobileNumber}</Header>
            //                 </Grid.Column>
            //             </Grid.Row>
            //             <Grid.Row>
            //                 <Grid.Column >
            //                     <Header as='h5'><Icon name='phone' />Home No. : {this.props.patient.homePhonenumber}</Header>
            //                 </Grid.Column>
            //             </Grid.Row>
            //         </Grid>
            // </Segment>

            // <Segment style={{ borderRadius: '1.3rem' }}>
            //         <h4><Icon name='file alternate outline' />Information</h4>
            //         <Divider />
            //         <br />
            //     <Grid style={{ paddingLeft: '3em' }}>
            //         <Grid.Row>
            //             <Grid.Column >
            //                 <Header as='h5'><Icon name='birthday cake' />Birth Day : {this.props.patient.dob}</Header>
            //             </Grid.Column>
            //         </Grid.Row>
            //         <Grid.Row>
            //             <Grid.Column >
            //                 <Header as='h5'><Icon name='transgender' />Gender : {this.props.patient.gender}</Header>
            //             </Grid.Column>
            //         </Grid.Row>
            //         <Grid.Row>
            //             <Grid.Column >
            //                 <Header as='h5'><Icon name='tint' />Blood Group : {this.props.patient.bloodgroup}</Header>
            //             </Grid.Column>
            //         </Grid.Row>
            //         <Grid.Row>
            //             <Grid.Column >
            //                 <Header as='h5'><Icon name='heart outline' />Status : {this.props.patient.status}</Header>
            //             </Grid.Column>
            //         </Grid.Row>
            //         <Grid.Row>
            //             <Grid.Column >
            //                 <Header as='h5'><Icon name='world' />Nation : {this.props.patient.nationality}</Header>
            //             </Grid.Column>
            //         </Grid.Row>
            //         <Grid.Row>
            //             <Grid.Column >
            //                 <Header as='h5'><Icon name='flag' />Country : {this.props.patient.country}</Header>
            //             </Grid.Column>
            //         </Grid.Row>
            //         <Grid.Row>
            //             <Grid.Column >
            //                 <Header as='h5'><Icon name='university' />Religion : {this.props.patient.religion}</Header>
            //             </Grid.Column>
            //         </Grid.Row>
            //         <Grid.Row>
            //             <Grid.Column >
            //                 <Header as='h5'><Icon name='suitcase' />Occupartion : {this.props.patient.occupartion}</Header>
            //             </Grid.Column>
            //         </Grid.Row>
            //     </Grid>
            // </Segment>
            // <br />
            // </div>
        );
    }
}

