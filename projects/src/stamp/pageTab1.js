import React from 'react';
import { Button, Segment, Input, Grid, List, Label, Form, TextArea, Message, Tab, Card } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';
import { style } from './queueCss'

class PageTab1 extends React.Component {

  render() {
    return (
      <Grid.Column width={5}>

        <List divided relaxed>
          <List.Item style={style.edit}>
            <Grid columns='two'>
              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as='a' style={style.toppicPatient}>Hospital Number</List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as='a' style={style.showData}>0000/00</List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as='a' style={style.toppicPatient}>Name</List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as='a' style={style.showData}>Weerapat</List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as='a' style={style.toppicPatient}>Surname</List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as='a' style={style.showData}>Laorshubpayapat</List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as='a' style={style.toppicPatient}>ID Card</List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as='a' style={style.showData}>1234567891011</List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as='a' style={style.toppicPatient}>Gender</List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as='a' style={style.showData}>Female</List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as='a' style={style.toppicPatient}>Age</List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as='a' style={style.showData}>21</List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as='a' style={style.toppicPatient}>Nationalit</List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as='a' style={style.showData}>Thai</List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as='a' style={style.toppicPatient}>Blood Type</List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as='a' style={style.showData}>A</List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as='a' style={style.toppicPatient}>โรคประจำตัว</List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as='a' style={style.showData}>ภูมิแพ้</List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as='a' style={style.toppicPatient}>สิ่งที่แพ้</List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as='a' style={style.showData}>อาหารทะเล</List.Description>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={style.paddingPatient}>
                <Grid.Column width={7}>
                  <List.Header as='a' style={style.toppicPatient}>สิทธิการรักษา</List.Header>
                </Grid.Column>

                <Grid.Column width={9}>
                  <List.Description as='a' style={style.showData}>ราชการ</List.Description>
                </Grid.Column>
              </Grid.Row>

            </Grid>




          </List.Item>


        </List>


      </Grid.Column>





    );
  }
}

export default PageTab1;
