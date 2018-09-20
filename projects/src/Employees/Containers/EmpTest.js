import React from "react";
import {
    Grid, Menu, Segment, Container, Divider, Header,
    Icon, Image, Table, Label, List, Dropdown, Item,
    Responsive, Sidebar, Visibility, Statistic, Button,
    Modal, Popup, Form, TextArea, Pagination, Input, Card
} from "semantic-ui-react";
import { Scrollbars } from 'react-custom-scrollbars';
import BackgroundImage from "./../../Static/Img/BackgroundImage.png";
//service
import { getPatient } from './../../Service/ManagePatientMethod';
import styled from "styled-components";
import { style } from "./../../Static/Style/QueueCss";

//component
import HeaderPatient from "../../Patients/Components/HeaderPatient"
import NurseTreatment from "./../Components/ShowFormNurse"
import FromNurse from "./../Components/FromForNurse1"
import DocTreatment1 from "./../Components/FromForDoctor1"
import HistoryPatient from "./../Components/HistoryPatient"
import Pharmacy from "./../Components/Pharmacy"
const Body = styled.div`
    margin-left: 25vh;
    min-width: 80vh;
    height:900px;
    
`;
const BGs = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
`

const src = 'http://react.semantic-ui.com/images/wireframe/image.png'

const styles = {
    // blockWithTab : {
    //     padding: "3%", 
    //     background: "rgb(248, 248, 248)", 
    // },
    blockTab: {
        padding: "3%",
        background: "rgb(248, 248, 248)",
        marginTop: "2%",
        borderTop: "2px solid rgba(181, 181, 181, 0.11)",
        paddingRight:" 4.1%"
    }
}
export default class Emptest extends React.Component {
    state = {
        activeItem: 'home',
        tab: 0,
        empPosition: 3
    }
    showtab = (empPosition) => {
        if (empPosition == 2) {
            return <NurseTreatment empPosition={empPosition}/>
        } else if (empPosition == 3) {
            if (this.state.tab == 0) {
                return <NurseTreatment empPosition={empPosition} />
            } else if (this.state.tab == 1) {
                return <DocTreatment1 />
            } else if (this.state.tab == 2) {
                return <HistoryPatient />
            }
        }
        else if (empPosition == 4) {
            return <Pharmacy />
        }
        return ""
    }

    showTabMenu = (empPosition) => {
        if (empPosition === 2) {
            return ""
        } else if (empPosition === 3) {
            return <Menu pointing secondary>
                <Menu.Item name='Treatment of nurse'
                    active={this.state.tab == 0}
                    onClick={() => { this.setState({ tab: 0 }) }}
                />
                <Menu.Item
                    name='Treatment of doctor'
                    active={this.state.tab == 1}
                    onClick={() => { this.setState({ tab: 1 }) }}
                />
                <Menu.Item
                    name='History medical records'
                    active={this.state.tab == 2}
                    onClick={() => { this.setState({ tab: 2 }) }}
                />
            </Menu>
        } else if (empPosition === 4) {
            return ""
        }
        return ""
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    componentWillMount = async () => {
        if (this.props.location.state) {
            this.setState({
                empPosition: this.props.location.state.position
            });
        }
        console.log(this.props)
    }

    goBack = () => {
        console.log(this.props.history)
        this.props.history.goBack();
    }
    render() {
        const { activeItem } = this.state
        return (
            // <Container>
            <div>
                <Menu vertical inverted fixed='left'>
                    <Menu.Item color='teal'>
                        <Header style={style.navbarDeco} >Queues</Header>
                    </Menu.Item>
                    <Scrollbars autoHide style={{ height: 614 }}>
                        <Menu.Item name='001' active={activeItem === '001'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                            <List>
                                <Grid style={activeItem === '001' ? style.widthNav2 : style.widthNav}>
                                    <Grid.Column
                                        width={7}
                                        style={activeItem === '001' ? style.queueNoNav2 : style.queueNoNav}>
                                        001
                                    </Grid.Column>
                                    <Grid.Column width={9}>
                                        <List.Content>
                                            <List.Header
                                                as="a"
                                                style={activeItem === '001' ? style.hnNoNav2 : style.hnNoNav}>
                                                HN HP2312
                                            </List.Header>
                                            <br />
                                            <List.Description as="a" style={style.textQueueNav}>
                                                Mr. putpong champ
                                            </List.Description>
                                        </List.Content>
                                    </Grid.Column>
                                </Grid>
                            </List>
                        </Menu.Item>
                    </Scrollbars>
                </Menu>
                <div style={{ marginLeft: "210px", minWidth: "550px" }}>
                    <div style={{ padding: "1em", paddingLeft: "2%" }} >
                        <HeaderPatient page="example" />
                    </div>

                    <Grid>
                        <Grid.Row style={{ paddingBottom: "0px", paddingLeft: "14px" }}>
                            {this.showTabMenu(this.state.empPosition)}
                        </Grid.Row>
                        <Grid.Row stretched style={{ padding: "2% 6%", background: "#ddd" ,height: "70%"}}>
                            <Container>
                                {this.showtab(this.state.empPosition)}
                            </Container>
                        </Grid.Row>
                    </Grid>
                </div>
            {/* <Grid>
                <Grid.Row >
                    <Grid.Column width={13} style={{ background: "#fff", marginLeft: "-1.7%"}}>
                        <Grid.Row >
                            <HeaderPatient page="example" />
                            {this.showTabMenu(this.state.empPosition)}
                        </Grid.Row>
                    <Grid.Row style={styles.blockTab}  >
                            <Container>
                                {this.showtab(this.state.empPosition)}
                            </Container>
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid> */}
            </div>
            //  </Container> 

            // <BGs>
            // <Menu vertical inverted fixed='left' position='fixed'>
            //     <Menu.Item color='teal'>
            //         <Header style={style.navbarDeco} >Queues</Header>
            //     </Menu.Item>
            //     <Scrollbars autoHide style={{ height: 614 }}>
            //         <Menu.Item name='001' active={activeItem === '001'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
            //             <List>
            //                 <Grid style={activeItem === '001' ? style.widthNav2 : style.widthNav}>
            //                     <Grid.Column 
            //                         width={7} 
            //                         style={activeItem === '001' ? style.queueNoNav2 : style.queueNoNav}>
            //                             001
            //                     </Grid.Column>
            //                     <Grid.Column width={9}>
            //                         <List.Content>
            //                             <List.Header 
            //                                 as="a" 
            //                                 style={activeItem === '001' ? style.hnNoNav2 : style.hnNoNav}>
            //                                     HN HP2312
            //                             </List.Header>
            //                             <br />
            //                             <List.Description as="a" style={style.textQueueNav}>
            //                                 Mr. putpong champ
            //                             </List.Description>
            //                         </List.Content>
            //                     </Grid.Column>
            //                 </Grid>
            //             </List>
            //         </Menu.Item>
            //     </Scrollbars>
            // </Menu>

            //     <Body>
            //         <HeaderPatient page="example"/>
            //         {/* <Segment>
            //             <Container>
            //                 <br />
            //                 <Grid>
            //                     <Grid.Column width={2}>
            //                         <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='small' spaced='left' circular />
            //                     </Grid.Column>
            //                     <Grid.Column width={4}>
            //                         <Header as="h2">{this.state.nameTitle} {this.state.firstname} {this.state.lastname}</Header>
            //                         <Grid.Row>
            //                             <Header.Subheader>
            //                                 <span style={{ color: "#848788" }}>Hospital Number : </span>
            //                                 {this.state.hospitalNumber}
            //                             </Header.Subheader>
            //                         </Grid.Row>
            //                         <Grid.Row>
            //                             <Header.Subheader>
            //                                 <span style={{ color: "#848788" }}>Citizen ID : </span>
            //                                 {this.state.citizenId}
            //                             </Header.Subheader>
            //                         </Grid.Row>
            //                         <Grid.Row style={{ paddingTop: '4%' }}>
            //                             <Header.Content as='h5' floated='left'>
            //                                 <Label as='a' color='teal'>
            //                                     <Icon name='phone' />
            //                                     {this.state.mobilenumber}
            //                                 </Label>
            //                                 <Label as='a' color='teal'>
            //                                     <Icon name='home' />
            //                                     {this.state.homephonenumber}
            //                                 </Label>
            //                             </Header.Content>
            //                         </Grid.Row>
            //                     </Grid.Column>


            //                     <Grid.Column width={4}>
            //                         <Header as="h2">Patient Infomation</Header>
            //                         <Grid.Row>
            //                             <Header.Subheader>
            //                                 <span style={{ color: "#848788" }}>Birth Day : </span>
            //                                 {this.state.dob}
            //                             </Header.Subheader>
            //                         </Grid.Row>
            //                         <Grid.Row>
            //                             <Header.Subheader>
            //                                 <span style={{ color: "#848788" }}>Gender : </span>
            //                                 {this.state.gender}
            //                             </Header.Subheader>
            //                             <Header.Subheader>
            //                                 <span style={{ color: "#848788" }}>Blood Group : </span>{" "}
            //                                 {this.state.bloodgroup}
            //                             </Header.Subheader>
            //                             <Header.Subheader>
            //                                 <span style={{ color: "#848788" }}>Status : </span>{" "}
            //                                 {this.state.statuspatient}
            //                             </Header.Subheader>
            //                         </Grid.Row>
            //                     </Grid.Column>

            //                     <Grid.Column width={3}>
            //                         <Header as="h2">
            //                             <br />
            //                         </Header>
            //                         <Grid.Row>
            //                             <Header.Subheader>
            //                                 <span style={{ color: "#848788" }}>Nation : </span>
            //                                 {this.state.nationality}
            //                             </Header.Subheader>
            //                         </Grid.Row>
            //                         <Grid.Row>
            //                             <Header.Subheader>
            //                                 <span style={{ color: "#848788" }}>Country : </span>
            //                                 {this.state.country}
            //                             </Header.Subheader>
            //                             <Header.Subheader>
            //                                 <span style={{ color: "#848788" }}>Religion : </span>{" "}
            //                                 {this.state.religion}
            //                             </Header.Subheader>
            //                             <Header.Subheader>
            //                                 <span style={{ color: "#848788" }}>Occupartion : </span>{" "}
            //                                 {this.state.occupartion}
            //                             </Header.Subheader>
            //                         </Grid.Row>
            //                     </Grid.Column>
            //                 </Grid>
            //                 {this.showTabMenu(this.state.empPosition)}
            //             </Container>
            //         </Segment> */}
            //         <Container>
            //             <br />
            //             {this.showtab(this.state.empPosition)}
            //         </Container>


            //     </Body>


            // </BGs>
        );
    }
}
