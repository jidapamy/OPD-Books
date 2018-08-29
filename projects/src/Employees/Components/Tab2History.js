import React from "react";
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
  Icon,
  Popup,
  Modal,
  Header,
  Divider,
  Container
} from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";
import { Scrollbars } from "react-custom-scrollbars";
import { style } from "./../../Static/Style/QueueCss";
import TreatmentHistory from "./TreatmentHistory";

export default class Tab2History extends React.Component {
  render() {
    return (
      // <Container textAlign="center" style={{ padding: "2% 4%" }}>
      //   <Scrollbars autoHide style={{ height: this.props.height }}>
      //     <List divided relaxed style={{ textAlign: "left" }}>
      //       <TreatmentHistory/>
      //     </List>
      //   </Scrollbars>
      // </Container>

      <div style={style.cardCenter}>

        TEST!!! 
        {/* <Scrollbars autoHide style={{ width: 320, height: 407 }}>
          <Card style={style.contentPosition}>
            <Modal
              trigger={
                <Grid columns="two">
                  <Grid.Row style={style.rowScaleTop}>
                    <Grid.Column style={style.iconCard} width={4}>
                      <Popup
                        trigger={<Icon name="calendar alternate outline" />}
                        content="วันที่เข้ารับการรักษา"
                      />
                    </Grid.Column>
                    <Grid.Column style={style.textCard} width={12}>
                      25 มกราคม 2561
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row style={style.rowScale}>
                    <Grid.Column style={style.iconCard} width={4}>
                      <Popup
                        trigger={<Icon name="hospital outline" />}
                        content="คลินิกที่เข้ารับการรักษา"
                      />
                    </Grid.Column>
                    <Grid.Column style={style.textCard} width={12}>
                      คลินิกศูนย์แพทย์พัฒนา
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row style={style.rowScaleBottom}>
                    <Grid.Column style={style.iconCard} width={4}>
                      <Popup
                        trigger={<Icon name="user md" />}
                        content="แพทย์ที่รักษา"
                      />
                    </Grid.Column>
                    <Grid.Column style={style.textCard} width={12}>
                      นายแพทย์ใจดี สุขใจ
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              }
            >
              <Modal.Header>Medical Records</Modal.Header>
              <Modal.Content image>
                <Modal.Description>

                  <Header style={style.headFormShow} as="h5" block inverted color="grey">
                    <List divided relaxed>
                      <List.Item>
                        <Grid columns="three" style={style.headText}>
                          <Grid.Row>
                            <Grid.Column>
                              Date: &nbsp;&nbsp;Sun, 26 Aug 2018
                  </Grid.Column>
                            <Grid.Column>Time: &nbsp;&nbsp;02:56 AM.</Grid.Column>
                            <Grid.Column>VN: &nbsp;&nbsp;1067/3</Grid.Column>
                          </Grid.Row>
                          <Grid.Row style={style.headMarginShow}>
                            <Grid.Column width={5}>
                              Privilege: &nbsp;&nbsp;-
                  </Grid.Column>
                            <Grid.Column width={11}>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clinic:
                              &nbsp;&nbsp;คลินิกศูนย์แพทย์พัฒนา
                  </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </List.Item>
                    </List>
                  </Header>

                  <Scrollbars autoHide style={{ width: 870, height: 500 }}>
                    <List divided relaxed>
                      <List.Item>
                        <Grid columns="three">
                          <Grid.Row>
                            <Grid.Column>
                              <p style={style.showTopic1}>
                                <b>HT:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "cm." }}
                                labelPosition="right"
                                placeholder="HT ..."
                                style={style.showInput1}
                                disabled
                              />
                            </Grid.Column>

                            <Grid.Column>
                              <p style={style.showTopic2}>
                                <b>T:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "C" }}
                                labelPosition="right"
                                placeholder="Temperature ..."
                                style={style.showInput2}
                                disabled
                              />
                            </Grid.Column>

                            <Grid.Column>
                              <p style={style.showTopic3}>
                                <b>BP1:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "mm/Hg" }}
                                labelPosition="right"
                                placeholder="BP1 ..."
                                style={style.showInput3}
                                disabled
                              />
                            </Grid.Column>
                          </Grid.Row>
                          <br />

                          <Grid.Row>
                            <Grid.Column>
                              <p style={style.showTopic1}>
                                <b>BW:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "Kg." }}
                                labelPosition="right"
                                placeholder="BodyWeigh ..."
                                style={style.showInput1}
                                disabled
                              />
                            </Grid.Column>

                            <Grid.Column>
                              <p style={style.showTopic2}>
                                <b>PR:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "/min" }}
                                labelPosition="right"
                                placeholder="PulseRate ..."
                                style={style.showInput2}
                                disabled
                              />
                            </Grid.Column>

                            <Grid.Column>
                              <p style={style.showTopic3}>
                                <b>BP2:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "mm/Hg" }}
                                labelPosition="right"
                                placeholder="BP2 ..."
                                style={style.showInput3}
                                disabled
                              />
                            </Grid.Column>
                          </Grid.Row>

                          <Grid.Row>
                            <Grid.Column>
                              <p style={style.showTopic1}>
                                <b>BMI:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "-" }}
                                labelPosition="right"
                                placeholder="BMI ..."
                                style={style.showInput1}
                                disabled
                              />
                            </Grid.Column>

                            <Grid.Column>
                              <p style={style.showTopic2}>
                                <b>RR:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "/min" }}
                                labelPosition="right"
                                placeholder="PR ..."
                                style={style.showInput2}
                                disabled
                              />
                            </Grid.Column>

                            <Grid.Column>
                              <p style={style.showTopic3}>
                                <b>BP3:</b>
                              </p>
                              <Input
                                label={{ basic: true, content: "mm/Hg" }}
                                labelPosition="right"
                                placeholder="BP3 ..."
                                style={style.showInput3}
                                disabled
                              />
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row />
                        </Grid>
                      </List.Item>
                      <Form>
                        <p style={style.showTopicChief}>
                          <b>Chief Plaint</b>
                        </p>
                        <Form.Field
                          control={TextArea}
                          placeholder="Enter Patient Symptoms ..."
                          style={style.showInputField}
                          disabled
                        />
                      </Form>
                      <br />
                      <Grid columns="three">
                        <Grid.Row columns={2}>
                          <Grid.Column />
                          <Grid.Column>
                            <p style={style.topicNameDoc}>
                              <b>ลงชื่อ</b>
                            </p>
                            <p style={style.ColumnDoc}>นางสาวพยาบาล จริงๆนะจ้ะ</p>
                            <p style={style.dividerDeco2}><Divider /></p>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                      <Form>
                        <p style={style.showTopicDoc}>
                          <b>Present Illness</b>
                        </p>
                        <Form.Field
                          control={TextArea}
                          placeholder="Enter Present Illness ..."
                          style={style.showInputFieldDoc}
                          disabled
                        />
                      </Form>
                      <Form>
                        <p style={style.showTopicDoc}>
                          <b>Physical Exam</b>
                        </p>
                        <Form.Field
                          control={TextArea}
                          placeholder="Enter Physical Exam ..."
                          style={style.showInputFieldDoc}
                          disabled
                        />
                      </Form>
                      <Form>
                        <p style={style.showTopicDoc}>
                          <b>Investigation</b>
                        </p>
                        <Form.Field
                          control={TextArea}
                          placeholder="Enter Investigation ..."
                          style={style.showInputFieldDoc}
                          disabled
                        />
                      </Form>
                      <Form>
                        <p style={style.showTopicDoc}>
                          <b>Diagnosis / Impression</b>
                        </p>
                        <Form.Field
                          control={TextArea}
                          placeholder="Enter Diagnosis / Impression ..."
                          style={style.showInputFieldDoc}
                          disabled
                        />
                      </Form>
                      <Form>
                        <p style={style.showTopicDoc}>
                          <b>Treatment</b>
                        </p>
                        <Form.Field
                          control={TextArea}
                          placeholder="Enter Treatment ..."
                          style={style.showInputFieldDoc}
                          disabled
                        />
                      </Form>

                      <Form>
                        <p style={style.showTopicDoc}>
                          <b>Recommendation and Plan</b>
                        </p>
                        <Form.Field
                          control={TextArea}
                          placeholder="Enter Recommendation and Plan ..."
                          style={style.showInputFieldDoc}
                          disabled
                        />
                      </Form>
                      <br />

                      <Grid columns="two">
                        <Grid.Row columns={2}>
                          <Grid.Column>
                            <p style={style.topicTime}>
                              <b>F/U Date</b>
                            </p>
                            <Message style={style.ColumnDate} visible>
                              เสาร์, 18 สิงหาคม 2561
                            </Message>
                          </Grid.Column>
                          <Grid.Column>
                            <p style={style.topicNameDoc}>
                              <b>ลงชื่อแพทย์ผู้รักษา</b>
                            </p>
                            <p style={style.ColumnDoc}>นพ. ประสม ประสงค์สุขสันต์ </p>
                            <p style={style.dividerDeco2}><Divider /></p>
                          </Grid.Column>
                        </Grid.Row>
                        <br />
                      </Grid>
                    </List>
                  </Scrollbars>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="red">
                  Close &nbsp;&nbsp;<Icon name="cancel" />
                </Button>
              </Modal.Actions>
            </Modal>
          </Card>
        </Scrollbars> */}
      </div>
    );
  }
}
