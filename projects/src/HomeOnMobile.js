import React, { Component } from "react";
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
    List,
    Segment,
    Card,
    Reveal,
    Menu,
    Visibility,
    Icon,
} from "semantic-ui-react";
import styled from "styled-components";
// << IMPORT PHOTO >>
import BGMobile from "./../src/Static/Img/Contianer/BGMobile.svg";
import Contain1 from "./Static/Img/Contianer/Contain1.svg";
import Contain2 from "./Static/Img/Contianer/Contain2.svg";
import icon1 from "./Static/Img/Contianer/icon1.png";
import icon2 from "./Static/Img/Contianer/icon2.png";
import icon3 from "./Static/Img/Contianer/icon3.png";
import icon4 from "./Static/Img/Contianer/icon4.png";
import asia from "./Static/Img/Contianer/asia.jpg";
import my from "./Static/Img/Contianer/my.jpg";
import stamp from "./Static/Img/Contianer/stamp.jpg";
import asiaGray from "./Static/Img/Contianer/asiaGray.jpg";
import myGray from "./Static/Img/Contianer/myGray.jpg";
import stampGray from "./Static/Img/Contianer/stampGray.jpg";
import WOW from "wowjs";
import "./Static/Style/Navbar.css";
import "./Static/Style/HomeCss.css";
import { Link } from "react-router-dom";

const GridColumn = styled(Grid.Column)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SegmentGray = styled(Segment)`background-color: "#EDEEF1";`;
const HeaderCenter = styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageSizeRow = styled(Image)`
  width: 150px;
  height: 150px;
`;
const Contents = styled(Container)`
  z-index:-2;
  margin-Top:-23rem;
`;
const Images = styled(Image)`
  z-index:-1;
`;
export default class HomeOnMobile extends React.Component {
    state = {
        menuFixed: false,
        overlayFixed: false
    };

    stickTopMenu = () => this.setState({ menuFixed: true });
    unStickTopMenu = () => this.setState({ menuFixed: false });

    componentDidMount() {
        new WOW.WOW().init();
    }


    render() {
        const { menuFixed } = this.state;
        return (
            <div>
                <Segment.Group>
                    <Visibility
                        onBottomPassed={this.stickTopMenu}
                        onBottomVisible={this.unStickTopMenu}
                        once={false}
                    >
                        <Menu
                            color='teal'
                            size="mini"
                            pointing={true}
                            borderless={true}
                            fixed={menuFixed && "top"}
                            style={{ border: "0px" }}
                        >
                            <Menu.Item>
                                <Icon color="red" size="big" name="heartbeat" />
                                <span style={{ fontSize: "2em", color: "#00B5AD" }}>
                                    OPD BOOKS
                                    </span>
                            </Menu.Item>

                            <Menu.Menu position="right">
                                <Menu.Item>
                                    <Button color='teal' basic onClick={() => this.props.goToPage('/signin')}>
                                        Sign In
                                            </Button>
                                </Menu.Item>
                                <Menu.Item>
                                    <Button color='teal' onClick={() => this.props.goToPage('/signup')}>
                                        Sign Up
                                            </Button>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>

                        <Images src={BGMobile} style={{ marginTop: -15 }} />

                        <Contents text >
                            <Header
                                inverted
                                textAlign='center'
                                as='h1'
                                content='Project OPDBooks'
                                style={{
                                    fontSize: '2em',
                                    fontWeight: 'normal',
                                    marginBottom: 0,
                                    marginTop: '1.5em',
                                }}
                            />
                            <Header
                                inverted
                                textAlign='center'
                                as='h3'
                                content='Do whatever you want when you want to.'
                                style={{
                                    fontSize: '1.5em',
                                    fontWeight: 'normal',
                                    marginTop: '0.5em',
                                }}
                            />
                            <Grid textAlign='center'>
                                <Grid.Column width={4}>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Button
                                        style={{ borderRadius: '2rem', backgroundColor: '#FFFFFF' }}
                                        size='large'
                                        onClick={() => this.props.goToPage('/signup')}
                                    >
                                        Sign Up
                                    </Button>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                </Grid.Column>
                            </Grid>
                        </Contents>
                        <br />
                    </Visibility>

                    <Segment
                        style={{ padding: "5em 0em", border: "0px" }}
                        vertical
                        className="wow fadeInLeft"
                        data-wow-delay="0.2s"
                    >
                        <Grid container stackable verticalAlign="middle">
                            <Grid.Row>
                                <Grid.Column floated="left" width={8}>
                                    <Image rounded size="huge" src={Contain1} />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Header as="h3" style={{ fontSize: "2em" }}>
                                        The patient go to other clinic{" "}
                                    </Header>
                                    <p style={{ fontSize: "1em" }}>
                                        <br />
                                        When patient comes to clinic, registrar will ask patient
                                        about his ID card name and surname for search in the system
                                        if not found any data , they must be register by fill in new
                                        patient registration form on paper and must check for
                                        allowing their profile record will share on blockchain.
                                        After that, registrar fills patient data and push confirm
                                        button for save in the system then the system will generate
                                        unique  hospital number for the patient.<br />
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Segment
                        style={{ padding: "5em 0em", border: "0px" }}
                        vertical
                        className="wow fadeInRight"
                        data-wow-delay="0.2s"
                    >
                        <Grid container stackable verticalAlign="middle">
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Header as="h3" style={{ fontSize: "2em" }}>
                                        The patient go to other clinic{" "}
                                    </Header>
                                    <p style={{ fontSize: "1em" }} />
                                    <br />
                                    <ol type="I">
                                        <li>
                                            <b>Step1: </b>When patient come to other clinic. the
                                            patient has a member already. he can tell his ID card to
                                            the registrar without registration new patient again.
                                        </li>
                                        <br />
                                        <li>
                                            <b>Step2: </b>The system will be query data in blockchain
                                            with patient’s id card.
                                        </li>
                                        <br />
                                        <li>
                                            <b>Step3: </b>The registrar push button for request access
                                            to patient data and wait for the patient to be authorized.
                                            then patients can cure in this clinic.
                                        </li>
                                        <br />
                                        <li>
                                            <b>Step4: </b>when treatment finished the system will push
                                            data on blockchain and Blockchain will doing consensus
                                            process to add a transaction in chain.
                                        </li>
                                    </ol>
                                </Grid.Column>
                                <Grid.Column floated="left" width={8}>
                                    <Image rounded size="huge" src={Contain2} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Segment style={{ paddingTob: "2em", border: "0px" }}>
                        <Grid columns="equal" stackable width={4}>
                            <Grid.Row textAlign="center">
                                <Grid.Column
                                    style={{ paddingBottom: "3em", paddingTop: "1em" }}
                                    className="wow zoomIn"
                                    data-wow-delay="0.2s"
                                >
                                    <GridColumn>
                                        <ImageSizeRow src={icon1} />
                                    </GridColumn>
                                    <Header as="h5" style={{ fontSize: "2em" }}>
                                        DEVELOP
                                    </Header>
                                    <p style={{ fontSize: "1em" }}>
                                        Develop our team potential and learn new technology.
                                    </p>
                                </Grid.Column>
                                <Grid.Column
                                    style={{ paddingBottom: "3em", paddingTop: "1em" }}
                                    className="wow zoomIn"
                                    data-wow-delay="0.2s"
                                >
                                    <GridColumn>
                                        <ImageSizeRow src={icon2} />
                                    </GridColumn>
                                    <Header as="h5" style={{ fontSize: "2em" }}>
                                        PREVENT
                                    </Header>
                                    <p style={{ fontSize: "1em" }}>
                                        Prevent theft of patient data. In case the patient does not
                                        consent.
                                    </p>
                                </Grid.Column>
                                <Grid.Column
                                    style={{ paddingBottom: "3em", paddingTop: "1em" }}
                                    className="wow zoomIn"
                                    data-wow-delay="0.2s"
                                >
                                    <GridColumn>
                                        <ImageSizeRow src={icon3} />
                                    </GridColumn>
                                    <Header as="h5" style={{ fontSize: "2em" }}>
                                        FACILITATE
                                    </Header>
                                    <p style={{ fontSize: "1em" }}>
                                        Facilitate about registration for patient and data
                                        management for employee.
                                    </p>
                                </Grid.Column>

                                <Grid.Column
                                    style={{ paddingBottom: "3em", paddingTop: "1em" }}
                                    className="wow zoomIn"
                                    data-wow-delay="0.2s"
                                >
                                    <GridColumn>
                                        <ImageSizeRow src={icon4} />
                                    </GridColumn>
                                    <Header as="h5" style={{ fontSize: "2em" }}>
                                        ONLINE
                                    </Header>
                                    <p style={{ fontSize: "1em" }}>
                                        Save on internet instead of paper document.
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <SegmentGray
                        style={{
                            padding: "4em 0em",
                            border: "0px",
                            fontFamily: "Kanit",
                            backgroundColor: "#F8F8F8"
                        }}
                        vertical
                    >
                        <Container
                            center="true"
                            style={{ backgroundColor: "#F8F8F8" }}
                            className="wow fadeIn"
                            data-wow-delay="0.2s"
                        >
                            <Header as="h3" style={{ fontSize: "3em", textAlign: "center" }}>
                                HOW TO
                            </Header>
                            <p style={{ fontSize: "1.33em", textIndent: "30px" }}>
                                Our patients will need to fill out a new patient registration
                                form every time they visit a new clinic. We will collect each
                                clinic together. So the patient just drops a new patient's
                                candle once. Where is the patient going? Patients are able to be
                                admitted. The clinic has registered with us. No need to waste
                                time registering new patients. By our system. There will be
                                patient data available on Blockchain that can connect patient
                                data. Each clinic in our clinic can receive information on
                                patients immediately.
                            </p>
                            <br />
                        </Container>
                    </SegmentGray>
                    <Segment style={{ paddingTop: "5em", border: "0px" }}>
                        <HeaderCenter
                            as="h5"
                            style={{ fontSize: "2em", paddingBottom: "3%" }}
                        >
                            MEMBER
            </HeaderCenter>
                        <Grid columns="equal" stackable width={4}>
                            <Grid.Row textAlign="center">
                                <Grid.Column
                                    style={{ paddingBottom: "3em", paddingTop: "1em" }}
                                    className="wow fadeIn"
                                    data-wow-delay="0.2s"
                                >
                                    <GridColumn>
                                        <Reveal animated="small fade">
                                            <Reveal.Content visible>
                                                <ImageSizeRow circular src={myGray} />
                                            </Reveal.Content>
                                            <Reveal.Content hidden>
                                                <ImageSizeRow circular src={my} />
                                            </Reveal.Content>
                                        </Reveal>
                                    </GridColumn>
                                    <Header as="h5" style={{ fontSize: "2em" }}>
                                        Jidapa Sikaphan
                                </Header>
                                </Grid.Column>
                                <Grid.Column
                                    style={{ paddingBottom: "3em", paddingTop: "1em" }}
                                    className="wow fadeIn"
                                    data-wow-delay="0.2s"
                                >
                                    <GridColumn>
                                        <Reveal animated="small fade">
                                            <Reveal.Content visible>
                                                <ImageSizeRow circular src={stampGray} />
                                            </Reveal.Content>
                                            <Reveal.Content hidden>
                                                <ImageSizeRow circular src={stamp} />
                                            </Reveal.Content>
                                        </Reveal>
                                    </GridColumn>
                                    <Header as="h5" style={{ fontSize: "2em" }}>
                                        Notphattri Buntham
                                </Header>
                                </Grid.Column>
                                <Grid.Column
                                    style={{ paddingBottom: "3em", paddingTop: "1em" }}
                                    className="wow zoomIn"
                                    data-wow-delay="0.2s"
                                >
                                    <GridColumn>
                                        <Reveal animated="small fade">
                                            <Reveal.Content visible>
                                                <ImageSizeRow circular src={asiaGray} />
                                            </Reveal.Content>
                                            <Reveal.Content hidden>
                                                <ImageSizeRow circular src={asia} />
                                            </Reveal.Content>
                                        </Reveal>
                                    </GridColumn>
                                    <Header as="h5" style={{ fontSize: "2em" }}>
                                        Surakiti Sopontanapat
                                </Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Segment
                        inverted
                        color="teal"
                        tertiary
                        vertical
                        style={{ padding: "2em 0em" }}
                    >
                        <Container>
                            <Grid divided inverted stackable>
                                <Grid.Row>
                                    <Grid.Column width={3}>
                                        <Header inverted as="h4" content="OPD Page" />
                                        <List link inverted>
                                            <List.Item as="signup">
                                                <Link to="/signup">SignUp</Link>
                                            </List.Item>
                                            <List.Item as="signin">
                                                <Link to="/signin">SignIn </Link>
                                            </List.Item>
                                            <List.Item as="api">
                                                <Link to="/apiDoc">API Services</Link>
                                            </List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <Header inverted as="h4" content="Contract" />
                                        <List link inverted>
                                            <Button circular color="facebook" icon="facebook" />
                                            <Button circular color="twitter" icon="twitter" />
                                            <Button circular color="linkedin" icon="linkedin" />
                                            <Button circular color="google plus" icon="google plus" />
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column width={7}>
                                        <Header as="h4" inverted>
                                            Footer Header
                                    </Header>
                                        <p>
                                            เว็บ OPD Books เป็นเว็บเกี่ยวกับ
                                            เวชระเบียนผู้ป่วยโดยนำเทคโนโลยี Block chain เข้ามาใช้.
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </Segment>
                </Segment.Group>
            </div>
        );
    }
}