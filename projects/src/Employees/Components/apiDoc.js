import React, { Component } from "react";
import {
  Grid,
  Label,
  Header,
  Menu,
  Dropdown,
  Table,
  Message

} from "semantic-ui-react";
import { style } from "./../../Static/Style/QueueCss";
import { Scrollbars } from "react-custom-scrollbars";
import styled from "styled-components";
import { apiData } from "./apiData"
import { MySlidedown } from "./slide"
import { JSONViewer } from 'react-json-editor-viewer';
import ReactJson from 'react-json-view'

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
      chooseMethod: apiData[i].method[j], statusJson: 1
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
    height:725px;
    background-color: #F7F4F4 !important;
    padding: 2%;
    `;


    return (

      <div>
        <div>
          <Menu pointing secondary vertical position='fixed' style={style.bgApi} fixed='left' >
            <br />
            <Header size='huge' style={style.HeaderColor2}>API Documents</Header>
            {this.showData()}<br />
            <Dropdown text='Demo' floating  button className='icon' color='black' style={style.demoButPosition}>
              <Dropdown.Menu style={style.demoDropdown}>
                <Dropdown.Item icon='file alternate outline' text='Registrar' onClick={()=>this.showExample(1)} />
                <Dropdown.Item icon='stethoscope' text='Nurse' onClick={() => this.showExample(2)} />
                <Dropdown.Item icon='user md' text='Doctor' onClick={() => this.showExample(3)} />
                <Dropdown.Item icon='medkit' text='Pharmacy' onClick={() => this.showExample(4)} />
              </Dropdown.Menu>
            </Dropdown>
          </Menu>

        </div>

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
                {/* <p style={style.HeadCodeMirror}>Request</p> */}
                {/* <Grid style={ activeItem === '001' ? style.widthNav2 :style.widthNav }></Grid> */}
                <Message floating style={ this.state.statusJson === 1 ? style.HeadCodeMirror2:style.HeadCodeMirror3 } color='black'>{this.state.statusJson === 1 ? "Request !":"Response !" }</Message>
                {/* <hr /> */}
                <Scrollbars autoHide style={{ width: 475, height: 505 }} >
                  <div style={style.AreaCodeMirror}>
                    <br />
                    <ReactJson
                      
                      // src={this.state.chooseMethod.reqJson} 
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

          </Grid>
        </Body>




      </div>



    )
  }
}