import React from "react";
import {
    Menu, Container, Header, Form, Dimmer, Loader
} from "semantic-ui-react";
import swal from "sweetalert2";

//service
import { style } from "./../../Static/Style/QueueCss";

//component
import HeaderPatient from "../../Patients/Components/HeaderPatient"
import Registration from "../Containers/Registration"
import NurseTreatment from "./../Components/ShowFormNurse"
import FromNurse from "./../Components/FromForNurse"
import DocTreatment from "./../Components/FromForDoctor"
import HistoryPatient from "./../Components/HistoryPatient"
import Pharmacy from "./../Components/Pharmacy"
import ShowHeaderMdr from "./../Components/ShowHeaderMdr"

import { patientField, mdrField } from "./../../Static/Data/Field"
import {
    setMedicalRecordForNurse,
    getMedicalRecordForNurse,
    getMedicalRecordForPharmacy,
    setMedicalRecordForDoctor,
    getBasicDataTreatmentHistory
} from "./../../Service/MedicalRecordMethod";

import { getInfoPatient } from './../../Service/ManagePatientMethod'


import moment from "moment";


export default class DemoExample extends React.Component {
    state = {
        activeItem: 0,
        tab: 0,
        empPosition: 1,
        patient: {},
        id: '',
        medicalRecord: {
            date: moment().format("LL"),
            time: moment().format("LT"),
            clinic: "SIT KMUTT Clinic",
        },
        loader: false,
        choosePatient: null,
        type: "",
        historyTreatment: [],
        historyMsg: "",
        resetState: "",
    }

    setMedicalRecordDetail = (obj) => {
        this.setState({ ...this.state.medicalRecord, ...obj })
    };

    showPopupConfirm = (obj) => {
        let mdr = { ...this.state.medicalRecord, ...obj, ...{ patientCitizenId: this.state.patient.citizenId } }
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
                if (this.state.empPosition === 2) {
                    this.sendToDoctor(mdr);
                } else if (this.state.empPosition === 3) {
                    this.sendToPharmacy(mdr);
                } else {
                }
            }
        });
    };

    sendToNurse = (patient) => {
        if (patient[patientField.citizenId.variable]) {
            let name = patient[patientField.nametitle.variable] + " " + patient[patientField.firstname.variable] + "  " + patient[patientField.lastname.variable]
            swal({
                type: "success",
                title: "Add Queue Success!",
                showConfirmButton: false,
                timer: 1500
            });
            this.resetState()
        }
    };

    sendToDoctor = (mdr) => {
        this.setLoader(true)
        setMedicalRecordForNurse(mdr).then(res => {
        this.setLoader(false)
            this.resetState()
            if (res.status) {
                swal({
                    type: "success",
                    title: `${mdrField.medicalRecordId.label} : ${res.data[mdrField.medicalRecordId.variable]}`,
                    showConfirmButton: true,
                });
            } else {
                swal({
                    type: "error",
                    text: res.message,
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        })
    }

    sendToPharmacy = (mdr) => {
        this.setLoader(true)
        setMedicalRecordForDoctor(mdr).then(res => {
            this.setLoader(false)
            this.resetState()
            if (res.status) {
                swal({
                    type: "success",
                    title: res.message,
                    showConfirmButton: false,
                    timer: 2000
                });
            }else{
                swal({
                    type: "error",
                    text: res.message,
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        })
    }

    showtab = (empPosition) => {
        if (empPosition == 2) {
            return <NurseTreatment
                empPosition={empPosition}
                setMedicalRecordDetail={this.setMedicalRecordDetail}
                sendToDoctor={this.sendToDoctor}
                showPopupConfirm={this.showPopupConfirm}
                resetState={this.resetState}
            />
        } else if (empPosition == 3) {
            if (this.state.tab == 0) {
                return <NurseTreatment
                    empPosition={empPosition}
                    medicalRecord={this.state.medicalRecord}
                />
            } else if (this.state.tab == 1) {
                return <DocTreatment
                    empPosition={empPosition}
                    showPopupConfirm={this.showPopupConfirm}
                    tab={this.state.tab} 
                    resetState={this.resetState}
                    />
            } else if (this.state.tab == 2) {
                return <HistoryPatient
                    historyTreatment={this.state.historyTreatment}
                    historyMsg={this.state.historyMsg} 
                    empPosition={empPosition}
                    tab={this.state.tab}
                    setLoader={this.setLoader}
                    privilege={this.state.patient.privilege}
                    allergy={this.state.patient.allergy}

                    />
            }
        }
        else if (empPosition == 4) {
            return <DocTreatment
                empPosition={empPosition}
                showPopupConfirm={this.showPopupConfirm}
                tab={this.state.tab}
                resetState={this.resetState}
                medicalRecord={this.state.medicalRecord} />
        }
        return ""
    }

    showHeaderMrd = () => {
        return <ShowHeaderMdr
            date={this.state.medicalRecord[mdrField.date.variable]}
            time={this.state.medicalRecord[mdrField.time.variable]}
            clinic={this.state.medicalRecord[mdrField.clinic.variable]}
            privilege={this.state.patient[patientField.privilege.variable]}
            allergy={this.state.patient[patientField.allergy.variable]}
        />
    }

    showTabMenu = (empPosition) => {
        if (empPosition === 2) {
            return ""
        } else if (empPosition === 3) {
            return <Menu pointing secondary>
                <Menu.Item name='Treatment of nurse'
                    active={this.state.tab == 0}
                    onClick={() => { this.setState({ tab: 0 }) }}
                />
                <Menu.Item
                    name='Treatment of doctor'
                    active={this.state.tab == 1}
                    onClick={() => { this.setState({ tab: 1 }) }}
                />
                <Menu.Item
                    name='History medical records'
                    active={this.state.tab == 2}
                    onClick={() => { this.setState({ tab: 2 }) }}
                />
            </Menu>
        } else if (empPosition === 4) {
            return ""
        }
        return ""
    }

    showDependOnPosition = () => {
        if (this.state.empPosition !== 1) {
            return <div style={{ marginLeft: "238px", minWidth: "550px" }}>
                <div style={{ padding: "1em", paddingLeft: "2%", background: "#fff" }} >
                    <HeaderPatient  patient={this.state.patient} />
                </div>
                <div style={{ paddingBottom: "0px", background: "#fff" }}>
                    {this.showTabMenu(this.state.empPosition)}
                </div>
                <div style={{ padding: "2% 6%", background: "#ddd" }}>
                    <Container>
                        {this.state.tab !== 2 ? this.showHeaderMrd() : ''}
                        {this.showtab(this.state.empPosition)}
                    </Container>
                </div>
            </div>
        } else {
            return <div style={{ marginLeft: "238px", minWidth: "550px" }}>
                <div style={{ padding: "1em", paddingLeft: "2%", background: "#fff", height: "100vh" }} >
                    <Registration
                        sendToNurse={this.sendToNurse}
                        setField={this.setField} />
                </div>
            </div>
        }
    }

    setField = (field, value) => {
        this.setState({ [field]: value })
    }

    setLoader = (boolean) => {
        this.setState({ loader:boolean })
    }

    resetState= () => {
        this.setState({ 
            resetState: "",
            patient: {},
            id: '',
            medicalRecord:{
                date: moment().format("LL"),
                time: moment().format("LT"),
                clinic: "SIT KMUTT Clinic",
            }
        })
    }

    search = (empPosition, id) => {
        this.setLoader(true)
        if (empPosition === 1 || empPosition === 2) { // พยาบาล
            getInfoPatient(id).then(data => {
                if (data.status) {
                    this.setState({
                        patient: data.data,
                        loader: false,
                    });
                } else {
                    swal({
                        type: "error",
                        text: data.message,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.setLoader(false)
                }
            })
        } else if (empPosition === 3) { // หมอ
            getMedicalRecordForNurse(id).then(data => {
                if (data.status) {
                    getInfoPatient(data.data.patientCitizenId).then(dataPatient => {
                        if (dataPatient.status) {
                            getBasicDataTreatmentHistory(data.data.patientCitizenId).then(history => {
                                this.setState({
                                    historyTreatment: history.data,
                                    historyMsg: history.message,
                                    patient: dataPatient.data,
                                    loader: false,
                                    medicalRecord: data.data,
                                });
                            })
                        } else {
                            swal({
                                type: "error",
                                text: dataPatient.message,
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.setLoader(false)
                        }
                    })
                } else {
                    swal({
                        type: "error",
                        text: data.message,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.setLoader(false)
                }

            })
        } else if (empPosition === 4) {
            getMedicalRecordForPharmacy(id).then(data => {
                if (data.status) {
                    getInfoPatient(data.data.patientCitizenId).then(dataPatient => {
                        if (dataPatient.status) {
                            this.setState({
                                patient: dataPatient.data,
                                loader: false,
                                medicalRecord: data.data,
                            });
                        } else {
                            swal({
                                type: "error",
                                text: dataPatient.message,
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.setLoader(false)
                        }
                    })
                } else {
                    swal({
                        type: "error",
                        text: data.message,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.setLoader(false)
                }

            })
        }
    }

    componentWillMount = async () => {
        let empPosition = this.props.location.state ? this.props.location.state.position : this.state.empPosition
        this.setState({
            empPosition: empPosition
        })
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div style={{ background: "#ddd", height: "100vh" }}>
                <Dimmer.Dimmable blurring dimmed={this.state.loader}>
                    <Dimmer page active={this.state.loader}>
                        <Loader size='massive' indeterminate>Loading</Loader>
                    </Dimmer>
                    <Menu vertical inverted fixed='left' style={{ width: "17rem" }}>
                        <Menu.Item color='teal'>
                            <Header style={style.navbarDeco} >Queues</Header>
                        </Menu.Item>
                        <Form onSubmit={() => this.search(this.state.empPosition, this.state.id)} style={{ margin: " 3% " }}>
                            <Form.Input
                                type='text'
                                action={{ icon: 'search' }}
                                placeholder='Search Id ...'
                                onChange={(e) => this.setState({ id: e.target.value })}
                                value={this.state.id} />
                        </Form>
                        <br />
                  
                    </Menu>
                    {this.showDependOnPosition()}
                </Dimmer.Dimmable>
            </div>
        );
    }
}

