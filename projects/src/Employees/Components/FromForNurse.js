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
  Sticky,
  Header
} from "semantic-ui-react";
import { Scrollbars } from "react-custom-scrollbars";

import { style } from "./../../Static/Style/QueueCss";

export default class FromForNurse extends Component {
  state = {
    visitNumber: "",
    clinic: "",
    height: 0,
    bodyWeight: 0,
    bmi: 0,
    temperature: 0,
    pulseRate: 0,
    respiratoryRate: 0,
    BP1: "",
    BP2: "",
    BP3: "",
    chiefComplaint: ""
  };

  render() {
    return (
      <div>
        <List divided relaxed>
          <List.Item>
            <br />

            <Grid columns="three">
              <Grid.Row>
                <Grid.Column>
                  <p style={style.topic1}>
                    <b>HT:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "cm." }}
                    labelPosition="right"
                    placeholder="HT ..."
                    style={style.input1}
                  />
                </Grid.Column>

                <Grid.Column>
                  <p style={style.topic2}>
                    <b>T:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "C" }}
                    labelPosition="right"
                    placeholder="Temperature ..."
                    style={style.input2}
                  />
                </Grid.Column>

                <Grid.Column>
                  <p style={style.topic3}>
                    <b>BP1:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "mm/Hg" }}
                    labelPosition="right"
                    placeholder="BP1 ..."
                    style={style.input3}
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.Row}>
                <Grid.Column>
                  <p style={style.topic1}>
                    <b>BW:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "Kg." }}
                    labelPosition="right"
                    placeholder="BodyWeigh ..."
                    style={style.input1}
                  />
                </Grid.Column>

                <Grid.Column>
                  <p style={style.topic2}>
                    <b>PR:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "/min" }}
                    labelPosition="right"
                    placeholder="PulseRate ..."
                    style={style.input2}
                  />
                </Grid.Column>

                <Grid.Column>
                  <p style={style.topic3}>
                    <b>BP2:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "mm/Hg" }}
                    labelPosition="right"
                    placeholder="BP2 ..."
                    style={style.input3}
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.Row}>
                <Grid.Column>
                  <p style={style.topic1}>
                    <b>BMI:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "-" }}
                    labelPosition="right"
                    placeholder="BMI ..."
                    style={style.input1}
                  />
                </Grid.Column>

                <Grid.Column>
                  <p style={style.topic2}>
                    <b>RR:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "/min" }}
                    labelPosition="right"
                    placeholder="PR ..."
                    style={style.input2}
                  />
                </Grid.Column>

                <Grid.Column>
                  <p style={style.topic3}>
                    <b>BP3:</b>
                  </p>
                  <Input
                    label={{ basic: true, content: "mm/Hg" }}
                    labelPosition="right"
                    placeholder="BP3 ..."
                    style={style.input3}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </List.Item>
        </List>

        <Form>
          <p style={style.topicChief}>
            <b>Chief Plaint</b>
          </p>
          <Form.Field
            control={TextArea}
            placeholder="Enter Patient Symptoms ..."
            style={style.inputField}
          />
        </Form>
        <br />

        <Grid columns="two">
          <Grid.Row columns={2}>
            <Grid.Column>
              <p style={style.topicNameNurse}>
                <b>ลงชื่อ</b>
              </p>
              <Message style={style.ColumnNurse} visible>
                นางสาวพยาบาล จริงๆนะจ้ะ
              </Message>
            </Grid.Column>
            <Grid.Column>
              <Button
                color="teal"
                content="Send To Doctor"
                icon="send"
                style={style.ButtonNurse}
                onClick={() => this.showPopupConfirm()}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
