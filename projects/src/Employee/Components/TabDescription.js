import React from "react";
import {
  Button,
  Segment,
  Input,
  Grid,
  List,
  Label,
  Form,
  TextArea,
  Message,
  Tab,
  Card,
  Sticky
} from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";
import { style } from "./../../Static/Style/QueueCss";

import PageTab1 from "./PageTab1";
import PageTab2 from "./PageTab2";


export default class TabDescription extends React.Component {
    showTab = () => {
        let tab = [ { menuItem: 'ประวัติผู้ป่วย', render: () => <Tab.Pane><PageTab1 patient={this.props.patient}/></Tab.Pane>} ]
        if(this.props.empPosition === 3) { // หมอ
            tab.push({ menuItem: 'ประวัติการรักษา', render: () => <Tab.Pane><PageTab2/></Tab.Pane> })
        }
        return tab;
    }
    render() {
        return (
        <Sticky>
            <Tab panes={this.showTab()} />
        </Sticky>
        );
    }
}
