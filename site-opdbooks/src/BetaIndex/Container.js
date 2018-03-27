import React, { Component } from 'react';
import {
    Button, Container, Divider, Grid, Header, Icon,
    Image, List, Menu, Responsive, Segment, Sidebar,
    Visibility, Card, Step, Advertisement, Reveal,
} from 'semantic-ui-react'
import styled from 'styled-components'
// << IMPORT PHOTO >>
import Contain1 from './img/Contain1.png';
import Contain2 from './img/Contain2.png';
import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';
import icon3 from './img/icon3.png';
import icon4 from './img/icon4.png';
import roadmap from './img/roadmap.png';
import asia from './img/asia.jpg';
import my from './img/my.jpg';
import stamp from './img/stamp.jpg';
import asiaGray from './img/asiaGray.jpg';
import myGray from './img/myGray.jpg';
import stampGray from './img/stampGray.jpg';
import WOW from 'wowjs';

const GridColumn = styled(Grid.Column) `
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeaderCenter = styled(Header) `
    display: flex;
    justify-content: center;
    align-items: center;
`
const RoadmapCenter = styled(Image) `
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

class ContainerExampleContainer extends React.Component {
    componentDidMount() {
        new WOW.WOW().init()
    }

    render() {
        return (
            <Segment.Group style={{ border: '0px' }}>
                {/* << ส่วรบอกวิธีการทำงาน โปรเจ็ค >> */}
                <Segment style={{ padding: '1em 0em', border: '0px' }} vertical className="wow fadeInLeft" data-wow-delay="0.2s">
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column floated='left' width={6}>
                                <Image
                                    rounded
                                    size='large'
                                    src={Contain1}
                                />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                                <p style={{ fontSize: '1.33em' }}><br></br>
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
                <Segment style={{ padding: '5em 0em', border: '0px' }} vertical className="wow fadeInRight" data-wow-delay="0.2s">
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                                <p style={{ fontSize: '1.33em' }}><br></br>
                                    We can give your company superpowers to do things that they never thought possible. Let us delight
                                    your customers and empower your needs... through pure data analytics.
                            </p>
                                <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                                <p style={{ fontSize: '1.33em' }}><br></br>
                                    Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                            </p>
                            </Grid.Column>
                            <Grid.Column floated='left' width={6}>
                                <Image
                                    rounded
                                    size='large'
                                    src={Contain2}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                {/* <<<<<<<<------------------->>>>>>>>>> */}



                {/* << ส่วน ICON บอกจุดมุ่งหมายข้อดีของเรา >> */}

                <Segment style={{ paddingTob: '2em', border: '0px' }} >

                    <Grid columns='equal' stackable width={4}>

                        <Grid.Row textAlign='center'>

                            <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }} className="wow zoomIn" data-wow-delay="0.2s">
                                <GridColumn><ImageSizeRow src={icon1} /></GridColumn>
                                <Header as='h5' style={{ fontSize: '2em' }}>"DEVELOP"</Header>
                                <p style={{ fontSize: '1em' }}>
                                    Develop our team potential and learn new technology.
                        </p>
                            </Grid.Column>

                            <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }} className="wow zoomIn" data-wow-delay="0.2s">
                                <GridColumn><ImageSizeRow src={icon2} /></GridColumn>
                                <Header as='h5' style={{ fontSize: '2em' }}>"PREVENT"</Header>
                                <p style={{ fontSize: '1em' }}>
                                    Prevent theft of patient data. In case the patient does not consent.
                        </p>
                            </Grid.Column>

                            <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }} className="wow zoomIn" data-wow-delay="0.2s">
                                <GridColumn><ImageSizeRow src={icon3} /></GridColumn>
                                <Header as='h5' style={{ fontSize: '2em' }}>"FACILITATE"</Header>
                                <p style={{ fontSize: '1em' }}>
                                    Facilitate about registration for patient and data management for employee.
                        </p>
                            </Grid.Column>

                            <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }} className="wow zoomIn" data-wow-delay="0.2s">
                                <GridColumn><ImageSizeRow src={icon4} /></GridColumn>
                                <Header as='h5' style={{ fontSize: '2em' }}>"ONLINE"</Header>
                                <p style={{ fontSize: '1em' }}>
                                    Save on internet instead of paper document.
                        </p>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Segment>

                {/* <<<<<<<<------------------->>>>>>>>>> */}



                {/* <<<<< ส่วนของ หลายละเอียดเนื้อหาอื่นๆ >>>>>>*/}
                <Segment style={{ padding: '5em 3em', border: '0px' }} vertical className="wow zoomIn" data-wow-delay="0.2s">
                    <HeaderCenter as='h5' style={{ fontSize: '2em' }}>Roadmap</HeaderCenter>
                    <RoadmapCenter
                        centered
                        size='massive'
                        src={roadmap}
                    />
                </Segment>
                {/* <<<<<<<<------------------->>>>>>>>>> */}



                {/* <<<<< ส่วนของ บอกรายชื่อ สมาชิก >>>>>>*/}

                <Segment style={{ paddingTop: '5em', border: '0px' }} >

                    <HeaderCenter as='h5' style={{ fontSize: '2em' }}>MEMBER</HeaderCenter>

                    <Grid columns='equal' stackable width={4}>
                        <Grid.Row textAlign='center'>

                            <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }} className="wow zoomIn" data-wow-delay="0.2s">
                                <GridColumn>
                                    <Reveal animated='small fade'>
                                        <Reveal.Content visible>
                                            <ImageSizeRow circular src={my} />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <ImageSizeRow circular src={myGray} />
                                        </Reveal.Content>
                                    </Reveal>
                                </GridColumn>
                                <Header as='h5' style={{ fontSize: '2em' }}>"Jidapa Sikaphan"</Header>
                                <p style={{ fontSize: '1em' }}>
                                    Prevent theft of patient data. In case the patient does not consent.
                        </p>
                            </Grid.Column>

                            <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }} className="wow zoomIn" data-wow-delay="0.2s">
                                <GridColumn>
                                    <Reveal animated='small fade'>
                                        <Reveal.Content visible>
                                            <ImageSizeRow circular src={stamp} />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <ImageSizeRow circular src={stampGray} />
                                        </Reveal.Content>
                                    </Reveal>
                                </GridColumn>
                                <Header as='h5' style={{ fontSize: '2em' }}>"Notphattri Buntham"</Header>
                                <p style={{ fontSize: '1em' }}>
                                    Facilitate about registration for patient and data management for employee.
                        </p>
                            </Grid.Column>

                            <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em' }} className="wow zoomIn" data-wow-delay="0.2s">
                                <GridColumn>
                                    <Reveal animated='small fade'>
                                        <Reveal.Content visible>
                                            <ImageSizeRow circular src={asia} />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <ImageSizeRow circular src={asiaGray} />
                                        </Reveal.Content>
                                    </Reveal>
                                </GridColumn>
                                <Header as='h5' style={{ fontSize: '2em' }}>"Surakiti Sopontanapat"</Header>
                                <p style={{ fontSize: '1em' }}>
                                    Develop our team potential and learn new technology.
                        </p>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Segment>
                {/* <<<<<<<<------------------->>>>>>>>>> */}



                {/* <<<<< ส่วนของ Footer >>>>>>*/}

                <Segment inverted color='teal' tertiary vertical style={{ padding: '2em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='About' />
                                    <List link inverted>
                                        <List.Item as='a'>Sitemap</List.Item>
                                        <List.Item as='a'>Contact Us</List.Item>
                                        <List.Item as='a'>Religious Ceremonies</List.Item>
                                        <List.Item as='a'>Gazebo Plans</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                        <List.Item as='a'>Banana Pre-Order</List.Item>
                                        <List.Item as='a'>DNA FAQ</List.Item>
                                        <List.Item as='a'>How To Access</List.Item>
                                        <List.Item as='a'>Favorite X-Men</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>Footer Header</Header>
                                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
                {/* <<<<<<<<------------------->>>>>>>>>> */}



            </Segment.Group>


        )
    }
}

export default ContainerExampleContainer