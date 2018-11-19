import React, { Component } from 'react';
import { Grid, Segment, Container, Divider, Button, Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { mdrField, demoField } from "../../Static/Data/Field"
import { ClinicProvider } from "../../Services/ClinicProvider"

export default class ShowFormNurse extends Component {
  state = {
    presentIllness: '',
    physicalExem: '',
    diagnosis: '',
    treatment: '',
    recommendation: '',
    appointment: null,
    doctorName: demoField[ClinicProvider.getClinic()].doctorName,
  };

  defaultState = () => {
    this.setState({
      presentIllness: '',
      physicalExem: '',
      diagnosis: '',
      treatment: '',
      recommendation: '',
      appointment: null,
    })
    this.props.setField("resetState",false)
  }

  showPopupConfirm = () => {
    this.props.showPopupConfirm(this.state);
  }

  showButtonForDoctor = () => {
    if ((this.props.empPosition === 3 && this.props.tab !== 2)) {
      //doctor
      return <Grid.Row columns={3} style={{ padding: 0 }}>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
        <Grid.Column>
           <Button
            fluid
            color="teal"
            content="Send To Pharmacy"
            icon="send"
            style={{ display: "block", marginLeft: "auto", marginRight: "auto", backgroundColor: '#393d3e', color: '#FFF' }}
            onClick={() => this.showPopupConfirm()}
          />
        </Grid.Column>
      </Grid.Row>
    } else if (this.props.empPosition === 4){
      return <Grid.Row columns={3} style={{ padding: 0 }}>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
        <Grid.Column>
          <Button
            fluid
            color="teal"
            content="Submit"
            icon="send"
            style={{ display: "block", marginLeft: "auto", marginRight: "auto", backgroundColor: '#393d3e', color: '#FFF' }}
            onClick={() => this.showPopupConfirm()}
          />
        </Grid.Column>
      </Grid.Row>
    }
  }

  showFieldOfDoctor = () => {
    if(this.props.empPosition === 3 ){
      return <div>
      <Form.Group widths="equal">
        <Form.TextArea
          required
          label={mdrField.presentIllness.label}
          placeholder="Enter Patient Symptoms ..."
          onChange={e => this.setState({ [mdrField.presentIllness.variable]: e.target.value })}
          value={this.state[mdrField.presentIllness.variable]}
        />
      </Form.Group>
        <Form.Group widths="equal">
          <Form.TextArea
            required
            label={mdrField.physicalExem.label}
            placeholder="Enter Patient Symptoms ..."
            onChange={e => this.setState({ [mdrField.physicalExem.variable]: e.target.value })}
            value={this.state[mdrField.physicalExem.variable]}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.TextArea
            required
            label={mdrField.diagnosis.label}
            placeholder="Enter Patient Symptoms ..."
            onChange={e => this.setState({ [mdrField.diagnosis.variable]: e.target.value })}
            value={this.state[mdrField.diagnosis.variable]}
          />
        </Form.Group>
      </div>
    }
  }

  componentWillMount = () => {
    if (this.props.medicalRecord) {
      this.setState(this.props.medicalRecord);
    }
  }

  componentWillReceiveProps = (nextProps) => {
    console.log("componentWillReceiveProps",nextProps)
    this.setState(nextProps.medicalRecord);
    if (nextProps.resetState) {
      this.defaultState()
    }
  }

  render() {
    const readOnly = (this.props.empPosition === 3 && this.props.tab !== 2) ? false : true
  return (
    <div>
      <Segment style={{ marginTop: -20 }}>
        <Container style={{ padding: "1% 3%" }}>
          <Form style={{ paddingBottom: "1%" }} disabled>
            {this.showFieldOfDoctor()}
            <Form.Group widths="equal">
              <Form.TextArea
                required
                label={mdrField.treatment.label}
                placeholder="Enter Patient Symptoms ..."
                onChange={e => this.setState({ [mdrField.treatment.variable]: e.target.value })}
                value={this.state[mdrField.treatment.variable]}
                readOnly={readOnly}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.TextArea
                required
                label={mdrField.recommendation.label}
                placeholder="Enter Patient Symptoms ..."
                onChange={e => this.setState({ [mdrField.recommendation.variable]: e.target.value })}
                value={this.state[mdrField.recommendation.variable]}
                readOnly={readOnly}
              />
            </Form.Group>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Form.Field
                    selected={this.state.appointment ? moment(this.state.appointment, 'DD/MM/YYYY') : this.state.appointment}
                    control={DatePicker}
                    label={mdrField.appointment.label}
                    minDate={moment()}
                    required
                    showDisabledMonthNavigation
                    dateFormatCalendar={"MMM YYYY"}
                    placeholderText="ex. 01/01/1990"
                    value={this.state.appointment}
                    onChange={(e) => this.setState({ [mdrField.appointment.variable]: e.format('DD/MM/YYYY') })}
                    readOnly={readOnly}
                  />
                </Grid.Column>
                <Grid.Column></Grid.Column>
                <Grid.Column style={{ alignSelf: "flex-end" }}>
                  <div>{mdrField.doctorName.label}</div>
                  <div style={{ textAlign: "center" }}>{this.state[mdrField.doctorName.variable]}</div>
                  <Divider style={{ margin: "0px", marginTop: "2px" }} />
                </Grid.Column>
              </Grid.Row>
              {this.showButtonForDoctor()}
            </Grid>
          </Form>
        </Container>
      </Segment>
    </div>
  )
}
}