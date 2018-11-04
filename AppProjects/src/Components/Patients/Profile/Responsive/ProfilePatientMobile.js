import React from "react";
import { Header, Grid, Menu, Segment, Container, Icon, Image, Statistic, Label } from "semantic-ui-react";
import styled from "styled-components";
import EditProfile from '../../../../Containers/EditProfile';
import ManagePatientRecord from '../../../../Containers/ManagePatientRecord'
import { groupInfoPatientField, patientField } from "../../../../Static/Data/Field"

const BGMobiles = styled(Segment) `
  background: url('http://www.biocenit.cat/mypics/0/7161/best-phone-wallpapers-hd.jpg') !important;
  background-size: 100% 100%;
`
const labelInfo = {
    backgroundColor: '#31A5BA',
    color: '#FFF',
};

export default class ProfilePatientMobile extends React.Component {
    showPage = () => {
        if(this.props.showEditPage){
            return <div style={{ padding:'3%' }}>
                {/* <h2><Icon name='arrow left' onClick={() => this.props.setField("showEditPage",false)} /> Edit Profile</h2> */}
                <Header as='h2' style={{ color: '#31A5BA' }} >
                    <Icon style={{ fontSize: '20px', marginTop: '-13px' }} name='arrow left' onClick={() => this.props.setField("showEditPage", false)} />
                    Account Settings
                </Header>
                <br/>
                <ManagePatientRecord
                    patient={this.props.patient}
                    editStatus={true}
                    setField={this.props.setField}
                />
                </div>
        }else{
            return<div> <BGMobiles
                inverted
                textAlign='center'
                style={{ minHeight: 250, padding: '1em' }}
                vertical
            >
                <Grid>
                    <Grid.Column textAlign='left' width={8}>
                        <Icon name='qrcode' size='large' onClick={()=>this.props.show()} />
                    </Grid.Column>
                    <Grid.Column textAlign='right' width={8}>
                            <Icon name='setting' onClick={() => this.props.setField("showEditPage" ,true)}></Icon>
                    </Grid.Column>
                </Grid>
                <Image bordered={true} style={{ borderColor: 'white', borderWidth: '3px' }} 
                src={this.props.patient.gender == 'Male' ?  'https://react.semantic-ui.com/images/avatar/small/matthew.png': 'https://react.semantic-ui.com/images/avatar/large/stevie.jpg'} size='small' circular centered />
                <Statistic size='mini'>
                    <Header as="h2" style={{ color: '#31A5BA' }}>
                        {this.props.patient.nametitle} {this.props.patient[patientField.firstname.variable]} {this.props.patient[patientField.lastname.variable]}
                    </Header>
                    <Header.Subheader>
                        <span style={{ color: '#F4D03F' }}>{patientField.citizenId.label} : </span>
                        {this.props.patient[patientField.citizenId.variable]}
                    </Header.Subheader>
                    <Header.Subheader>
                        <span style={{ color: '#F4D03F' }}>{patientField.email.label} : </span>
                        {this.props.patient[patientField.email.variable]}
                    </Header.Subheader>
                    {/* <Statistic.Label style={{ fontSize: '1.1em' }} inverted>{this.props.patient.nametitle} {this.props.patient.firstname} {this.props.patient.lastname}</Statistic.Label>
                    <Statistic style={{ fontSize: '1.1em' }} > {patientField.citizenId.label}: {this.props.patient.citizenId}</Statistic> */}
                </Statistic>
                <Header.Content floated="left">
                    <Label as="a" style={labelInfo}>
                        <Icon name="phone" />
                        {this.props.patient[patientField.mobileNumber.variable]}
                    </Label>
                    <Label as="a" style={labelInfo}>
                        <Icon name="home" />
                        {this.props.patient[patientField.homePhonenumber.variable]}
                    </Label>
                    <br/>
                </Header.Content>
            </BGMobiles>
            <Menu fluid widths={2} style={{ marginTop: '-2px' }}>
                <Menu.Item name='Information' onClick={this.handleItemClick} icon='clipboard outline'  onClick={() => { this.props.setField("tab", 0) }} />
                <Menu.Item name='Address'  onClick={this.handleItemClick} icon='home'  onClick={() => { this.props.setField("tab",1) }} />

            </Menu>
            <Container>
                {this.props.showQRCode()}
                {this.props.showtab(this.props.tab)}
                <br /><br /> 
            </Container >
            </div>
        }
    }

    render() {
        return (
            <div>
                {this.showPage()}
            </div>
        );
    }
}
