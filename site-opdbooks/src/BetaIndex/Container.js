import React, { Component } from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Card,
    Step,
    Advertisement,
    

} from 'semantic-ui-react'
import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';
import icon3 from './img/icon3.png';
import icon4 from './img/icon4.png';
import asia from './img/asia.jpg';
import my from './img/my.jpg';
import stamp from './img/stamp.jpg';
import styled from 'styled-components'

const square = { width: 175, height: 175 }

const items = [
    {
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
    },
    {
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%',
    },
]


const GridColumn = styled(Grid.Column) `
    display: flex;
    justify-content: center;
    align-items: center;
`


const Containerbgcolor = styled(Segment) `
     background-color:red;
`
const ImageSizeRow = styled(Image) `
     width:150px;
     height:150px;
     
`
const GridCenter = styled(Grid) `
     width:200px;
     height:200px;

     
`
const ContentSizeCard = styled(Card.Content) `
     width:200px;
     height:200px;
     padding-Button:3em;
`

const ContainerExampleContainer = () => (
<Segment.Group>
    <Segment  style={{ padding: '0em' }} >
       
        <Grid  columns='equal' stackable width={4}>
            <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }}>
                        <GridColumn><ImageSizeRow  src={icon1} /></GridColumn>
                        <Header as='h5' style={{ fontSize: '2em' }}>"DEVELOP"</Header>
                        <p style={{ fontSize: '1em' }}>
                            Develop our team potential and learn new technology.
                        </p>
                    </Grid.Column>

                    <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }}>
                        <GridColumn><ImageSizeRow src={icon1} /></GridColumn>
                        <Header as='h5' style={{ fontSize: '2em' }}>"PREVENT"</Header>
                        <p style={{ fontSize: '1em' }}>
                            Prevent theft of patient data. In case the patient does not consent.
                        </p>
                    </Grid.Column>

                    <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }}>
                        <GridColumn><ImageSizeRow src={icon1} /></GridColumn>
                        <Header as='h5' style={{ fontSize: '2em' }}>"FACILITATE"</Header>
                        <p style={{ fontSize: '1em' }}>
                            Facilitate about registration for patient and data management for employee.
                        </p>
                    </Grid.Column>

                    <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }}>
                        <GridColumn><ImageSizeRow src={icon1} /></GridColumn>
                        <Header as='h5' style={{ fontSize: '2em' }}>"ONLINE"</Header>
                        <p style={{ fontSize: '1em' }}>
                            Save on internet instead of paper document.
                        </p>
                    </Grid.Column>
                
            </Grid.Row>

        </Grid>

    </Segment>
    


    <Segment inverted color='teal' tertiary style={{ padding: '5em 3em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                
                    <Grid.Column textAlign='center' width={16}>
                    <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                    <p style={{ fontSize: '1.33em' }}>
                        We can give your company superpowers to do things that they never thought possible. Let us delight
                        your customers and empower your needs... through pure data analytics.
                    </p>
                    <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                    </p>
                </Grid.Column>
                
            </Grid.Row>
        </Grid>
    </Segment>

    
    <Segment style={{ paddingTop: '5em' }} >

        <Grid columns='equal' stackable width={4}>
            <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }}>
                        <GridColumn><ImageSizeRow circular src={asia} /></GridColumn>
                    <Header as='h5' style={{ fontSize: '2em' }}>"Surakiti Sopontanapat"</Header>
                    <p style={{ fontSize: '1em' }}>
                        Develop our team potential and learn new technology.
                        </p>
                </Grid.Column>

                <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }}>
                        <GridColumn><ImageSizeRow circular src={my} /></GridColumn>
                    <Header as='h5' style={{ fontSize: '2em' }}>"Jidapa Sikaphan"</Header>
                    <p style={{ fontSize: '1em' }}>
                        Prevent theft of patient data. In case the patient does not consent.
                        </p>
                </Grid.Column>

                <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }}>
                        <GridColumn><ImageSizeRow circular src={stamp} /></GridColumn>
                    <Header as='h5' style={{ fontSize: '2em' }}>"Notphattri Buntham"</Header>
                    <p style={{ fontSize: '1em' }}>
                        Facilitate about registration for patient and data management for employee.
                        </p>
                </Grid.Column>

                

            </Grid.Row>

        </Grid>

    </Segment>

    </Segment.Group>
    

)

export default ContainerExampleContainer