import React from "react";
import {
    Grid, Menu, Segment, Container, Divider, Header,
    Icon, Image, Table, Label, List, Dropdown, Item,
    Responsive, Sidebar, Visibility, Statistic, Button,
    Modal, Popup, Form, TextArea, Pagination
} from "semantic-ui-react";
import styled from "styled-components";
//service
import { getPatient } from './../../Service/ManagePatientMethod';
import BGPMobile from './../../Static/Img/BGPMobile.png'

const Boderhide = styled(Menu) `
  border:0;
`;
const BGMobiles = styled(Segment) `
  background: url('https://i.pinimg.com/564x/f1/48/0b/f1480ba048e8dc86bd8bbd6d979b92fb.jpg') !important;
  background-size: 100% 100%;

`

export default class ProfilePatientMobile extends React.Component {


    render() {

        return (
            <span>
            
            <BGMobiles
                inverted
                textAlign='center'
                style={{ minHeight: 250, padding: '1em' }}
                vertical
            >
                <Grid>
                    <Grid.Column textAlign='left' width={8}>
                        <Icon name='qrcode' size='large' onClick={this.props.show()} />
                    </Grid.Column>
                    <Grid.Column textAlign='right' width={8}>
                        <Icon name='setting' size='large' />
                    </Grid.Column>
                </Grid>
                <Image bordered={true} style={{ borderColor: 'white', borderWidth: '3px' }} src='https://cache.gmo2.sistacafe.com/images/uploads/content_image/image/477174/1509615009-22278120_118945132110096_1884173990654640128_n.jpg' size='small' circular centered />
                <Statistic inverted size='mini'>
                        <Statistic.Label style={{ fontSize: '1.1em' }} inverted>{this.props.patient.nameTitle} {this.props.patient.firstname} {this.props.patient.lastname}</Statistic.Label>
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

                <bt /><bt />
            </Container >
</span>
        );
    }
}
