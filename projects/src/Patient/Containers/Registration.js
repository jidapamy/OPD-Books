import React, { Component } from 'react';
import ScanButton from "./../../Static/Img/ScanButton.png";
import { Scrollbars } from 'react-custom-scrollbars';
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
    List,
    Divider,
} from 'semantic-ui-react'
const style = {
    h1: {
        marginTop: '4em',
        marginBottom: '50px'
        
    },
    h2: {
        margin: '4em 0em 2em',
    },
    d1: {
        marginTop: '1em',
        marginBottom: '50px'
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    last: {
        
    },
    
}

class Registration extends Component {
    render() {
        return (
            <div >
                <Container >
                    <Header as='h1' style={style.h1} textAlign='center'>
                        
                        <Header.Content>
                            <span style={{ fontSize: '2em', color: '#00B5AD' }}>OPD BOOKS</span>
                            <Header.Subheader >Project on Blockchain</Header.Subheader>
                        </Header.Content>
                    </Header>
                    {/* <Button  fluid color='teal' icon='qrcode' style={style.d1}>Fits to Container</Button> */}
                    <Image
                        onClick={""}
                        style={style.d1}
                        rounded
                        size='medium'
                        src={ScanButton}
                    />
                    {/* <Header as='h1' style={style.h1} textAlign='center' > <span style={{ fontSize: '2em', color: '#00B5AD' }}>OPD BOOKS</span></Header> */}
                    {/* <Header as='h2' content='Basic Responsive' style={style.h2} textAlign='center' /> */}

                    {/* <Header as='h3' textAlign='center' style={style.h3} content='Container' /> */}
                    <Container>
                       
                        <Grid style={style.last} textAlign='center'>
                            <Grid.Column width={5}>
                                <Segment.Group >
                                    <Segment color='teal'>
                                        <h4><Icon name='plus square' />Queues Nusrs</h4>
                                        <Divider />
                                        <Container>
                                            <Grid>
                                                <Grid.Column >
                                                    <Scrollbars
                                                        style={{ height: 200 }}>
                                                        <List divided relaxed>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                                                                    <List.Description as='a'>Updated 10 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                                                                    <List.Description as='a'>Updated 22 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>


                                                        </List>
                                                    </Scrollbars>
                                                </Grid.Column>
                                            </Grid>
                                        </Container>

                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>


                            <Grid.Column width={5}>
                                <Segment.Group >
                                    <Segment color='teal'>
                                        <h4><Icon name='history' />History Medical</h4>
                                        <Divider />
                                        <Container>
                                            <Grid>
                                                <Grid.Column >
                                                    <Scrollbars
                                                        style={{ height: 200 }}>
                                                        <List divided relaxed>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                                                                    <List.Description as='a'>Updated 10 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                                                                    <List.Description as='a'>Updated 22 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>


                                                        </List>
                                                    </Scrollbars>
                                                </Grid.Column>
                                            </Grid>
                                        </Container>

                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>


                            <Grid.Column width={5}>
                                <Segment.Group >
                                    <Segment color='teal'>
                                        <h4><Icon name='history' />History Medical</h4>
                                        <Divider />
                                        <Container>
                                            <Grid>
                                                <Grid.Column >
                                                    <Scrollbars
                                                        style={{ height: 200 }}>
                                                        <List divided relaxed>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                                                                    <List.Description as='a'>Updated 10 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                                                                    <List.Description as='a'>Updated 22 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>
                                                            <List.Item>
                                                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                                                <List.Content>
                                                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                                                </List.Content>
                                                            </List.Item>


                                                        </List>
                                                    </Scrollbars>
                                                </Grid.Column>
                                            </Grid>
                                        </Container>

                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>


                        </Grid>
                        
                    </Container>

                    
                </Container>
                   
            </div>
        );
    }
}

export default Registration;