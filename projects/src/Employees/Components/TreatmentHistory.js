import React, { Component } from "react";
import {
  Grid,
  Menu,
  Segment,
  Container,
  Divider,
  Header,
  Icon,
  Image,
  Table,
  Label,
  List,
  Dropdown,
  Item,
  Button,
  Modal,
  Popup,
  Form,
  TextArea,
  Pagination
} from "semantic-ui-react";
import { Scrollbars } from "react-custom-scrollbars";
const style = {
  ImButton: {
    cursor: "pointer"
  },
  colorsort: {
    color: "#00B5AD"
  },
  colorHis: {
    color: "#AFB4B7",
    fontSize: "12px"
  },
  colorDes: {
    color: "#808B96  ",
    textAlign: "left"
  }
};
export default class TreatmentHistory extends Component {
  showListHistory = () => {
    let tmp = "";
    // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // let arr = this.props.historyTreatment.length !== 0 ? this.props.historyTreatment : [];
    debugger
    if (this.props.historyTreatment.length !== 0) {
      tmp = this.props.historyTreatment.map(( medicalRecord , index) => {
        return (
          <List.Item style={{ padding: "1rem 0rem" }} key={index}>
            <List.Content>
              <List.Content floated="right">
                <List.Description as="a">
                  <Icon name="calendar alternate outline" size="mini" />
                  <span style={style.colorHis}>{medicalRecord.date}</span>
                </List.Description>
              </List.Content>
              <List.Header as="a">VN : {medicalRecord.visitNumber}</List.Header>
              <List.Description>
                <span style={style.colorDes}>{medicalRecord.doctorName}</span>
              </List.Description>
              <List.Description>
                <span style={style.colorDes}>{medicalRecord.clinic}</span>
              </List.Description>
            </List.Content>
          </List.Item>
        );
      });
      return tmp;
    }
    return (
      <List.Item style={{ textAlign: "center" }}>
        ไม่มีประวัติเข้ารับการรักษา
      </List.Item>
    );
  };
  render() {
    console.log("Treatment", this.props.historyTreatment);
    return (
      // <Container textAlign="center" style={{ padding: "2% 4%" }}>
      //     <Scrollbars autoHide style={{ height: this.props.height }}>
      <List divided relaxed style={{ textAlign: "left" }}>
        {this.showListHistory()}
      </List>
      //     {/* </Scrollbars>
      //   </Container> */}
    );
  }
}
