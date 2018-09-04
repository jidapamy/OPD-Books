import React, { Component } from "react";
import ScanButton from "./../../Static/Img/ScanButton.png";
import { Scrollbars } from "react-custom-scrollbars";
import WebFont from 'webfontloader';
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
  Divider
} from "semantic-ui-react";

import { style } from "./../../Static/Style/QueueCss";

import {
  addQueue,
  getQueues,
  updateStatusQueue
} from "./../../Service/QueueMethod";

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
   

  }
});

export default class Queues extends Component {
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
    let qList = await getQueues(this.props.position);
    if (qList) {
      this.setState({ qList: qList });
    }
  };

  showQList = () => {
    let tmp;
    if (this.state.qList.length !== 0) {
      if (this.state.qList[0].status) {
        tmp = this.state.qList.map((q, index) => {
          if (this.props.page === "Registration") {
            return (
              <Table.Row key={index}>
                <Table.Cell>
                  <Header as="h1" color="teal">
                    {this.props.StatusQueue}
                    {q.queueId}
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <List.Content>
                    <List.Header as="a">HN {q.hospitalNumber}</List.Header>
                    <List.Description as="a" style={style.textQueue}>
                      {q.title} {q.firstname} {q.lastname}
                    </List.Description>
                  </List.Content>
                </Table.Cell>
              </Table.Row>
            );
          } else {
            console.log("List Q Medical");
            return (
              <List.Item 
                style={style.edit} 
                key={q.key}
                onClick={() => this.props.getInfoPatient(q.citizenId, q.queueId)}>
                  <Grid> 
                    <Grid.Column width={7} style={style.queueNo}>
                      {this.props.StatusQueue} {q.queueId}
                    </Grid.Column>
                    <Grid.Column width={9}>
                      <List.Content>
                        <List.Header as="a" style={style.hnNo}>
                          HN {q.hospitalNumber}
                        </List.Header>
                        <List.Description as="a" style={style.textQueue}>
                         {q.title} {q.firstname} {q.lastname}
                        </List.Description>
                      </List.Content>
                    </Grid.Column>
                  </Grid>
                </List.Item>
            )
          }
        });
        return tmp;
      }
    }
    return (
      <List.Item style={{ textAlign: "center" }}>
      <br/>
         - ไม่มีคิวผู้ป่วยเข้ารับการรักษา -
      </List.Item>
    );
  };

  showComponent = () => {
    if (this.props.page === "Registration") {
      return (
          <Segment.Group>
            <Segment color="teal">
              <h4>
                <Icon name="plus square" />Queues {this.props.role}
              </h4>
              <Divider />
              <Container>
                <Grid>
                  <Grid.Column>
                    <Scrollbars autoHide style={{ height: 200 }}>
                      <List divided relaxed>
                        <List.Item>
                          <Table basic="very" padded>
                            <Table.Body>{this.showQList()}</Table.Body>
                          </Table>
                        </List.Item>
                      </List>
                    </Scrollbars>
                  </Grid.Column>
                </Grid>
              </Container>
            </Segment>
          </Segment.Group>
      );
    } else {
      console.log("Medical")
      return (
          <Segment raised>
            <p style={style.head}>
              <b>Queues</b>
            </p>
            <Scrollbars style={{ width: 185, height: 530 }}>
              <List divided relaxed>
                {this.showQList()}
              </List>
            </Scrollbars>
          </Segment>
      );
    }
  };


  render() {
    console.log("List Q")
    return 
    this.showComponent();

  }
}