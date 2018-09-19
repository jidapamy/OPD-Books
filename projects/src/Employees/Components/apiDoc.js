import React, { Component } from "react";
import {
  Grid,
  Label,
  Header,
  Sidebar,
  Menu,
  Dropdown,
  Table,
  Segment

} from "semantic-ui-react";



// import { Table } from 'reactstrap';
import { style } from "./../../Static/Style/QueueCss";
import { Scrollbars } from "react-custom-scrollbars";
import styled from "styled-components";
import { apiData } from "./apiData"
import { MySlidedown } from "./slide"

export default class apiDocument extends Component {

  state = {
    open:"Manage Patient Profile",
    activeItem:"Insert Patient Method",
    chooseMethod : apiData[0].method[0],
    statusJson : 1
  }

  choose = (name,i,j) => {
    this.setState({ 
      activeItem: name ,
      chooseMethod : apiData[i].method[j]
    })


  }

  showMethod = (index) => {
    let tmp = ""
    tmp = apiData[index].method.map((method,j)=>{
      return<Menu.Item name={method.title}
              active={this.state.activeItem === method.title}
              onClick={(e, { name })=>this.choose(name,index,j)} 
              style={ this.state.activeItem === method.title ? style.afterClick :style.beforeClick} />
    })
    return tmp
  }
  showData = () => {
    let tmp = ''
    tmp = apiData.map((data,i)=>{
        return <div>
        <Menu.Item name={data.system}
            onClick={() => { this.setState({ open: data.system}) }} 
            style={style.menuAPI}/>

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
    if(this.state.statusJson === 1) {
      // request 
      arrAttr = this.state.chooseMethod.attrReq
    }else{
      //res
      arrAttr = this.state.chooseMethod.attrRes
    }
    tmp = arrAttr.map(attr => {
      return  <Table.Row style={style.textDes}>
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
        </Menu>

        <Body>
          <Grid columns={2}>
            <Grid.Column width={8}>
              <Header size='large' style={style.HeaderColor}>{this.state.chooseMethod.title}</Header>
              <p style={style.apiDescription} >{this.state.chooseMethod.titleDes}</p>
              <p style={style.apiMethodName}>HTTP REQUEST</p>
              <Label style={style.apiMethod}><i>
                  POST /patients/insert
                  {this.state.chooseMethod.titleDes}{this.state.chooseMethod.titleDes}      
              </i></Label>
              <Menu pointing secondary>
                <Menu.Item 
                  name='Request' 
                  active={this.state.statusJson === 1} 
                  onClick={()=> this.setState({ statusJson : 1 })} />
                <Menu.Item
                  name='Response'
                  active={this.state.statusJson === 2}
                  onClick={()=> this.setState({ statusJson : 2 })}
                />
              </Menu>

              <div style={style.tableHead}>
                <Grid divided='vertically'>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      Field
                    </Grid.Column>
                    <Grid.Column width={2}>
                      Type
                    </Grid.Column>
                    <Grid.Column width={3}>
                      &nbsp;&nbsp;Description
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
              <br /><br />
              <Scrollbars autoHide style={{ width: 495, height: 400 }} >
                <Table basic='very' collapsing solid style={style.tableWidth}>
                  <Table.Body style={style.tableBody}>
                  {this.showAttribute()}
                    {/* <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4'>
                          address
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>ที่อยู่ของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' >
                          allergy
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>อาการ/สิ่งที่ผู้ป่วยแพ้</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          bloodgroup
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>กรุ๊ปเลือดของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          citizenId
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>เลขบัตรประจำตัวประชาชนของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          congenitalDisease
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>โรคประจำตัวของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          country
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>ประเทศที่ผู้ป่วยอาศัยอยู่</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          district
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>อำเภอที่ผู้ป่วยอาศัยอยู่</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          dob
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>วันเกิดของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          email
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>E-mail ของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          emerAddress
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>บ้านเลขที่ของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          emerDistrict
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>อำเภอของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          emerFirstname
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>ชื่อของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          emerHomePhonenumber
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>เบอร์โทรศัพท์บ้าน (กรณีติดต่อฉุกเฉิน)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          emerLastname
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>นามสกุลของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          emerMobileNumber
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>เบอร์โทรศัพท์มือถือ (กรณีติดต่อฉุกเฉิน)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          emerProvince
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>จังหวัด (กรณีติดต่อฉุกเฉิน)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          emerRelationship
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>ความเกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          emerSubDistrict
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>ตำบลของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          emerTitle
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>คำนำหน้าของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          emerTypeofHouse
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>ประเภทที่อยู่อาศัย (กรณีติดต่อฉุกเฉิน)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          emerZipcode
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>รหัสไปรษณีย์ที่อยู่ (กรณีติดต่อฉุกเฉิน)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          fatherFirstname
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>ชื่อบิดา (กรณีผู้ป่วยอายุน้อยกว่า 15 ปี)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          fatherLastname
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>นามสกุลบิดา (กรณีผู้ป่วยอายุน้อยกว่า 15 ปี)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          firstname
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>ชื่อของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          gender
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>เพศของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          homePhonenumber
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>เบอร์โทรศัพท์บ้านของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          hospitalNumber
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>หมายเลขบัตรประจำตัวผู้ป่วย (ของโรงพยาบาล)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          lastname
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>นามสกุลของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          mobileNumber
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>เบอร์โทรศัพท์มือถือของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          motherFirstname
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>ชื่อมารดา (กรณีผู้ป่วยอายุน้อยกว่า 15 ปี)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          motherLastname
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>นามสกุลมารดา (กรณีผู้ป่วยอายุน้อยกว่า 15 ปี)</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          nameTitle
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>คำนำหน้าของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          nationality
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>สัญชาติของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          occupartion
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>อาชีพของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          password
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>พลาสเวิร์สสำหรับเข้าระบบ</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          privilege
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>สิทธิการรักษาของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          province
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>จังหวัดที่ผู้ป่วยอาศัยอยู่</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          religion
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>ศาสนาของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          status
                      </Header>
                      </Table.Cell>
                      <Table.Cell>Boolean</Table.Cell>
                      <Table.Cell>สถานะภาพของผู้ป่วย</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          subDistrict
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>ตำบลที่ผู้ป่วยอาศัยอยู่</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          typeofHouse
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>ประเทศที่ผู้ป่วยอาศัยอยู่</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          zipcode
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>รหัสไปรษณีย์ที่อยู่ที่ผู้ป่วยอาศัยอยู่</Table.Cell>
                    </Table.Row>
                    <Table.Row style={style.textDes}>
                      <Table.Cell>
                        <Header as='h4' image>
                          date
                      </Header>
                      </Table.Cell>
                      <Table.Cell>String</Table.Cell>
                      <Table.Cell>วันที่ทำการสมัคร</Table.Cell>
                    </Table.Row> */}


                  </Table.Body>
                </Table>
              </Scrollbars>
            </Grid.Column>







            <Grid.Column width={8}>
              ckgvhjbknlm,lkjhgfgcgvbn
          </Grid.Column>
          </Grid>
        </Body>




      </div>



    )
  }
}