import React, { Component } from "react";
import {
  Button,
  Segment,
  Input,
  Grid,
  List,
  Label,
  Form,
  TextArea,
  Message,
  Tab,
  Card,
  Visibility,
  Sticky
} from "semantic-ui-react";

import {
  addQueue,
  getQueues,
  updateStatusQueue
} from "./../../Service/QueueMethod";
import { style } from "./../../Static/Style/QueueCss";

export default class ListQueues extends Component {
  state = {
    qList: []
  };

  componentWillMount = () => {
    console.log("----------- will mount listQ");
    this.prepareQueue();
  };

  componentWillReceiveProps = () => {
    console.log("----------- WillReceive listQ");
    this.prepareQueue();
  };

  prepareQueue = async () => {
    let qList = await getQueues(this.props.empLogin.position);
    if (qList) {
      this.setState({ qList: qList });
    }
  };

  showQList = () => {
    let tmp;
    console.log("qList.length : ", this.state.qList.length);
    if (this.state.qList.length != 0) {
      console.log("qList", this.state.qList);
      if (this.state.qList[0].status) {
        console.log("qList[0]", this.state.qList[0].citizenId);
        tmp = this.state.qList.map((q, index) => (
          <List.Item
            key={q.key}
            style={style.edit}
            onClick={() => this.props.getInfoPatient(q.citizenId, q.queueId)}
          >
            <Grid>
              <Grid.Column width={4} style={style.queueNo}>
                {q.queueId}
              </Grid.Column>
              <Grid.Column width={12}>
                <List.Content>
                  <List.Header as="a" style={style.hnNo}>
                    HN {q.hospitalNumber}
                  </List.Header>
                  <List.Description as="a">
                    {q.title}
                    {q.firstname} {q.lastname}
                  </List.Description>
                </List.Content>
              </Grid.Column>
            </Grid>
          </List.Item>
        ));
        return tmp;
      }
    }
    return <List.Item>ไม่มีคิวผู้ป่วยเข้ารับการรักษา</List.Item>;
  };

  render() {
    const { contextRef } = this.state;
    return (
      <Sticky context={contextRef}>
        <Segment>
          <p style={style.head}>
            <b>Queues</b>
          </p>
          <List divided relaxed>
            {this.showQList()}
          </List>
        </Segment>
      </Sticky>
    );
  }
}
