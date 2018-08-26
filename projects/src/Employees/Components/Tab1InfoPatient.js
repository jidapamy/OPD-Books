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
  Card
} from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";
import { style } from "./../../Static/Style/QueueCss";
import moment from "moment";

export default class Tab1InfoPatient extends React.Component {
  state = {
    age: ""
  };
  render() {
    console.log("Patient : " ,this.props.patient);
    return <Grid.Column width={5}>
        <List divided relaxed>
          <List.Item style={style.edit}>
            <Grid columns="two">
              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as="a" style={style.toppicPatient}>
                    Hospital Number
                  </List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as="a" style={style.showData}>
                    {this.props.patient.hospitalNumber}
                  </List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as="a" style={style.toppicPatient}>
                    Name
                  </List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as="a" style={style.showData}>
                    {this.props.patient.firstname}
                  </List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as="a" style={style.toppicPatient}>
                    Surname
                  </List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as="a" style={style.showData}>
                    {this.props.patient.lastname}
                  </List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as="a" style={style.toppicPatient}>
                    ID Card
                  </List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as="a" style={style.showData}>
                    {this.props.patient.citizenId}
                  </List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as="a" style={style.toppicPatient}>
                    Gender
                  </List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as="a" style={style.showData}>
                    {this.props.patient.gender}
                  </List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as="a" style={style.toppicPatient}>
                    Age
                  </List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as="a" style={style.showData}>
                    {this.props.patient.age}
                  </List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as="a" style={style.toppicPatient}>
                    Nationality
                  </List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as="a" style={style.showData}>
                    {this.props.patient.nationality}
                  </List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as="a" style={style.toppicPatient}>
                    Blood Type
                  </List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as="a" style={style.showData}>
                    {this.props.patient.bloodgroup}
                  </List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as="a" style={style.toppicPatient}>
                    Congenital Disease
                  </List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as="a" style={style.showData}>
                    {this.props.patient.congenitalDisease}
                  </List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as="a" style={style.toppicPatient}>
                    Allergy
                  </List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as="a" style={style.showData}>
                    {this.props.patient.allergy}
                  </List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as="a" style={style.toppicPatient}>
                    Privilege
                  </List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as="a" style={style.showData}>
                    {this.props.patient.privilege}
                  </List.Description>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </List.Item>
        </List>
      </Grid.Column>;
  }
}
