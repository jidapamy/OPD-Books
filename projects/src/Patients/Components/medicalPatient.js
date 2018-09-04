import React from "react";
import {
    Grid, Menu, Segment, Container, Divider, Header,
    Icon, Image, Table, Label, List, Dropdown, Item,
    Responsive, Sidebar, Visibility, Statistic, Button,
    Modal, Popup, Form, TextArea, Pagination
} from "semantic-ui-react";
import { Scrollbars } from 'react-custom-scrollbars';
//service
import { getPatient } from './../../Service/ManagePatientMethod';
import FromAddressPatient from './../Components/FromAddressPatient';

const Years = [
    { key: 2012, text: '2012', value: 2012 },
    { key: 2013, text: '2012', value: 2013 },
    { key: 2014, text: '2012', value: 2014 },
    { key: 2015, text: '2012', value: 2015 },
    { key: 2016, text: '2016', value: 2016 },
    { key: 2017, text: '2017', value: 2017 },
    { key: 2018, text: '2018', value: 2018 },
    { key: 2019, text: '2019', value: 2019 },
    { key: 2020, text: '2020', value: 2020 },
    { key: 2021, text: '2021', value: 2021 },
    { key: 2022, text: '2022', value: 2022 },
    { key: 2023, text: '2023', value: 2023 },
    { key: 2024, text: '2024', value: 2024 },
    { key: 2025, text: '2025', value: 2025 },
    { key: 2026, text: '2026', value: 2026 },
    { key: 2027, text: '2027', value: 2027 },
    { key: 2028, text: '2028', value: 2028 },
    { key: 2029, text: '2029', value: 2029 },
    { key: 2030, text: '2030', value: 2030 },
    { key: 2031, text: '2031', value: 2031 },
]

const style = {
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
}
export default class FromHisProfilePatient extends React.Component {



    render() {
        return (


            <Grid.Column width={6}>
                <Segment.Group >
                    <Segment color='teal'>
                        <h4><Icon name='clipboard outline' />Medical Record</h4>
                        <Divider />
                        <Scrollbars autoHide style={{ height: 614 }}>
                            <Container>
                                <Grid >


                                    <Grid.Column width={1}>
                                        <Grid.Row >
                                            <Header.Subheader >
                                                HT
                          </Header.Subheader>
                                            <Header.Subheader >
                                                BW
                          </Header.Subheader>
                                            <Header.Subheader >
                                                BMI
                          </Header.Subheader>
                                        </Grid.Row>

                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row>
                                            <Header.Subheader >
                                                100
                          </Header.Subheader>
                                            <Header.Subheader >
                                                134
                          </Header.Subheader>
                                            <Header.Subheader >
                                                34
                          </Header.Subheader>
                                        </Grid.Row>

                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row>
                                            <Header.Subheader >
                                                cm.
                          </Header.Subheader>
                                            <Header.Subheader >
                                                kg.
                          </Header.Subheader>
                                            <Header.Subheader >

                                            </Header.Subheader>
                                        </Grid.Row>

                                    </Grid.Column>
                                    {/* ====== */}
                                    <Grid.Column width={1}>
                                        <Grid.Row >

                                        </Grid.Row>

                                    </Grid.Column>
                                    {/* ======= */}
                                    {/* ===== */}
                                    <Grid.Column width={1}>
                                        <Grid.Row >

                                        </Grid.Row>


                                    </Grid.Column>
                                    {/* ===== */}
                                    <Grid.Column width={1}>
                                        <Grid.Row>
                                            <Header.Subheader >
                                                HT
                          </Header.Subheader>
                                            <Header.Subheader >
                                                BW
                          </Header.Subheader>
                                            <Header.Subheader >
                                                BMI
                          </Header.Subheader>
                                        </Grid.Row>

                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row>
                                            <Header.Subheader >
                                                100
                          </Header.Subheader>
                                            <Header.Subheader >
                                                134
                          </Header.Subheader>
                                            <Header.Subheader >
                                                34
                          </Header.Subheader>
                                        </Grid.Row>

                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row>
                                            <Header.Subheader >
                                                cm.
                          </Header.Subheader>
                                            <Header.Subheader >
                                                kg.
                          </Header.Subheader>
                                            <Header.Subheader >

                                            </Header.Subheader>
                                        </Grid.Row>

                                    </Grid.Column>

                                    {/* ===== */}
                                    <Grid.Column width={1}>
                                        <Grid.Row >

                                        </Grid.Row>


                                    </Grid.Column>
                                    {/* ===== */}
                                    {/* ===== */}
                                    <Grid.Column width={1}>
                                        <Grid.Row >

                                        </Grid.Row>


                                    </Grid.Column>
                                    {/* ===== */}

                                    <Grid.Column width={1}>
                                        <Grid.Row>
                                            <Header.Subheader >
                                                HT
                          </Header.Subheader>
                                            <Header.Subheader >
                                                BW
                          </Header.Subheader>
                                            <Header.Subheader >
                                                BMI
                          </Header.Subheader>
                                        </Grid.Row>

                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row>
                                            <Header.Subheader >
                                                100
                          </Header.Subheader>
                                            <Header.Subheader >
                                                134
                          </Header.Subheader>
                                            <Header.Subheader >
                                                34
                          </Header.Subheader>
                                        </Grid.Row>

                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row>
                                            <Header.Subheader >
                                                cm.
                          </Header.Subheader>
                                            <Header.Subheader >
                                                kg.
                          </Header.Subheader>
                                            <Header.Subheader >

                                            </Header.Subheader>
                                        </Grid.Row>

                                    </Grid.Column>

                                </Grid>
                                <br />

                                <Form>
                                    <Form.TextArea label='Chief Plaint' placeholder='Tell us more about you...' />
                                </Form>
                                <br />

                                <p style={{ textAlign: 'right' }} >Miss.Sunisaya Maremnakron</p>


                                <Divider />
                                <br />
                                <Form>
                                    <Form.TextArea label='Present Illness' placeholder='Tell us more about you...' />
                                </Form>
                                <br />
                                <Form>
                                    <Form.TextArea label='Physical Exam' placeholder='Tell us more about you...' />
                                </Form>
                                <br />
                                <Form>
                                    <Form.TextArea label='Investigation' placeholder='Tell us more about you...' />
                                </Form>
                                <br />
                                <Form>
                                    <Form.TextArea label='Dianosis / impression' placeholder='Tell us more about you...' />
                                </Form>
                                <br />
                                <Form>
                                    <Form.TextArea label='Treatment' placeholder='Tell us more about you...' />
                                </Form>
                                <br />
                                <Form>
                                    <Form.TextArea label='Recommendation and Plan ' placeholder='Tell us more about you...' />
                                </Form>
                                <br />
                                <Grid width={16}>
                                    <Grid.Column width={8}>
                                        <Icon name='calendar alternate outline' />F/D Date
                          <p>Aug 8 , 2018</p>
                                    </Grid.Column>

                                    <Grid.Column width={8}>
                                        <Icon name='user md' />Docter Name
                        <p>Dr Montgomery Delarosa</p>
                                    </Grid.Column>

                                </Grid >

                            </Container>
                        </Scrollbars>
                    </Segment>
                </Segment.Group>
            </Grid.Column>



        );
    }
}
