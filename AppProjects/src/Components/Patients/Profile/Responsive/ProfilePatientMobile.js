import React from "react";
import { Grid, Menu, Segment, Container, Icon, Image,Statistic } from "semantic-ui-react";
import styled from "styled-components";
import EditProfile from '../../../../Containers/EditProfile';
import FormEditProfile from '../../ManagePatientProfile/FormEditProfile'

const BGMobiles = styled(Segment) `
  background: url('https://i.pinimg.com/564x/f1/48/0b/f1480ba048e8dc86bd8bbd6d979b92fb.jpg') !important;
  background-size: 100% 100%;
`

export default class ProfilePatientMobile extends React.Component {
    showPage = () => {
        if(this.props.showEditPage){
            return <div><h2><Icon name='arrow left' onClick={() => this.setState({ infoPatient: true })} /> Edit Profile</h2>
                <FormEditProfile /></div>
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
                <Image bordered={true} style={{ borderColor: 'white', borderWidth: '3px' }} src='https://react.semantic-ui.com/images/avatar/small/matthew.png' size='small' circular centered />
                <Statistic inverted size='mini'>
                    <Statistic.Label style={{ fontSize: '1.1em' }} inverted>{this.props.patient.nametitle} {this.props.patient.firstname} {this.props.patient.lastname}</Statistic.Label>
                    <Statistic style={{ fontSize: '1.1em' }} > Citizen: {this.props.patient.citizenId}</Statistic>
                </Statistic>
            </BGMobiles>

            <Menu fluid widths={2} style={{ marginTop: '-2px' }}>
                <Menu.Item name='Information' onClick={this.handleItemClick} icon='clipboard outline'  onClick={() => { this.props.setField("tab", 0) }} />
                <Menu.Item name='Address'  onClick={this.handleItemClick} icon='home'  onClick={() => { this.props.setField("tab",1) }} />

            </Menu>
            <Container>
                {this.props.showModal()}
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
