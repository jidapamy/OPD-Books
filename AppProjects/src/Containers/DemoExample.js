import React from "react";
import {
    Menu, Container, Header, Form, Dimmer, Loader, Image, Grid, Sticky, Segment, List
} from "semantic-ui-react";
import swal from "sweetalert2";

//service
import { style } from "../Static/Style/QueueCss";

//component
import HeaderPatient from "../Components/Patients/Profile/HeaderPatient"
import Registration from "../Components/DemoExamples/Registration"
import NurseTreatment from "../Components/DemoExamples/ShowFormNurse"
import DocTreatment from "../Components/DemoExamples/FromForDoctor"
import HistoryPatient from "../Components/DemoExamples/HistoryPatient"
import ShowHeaderMdr from "../Components/DemoExamples/ShowHeaderMdr"
import NavbarQueues from "./NavQueues"

import FooterDemo from '../Components/ApiDocuments/FooterDemo'
import logoapp from "../../src/Static/Img/logoapp.svg"
import { patientField, mdrField } from "../Static/Data/Field"
import {
    setMedicalRecordForNurse,
    getMedicalRecordForNurse,
    getMedicalRecordForPharmacy,
    setMedicalRecordForDoctor,
    getTreatmentHistoryOfPatient,
    insertMDR
} from "../Services/MedicalRecordMethod";

import { getInfoPatient, checkIdcard } from '../Services/ManagePatientMethod'
import {
    addMedicalRecordForNurseFromDB, updateMedicalRecordFromDB, checkPatientFromDB, getPatientFromDB,
    addPatientFromDB, getMedicalRecordFromDB, updateQueueFromDB, getMedicalRecordForNurseFromDB, addMedicalRecordForDoctorFromDB
} from '../Services/DbService'
import { confirmPopup, successPopup, errorPopup, successTXPopup } from "../Components/SweetAlert"


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
            clinic: "SIT Clinic",
            treatmentYear: new Date().getFullYear()
        },
        loader: false,
        choosePatient: null,
        type: "",
        historyTreatment: [],
        historyMsg: "",
        resetState: false,
        choosePatient: {},
        statusPatientInBC: false
    }

    setMedicalRecordDetail = (obj) => {
        this.setState({ ...this.state.medicalRecord, ...obj })
    };

    showPopupConfirm = async (obj) => {
        this.setState({ resetState: false })
        let mdr = { ...this.state.medicalRecord, ...obj, ...{ patientCitizenId: this.state.patient.citizenId }, ...this.state.choosePatient }
        mdr.date = moment(mdr.date).format("l")
        console.log("mdr", mdr)
        confirmPopup(this.state.empPosition === 4 && this.state.statusPatientInBC ? 'Treatment of patient will save on the blockchain system. Please check that your information is correct and true.' : null).then(res => {
            if (res.value) {
                if (this.state.empPosition === 2) {
                    return this.sendToDoctor(mdr);
                } else if (this.state.empPosition === 3) {
                    this.sendToPharmacy(mdr);
                } else if (this.state.empPosition === 4) {
                    if (this.state.statusPatientInBC) {
                        this.saveMdrOnBlockchain(mdr)
                    } else {
                        updateQueueFromDB(this.state.choosePatient.queueId, this.state.empPosition).then(() => {
                            successPopup('Patient information is recorded on database successfully.').then(res => {
                                this.resetState()
                            })
                        })
                    }
                }
            }
        })
    };

    // sendToNurse = (patient) => {
    //     if (patient[patientField.citizenId.variable]) {
    //         let name = patient[patientField.nametitle.variable] + " " + patient[patientField.firstname.variable] + "  " + patient[patientField.lastname.variable]
    //         successPopup('Add Queue Success!').then(res => {
    //             this.resetState()
    //         })
    //     }
    // };

    sendToDoctor = (mdr) => {
        // console.log(mdr)
        this.setLoader(true)
        addMedicalRecordForNurseFromDB(mdr).then(async res => {
            this.setLoader(false)
            if (res.status) {
                await updateQueueFromDB(this.state.choosePatient.queueId, this.state.empPosition, res.data[mdrField.medicalRecordId.variable])
                successPopup(`The medical record id is " ${res.data[mdrField.medicalRecordId.variable]} "`).then(res => {
                    this.resetState()
                })
            } else {
                errorPopup(res.message)
            }
        })
        // await setMedicalRecordForNurse(mdr).then(res => {
        //     this.setLoader(false)
        //     if (res.status) {
        //         successPopup(`The medical record id is '${res.data[mdrField.medicalRecordId.variable]}'`).then(res => {
        //             this.resetState()
        //         })
        //     } else {
        //         errorPopup(res.message)
        //     }
        // })
    }

    sendToPharmacy = (mdr) => {
        this.setLoader(true)
        let tmp = {
            mdrId: null,
            medicalRecord: {}
        }
        addMedicalRecordForDoctorFromDB(mdr).then(async res => {
            this.setLoader(false)
            if (res.status) {
                await updateQueueFromDB(this.state.choosePatient.queueId, this.state.empPosition, mdr.mdrId)
                successPopup(res.message).then(res => {
                    this.resetState()
                })
            } else {
                errorPopup(res.message)
            }
        })
        // setMedicalRecordForDoctor(mdr).then(res => {
        //     this.setLoader(false)
        //     if (res.status) {
        //         successPopup(res.message).then(res => {
        //             this.resetState()
        //         })
        //     } else {
        //         errorPopup(res.message)
        //     }
        // })
    }

    saveMdrOnBlockchain = (mdr) => {
        this.setLoader(true)
        insertMDR(mdr).then(async res => {
            this.setLoader(false)
            if (res.status) {
                await updateQueueFromDB(this.state.choosePatient.queueId, this.state.empPosition, mdr.mdrId)
                successTXPopup('Patient information is recorded on blockchain successfully.', res.data.transaction).then(res => {
                    this.resetState()
                })
            } else {
                errorPopup(res.message)
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
                resetState={this.state.resetState}
                setField={this.setField}
            />
        } else if (empPosition == 3) {
            if (this.state.tab == 0) {
                return <NurseTreatment
                    empPosition={empPosition}
                    medicalRecord={this.state.medicalRecord}
                    setField={this.setField}
                />
            } else if (this.state.tab == 1) {
                return <DocTreatment
                    empPosition={empPosition}
                    showPopupConfirm={this.showPopupConfirm}
                    tab={this.state.tab}
                    resetState={this.state.resetState}
                    setField={this.setField}
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
                    setField={this.setField}
                />
            }
        }
        else if (empPosition == 4) {
            return <DocTreatment
                empPosition={empPosition}
                showPopupConfirm={this.showPopupConfirm}
                tab={this.state.tab}
                medicalRecord={this.state.medicalRecord}
                resetState={this.state.resetState}
                setField={this.setField}
            />
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
        if (empPosition === 3) {
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
        }
    }

    showDependOnPosition = () => {
        if (this.state.empPosition !== 1) {
            return <div style={{ marginLeft: "238px", minWidth: "550px" }}>
                <div style={{ padding: "1em", paddingLeft: "2%", background: "#fff" }} >
                    <HeaderPatient patient={this.state.patient} />
                </div>
                <div style={{ paddingBottom: "0px", background: "#fff" }}>
                    {this.showTabMenu(this.state.empPosition)}
                </div>
                <div style={{ padding: "2% 6%", paddingBottom: "6%", background: "rgb(234, 234, 234)" }}>
                    <Container>
                        {this.state.tab !== 2 ? this.showHeaderMrd() : ''}
                        {this.showtab(this.state.empPosition)}
                    </Container>
                </div>
            </div>
        }
        // else {
        //     return <div style={{ marginLeft: "238px", minWidth: "550px" }}>
        //         <div style={{ padding: "1em", paddingLeft: "2%", background: "#fff", height: "100vh" }} >
        //             <Registration
        //                 sendToNurse={this.sendToNurse}
        //                 setField={this.setField} />
        //         </div>
        //     </div>
        // }
    }

    setField = (field, value) => {
        this.setState({ [field]: value })
    }

    setLoader = (boolean) => {
        this.setState({ loader: boolean })
    }

    resetState = () => {
        this.setState({
            choosePatient: {},
            resetState: true,
            patient: {},
            id: '',
            medicalRecord: {
                date: moment().format("LL"),
                time: moment().format("LT"),
                clinic: "SIT KMUTT Clinic",
                treatmentYear: new Date().getFullYear()
            },
            historyTreatment: [],
            historyMsg: ''
        })
    }

    getPatientData = async (citizenId) => {
        console.log(citizenId)
        window.scrollTo(0, 0)
        // if (await checkPatientFromDB(citizenId)) {
        // ใน db มีอยู่แล้ว เพราะต้อง add patient ลง DB ก่อนถึงจะสร้าง Queue ได้
        swal({
            title: 'System is preparing data.',
            html: 'Please do not close this popup.!',
            onOpen: () => {
                swal.showLoading()
                getPatientFromDB(citizenId).then(async data => {
                    console.log("data", data)
                    if (data.status) {
                        await this.getMedicalRecordFromDB(this.state.choosePatient.mdrId)
                        this.setState({
                            patient: data.data,
                            tab: 0,
                        });
                        if (await checkIdcard(citizenId)) {
                            // in blockchain
                            await this.getTreatmentHistory(citizenId)
                            this.setState({ statusPatientInBC: true });
                        } else {
                            this.setState({
                                statusPatientInBC: false,
                                historyTreatment: [],
                                historyMsg: "",
                            });
                        }
                    } else {
                        errorPopup(data.message)
                        // this.setLoader(false)
                    }
                    swal.close()
                })
            }
        })
    }


    getTreatmentHistory = async (citizenId) => {
        // from blockchain only
        if (this.state.empPosition === 3) { // หมอ
            try {
                let history = await getTreatmentHistoryOfPatient(citizenId)
                console.log("getTreatmentHistory", history)
                if (history.status) {
                    this.setState({
                        historyTreatment: history.data,
                        historyMsg: history.message,
                    });
                } else {
                    errorPopup(history.message)
                }
            } catch (error) {
                errorPopup(error)
            }
        }
    }

    getMedicalRecordFromDB = async (mdrId) => {
        if (this.state.empPosition === 3) { // หมอ
            try {
                console.log("getMedicalRecordFromDB", mdrId)
                let medicalRecord = await getMedicalRecordForNurseFromDB(mdrId);
                console.log(medicalRecord)
                if (medicalRecord.status) {
                    medicalRecord.data.clinic = this.state.medicalRecord.clinic
                    medicalRecord.data.date = moment(medicalRecord.data.date).format("LL")
                    this.setState({
                        medicalRecord: medicalRecord.data,
                    });
                } else {
                    errorPopup(medicalRecord.message)
                }
            } catch (error) {
                console.log("CATCH ", error)
                errorPopup(error)
            }
        } else if (this.state.empPosition === 4) {
            try {
                let medicalRecord = await getMedicalRecordFromDB(mdrId);
                console.log(medicalRecord)
                if (medicalRecord.status) {
                    medicalRecord.data.clinic = this.state.medicalRecord.clinic
                    medicalRecord.data.date = moment(medicalRecord.data.date).format("LL")
                    this.setState({
                        medicalRecord: medicalRecord.data,
                    });
                } else {
                    errorPopup(medicalRecord.message)
                }
            } catch (error) {
                errorPopup(error)
            }
        }
    }


    // getPatientData = (citizenId) => {
    //     let id = citizenId
    //     let empPosition = this.state.empPosition
    //     window.scrollTo(0, 0)
    //     this.setLoader(true)
    //     if (empPosition === 1 || empPosition === 2) { // พยาบาล
    //         getInfoPatient(id).then(data => {
    //             if (data.status) {
    //                 this.setState({
    //                     patient: data.data,
    //                     loader: false,
    //                 });
    //             } else {
    //                 errorPopup(data.message).then(res => {
    //                     this.setLoader(false)
    //                 })
    //             }
    //         })
    //     } else if (empPosition === 3) { // หมอ
    //         getMedicalRecordForNurse(id).then(data => {
    //             if (data.status) {
    //                 console.log(data)
    //                 data.data.date = moment(data.data.date).format("ll")
    //                 getInfoPatient(data.data.patientCitizenId).then(dataPatient => {
    //                     if (dataPatient.status) {
    //                         getTreatmentHistoryOfPatient(data.data.patientCitizenId).then(history => {
    //                             this.setState({
    //                                 historyTreatment: history.data,
    //                                 historyMsg: history.message,
    //                                 patient: dataPatient.data,
    //                                 loader: false,
    //                                 medicalRecord: data.data,
    //                             });
    //                         })
    //                     } else {
    //                         errorPopup(dataPatient.message).then(res => {
    //                             this.setLoader(false)
    //                         })
    //                     }
    //                 })
    //             } else {
    //                 errorPopup(data.message).then(res => {
    //                     this.setLoader(false)
    //                 })
    //             }

    //         })
    //     } else if (empPosition === 4) {
    //         getMedicalRecordForPharmacy(id).then(data => {
    //             if (data.status) {
    //                 data.data.date = moment(data.data.date).format("ll")
    //                 getInfoPatient(data.data.patientCitizenId).then(dataPatient => {
    //                     if (dataPatient.status) {
    //                         this.setState({
    //                             patient: dataPatient.data,
    //                             loader: false,
    //                             medicalRecord: data.data,
    //                         });
    //                     } else {
    //                         errorPopup(dataPatient.message).then(res => {
    //                             this.setLoader(false)
    //                         })
    //                     }
    //                 })
    //             } else {
    //                 errorPopup(data.message).then(res => {
    //                     this.setLoader(false)
    //                 })
    //             }

    //         })
    //     }
    // }

    componentWillMount = async () => {
        let empPosition = this.props.empPosition ? this.props.empPosition : this.state.empPosition
        this.setState({
            empPosition: empPosition
        })
    }

    componentWillReceiveProps = (nextProps) => {
        window.scrollTo(0, 0)
        this.setState({
            empPosition: nextProps.empPosition,
            tab: 0
        });
        if (this.state.empPosition !== nextProps.empPosition) {
            this.resetState()
        }
    }

    showSearch = () => {
        let activeItem = "001"
        if (this.state.empPosition !== 1) {
            return <div>
                {/* <Menu.Item >
                    <Image src={logoapp} size='large' style={{ height: 120, width: 120 ,marginLeft:'20%'}} />
                    <Header style={style.navbarDeco} >{this.state.empPosition === 2 ? "Citizen Id" : "Medical Record Id" }</Header>
                </Menu.Item> */}

                {/* <Form onSubmit={() => this.search(this.state.empPosition, this.state.id)} style={{ margin: " 3% " }}>
                    <Form.Input
                        type='text'
                        action={{ icon: 'search',color: 'blue' }}
                        placeholder='Search Id ...'
                        onChange={(e) => this.setState({ id: e.target.value })}
                        value={this.state.id} /> 
                </Form>*/}
            </div>
        }
    }

    render() {
        return (
            <div style={{ background: "#ddd", height: "100vh" }}>
                <Dimmer.Dimmable blurring dimmed={this.state.loader}>
                    <Dimmer page active={this.state.loader}>
                        <Loader size='massive' indeterminate>Loading</Loader>
                    </Dimmer>
                    <Menu inverted vertical fixed='left' style={{ width: "17rem" }}>

                        {/* <Menu.Item color='teal'>
                            <Header style={style.navbarDeco} >Queues</Header>
                        </Menu.Item>
                        <Form onSubmit={() => this.search(this.state.empPosition, this.state.id)} style={{ margin: " 3% " }}>
                            <Form.Input
                                type='text'
                                action={{ icon: 'search' }}
                                placeholder='Search Id ...'
                                onChange={(e) => this.setState({ id: e.target.value })}
                                value={this.state.id} />
                        </Form> */}
                        <br />
                        <NavbarQueues
                            empPosition={this.state.empPosition}
                            getPatientData={this.getPatientData}
                            setField={this.setField}
                            choosePatient={this.state.choosePatient}
                        />
                        {/* {/* {this.showSearch()} */} */}

                    </Menu>

                    {this.showDependOnPosition()}
                </Dimmer.Dimmable>
                {/* <FooterDemo
                    history={this.props.history}
                    tab={this.state.empPosition+""}
                /> */}
            </div>
        );
    }
}

