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
    textAlign: 'left'
  }
};
export default class TreatmentHistory extends Component {
    showListHistory = () => {
        let tmp;
        let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        tmp = arr.map((q, index) => {
            return <List.Item style={{ padding: "1rem 0rem"}}>
                <List.Content>
                  <List.Content floated="right">
                    <List.Description as="a">
                      <Icon name="calendar alternate outline" size="small" />
                      <span style={style.colorHis}>11/07/2013</span>
                    </List.Description>
                  </List.Content>
                  <List.Header as="a">Treatment No : {q}</List.Header>
                  <List.Description>
                    <span style={style.colorDes}>
                      Dr.Sandra Cookkie
                    </span>
                  </List.Description>
                  <List.Description>
                    <span style={style.colorDes}>
                      Smallresh Clinic
                    </span>
                  </List.Description>
                </List.Content>
              </List.Item>;
        });

        return tmp;
    }
    render(){
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