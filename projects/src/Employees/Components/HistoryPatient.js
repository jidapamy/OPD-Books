import React, { Component } from 'react';
import { Header, Icon, Table, Dropdown, Button, Modal, } from 'semantic-ui-react'
import { Scrollbars } from 'react-custom-scrollbars';

// component
import ShowHeaderMdr from "./ShowHeaderMdr"
import DocTreatment from "./FromForDoctor"
import NurseTreatment from "./ShowFormNurse"

// service
import { patientField, mdrField } from "./../../Static/Data/Field"
import { getMedicalRecord } from "./../../Service/MedicalRecordMethod";

const styles = {
  ImButton: {
    cursor: 'pointer'
  },
  colorsort: {
    color: "#00B5AD"
  },
  colorHis: {
    color: "#AFB4B7",
    fontSize: '12px',
  },
  colorDes: {
    color: "#808B96  ",
  },
  colorNavMobile: {
    color: "#62E6C5",
  },
  colorFontMobile: {
    color: "##FFFFFF"
  },
}
const Years = [
  { key: 2012, text: '2012', value: 2012 },
  { key: 2013, text: '2013', value: 2013 },
  { key: 2014, text: '2014', value: 2014 },
  { key: 2015, text: '2015', value: 2015 },
  { key: 2016, text: '2016', value: 2016 },
  { key: 2017, text: '2017', value: 2017 },
  { key: 2018, text: '2018', value: 2018 },
  { key: 2019, text: '2019', value: 2019 },
  { key: 2020, text: '2020', value: 2020 },
  { key: 2021, text: '2021', value: 2021 },
  { key: 2022, text: '2022', value: 2022 },
  { key: 2023, text: '2023', value: 2023 },
  { key: 2024, text: '2024', value: 2024 },
  { key: 2025, text: '2025', value: 2025 },
  { key: 2026, text: '2026', value: 2026 },
  { key: 2027, text: '2027', value: 2027 },
  { key: 2028, text: '2028', value: 2028 },
  { key: 2029, text: '2029', value: 2029 },
  { key: 2030, text: '2030', value: 2030 },
  { key: 2031, text: '2031', value: 2031 },
]

export default class ShowFormNurse extends Component {
  state = {
    openmodal: false,
    medicalRecord: {},
    privilege:this.props.privilege,
    allergy: this.props.allergy
  }

  chooseViewHistory = (mdrId) => {
    this.props.setLoader(true)
    getMedicalRecord(mdrId).then(data => {
      console.log("MDR : ", data)
      if (data.status) {
        this.props.setLoader(false)
        this.setState({
          medicalRecord: data.data,
          openmodal: true
        })
      }
    })
  }

  showHistory = () => {
    const historyTreatment = this.props.historyTreatment;
    let tmp = ""
    if (historyTreatment) {
      if (historyTreatment.length > 0) {
        tmp = historyTreatment.map((history, i) => {
          return <Table.Row key={i} onClick={() => this.chooseViewHistory(history.medicalRecordId)}>
            <Table.Cell textAlign='center'>{i + 1}</Table.Cell>
            <Table.Cell>Treatment</Table.Cell>
            <Table.Cell >{history.date}</Table.Cell>
            <Table.Cell >{history.doctorName}</Table.Cell>
            <Table.Cell >{history.clinic}</Table.Cell>
            <Table.Cell ><Button circular color='teal' icon='ellipsis horizontal' onClick={() => this.setState({ openmodal: true })} /></Table.Cell>
          </Table.Row>
        })
      } else {
        tmp = <Table.Cell textAlign='center' colSpan='6'>Please fill patient's citizen Id</Table.Cell>
      }
    } else {
      tmp = <Table.Cell textAlign='center' colSpan='6'>{this.props.historyMsg}</Table.Cell>
    }

    return tmp
  }

  render() {
    const empPosition = this.props.empPosition
    return (
      <div>
        <Header as='h2' color='grey'>Medical History</Header>
        <Scrollbars autoHide style={{ height: 580 }}>
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign='center'>No. <Icon name="sort" style={styles.ImButton} /></Table.HeaderCell>
                <Table.HeaderCell>Status <Icon name="sort" style={styles.ImButton} /></Table.HeaderCell>
                {/* <Table.HeaderCell>Name <Icon name="sort" style={styles.ImButton}/></Table.HeaderCell> */}
                <Table.HeaderCell >Date /&nbsp;
                <Dropdown
                    scrolling
                    compact
                    searchInput={{ type: 'number' }}
                    options={Years}
                    placeholder='Years'
                  />
                </Table.HeaderCell>
                <Table.HeaderCell >Dortor</Table.HeaderCell>
                <Table.HeaderCell >Clinic</Table.HeaderCell>
                <Table.HeaderCell >More..</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.showHistory()}
            </Table.Body>
          </Table>
        </Scrollbars>

        <Modal
          open={this.state.openmodal}
          onClose={() => this.setState({ openmodal: false, medicalRecord: {} })}
        >
          <Modal.Header textAlign='center'>Medical Records Id : {this.state.medicalRecord[mdrField.medicalRecordId.variable]}</Modal.Header>
          <ShowHeaderMdr
            date={this.state.medicalRecord[mdrField.date.variable]}
            time={this.state.medicalRecord[mdrField.time.variable]}
            clinic={this.state.medicalRecord[mdrField.clinic.variable]}
            privilege={this.state[patientField.privilege.variable]}
            allergy={this.state[patientField.allergy.variable]}
          />
          <NurseTreatment
            empPosition={empPosition}
            medicalRecord={this.state.medicalRecord}
          />
          <DocTreatment
            empPosition={empPosition}
            showPopupConfirm={this.showPopupConfirm}
            tab={this.props.tab}
            medicalRecord={this.state.medicalRecord} />
        </Modal>

      </div>
    )
  }
}