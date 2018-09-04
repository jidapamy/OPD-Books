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
} from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";
import { style } from "./../../Static/Style/QueueCss";

import PageTab1 from "./Tab1InfoPatient";
import PageTab2 from "./Tab2History";
import TreatmentHistory from './TreatmentHistory';

export default class TabDescription extends React.Component {
    showTab = () => {
        let tab = [ { menuItem: 'ประวัติผู้ป่วย', render: () => <Tab.Pane><PageTab1 patient={this.props.patient} /></Tab.Pane>} ]
        if(this.props.empLogin.position === 3) { // หมอ
            tab.push({ menuItem: 'ประวัติการรักษา', render: () => <Tab.Pane><TreatmentHistory historyTreatment={this.props.historyTreatment}/></Tab.Pane> })
        }
        return tab;
    }
    render() {
        return (
            <Tab panes={this.showTab()}/>
        );
    }
}
