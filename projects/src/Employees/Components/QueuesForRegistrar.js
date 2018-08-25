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

export default class Queues extends Component {
    render() {
        return (
            <Grid.Column width={5}>
                <Segment.Group >
                    <Segment color='teal'>
                        <h4><Icon name='plus square' />Queues {this.props.position}</h4>
                        <Divider />
                        <Container>
                            <Grid  >
                                <Grid.Column >
                                    <Scrollbars
                                        autoHide
                                        style={{ height: 200 }}>

                                        <List divided relaxed>
                                            <List.Item>
                                                <Table basic='very' padded>
                                                    <Table.Body>
                                                        <Table.Row>
                                                            <Table.Cell><Header as='h1' color='teal'>{this.props.StatusQueue}001</Header></Table.Cell>
                                                            <Table.Cell>
                                                                <List.Content>
                                                                    <List.Header as='a'>HN 0000/00</List.Header>
                                                                    <List.Description as='a'>Zayne Griffin</List.Description>
                                                                </List.Content>
                                                            </Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell><Header as='h1' color='teal'>{this.props.StatusQueue}001</Header></Table.Cell>
                                                            <Table.Cell>
                                                                <List.Content>
                                                                    <List.Header as='a'>HN 0000/00</List.Header>
                                                                    <List.Description as='a'>Zayne Griffin</List.Description>
                                                                </List.Content>
                                                            </Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell><Header as='h1' color='teal'>{this.props.StatusQueue}001</Header></Table.Cell>
                                                            <Table.Cell>
                                                                <List.Content>
                                                                    <List.Header as='a'>HN 0000/00</List.Header>
                                                                    <List.Description as='a'>Zayne Griffin</List.Description>
                                                                </List.Content>
                                                            </Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell><Header as='h1' color='teal'>{this.props.StatusQueue}001</Header></Table.Cell>
                                                            <Table.Cell>
                                                                <List.Content>
                                                                    <List.Header as='a'>HN 0000/00</List.Header>
                                                                    <List.Description as='a'>Zayne Griffin</List.Description>
                                                                </List.Content>
                                                            </Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell><Header as='h1' color='teal'>{this.props.StatusQueue}001</Header></Table.Cell>
                                                            <Table.Cell>
                                                                <List.Content>
                                                                    <List.Header as='a'>HN 0000/00</List.Header>
                                                                    <List.Description as='a'>Zayne Griffin</List.Description>
                                                                </List.Content>
                                                            </Table.Cell>
                                                        </Table.Row>
                                                    </Table.Body>
                                                </Table>
                                            </List.Item>
                                        </List>
                                        {/* <List divided relaxed>
                                                            <List.Item>
                                                                <Grid>
                                                                    <Grid.Column width={4}>
                                                                        <Header as='h1' color='teal'>001</Header>
                                                                    </Grid.Column>
                                                                    <Grid.Column width={12}>
                                                                    <List.Content>
                                                                        <List.Header as='a'>HN 0000/00</List.Header>
                                                                        <List.Description as='a'>Zayne Griffin</List.Description>
                                                                    </List.Content>
                                                                    </Grid.Column>
                                                                </Grid>
                                                            </List.Item>
                                                            
                                                            


                                                        </List> */}
                                    </Scrollbars>
                                </Grid.Column>
                            </Grid>
                        </Container>

                    </Segment>
                </Segment.Group>
            </Grid.Column>










        );
    }
}