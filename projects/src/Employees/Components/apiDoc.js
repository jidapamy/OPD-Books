import React, { Component } from "react";
import {
  Grid,
  Label,
  Header,
  Sidebar,
  Menu,
  Dropdown,
  Table,
} from "semantic-ui-react";
import { style } from "./../../Static/Style/QueueCss";
import { Scrollbars } from "react-custom-scrollbars";
import styled from "styled-components";
import { apiData } from "./apiData"
import { MySlidedown } from "./slide"

export default class apiDocument extends Component {

  state = {
    open: "Manage Patient Profile",
    activeItem: "Insert Patient Method",
    chooseMethod: apiData[0].method[0],
    statusJson: 1
  }

  choose = (name, i, j) => {
    this.setState({
      activeItem: name,
      chooseMethod: apiData[i].method[j]
    })
  }

  showMethod = (index) => {
    let tmp = ""
    tmp = apiData[index].method.map((method,j)=>{
      return<Menu.Item name={method.title} key={index+"/"+j}
              active={this.state.activeItem === method.title}
              onClick={(e, { name })=>this.choose(name,index,j)} 
              style={ this.state.activeItem === method.title ? style.afterClick :style.beforeClick} />
    })
    return tmp
  }
  showData = () => {
    let tmp = ''
    tmp = apiData.map((data,i)=>{
        return <div key={i}>
        <Menu.Item name={data.system}
          onClick={() => { this.setState({ open: data.system }) }}
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
    tmp = arrAttr.map((attr,i) => {
      return  <Table.Row key={i} style={style.textDes}>
    <Table.Cell>
      <Header as='h4'>
        {attr.name}
    </Header>
    </Table.Cell>
    <Table.Cell> {attr.type}</Table.Cell>
    <Table.Cell> {attr.des}</Table.Cell>
  </Table.Row>
    })
    return tmp
  }

  showExample = (position) => {
    if(position){
      this.props.history.push({
        pathname: "/empTest",
        state: { position: position }
      });
    }
  }

  render() {
    console.log(this.state.chooseMethod)
    const { activeItem } = this.state
    const Body = styled.div`
    margin-left: 205px;
    max-width: 100%;
    height:900px;
    background-color: #F7F4F4 !important;
    padding: 2%;
    `;


    return (

      <div>
        <Menu pointing secondary vertical position='fixed' style={style.bgApi} fixed='left' >
          <br />
          <Header size='huge' style={style.HeaderColor2}>API Documents</Header>
          {this.showData()}
          {/* MY!!!!!!!!!!!!!!!!!!!!!!! */}
          <div>
            <button onClick={()=>this.showExample(1)} >Example for Registrar</button>
            <button onClick={() => this.showExample(2)}>Example for Nurse</button>
            <button onClick={() => this.showExample(3)}>Example for Doctor</button>
            <button onClick={() => this.showExample(4)}>Example for Pharmacy</button>
          </div>
          {/* MY!!!!!!!!!!!!!!!!!!!!!!! */}
        </Menu>

        <Body>
          <Grid columns={2}>
            <Grid.Column width={8}>
              <Header size='large' style={style.HeaderColor}>{this.state.chooseMethod.title}&nbsp;Method</Header>
              <p style={style.apiDescription} >{this.state.chooseMethod.titleDes}</p>
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
              <Scrollbars autoHide style={{ width: 495, height: 400 }} >
                <Table basic='very' collapsing style={style.tableWidth}>
                  <Table.Body style={style.tableBody}>
                    {this.showAttribute()}
                  </Table.Body>
                </Table>
              </Scrollbars>
            </Grid.Column>

            <Grid.Column width={8}>
              <div style={style.bgCodeMirror}>
                <p style={style.HeadCodeMirror}><b>Request</b></p>
                <hr />
                <Scrollbars autoHide style={{ width: 460, height: 550 }} >
                  <div style={style.AreaCodeMirror}>
                    <br /><br /><br />
                    <div style={style.topicCodeMirror}>
                      Example Request
                    </div>
                    <br /><br />
                    <div style={style.topicCodeMirror}>
                      {'{'}
                    </div>
 
                    <span style={style.HeaderTextCodeMirror}>
                      "status"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>:</b>
                    </span>
                    &nbsp;&nbsp;
                    <span style={style.textCodeMirror}>
                      true
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror}>
                    "message"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>:</b>
                    </span>
                    &nbsp;&nbsp;
                    <span style={style.textCodeMirror}>
                    "SUCCESS"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror}>
                    "data"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: {'{'}</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "registerDate"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "09/02/2018"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "hospitalNumber"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "01/61"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "citizenId"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "1234567890101"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "dob"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "31/08/2000"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "nameTitle"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "Miss."
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "firstname"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "Aleeza"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "lastname"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "Sharp"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "gender"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "F"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "congenitalDisease"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "-"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "bloodgroup"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "AB"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "religion"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "Buddhism"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "nationality"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "Thai"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "country"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "Thai"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "status"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "Broke up with bf/gf"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "occupartion"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "-"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "homePhonenumber"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "029293939"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "mobileNumber"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "0829392939"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "email"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "test01@gmail.com"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "typeofHouse"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "Townhouse"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "address"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "23"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "province"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "Kanchanaburi"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "district"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "Sai Yok"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "subDistrict"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "Wang Krachae"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "zipcode"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "71150"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "emerTitle"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "emerFirstname"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "emerLastname"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "emerRelationship"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "emerHomePhonenumber"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "emerMobileNumber"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "emerTypeofHouse"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "emerAddress"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "emerProvince"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "emerDistrict"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "emerSubDistrict"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "emerZipcode"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "fatherFirstname"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "fatherLastname"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "motherFirstname"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "motherLastname"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "allergy"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "not have"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "privilege"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    ""
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>,</b>
                    </span>
                    <br/>

                    <span style={style.HeaderTextCodeMirror2}>
                     "age"
                    </span>
                    <span style={style.topicCodeMirror}>
                      &nbsp;<b>: </b>
                    </span>
                    &nbsp;
                    <span style={style.textCodeMirror}>
                    "18 Years old"
                    </span>
                    <br/>
                    <span style={style.HeaderTextCodeMirror}>
                    
                    </span>
                    <span style={style.topicCodeMirror}>
                    <b>{'}'}</b>
                    </span>
                    <br/>
                    <div style={style.topicCodeMirror}>
                      {'}'}
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    

                  </div>
                </Scrollbars>
              </div>
            </Grid.Column>

          </Grid>
        </Body>




      </div>



    )
  }
}