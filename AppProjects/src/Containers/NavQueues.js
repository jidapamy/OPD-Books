import React, { Component } from "react";
import {
    Grid,
    List,
    Menu,
    Image,
} from "semantic-ui-react";

import { style } from "./../Static/Style/QueueCss";
import logoapp from "../Static/Img/logoapp.svg"

import { getQueuesWithRoleFromDB } from "../Services/DbService"
import { ClinicProvider } from "../Services/ClinicProvider"


export default class NavbarQueues extends Component {
    state = {
        chooseQueue: '',
        empPosition: 1,
        queues: []
    }

    choosePatient = (name, queue) => {
        this.props.getPatientData(queue.citizenId)
        this.props.setField("choosePatient", queue)
        this.setState({ chooseQueue: name })
    }

    componentWillMount = () => {
        if (this.props.empPosition) {
            getQueuesWithRoleFromDB(this.props.empPosition).then(res => {
                this.setState({
                    empPosition: this.props.empPosition,
                    queues: res.data
                })
            })
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.empPosition !== this.state.empPosition) {
            getQueuesWithRoleFromDB(nextProps.empPosition).then(res => {
                this.setState({
                    empPosition: nextProps.empPosition,
                    queues: res.data,
                    chooseQueue: '',
                })
            })
        } else if (nextProps.choosePatient.queueId !== this.state.chooseQueue) {
            getQueuesWithRoleFromDB(nextProps.empPosition).then(res => {
                this.setState({
                    empPosition: nextProps.empPosition,
                    queues: res.data,
                })
            })
        }
    }

    returnQueueId = (index) => {
        let tmp = ''
        if (index < 10) {
            tmp = '00' + index
        } else if (index < 100) {
            tmp = '0' + index
        } else {
            tmp = index
        }
        return tmp
    }

    showQueues = () => {
        const { chooseQueue } = this.state
        let tmp = ''

        let newStyle = { ...style }
        if (ClinicProvider.getClinic() == "KMUTT") {
            // สีชมพู
            newStyle.widthNav2 = {
                background: '#FA636F',
            }
            newStyle.queueNoNav = {
                color: '#FA636F',
                fontSize: '25px',
                textAlign: 'right',
            }
        }
        if (this.state.queues && this.state.queues.length != 0) {
            tmp = this.state.queues.map((q) => (
                <Menu.Item
                    style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
                    name={q.queueId} active={chooseQueue === q.queueId}
                    onClick={(e, { name }) => this.choosePatient(name, q)}>
                    <Grid style={chooseQueue === q.queueId ? newStyle.widthNav2 : newStyle.widthNav} verticalAlign="middle">
                        <Grid.Column width={5} style={
                            chooseQueue === q.queueId ? newStyle.queueNoNav2 : newStyle.queueNoNav
                        }>
                            {this.returnQueueId(q.queueId)}
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <List>
                                <List.Content>
                                    <List.Header as="a" style={chooseQueue === q.queueId ? newStyle.hnNoNav2 : newStyle.hnNoNav}>
                                        {q.citizenId}
                                    </List.Header><br />
                                    <List.Description as="a" style={newStyle.textQueueNav}>
                                        {q.firstname} {q.lastname}
                                    </List.Description>
                                </List.Content>
                            </List>
                        </Grid.Column>
                    </Grid>
                </Menu.Item>
            ))
        } else {
            tmp = <Menu.Item style={{ textAlign: "center", color: '#849695', fontSize: '19px', fontFamily: 'Kanit, sans-serif' }}>
                - No Queue -
                </Menu.Item>
        }
        return tmp
    }

    render() {
        return (
            <Menu vertical inverted fixed='left' position='fixed' style={{ width: '100%' }}>
                <Menu.Item color='teal'>
                    <Image src={logoapp} size='large' style={{ height: 120, width: 120, marginLeft: '20%' }} />
                </Menu.Item>
                {this.showQueues()}
                {/* <Menu.Item style={{ paddingTop: '1rem',paddingBottom: '1rem' }}name='001' active={chooseQueue === '001'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                    <Grid style={chooseQueue === '001' ? style.widthNav2 : style.widthNav} verticalAlign="middle">
                        <Grid.Column width={5} style={chooseQueue === '001' ? style.queueNoNav2 : style.queueNoNav}>
                            0001
                        </Grid.Column>
                        <Grid.Column width={11}>
                        <List>
                            <List.Content>
                                <List.Header as="a" style={chooseQueue === '001' ? style.hnNoNav2 : style.hnNoNav}>
                                    1234567890101
                                </List.Header><br />
                                <List.Description as="a" style={style.textQueueNav}>
                                    Mr. putpong champcampcampcamp
                                </List.Description>
                            </List.Content>
                        </List>
                        </Grid.Column>
                    </Grid>
                </Menu.Item> */}
                {/* <Menu.Item style={{ paddingTop: '1rem', paddingBottom: '1rem' }} name='002' active={chooseQueue === '002'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                    <Grid style={chooseQueue === '002' ? style.widthNav2 : style.widthNav}>
                        <Grid.Column width={5} style={chooseQueue === '002' ? style.queueNoNav2 : style.queueNoNav}>
                            0002
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <List>
                                <List.Content>
                                    <List.Header as="a" style={chooseQueue === '002' ? style.hnNoNav2 : style.hnNoNav}>
                                        1234567890102
                                </List.Header><br />
                                    <List.Description as="a" style={style.textQueueNav}>
                                        Mr. putpong champ
                                </List.Description>
                                </List.Content>
                            </List>
                        </Grid.Column>
                    </Grid>
                </Menu.Item>
                <Menu.Item style={{ paddingTop: '1rem', paddingBottom: '1rem' }} name='003' active={chooseQueue === '003'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
                    <Grid style={chooseQueue === '003' ? style.widthNav2 : style.widthNav}>
                        <Grid.Column width={5} style={chooseQueue === '003' ? style.queueNoNav2 : style.queueNoNav}>
                            0003
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <List>
                                <List.Content>
                                    <List.Header as="a" style={chooseQueue === '003' ? style.hnNoNav2 : style.hnNoNav}>
                                        1234567890103
                                </List.Header><br />
                                    <List.Description as="a" style={style.textQueueNav}>
                                        Mr. putpong champ
                                </List.Description>
                                </List.Content>
                            </List>
                        </Grid.Column>
                    </Grid>
                </Menu.Item> */}

            </Menu>
        )
    }
}