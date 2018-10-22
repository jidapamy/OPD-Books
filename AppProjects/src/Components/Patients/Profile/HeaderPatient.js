import React from "react";
import {
    Grid,Container, Header, Icon, Image, Label,
} from "semantic-ui-react";
import myQR from "../../../Static/Img/myQR.svg";
import { patientField } from "../../../Static/Data/Field"
import { color } from "../../../Static/Data/ColorPattern"

const labelInfo = {
    backgroundColor: '#31A5BA',
    color:'#FFF',
};
export default class HeaderPatient extends React.Component {
    state = {
        patient: this.props.patient ? this.props.patient : {}
    }
    style = {
        ImButton: {
            cursor: 'pointer'
        }
    }

    showQRCode = () => {
        if (this.props.show) {
            return <Grid.Column width={3}>
                <Header textAlign={"center"} as="h3"> MY QRCODE </Header>
                <Image centered style={this.style.ImButton} size="tiny" src={myQR} onClick={()=>this.props.show()}/>
            </Grid.Column>
        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({ patient: nextProps.patient });
    }

    render() {
        return (
            // <Segment>
            <Container style={{ paddingTop: "1em" }} >
                    <Grid>
                        <Grid.Column width={2}>
                        <Image src="https://react.semantic-ui.com/images/avatar/small/matthew.png"  size="small" spaced="left" circular />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header as="h2">
                                {this.state.patient.nametitle} {this.state.patient[patientField.firstname.variable]} {this.state.patient[patientField.lastname.variable]}
                            </Header>
                            <Grid.Row>
                                <Header.Subheader>
                                    <span style={{ color: color.teal }}>{patientField.citizenId.label} : </span>
                                    {this.state.patient[patientField.citizenId.variable]}
                                </Header.Subheader>
                            </Grid.Row>
                            <Grid.Row style={{ paddingTop: "4%" }}>
                                <Header.Content as="h5" floated="left">
                                <Label as="a" style={labelInfo}>
                                        <Icon name="phone" />
                                        {this.state.patient[patientField.mobileNumber.variable]}
                                    </Label>
                                <Label as="a" style={labelInfo}>
                                        <Icon name="home" />
                                        {this.state.patient[patientField.homePhonenumber.variable]}
                                    </Label>
                                </Header.Content>
                            </Grid.Row>
                        </Grid.Column>

                        <Grid.Column width={this.props.show ? 3 : 4}>
                            <Header as="h2">Information</Header>
                            <Grid.Row>
                                <Header.Subheader>
                                    <span style={{ color: color.teal }}>{patientField.dob.label} : </span>
                                    {this.state.patient[patientField.dob.variable]}
                                </Header.Subheader>
                            </Grid.Row>
                            <Grid.Row>
                                <Header.Subheader>
                                    <span style={{ color: color.teal }}>{patientField.gender.label} : </span>
                                    {this.state.patient[patientField.gender.variable]}
                                </Header.Subheader>
                                <Header.Subheader>
                                    <span style={{ color: color.teal }}>
                                        {patientField.bloodgroup.label}  : 
                                    </span> {this.state.patient[patientField.bloodgroup.variable]}
                                </Header.Subheader>
                                <Header.Subheader>
                                    <span style={{ color: color.teal }}>
                                        {patientField.status.label}  : 
                                    </span> {this.state.patient[patientField.status.variable]}
                                </Header.Subheader>
                            </Grid.Row>
                        </Grid.Column>

                        <Grid.Column width={this.props.show ? 3 : 4}>
                            <Header as="h2">
                                <br />
                            </Header>
                            <Grid.Row>
                                <Header.Subheader>
                                    <span style={{ color: color.teal }}>{patientField.nationality.label} : </span>
                                    {this.state.patient[patientField.nationality.variable]}
                                </Header.Subheader>
                            </Grid.Row>
                            <Grid.Row>
                                <Header.Subheader>
                                    <span style={{ color: color.teal }}>{patientField.country.label} : </span>
                                    {this.state.patient[patientField.country.variable]}
                                </Header.Subheader>
                                <Header.Subheader>
                                    <span style={{ color: color.teal }}>
                                        {patientField.religion.label} : 
                                    </span> {this.state.patient[patientField.religion.variable]}
                                </Header.Subheader>
                                <Header.Subheader>
                                    <span style={{ color: color.teal }}>
                                        {patientField.occupartion.label} : 
                                    </span> {this.state.patient[patientField.occupartion.variable]}
                                </Header.Subheader>
                            </Grid.Row>
                        </Grid.Column>
                        {this.showQRCode()}
                    </Grid>
                </Container>
            //  </Segment> 
        );
    }
}
