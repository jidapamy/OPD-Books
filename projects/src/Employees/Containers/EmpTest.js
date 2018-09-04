import React from "react";
import {
    Grid, Menu, Segment, Container, Divider, Header,
    Icon, Image, Table, Label, List, Dropdown, Item,
    Responsive, Sidebar, Visibility, Statistic, Button,
    Modal, Popup, Form, TextArea, Pagination, Input, Card
} from "semantic-ui-react";
import { Scrollbars } from 'react-custom-scrollbars';

//service
import { getPatient } from './../../Service/ManagePatientMethod';
import styled from "styled-components";
import { style } from "./../../Static/Style/QueueCss";
import Nurse from "./../Components/ShowFormNurse"
const Body = styled.div `
    margin-left: 205px;
    min-width: 550px;
`;

const src = 'http://react.semantic-ui.com/images/wireframe/image.png'

const items = [
    {
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
    },
    
]

const styles = {
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
    paddingInfo: {
        marginLeft: '4.5em',
    },
}
export default class FromHisProfilePatient extends React.Component {


    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <span>
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                <Menu vertical inverted fixed='left' position='fixed'>
                    <Menu.Item color='teal'>
                        <Header style={style.navbarDeco} >Queues</Header>
                    </Menu.Item>

                    <Scrollbars autoHide style={{ height: 614 }}>

                    <Menu.Item name='001' active={activeItem === '001'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                        <List>
                            <Grid style={activeItem === '001' ? style.widthNav2 : style.widthNav}>
                                <Grid.Column width={7} style={activeItem === '001' ? style.queueNoNav2 : style.queueNoNav}>
                                    001
                </Grid.Column>
                                <Grid.Column width={9}>
                                    <List.Content>
                                        <List.Header as="a" style={activeItem === '001' ? style.hnNoNav2 : style.hnNoNav}>
                                            HN HP2312
                    </List.Header><br />
                                        <List.Description as="a" style={style.textQueueNav}>
                                            Mr. putpong champ
                    </List.Description>
                                    </List.Content>
                                </Grid.Column>
                            </Grid>
                        </List>
                    </Menu.Item>


                    <Menu.Item name='002' active={activeItem === '002'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                        <List>
                            <Grid style={activeItem === '002' ? style.widthNav2 : style.widthNav}>
                                <Grid.Column width={7} style={activeItem === '002' ? style.queueNoNav2 : style.queueNoNav}>
                                    002
                </Grid.Column>
                                <Grid.Column width={9}>
                                    <List.Content>
                                        <List.Header as="a" style={activeItem === '002' ? style.hnNoNav2 : style.hnNoNav}>
                                            HN HP2312
                    </List.Header><br />
                                        <List.Description as="a" style={style.textQueueNav}>
                                            Mr. putpong champ
                    </List.Description>
                                    </List.Content>
                                </Grid.Column>
                            </Grid>
                        </List>
                    </Menu.Item>



                    <Menu.Item   name='003' active={activeItem === '003'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                        <List>
                            <Grid style={activeItem === '003' ? style.widthNav2 : style.widthNav}>
                                <Grid.Column width={7} style={activeItem === '003' ? style.queueNoNav2 : style.queueNoNav}>
                                    003
                </Grid.Column>
                                <Grid.Column width={9}>
                                    <List.Content>
                                        <List.Header as="a" style={activeItem === '003' ? style.hnNoNav2 : style.hnNoNav}>
                                            HN HP2312
                    </List.Header><br />
                                        <List.Description as="a" style={style.textQueueNav}>
                                            Mr. putpong champ
                    </List.Description>
                                    </List.Content>
                                </Grid.Column>
                            </Grid>
                        </List>
                    </Menu.Item>
                    <Menu.Item name='003' active={activeItem === '003'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                        <List>
                            <Grid style={activeItem === '003' ? style.widthNav2 : style.widthNav}>
                                <Grid.Column width={7} style={activeItem === '003' ? style.queueNoNav2 : style.queueNoNav}>
                                    003
                </Grid.Column>
                                <Grid.Column width={9}>
                                    <List.Content>
                                        <List.Header as="a" style={activeItem === '003' ? style.hnNoNav2 : style.hnNoNav}>
                                            HN HP2312
                    </List.Header><br />
                                        <List.Description as="a" style={style.textQueueNav}>
                                            Mr. putpong champ
                    </List.Description>
                                    </List.Content>
                                </Grid.Column>
                            </Grid>
                        </List>
                    </Menu.Item>
                    <Menu.Item name='003' active={activeItem === '003'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                        <List>
                            <Grid style={activeItem === '003' ? style.widthNav2 : style.widthNav}>
                                <Grid.Column width={7} style={activeItem === '003' ? style.queueNoNav2 : style.queueNoNav}>
                                    003
                </Grid.Column>
                                <Grid.Column width={9}>
                                    <List.Content>
                                        <List.Header as="a" style={activeItem === '003' ? style.hnNoNav2 : style.hnNoNav}>
                                            HN HP2312
                    </List.Header><br />
                                        <List.Description as="a" style={style.textQueueNav}>
                                            Mr. putpong champ
                    </List.Description>
                                    </List.Content>
                                </Grid.Column>
                            </Grid>
                        </List>
                    </Menu.Item>
                    <Menu.Item name='003' active={activeItem === '003'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                        <List>
                            <Grid style={activeItem === '003' ? style.widthNav2 : style.widthNav}>
                                <Grid.Column width={7} style={activeItem === '003' ? style.queueNoNav2 : style.queueNoNav}>
                                    003
                </Grid.Column>
                                <Grid.Column width={9}>
                                    <List.Content>
                                        <List.Header as="a" style={activeItem === '003' ? style.hnNoNav2 : style.hnNoNav}>
                                            HN HP2312
                    </List.Header><br />
                                        <List.Description as="a" style={style.textQueueNav}>
                                            Mr. putpong champ
                    </List.Description>
                                    </List.Content>
                                </Grid.Column>
                            </Grid>
                        </List>
                    </Menu.Item>
                    <Menu.Item name='003' active={activeItem === '003'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                        <List>
                            <Grid style={activeItem === '003' ? style.widthNav2 : style.widthNav}>
                                <Grid.Column width={7} style={activeItem === '003' ? style.queueNoNav2 : style.queueNoNav}>
                                    003
                </Grid.Column>
                                <Grid.Column width={9}>
                                    <List.Content>
                                        <List.Header as="a" style={activeItem === '003' ? style.hnNoNav2 : style.hnNoNav}>
                                            HN HP2312
                    </List.Header><br />
                                        <List.Description as="a" style={style.textQueueNav}>
                                            Mr. putpong champ
                    </List.Description>
                                    </List.Content>
                                </Grid.Column>
                            </Grid>
                        </List>
                    </Menu.Item>
                    <Menu.Item name='003' active={activeItem === '003'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                        <List>
                            <Grid style={activeItem === '003' ? style.widthNav2 : style.widthNav}>
                                <Grid.Column width={7} style={activeItem === '003' ? style.queueNoNav2 : style.queueNoNav}>
                                    003
                </Grid.Column>
                                <Grid.Column width={9}>
                                    <List.Content>
                                        <List.Header as="a" style={activeItem === '003' ? style.hnNoNav2 : style.hnNoNav}>
                                            HN HP2312
                    </List.Header><br />
                                        <List.Description as="a" style={style.textQueueNav}>
                                            Mr. putpong champ
                    </List.Description>
                                    </List.Content>
                                </Grid.Column>
                            </Grid>
                        </List>
                    </Menu.Item>
                    <Menu.Item name='003' active={activeItem === '003'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                        <List>
                            <Grid style={activeItem === '003' ? style.widthNav2 : style.widthNav}>
                                <Grid.Column width={7} style={activeItem === '003' ? style.queueNoNav2 : style.queueNoNav}>
                                    003
                </Grid.Column>
                                <Grid.Column width={9}>
                                    <List.Content>
                                        <List.Header as="a" style={activeItem === '003' ? style.hnNoNav2 : style.hnNoNav}>
                                            HN HP2312
                    </List.Header><br />
                                        <List.Description as="a" style={style.textQueueNav}>
                                            Mr. putpong champ
                    </List.Description>
                                    </List.Content>
                                </Grid.Column>
                            </Grid>
                        </List>
                    </Menu.Item>
                    <Menu.Item name='003' active={activeItem === '003'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                        <List>
                            <Grid style={activeItem === '003' ? style.widthNav2 : style.widthNav}>
                                <Grid.Column width={7} style={activeItem === '003' ? style.queueNoNav2 : style.queueNoNav}>
                                    003
                </Grid.Column>
                                <Grid.Column width={9}>
                                    <List.Content>
                                        <List.Header as="a" style={activeItem === '003' ? style.hnNoNav2 : style.hnNoNav}>
                                            HN HP2312
                    </List.Header><br />
                                        <List.Description as="a" style={style.textQueueNav}>
                                            Mr. putpong champ
                    </List.Description>
                                    </List.Content>
                                </Grid.Column>
                            </Grid>
                        </List>
                    </Menu.Item>
                    <Menu.Item name='003' active={activeItem === '003'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                        <List>
                            <Grid style={activeItem === '003' ? style.widthNav2 : style.widthNav}>
                                <Grid.Column width={7} style={activeItem === '003' ? style.queueNoNav2 : style.queueNoNav}>
                                    003
                </Grid.Column>
                                <Grid.Column width={9}>
                                    <List.Content>
                                        <List.Header as="a" style={activeItem === '003' ? style.hnNoNav2 : style.hnNoNav}>
                                            HN HP2312
                    </List.Header><br />
                                        <List.Description as="a" style={style.textQueueNav}>
                                            Mr. putpong champ
                    </List.Description>
                                    </List.Content>
                                </Grid.Column>
                            </Grid>
                        </List>
                    </Menu.Item>
                    <Menu.Item name='003' active={activeItem === '003'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                        <List>
                            <Grid style={activeItem === '003' ? style.widthNav2 : style.widthNav}>
                                <Grid.Column width={7} style={activeItem === '003' ? style.queueNoNav2 : style.queueNoNav}>
                                    003
                </Grid.Column>
                                <Grid.Column width={9}>
                                    <List.Content>
                                        <List.Header as="a" style={activeItem === '003' ? style.hnNoNav2 : style.hnNoNav}>
                                            HN HP2312
                    </List.Header><br />
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
                
        
        
        
        
        
        
        
        
        
        
        
        
        
        
         <Body>
            
        <Segment>
            
        <Container>
          <br />
          <Grid>
            {/* <Grid.Column width={0}>
            </Grid.Column> */}
            <Grid.Column width={2}>
                <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='small' spaced='left' circular />
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as="h2">{this.state.nameTitle} {this.state.firstname} {this.state.lastname}</Header>
              <Grid.Row>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Hospital Number : </span>
                  {this.state.hospitalNumber}
                </Header.Subheader>
              </Grid.Row>
              <Grid.Row>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Citizen ID : </span>
                  {this.state.citizenId}
                </Header.Subheader>
              </Grid.Row>
              <Grid.Row style={{ paddingTop: '4%'}}>
                  <Header.Content as='h5' floated='left'>
                    <Label as='a' color='teal'>
                      <Icon name='phone' />
                      {this.state.mobilenumber}
                    </Label>
                    <Label as='a' color='teal'>
                    <Icon name='home' />
                      {this.state.homephonenumber}
                    </Label>
                  </Header.Content>
              </Grid.Row>
            </Grid.Column>

            
            <Grid.Column width={4}>
              <Header as="h2">Infomation</Header>
              <Grid.Row>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Birth Day : </span>
                  {this.state.dob}
                </Header.Subheader>
              </Grid.Row>
              <Grid.Row>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Gender : </span>
                  {this.state.gender}
                </Header.Subheader>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Blood Group : </span>{" "}
                  {this.state.bloodgroup}
                </Header.Subheader>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Status : </span>{" "}
                  {this.state.statuspatient}
                </Header.Subheader>
              </Grid.Row>
            </Grid.Column>
            
            <Grid.Column width={4}>
              <Header as="h2">
                <br />
              </Header>
              <Grid.Row>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Nation : </span>
                  {this.state.nationality}
                </Header.Subheader>
              </Grid.Row>
              <Grid.Row>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Country : </span>
                  {this.state.country}
                </Header.Subheader>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Religion : </span>{" "}
                  {this.state.religion}
                </Header.Subheader>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Occupartion : </span>{" "}
                  {this.state.occupartion}
                </Header.Subheader>
              </Grid.Row>
            </Grid.Column>

           
          </Grid>
          
          <Menu pointing secondary style={{ marginBottom: '-16px' }}>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item
                  name='messages'
                  active={activeItem === 'messages'}
                  onClick={this.handleItemClick}
              />
              <Menu.Item
                  name='friends'
                  active={activeItem === 'friends'}
                  onClick={this.handleItemClick}
              />
          </Menu>
        
        </Container>
       
        </Segment>

                <Container>
                        <br/>
                    <Nurse></Nurse>
                </Container>
                  </Body>

                
           </span>
        );
    }
}
