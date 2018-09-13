import React, { Component } from 'react';
import { Menu, Button, Icon, Grid, Card, Segment, Header, Message,Label,TextArea,Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import UnitHeight from '../../Static/Img/unitHeight.png'
import UnitWeight from '../../Static/Img/UnitWeight.png'
import Temperature from '../../Static/Img/temperature.png'
import Pulse from '../../Static/Img/Pulse.png'
import Blood from '../../Static/Img/Blood.png'
import Bmi from '../../Static/Img/bmi.png'
import styled from "styled-components";
const square = { width: 270, height: 110, backgroundColor: '#06ccc2', border: 0}
const size = { fontSize:50,marginTop:10}
const unit = { fontSize: 30, marginTop: 10 }
const Cheif = {  backgroundColor: '#FFFFFF', border:0 }


const UnitHeights = styled(Segment) `
  background: url(${UnitHeight}) !important;
  background-size: 100% 100%;
`;
const UnitWeights = styled(Segment) `
  background: url(${UnitWeight}) !important;
  background-size: 100% 100%;
`;
const Bmis = styled(Segment) `
  background: url(${Bmi}) !important;
  background-size: 100% 100%;
`;
const Temperatures = styled(Segment) `
  background: url(${Temperature}) !important;
  background-size: 100% 100%;
`;
const Pulses = styled(Segment) `
  background: url(${Pulse}) !important;
  background-size: 100% 100%;
`;
const Bloods = styled(Segment) `
  background: url(${Blood}) !important;
  background-size: 100% 100%;
`;
const SegmentG = styled(Segment) `
    border:0px;
    border-width: 0;
`;


export default class ShowFormNurse extends Component {

    

    render() {


        return (
            <div>
                
    <Header color='grey'>Medical for Nurse</Header>
               
    <Segment style={{backgroundColor:'#313334',color:'#FFFFFF',border:0}}>
            <Grid >
                  <Grid.Column width={5}>
                  <Icon name='calendar alternate outline' />
                      DATE: Mon 13 Augus 2018 
                  </Grid.Column>
                  <Grid.Column width={5}>
                     <Icon name='clock outline'/>
                     Time: 18:00 PM
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Icon name='file alternate outline'/>
                     VN: 1233/3
                  </Grid.Column>

                  <Grid.Row style={{marginTop:-20}}>
                  <Grid.Column width={5}>
                    <Icon name='star outline'/>
                        Pilivage:father Big
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Icon name='hospital outline'/>
                        Clinic: Kanonyabun Clinic
                  </Grid.Column>
              
            </Grid.Row>

            </Grid>
        </Segment>
          <p></p>        
                   
                
               
                <Grid  width={16}>
                   
                <Grid.Column width={4}>
                        
                        <UnitHeights style={square}> 
                            <Header inverted as='h3'>Body Height</Header>
                            <Header as='h1' inverted style={size}>170 <span style={unit}>cm</span></Header>
                        </UnitHeights>
                        <Pulses style={square}>
                            <Header inverted >Pulses Pate 1</Header>
                            <Header as='h1' inverted style={size}>170 <span style={unit}>/min</span></Header>
                        </Pulses>
                        <Bloods style={square}>
                            <Header inverted >Blood Pressure 2</Header>
                            <Header as='h1' inverted style={size}>170 <span style={unit}>mm/Hg</span></Header>
                        </Bloods>
                </Grid.Column>
                <Grid.Column width={4}>
                        <UnitWeights style={square}>
                            <Header inverted >Body Weight</Header>
                            <Header as='h1' inverted style={size}>70 <span style={unit}>Kg</span></Header>
                        </UnitWeights>
                        <Pulses style={square}>
                            <Header inverted >Pulses Pate 2</Header>
                            <Header as='h1' inverted style={size}>150 <span style={unit}>/min</span></Header>
                        </Pulses>
                       
                    
                </Grid.Column>
                <Grid.Column width={4}>
                        <Bmis style={square}>
                            <Header inverted >BMI</Header>
                            <Header as='h1' inverted style={size}>31 <span style={unit}></span></Header>
                        </Bmis>
                        <Pulses style={square}>
                            <Header inverted >Pulses Pate 3</Header>
                            <Header as='h1' inverted style={size}>170 <span style={unit}>/min</span></Header>
                        </Pulses>


                </Grid.Column>

                <Grid.Column width={4}>
                        <Temperatures style={square}>
                            <Header inverted >Temperatures</Header>
                            <Header as='h1' inverted style={size}>33 <span style={unit}>°C</span></Header>
                        </Temperatures>
                        <Bloods style={square}>
                            <Header inverted >Blood Pressure 1</Header>
                            <Header as='h1' inverted style={size}>170 <span style={unit}>mm/Hg</span></Header>
                        </Bloods>
                        
                </Grid.Column>
               
            </Grid>
           
                <Header as='h2' color='grey'>Chief plaint</Header>
                <Form>
    <TextArea autoHeight placeholder='Try adding multiple lines' style={{ minHeight: 100 }} />
  </Form>
            </div>
        )
    }
}