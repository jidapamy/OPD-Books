import React, { Component } from "react";
import ScanButton from "./../../Static/Img/ScanButton.png";
import { Scrollbars } from "react-custom-scrollbars";
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

import {
  addQueue,
  getQueues,
  updateStatusQueue
} from "./../../Service/QueueMethod";

const style = {
  h1: {
    marginTop: "4em",
    marginBottom: "50px"
  },
  h2: {
    margin: "4em 0em 2em"
  },
  d1: {
    marginTop: "1em",
    marginBottom: "50px"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  last: {}
};

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
        tmp = this.state.qList.map((q, index) => (
          <Table.Row>
            <Table.Cell>
              <Header as="h1" color="teal">
                {this.props.StatusQueue}{q.queueId}
              </Header>
            </Table.Cell>
            <Table.Cell>
              <List.Content>
                <List.Header as="a">HN {q.hospitalNumber}</List.Header>
                <List.Description as="a">{q.title} {q.firstname} {q.lastname}</List.Description>
              </List.Content>
            </Table.Cell>
          </Table.Row>
        ));
        return tmp;
      }
    }
    return <List.Item style={{textAlign: 'center'}}>ไม่มีคิวผู้ป่วยเข้ารับการรักษา</List.Item>;
  };

  render() {
    return <Grid.Column width={5}>
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
                          <Table.Body>
                            {this.showQList()}
                          </Table.Body>
                        </Table>
                      </List.Item>
                    </List>
                  </Scrollbars>
                </Grid.Column>
              </Grid>
            </Container>
          </Segment>
        </Segment.Group>
      </Grid.Column>;
  }
}
