import React from "react";
import { Grid, Segment, Container, Divider, Header, Icon, Form } from "semantic-ui-react";
import { Scrollbars } from 'react-custom-scrollbars';

export default class FromHisProfilePatient extends React.Component {
    render() {
        const data = this.props.chooseMedicalRecord;
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
                                                {data.height}
                                            </Header.Subheader>
                                            <Header.Subheader >
                                                {data.bodyWeight}
                                            </Header.Subheader>
                                            <Header.Subheader >
                                                {data.bmi}
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
                                    <Grid.Column width={1}>
                                        <Grid.Row >
                                        </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row >
                                        </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row>
                                            <Header.Subheader >
                                                T
                                            </Header.Subheader>
                                            <Header.Subheader >
                                                PR
                                            </Header.Subheader>
                                            <Header.Subheader >
                                                RR
                                            </Header.Subheader>
                                        </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row>
                                            <Header.Subheader >
                                                {data.temperature}
                                            </Header.Subheader>
                                            <Header.Subheader >
                                                {data.pulseRate}
                                            </Header.Subheader>
                                            <Header.Subheader >
                                                {data.respiratoryRate}
                                            </Header.Subheader>
                                        </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row>
                                            <Header.Subheader >
                                                C
                                            </Header.Subheader>
                                            <Header.Subheader >
                                                /min.
                                            </Header.Subheader>
                                            <Header.Subheader >
                                                /min.
                                            </Header.Subheader>
                                        </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row >
                                        </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row >
                                        </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row>
                                            <Header.Subheader >
                                                BP1
                                            </Header.Subheader>
                                            <Header.Subheader >
                                                BP2
                                            </Header.Subheader>
                                            <Header.Subheader >
                                                BP3
                                            </Header.Subheader>
                                        </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row>
                                            <Header.Subheader >
                                                {data.BP1}
                                            </Header.Subheader>
                                            <Header.Subheader >
                                                {data.BP2}
                                            </Header.Subheader>
                                            <Header.Subheader >
                                                {data.BP3}
                                            </Header.Subheader>
                                        </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Grid.Row>
                                            <Header.Subheader >
                                                mmHg
                                            </Header.Subheader>
                                            <Header.Subheader >
                                                mmHg
                                            </Header.Subheader>
                                            <Header.Subheader >
                                                mmHg
                                            </Header.Subheader>
                                        </Grid.Row>
                                    </Grid.Column>
                                </Grid>
                                <br />
                                <Form>
                                    <Form.TextArea label='Chief Plaint' value={data.chiefComplaint}/>
                                </Form>
                                <br />
                                <div style={{ textAlign: 'right' }}>
                                    <Icon name='user md' />Nurse Name
                                    <p>{data.nurseName}</p>
                                </div>
                                <Divider />
                                <br />
                                <Form>
                                    <Form.TextArea label='Present Illness' value={data.presentIllness}/>
                                    <Form.TextArea label='Physical Exam' value={data.physicalExem}/>
                                    <Form.TextArea label='Dianosis / impression' value={data.diagnosis}/>
                                    <Form.TextArea label='Treatment' value={data.treatment}/>
                                    <Form.TextArea label='Recommendation and Plan ' value={data.recommendation}/>
                                </Form>
                                <br />
                                <Grid width={16}>
                                    <Grid.Column width={8}>
                                        <Icon name='calendar alternate outline' />F/D Date
                                        <p>{data.appointment}</p>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Icon name='user md' />Doctor Name
                                        <p>{data.doctorName}</p>
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
