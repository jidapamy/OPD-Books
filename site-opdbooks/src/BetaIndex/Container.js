import React, { Component } from 'react';
import {
    Button, Container, Grid, Header,
    Image, List, Segment, Card, Reveal, Icon
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
import iconhowto1 from './img/icon-howto-1.png'
import iconhowto2 from './img/icon-howto-2.png'
import { Link } from 'react-router-dom';

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
                    <Container center="true">
                        <Header as='h3' style={{ fontSize: '3em', textAlign: 'center' }}>HOW TO</Header>
                        <p style={{ fontSize: '1.33em',textIndent: '30px' }}>
                            ระบบของเราจะช่วยอำนวยความสะดวกให้แก่ ผู้ป่วย จากแต่ก่อน ผู้ป่วยต้อง กรอกฟอร์ม ทะเบียนผู้ป่วยใหม่ทุกครั้งในเวลา 
                            ที่ผู้ป่วย ได้ไปรักษาคลินิก ใหม่ๆ ระบบเราจะเป็นการรวบรวมแต่ละคลินิกเข้าด้วยกัน ดังนั้นผู้ป่วยเพียงลงเทียนผู้ป่วยใหม่ครั้งเดียวไม่ว่า 
                            ผู้ป่วยจะไปที่ไหน ผู้ป่วยสามารถที่จะเข้ารับการรักษา คลินิกที่ได้ลงทะเบียนกับเราไว้ได้ อย่างรวดเร็วไม่ต้องไปเสียเวลาลงทะเบียนผู้ป่วยใหม่ 
                            โดยระบบของเรา จะมีข้อมูลผู้ป่วย อยู่บน Blockchain ที่สามารถเชื่อมต่อข้อมูลผู้ป่วย กระจายไปแต่ละคลินิกในเครือของเราได้ทุกคลินิกนดยสามารถทราบข้อมูลของผู้ป่วยได้ทันที 
                            </p><br></br>
                        <p style={{ fontSize: '1.33em', textIndent: '30px' }}>    
                            ระบบที่จัดการทะเบียนผู้ป่วยสำหรับคลินิกในเครือเดียวกันโดยใช้ Technology blockchian  มาใช้ในการ Share ข้อมูลผู้ป่วยร่วมกัน ทำให้ผู้ป่วย ไม่ต้องลงทะเบียนผู้ป่วยหลายๆครั้ง และข้อมูลของผู้ป่วยมีความปลอดภัยซึ่งเป็นจุดสำคัญของระบบนี้ รวมไปถึงช่วยให้บุคลากรในคลินิก ทำงานรวดเร็วขึ้นและลดการใช้เอกสารกระดาษเปลี่ยนให้เป็นการเก็บข้อมูลแบบ electronic<br></br>
                            การสมัครทะเบียนผู้ป่วยใหม่
                            หากเป็นผู้ป่วยใหม่ ต้องลงทะเบียนผู้ป่วยก่อนจะทำการรักษาผู้ป่วยสามารถเลือกลงทะเบียนผู้ป่วยใหม่ ได้ 2 ช่องทาง คือ
                            </p>
                            {/* <Header as='h3' style={{ fontSize: '1.7em', textAlign: 'center' }}>ผู้ป่วยสามารถเลือกลงทะเบียนผู้ป่วยใหม่ ได้ 2 ช่องทาง คือ </Header> */}
                            
                        <Grid columns='equal' stackable width={4}>

                            <Grid.Row textAlign='center'>
                                
                                <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em',marginLeft:'20%' }} className="wow zoomIn" data-wow-delay="0.2s">
                                    <GridColumn>
                                        {/* <Image size='medium'src={iconhowto1} /> */}
                                        <Card
                                            color='teal'
                                            image={iconhowto1}
                                        />
                                    </GridColumn>
                                </Grid.Column>
                                <Grid.Column style={{ paddingBottom: '3em', paddingTop: '1em', marginRight: '20%' }} className="wow zoomIn" data-wow-delay="0.2s">
                                    <GridColumn>
                                        {/* <Image size='medium'src={iconhowto2} /> */}
                                        <Card
                                            color='teal'
                                            image={iconhowto2}
                                        />
                                        </GridColumn>
                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
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
                                    <Header inverted as='h4' content='OPD Page' />
                                    <List link inverted>
                                        <List.Item as='a'>SignUp</List.Item>
                                        <List.Item as='a'>SignIn</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Contract' />
                                    <List link inverted>
                                        <Button circular color='facebook' icon='facebook' />
                                        <Button circular color='twitter' icon='twitter' />
                                        <Button circular color='linkedin' icon='linkedin' />
                                        <Button circular color='google plus' icon='google plus' />
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>Footer Header</Header>
                                    <p>เว็บ OPD Books เป็นเว็บเกี่ยวกับ เวชระเบียนผู้ป่วยโดยนำเทคโนโลยี Block chain เข้ามาใช้.</p>
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