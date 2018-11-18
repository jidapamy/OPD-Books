import React, { Component } from "react";
import {
  Grid,
  Label,
  Header,
  Menu,
  Table,
  Message,
  Icon,
  Container,
  Responsive,
  Sidebar,
  Visibility,

} from "semantic-ui-react";
import { style } from "../Static/Style/QueueCss";
import { Scrollbars } from "react-custom-scrollbars";
import styled from "styled-components";
import { apiData } from "../Static/Data/ApiData"
import { MySlidedown } from "../Components/ApiDocuments/Slide"
import ReactJson from 'react-json-view'
import { BrowserRouter,Link } from "react-router-dom";



const Boderhide = styled(Menu)`
  border:0;
`;


export default class apiDocument extends Component {

  //mobile

  state = {
    statusShowHistory: true,
    avtiveMenuTab: false,
    sidebarOpened: false,
    menuTab: 0,
    statusTab: false,
    tab: 0,
    activeItem: "home",
    activeItemMenu: "home",
    menuFixed: false,
    overlayFixed: false,
    open: false,
    loader: true,

  };

  // web
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  state = {
    open: apiData[0].system,
    activeItem: apiData[0].method[0].title,
    chooseMethod: apiData[0].method[0],
    statusJson: 1,
    activePage: '1'
  }

  choose = (name, i, j) => {
    this.setState({
      activeItem: name,
      chooseMethod: apiData[i].method[j], statusJson: 1 ,sidebarOpened: false
    })
  }


  showMethod = (index) => {
    let tmp = ""
    tmp = apiData[index].method.map((method, j) => {
      return <Menu.Item  name={method.title} key={index + "/" + j}
        active={this.state.activeItem === method.title}
        onClick={(e, { name }) => this.choose(name, index, j)}
        style={this.state.activeItem === method.title ? style.afterClick : style.beforeClick} />
    })
    return tmp
  }
  showData = () => {
    let tmp = ''
    tmp = apiData.map((data, i) => {
      return <div key={i}>
        <Menu.Item name={data.system}
          onClick={() => { this.setState({ open: data.system}) }}
          style={style.menuAPI} />

        <MySlidedown open={this.state.open === data.system ? true : false}>
          {this.showMethod(i)}
        </MySlidedown>
        
      </div>
      
    })
    return tmp
  }




  showAttribute = () => {
    let arrAttr = []
    let tmp = "";
    if (this.state.statusJson === 1) {
      // request 
      arrAttr = this.state.chooseMethod.attrReq
    } else {
      //res
      arrAttr = this.state.chooseMethod.attrRes
    }
    tmp = arrAttr.map((attr, i) => {
      return <Table.Row style={style.textDes} key={i}>
        <Table.Cell width="6">
          <Header as='h4'>
            {attr.name}
          </Header>
        </Table.Cell>
        <Table.Cell width="3"> {attr.type}</Table.Cell>
        <Table.Cell width="7">{attr.des}</Table.Cell>
      </Table.Row>
    })
    return tmp
  }

  showAttributeOmMobile = () => {

    let arrAttr = []
    let tmp = "";
    if (this.state.statusJson === 1) {
      // request 
      arrAttr = this.state.chooseMethod.attrReq
    } else {
      //res
      arrAttr = this.state.chooseMethod.attrRes
    }
    tmp = arrAttr.map((attr, i) => {
      return <Container key={i}>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={6}>
              {attr.name}
            </Grid.Column>
            <Grid.Column mobile={3}>
              {attr.type}
            </Grid.Column>
            <Grid.Column mobile={7}>
              {attr.des}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    })
    return tmp
  }

  stickTopMenu = () => this.setState({ menuFixed: true  });
  unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
    const Body = styled.div`
    margin-left: 230px;
    max-width: 100%;
    height:100vh;
    background-color: #FFFFFF !important;
    padding: 2%;
    `;

    const { sidebarOpened } = this.state;
    const { fixed } = this.state;


    return (

      <span>
        <Responsive {...Responsive.onlyComputer} >
          <div>
            <Menu fixed='left' secondary vertical style={style.NavSize}>
             <br/>
                <Header textAlign='center' style={style.HeaderColor3}>API Documents</Header>
              {this.showData()}<br />
              <Menu.Item style={{ backgroundColor: '#FACC2D  ' }}>
                <Header  >
                  <a style={{ color: '#FFFFFF'}} href='https://goo.gl/forms/sI4fh0beP6bffv8x2'>Register API</a>
                </Header>
              </Menu.Item>
            </Menu>
          </div>
          <Body>
            <Grid columns={2}>
              <Grid.Column width={8}>
                <Header size='large' style={style.HeaderColor}>{this.state.chooseMethod.title}&nbsp;Method</Header>
                <p style={style.apiDescription}>{this.state.chooseMethod.titleDes}</p>
                <p style={style.apiMethodName}><b>HTTP REQUEST</b></p>
                <Label style={style.apiMethod}><i>
                  {this.state.chooseMethod.method}&nbsp;&nbsp;{this.state.chooseMethod.path}
                </i></Label>
                <Menu pointing secondary>
                  <Menu.Item
                    name='Request'
                    active={this.state.statusJson === 1}
                    onClick={() => this.setState({ statusJson: 1 })} />
                  <Menu.Item
                    name='Response'
                    active={this.state.statusJson === 2}
                    onClick={() => this.setState({ statusJson: 2 })}
                  />
                </Menu>
                <div style={style.tableHead}>
                  <Grid divided='vertically'>
                    <Grid.Row>
                      <Grid.Column width={6}>
                        Field
                    </Grid.Column>
                      <Grid.Column width={3}>
                        Type
                    </Grid.Column>
                      <Grid.Column width={3}>
                        Description
                    </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>
                <br /><br />
                <Scrollbars autoHide style={{ width: 495, height: 350 }} >
                  <Table basic='very' collapsing style={style.tableWidth}>
                    <Table.Body style={style.tableBody}>
                      {this.showAttribute()}
                    </Table.Body>
                  </Table>
                </Scrollbars>
              </Grid.Column>
              <Grid.Column width={8}>
                <div style={style.bgCodeMirror}>
                  <Message floating style={this.state.statusJson === 1 ? style.HeadCodeMirror2 : style.HeadCodeMirror3} color='black'>{this.state.statusJson === 1 ? "Request !" : "Response !"}</Message>
                  <Scrollbars autoHide style={{ width: 475, height: 455 }} >
                    <div style={style.AreaCodeMirror}>
                      <br />
                      <ReactJson
                        src={this.state.statusJson === 1 ? this.state.chooseMethod.reqJson : this.state.chooseMethod.resJson}
                        theme="railscasts"
                        displayDataTypes={false}
                        displayObjectSize={false}
                        name={false}
                      />
                      <br /><br />
                    </div>
                  </Scrollbars>
                </div>
              </Grid.Column>
              <br /><br />
            </Grid>
          </Body>
        </Responsive>



        <Responsive {...Responsive.onlyMobile} minWidth={0} maxWidth={1023}>
          <Visibility
            onBottomPassed={this.stickTopMenu}
            onBottomVisible={this.unStickTopMenu}
            once={false}
          >
            <Menu
              style={{ borderColor: 'rgba(255,255,255,10)', paddingTop: 2 }}
              fixed={fixed ? 'top' : null}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              secondary={!this.state.menuFixed}
              fixed={this.state.menuFixed && "top"}
            >

              <Boderhide style={style.colorNavMobile} pointing secondary size='mini' >

                <Menu.Item style={{ borderColor: 'rgba(255,255,255,10)' }} onClick={() => this.setState({ sidebarOpened: !this.state.sidebarOpened })}>
                  <Icon size="big" name='bars' style={{ color: 'black' }} />
                </Menu.Item>


                <Menu.Item style={{ borderColor: 'rgba(255,255,255,10)' }} position='right'>

                  <span style={{ fontSize: "2em", color: "#31A5BA", fontWeight: 900 }}>
                    API Documents
                  </span>
                </Menu.Item>
              </Boderhide>
            </Menu>
          </Visibility>

          <Sidebar.Pushable style={{ backgroundColor: 'white' }}>
            <Sidebar as={Menu} animation='uncover' vertical visible={sidebarOpened}  secondary vertical position='fixed' style={style.bgApi} fixed='left'>

              {this.showData()}<br />
            </Sidebar>

            <Sidebar.Pusher
              dimmed={sidebarOpened}
              onClick={this.handlePusherClick}
              style={{ minHeight: '550px' }}
            >
              <Container>
                <Grid>
                  <Grid.Row>
                    <Grid.Column>
                      <Header size='large' style={style.HeaderColor}>{this.state.chooseMethod.title}&nbsp;Method</Header>
                      <p style={style.apiDescription} >{this.state.chooseMethod.titleDes}</p>
                      <p style={style.apiMethodName}><b>HTTP REQUEST</b></p>
                      <Label style={style.apiMethod}><i>
                        {this.state.chooseMethod.method}&nbsp;&nbsp;{this.state.chooseMethod.path}
                      </i></Label>

                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Menu pointing secondary>
                        <Menu.Item
                          name='Request'
                          active={this.state.statusJson === 1}
                          onClick={() => this.setState({ statusJson: 1 })} />
                        <Menu.Item
                          name='Response'
                          active={this.state.statusJson === 2}
                          onClick={() => this.setState({ statusJson: 2 })}
                        />
                      </Menu>
                      <div style={style.tableHeadMobile}>
                        <Grid divided='vertically'>
                          <Grid.Row>
                            <Grid.Column width={6}>
                              Field
                    </Grid.Column>
                            <Grid.Column width={3}>
                              Type
                    </Grid.Column>
                            <Grid.Column width={3}>
                              Description
                    </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </div>

                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>

                    <Table basic='very' collapsing style={style.tableWidth}>
                      <Table.Body style={style.tableBodyMobile}>
                        {this.showAttributeOmMobile()}
                        <br /><br />
                      </Table.Body>
                    </Table>
                  </Grid.Row>

                  <Grid.Row >
                    <Grid.Column>
                      <div style={style.bgCodeMirrorMobile}>
                        <Message floating style={this.state.statusJson === 1 ? style.HeadCodeMirror2 : style.HeadCodeMirror3} color='black'>{this.state.statusJson === 1 ? "Request !" : "Response !"}</Message>
                        <div style={style.AreaCodeMirrorMobile}>
                          <br />
                          <ReactJson
                            src={this.state.statusJson === 1 ? this.state.chooseMethod.reqJson : this.state.chooseMethod.resJson}
                            theme="railscasts"
                            displayDataTypes={false}
                            displayObjectSize={false}
                            name={false}
                          />

                        </div>
                        <br /><br /><br /><br />
                      </div>
                    </Grid.Column>
                  </Grid.Row>

                </Grid>
              </Container>


            </Sidebar.Pusher>
          </Sidebar.Pushable>

        </Responsive>
      </span>







    )
  }
}
