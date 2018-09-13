import React, { Component } from "react";
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
  Header
} from "semantic-ui-react";
import { Scrollbars } from "react-custom-scrollbars";

import { style } from "./../../Static/Style/QueueCss";
import FromForNurse from "./FromForNurse";
import FromForDoctor from "./FromForDoctor";
import swal from "sweetalert2";

export default class FormMedicalRecord extends Component {
  showForm = () => {
    if (this.props.empLogin.position === 3) {
      return (
        <Scrollbars style={{ width: 590, height: 600 }}>
          <FromForNurse
            patient={this.props.patient}
            empLogin={this.props.empLogin}
            medicalRecord={this.props.medicalRecord}
            setMedicalRecordDetail={this.props.setMedicalRecordDetail}
            reState={this.props.reState}
            showPopupConfirm={this.showPopupConfirm}
          />
          <br />
          <FromForDoctor
            patient={this.props.patient}
            empLogin={this.props.empLogin}
            medicalRecord={this.props.medicalRecord}
            setMedicalRecordDetail={this.props.setMedicalRecordDetail}
            reState={this.props.reState}
            showPopupConfirm={this.showPopupConfirm}
          />
        </Scrollbars>
      );
    } else if (this.props.empLogin.position === 4) {
      return (
        <FromForDoctor
          patient={this.props.patient}
          empLogin={this.props.empLogin}
          medicalRecord={this.props.medicalRecord}
          setMedicalRecordDetail={this.props.setMedicalRecordDetail}
          reState={this.props.reState}
          showPopupConfirm={this.showPopupConfirm}
        />
      );
    }
    return (
      <FromForNurse
        patient={this.props.patient}
        empLogin={this.props.empLogin}
        medicalRecord={this.props.medicalRecord}
        setMedicalRecordDetail={this.props.setMedicalRecordDetail}
        reState={this.props.reState}
        showPopupConfirm={this.showPopupConfirm}
      />
    );
  };

  showPopupConfirm = async () => {
    swal({
      title: "ยืนยันการบันทึกข้อมูล?",
      text: "ข้าพเจ้ายืนยันว่าข้อมูลที่กรอกถูกต้องตามความเป็นจริง",
      type: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#1FCB4A",
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel"
    }).then(result => {
      if (result.value) {
        if (this.props.empLogin.position === 2) {
          this.props.sendToDoctor();
        } else if (this.props.empLogin.position === 3) {
          this.props.sendToPharmacy();
        } else {
          this.props.sendToPayment();
        }
        swal({
          type: "success",
          title: "บันทึกข้อมูลสำเร็จ",
          showConfirmButton: false,
          timer: 1500
        });
        this.props.reState();
      }
    });
  };

  render() {
    console.log("FORM!!!!",this.props.medicalRecord);
    return (
      <Segment width={8} raised>
        <Header style={style.headForm} as="h5" block inverted color="grey">
          <List divided relaxed>
            <List.Item>
              <Grid columns="three" style={style.headText}>
                <Grid.Row>
                  <Grid.Column>
                    Date: &nbsp;&nbsp;{this.props.medicalRecord.date}
                  </Grid.Column>
                  <Grid.Column>
                    Time: &nbsp;&nbsp;{this.props.medicalRecord.time}
                  </Grid.Column>
                  <Grid.Column>
                    VN: &nbsp;&nbsp;{this.props.medicalRecord.visitNumber}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={style.headMargin}>
                  <Grid.Column width={5}>
                    Privilege: &nbsp;&nbsp; {this.props.patient.privilege}
                  </Grid.Column>
                  {/* <Grid.Column width={11}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Clinic: &nbsp;&nbsp;{this.props.empLogin.position === 2 ? this.props.empLogin.clinic : this.props.medicalRecord.clinic}
                  </Grid.Column> */}
                  <Grid.Column width={11}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Clinic: &nbsp;&nbsp;{this.props.medicalRecord.clinic}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </List.Item>
          </List>
        </Header>

        {this.showForm()}
      </Segment>
      );
  }
}
