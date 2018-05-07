import React, { Component } from 'react';
import { Grid, Menu, Segment, Container, Divider, Header, Icon, Image, Table } from 'semantic-ui-react'
import styled from 'styled-components'
import iconOpd from '../../../Static/img/IconOPDs.png';

const Menus = styled(Menu) `
   
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    height:100%;
    padding - left: 0;
    padding - right: 0;
    z - index: 1000;
    overflow - x: hidden;
    overflow - y: auto;
    border - right: 1px solid #eee;
    background: #00CACF;
`
const GridContainer = styled(Grid.Row) `
    padding - left: 15rem;
`    
const GridColumnleft = styled(Grid.Column) `
   padding-left:1em; 
   padding-right:1em; 
`
const GridColumnright = styled(Grid.Column) `
   padding-left:1em;
   padding-right:1em;  
`
const ImageSizeRow = styled(Image) `
     width:150px;
     height:150px;
     
`

export default class MenuExampleTabularOnLeft extends Component {
    state = { activeItem: 'bio' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Segment.Group style={{ border: '0px' }}>
                
                    
                
                      
                <Segment style={{ paddingLeft: '15em' }} >

                    <Menus color={'teal'} secondary inverted vertical >
                        <Menu.Item>
                            <img src={iconOpd} style={{ paddingBottom: '1em', paddingTop: '1em' }}/>
                        </Menu.Item>
                        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
                        <Menu.Item name='Logout' active={activeItem === 'Logout'} onClick={this.handleItemClick} />
                    </Menus>
                    
                    <Header as='h2' >
                        <Icon name='user circle outline' style={{ paddingLeft: '1.5em' }}/>
                        <Header.Content >
                            Profile Patient
                        </Header.Content>
                        <Divider/>
                    </Header>


                    <Grid columns='equal' stackable width={2}>

                        <Grid.Row textAlign='center'>

                            <Grid.Column style={{  paddingTop: '1em' }} className="wow zoomIn" data-wow-delay="0.2s">
                                <GridColumnleft>
                                    <Segment.Group>
                                        <Segment>Top</Segment>
                                        <Segment.Group>
                                            <Segment>Nested Top</Segment>
                                            <Segment>Nested Middle</Segment>
                                            <Segment>Nested Bottom</Segment>
                                        </Segment.Group>
                                        <Segment.Group horizontal>
                                            <Segment>Top</Segment>
                                            <Segment>Middle</Segment>
                                            <Segment>Bottom</Segment>
                                        </Segment.Group>
                                        <Segment>Bottom</Segment>
                                    </Segment.Group>
                                </GridColumnleft>
                               
                                
                            </Grid.Column>

                            <Grid.Column style={{  paddingTop: '1em' }} className="wow zoomIn" data-wow-delay="0.2s">
                                <GridColumnright>
                                    
                                        <Segment.Group>
                                            <Segment>Top</Segment>
                                            <Segment.Group>
                                                <Segment>Nested Top</Segment>
                                                <Segment>Nested Middle</Segment>
                                                <Segment>Nested Bottom</Segment>
                                            </Segment.Group>
                                            <Segment.Group horizontal>
                                                <Segment>Top</Segment>
                                                <Segment>Middle</Segment>
                                                <Segment>Bottom</Segment>
                                            </Segment.Group>
                                            <Segment>Bottom</Segment>
                                        </Segment.Group>
                                
                                </GridColumnright>
                            </Grid.Column>

                        </Grid.Row>

                        <Grid.Row textAlign='center'>

                        <Grid.Column  >
                            <GridColumnleft>
                                <Segment.Group>
                                    <Segment>Top</Segment>
                                    <Segment.Group>
                                        <Segment>Nested Top</Segment>
                                        <Segment>Nested Middle</Segment>
                                        <Segment>Nested Bottom</Segment>
                                    </Segment.Group>
                                    <Segment.Group horizontal>
                                        <Segment>Top</Segment>
                                        <Segment>Middle</Segment>
                                        <Segment>Bottom</Segment>
                                    </Segment.Group>
                                    <Segment>Bottom</Segment>
                                </Segment.Group>
                            </GridColumnleft>


                        </Grid.Column>

                        

                        </Grid.Row>
                    </Grid>
                    
                </Segment>
            </Segment.Group>
            
        )
    }
}

