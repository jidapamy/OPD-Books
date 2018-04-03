import React, { Component } from 'react';
import {
    Button, Container, Divider, Grid, Header, Icon,
    Image, List, Menu, Responsive, Segment, Sidebar,
    Visibility, Card, Step, Advertisement, Reveal
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
                                <Header as='h3' style={{ fontSize: '2em' }}>The patient go to other clinic </Header>
                                <p style={{ fontSize: '1em' }}><br></br>
                                    When patient comes to clinic, registrar will ask patient about his ID card 
                                    name and surname for search in the system if not found any data , they must be register by fill in new patient registration form on paper and must check for allowing their profile record will share on blockchain. After that, registrar fills patient data and push confirm button for save in the system then the system will generate unique  hospital number for the patient.<br></br>
                                    </p>
                                    <ol type="I">
                                    <li><b>Step1: </b>The system push data in blockchain in term of adding new patient. Block in blockchain is broadcast to every node in network and wait for every node approve the transaction is valid ,then </li><br></br>
                                    <li><b>Step2: </b>the block can be added to chain. </li> <br></br>
                                    <li><b>Step4: </b>After the patients finish authorization profile record on their smartphone . The patient will get cured in order. First, come to nurse, she will asks for the symptoms. Next, send them to the doctor for diagnosis and then patients wait for the medicine from the pharmacist. Finally,  the pharmacist push button treatment finished.
                                    The system will push data on blockchain. and Blockchain will do consensus process to add a transaction in chain. [Click] : then treatment finished.</li>
                                    </ol>
                                
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment style={{ padding: '5em 0em', border: '0px' }} vertical className="wow fadeInRight" data-wow-delay="0.2s">
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>The patient go to other clinic </Header>
                                <p style={{ fontSize: '1em' }}></p><br></br>
                                <ol type="I">
                                    <li><b>Step1: </b>When patient come to other clinic. the patient has a member already. he can tell his ID card to the registrar without registration new patient again.</li><br></br>
                                    <li><b>Step2: </b>The system will be query data in blockchain with patient’s id card.</li><br></br>
                                    <li><b>Step3: </b>The registrar push button for request access to patient data and wait for the patient to be authorized. then patients can cure in this clinic.</li><br></br>
                                    <li><b>Step4: </b>when treatment finished the system will push data on blockchain and Blockchain will doing consensus process to add a transaction in chain.</li>
                                </ol>
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


                {/* << ส่วน ระบบทำอะไร บอกจุดมุ่งหมายข้อดีของเรา >> */}

                
                <Segment style={{ padding: '4em 0em', border: '0px', fontFamily: 'Kanit' }} vertical className="wow zoomIn" data-wow-delay="0.2s">
                    <Container textAlign>
                        <Header as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>HOW TO</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            การสมัครทะเบียนผู้ป่วยใหม่
                            หากเป็นผู้ป่วยใหม่ ต้องลงทะเบียนผู้ป่วยก่อนจะทำการรักษา
                            ซึ่ง ผู้ป่วยสามารถเลือกลงทะเบียนผู้ป่วยใหม่ ได้ 2 ช่องทาง ได้แก่
                            </p>
                        1. ลงทะเบียนบน website ผ่านทาง computer หรือ
                                smart phone ของตัวผู้ป่วยเอง
                            <br></br>
                        2. ลงทะเบียนกับทางเคาท์เตอร์ฝ่ายทะเบียนของคลินิก
                                แต่ไม่ว่าผู้ป่วยจะเลือกลงทะเบียนผ่านช่องทางใดก็ตาม
                                หลังทำการลงทะเบียนเสร็จแล้ว ข้อมูลทะเบียนของผู้ป่วย
                                จะถูกเก็บไว้บน blockchain ทันที
                            <br></br><br></br>
                        เพียงเท่านี้ผู้ป่วยก็จะสามารถเข้ารับการรักษากับคลินิกได้เลย
                                รวมถึงสามารถเข้ารับการรักษากับคลินิกอื่นๆ ที่ใช้ blockchain
                                เหมือนกันได้เลย โดยไม่ต้องทำการสมัครทะเบียนผู้ป่วยใหม่
                        ระบบที่จัดการทะเบียนผู้ป่วยสำหรับคลินิกในเครือเดียวกันโดยใช้ Technology blockchian  มาใช้ในการ Share ข้อมูลผู้ป่วยร่วมกัน ทำให้ผู้ป่วย ไม่ต้องลงทะเบียนผู้ป่วยหลายๆครั้ง และข้อมูลของผู้ป่วยมีความปลอดภัยซึ่งเป็นจุดสำคัญของระบบนี้ รวมไปถึงช่วยให้บุคลากรในคลินิก ทำงานรวดเร็วขึ้นและลดการใช้เอกสารกระดาษเปลี่ยนให้เป็นการเก็บข้อมูลแบบ electronic

                    </Container>
                </Segment>


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
                                    ชื่อเล่น เชีย อายุ 21 ปี <br></br>"ผู้สนใจและหลงใหลในเทคโนโลยีใหม่ และได้มาเจอ เทคโนโลยี Blockchain และคาดหวังว่าจะเป็นเทคโนโลยีที่จะมาเปลี่ยนแปลงชีวิตของเราในอนาคตอันใกล้"
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