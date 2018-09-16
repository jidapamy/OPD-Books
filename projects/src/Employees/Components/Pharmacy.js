import React, { Component } from 'react';
import {
  Grid, Menu, Segment, Container, Divider, Header,
  Icon, Image, Table, Label, List, Dropdown, Item,
  Responsive, Sidebar, Visibility, Statistic, Button,
  Modal, Popup, Form, TextArea, Pagination
}from 'semantic-ui-react'
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import Bmi from '../../Static/Img/bmi.png'
import styled from "styled-components";

export default class Pharmacy extends Component {

  render() {


    return (
      <div>
        <Header as='h2' color='grey'>MedicalRecord Treatment</Header>
          <Segment>
          <Form>
            <Header as='h4' >Treatment</Header>
            <Form.TextArea 
              placeholder='Tell us more about you...' 
              disabled
              />
          </Form>
          <br />
          <Form>
            <Header as='h4' >Recommendation and Plan</Header>
            <Form.TextArea
              placeholder='Tell us more about you...'
              disabled
            />
          </Form>
          <br/>
          <Grid>

            <Grid.Row style={{ marginTop: -5 }}>
              <Grid.Column width={3}>
              </Grid.Column>
              <Grid.Column width={4}>
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={4}>
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={3}>
                <Button 
                  floated='right'
                  color="yellow"
                  content="Success"
                  icon="send"
                  onClick={() => ""}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
          
      </div>
    )
  }
}