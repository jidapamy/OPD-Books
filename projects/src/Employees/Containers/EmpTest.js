import React from "react";
import {
    Grid, Menu, Segment, Container, Divider, Header,
    Icon, List,
    Button,
    Form, Dimmer, Loader
} from "semantic-ui-react";
import { Scrollbars } from 'react-custom-scrollbars';
import BackgroundImage from "./../../Static/Img/BackgroundImage.png";
import swal from "sweetalert2";
import styled from "styled-components";

//service
import { style } from "./../../Static/Style/QueueCss";

//component
import HeaderPatient from "../../Patients/Components/HeaderPatient"
import Registration from "../Containers/Registration"
import NurseTreatment from "./../Components/ShowFormNurse"
import FromNurse from "./../Components/FromForNurse1"
import DocTreatment1 from "./../Components/FromForDoctor1"
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

import { getQueue, addQueue, removeQueue } from "./../../Service/QueueMethod";
import { getInfoPatient } from './../../Service/ManagePatientMethod'


import moment from "moment";

const Body = styled.div`
    margin-left: 25vh;
    min-width: 80vh;
    height:900px;
    
`;
const BGs = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
`

const src = 'http://react.semantic-ui.com/images/wireframe/image.png'

const styles = {
    // blockWithTab : {
    //     padding: "3%", 
    //     background: "rgb(248, 248, 248)", 
    // },
    blockTab: {
        padding: "3%",
        background: "rgb(248, 248, 248)",
        marginTop: "2%",
        borderTop: "2px solid rgba(181, 181, 181, 0.11)",
        paddingRight: " 4.1%"
    }
}
export default class Emptest extends React.Component {
    state = {
        activeItem: 0,
        tab: 0,
        empPosition: 1,
        patient: {},
        id: '',
        medicalRecord: {
            // patientCitizenId: "1234567890124",
            date: moment().format("LL"),
            time: moment().format("LT"),
            clinic: "SIT KMUTT Clinic",
            // nurseName:"Mr. Dorothy Kendall",
            // doctorName:"Dr. Carmen Fulton"
        },
        loader: false,
        queues: [],
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
        console.log(obj)
        let mdr = { ...this.state.medicalRecord, ...obj, ...{ patientCitizenId: this.state.patient.citizenId } }
        console.log("mdr", mdr)
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
                    // this.props.sendToPayment();
                }
                //     swal({
                //         type: "success",
                //         title: "บันทึกข้อมูลสำเร็จ",
                //         showConfirmButton: false,
                //         timer: 1500
                //     });

                // this.state.queues.splice(this.state.choosePatient.index, 1)
            }
        });
    };

    sendToNurse = (patient) => {
        if (patient[patientField.citizenId.variable]) {
            let name = patient[patientField.nametitle.variable] + " " + patient[patientField.firstname.variable] + "  " + patient[patientField.lastname.variable]
            addQueue(patient[patientField.citizenId.variable], name);
            swal({
                type: "success",
                title: "Add Queue Success!",
                showConfirmButton: false,
                timer: 1500
            });
            console.log("getQueue", getQueue())
            this.setState({ queues: getQueue() })
            this.resetState()
        }
    };

    sendToDoctor = (mdr) => {
        console.log(mdr, "sendDoctor")
        this.setLoader(true)
        setMedicalRecordForNurse(mdr).then(res => {
            console.log(res)
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
        console.log("sendToPharmacy", mdr)
        this.setLoader(true)
        setMedicalRecordForDoctor(mdr).then(res => {
            console.log(res)
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
                return <DocTreatment1
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
            return <DocTreatment1
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
                    <HeaderPatient page="example" patient={this.state.patient} />
                </div>
                <div style={{ paddingBottom: "0px", background: "#fff" }}>
                    {this.showTabMenu(this.state.empPosition)}
                </div>
                <div style={{ padding: "2% 6%", background: "#ddd" }}>
                    <Container>
                        {/* tab = 2 is history */}
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
    // selectPatient = (index) => {
    //     let queues = getQueue("patient");
    //     console.log("selectPatient", queues)
    //     this.setState({ loader: true })
    //     getInfoPatient(queues[index].id).then(data => {
    //         this.setState({
    //             queues: queues,
    //             patient: data.data,
    //             loader: false,
    //             choosePatient: queues[index],
    //             activeItem: index,
    //             type: "patient"
    //         });
    //     })
    // }

    // selectMdr = (index) => {
    //     let queues = getQueue("mdr");
    //     console.log("selectMdr", queues)
    //     this.setState({ loader: true })
    //     getMedicalRecordForNurse(queues[index].id).then(data => {
    //         getInfoPatient(data.data.patientCitizenId).then( dataPatient => {
    //             this.setState({
    //                 queues: queues,
    //                 patient: dataPatient.data,
    //                 loader: false,
    //                 choosePatient: queues[index],
    //                 activeItem: index,
    //                 medicalRecord: data.data,
    //                 type: "mdr"
    //             });
    //         })
    //     })
    // }

    // selectMdrForPhamacy = (index) => {
    //     let queues = getQueue("mdr");
    //     console.log("selectMdr", queues)
    //     this.setState({ loader: true })
    //     getMedicalRecordForPharmacy(queues[index].id).then(data => {
    //         getInfoPatient(data.data.patientCitizenId).then(dataPatient => {
    //             this.setState({
    //                 queues: queues,
    //                 patient: dataPatient.data,
    //                 loader: false,
    //                 choosePatient: queues[index],
    //                 activeItem: index,
    //                 medicalRecord: data.data,
    //                 type: "mdr"
    //             });
    //         })
    //     })
    // }

    search = (empPosition, id) => {
        this.setLoader(true)
        if (empPosition === 1 || empPosition === 2) { // พยาบาล
            getInfoPatient(id).then(data => {
                console.log(data)
                if (data.status) {
                    this.setState({
                        patient: data.data,
                        loader: false,
                    });
                } else {
                    swal({
                        type: "error",
                        // title: "Oops...",
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
                                console.log("history", history)
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
                                // title: "Oops...",
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
                        // title: "Oops...",
                        text: data.message,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.setLoader(false)
                }

            })
        } else if (empPosition === 4) {
            getMedicalRecordForPharmacy(id).then(data => {
                console.log("getMedicalRecordForPharmacy",data)
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
                                // title: "Oops...",
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
                        // title: "Oops...",
                        text: data.message,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.setLoader(false)
                }

            })
        }
    }

    // prepareData = (empPosition,index) => {
    //     if (empPosition === 2){ // พยาบาล
    //         this.selectPatient(index) 
    //     } else if (empPosition === 3){ // หมอ
    //         this.selectMdr(index)
    //     } else if (empPosition === 4) {
    //         // this.selectMdrForPhamacy(index)
    //     }
    // }


    // showQueues = () => {
    //     let activeItem = this.state.activeItem
    //     let tmp = this.state.queues.map((q) => {
    //         return <Menu.Item key={q.index} name={q.index + ""} active={activeItem === q.index} onClick={() => this.prepareData(this.state.empPosition,q.index)} onVisit={() => this.handleVisit()}>
    //             <List>
    //                 <Grid style={activeItem === q.index ? style.widthNav2 : style.widthNav}>
    //                     <Grid.Column
    //                         width={5}
    //                         style={activeItem === q.index ? style.queueNoNav2 : style.queueNoNav}>
    //                         {q.queueId}
    //                     </Grid.Column>
    //                     <Grid.Column width={11}>
    //                         <List.Content>
    //                             <List.Header
    //                                 as="a"
    //                                 style={activeItem === q.index ? style.hnNoNav2 : style.hnNoNav}
    //                             >
    //                                 {this.state.type === "patient" ? ` HN: ${q.queueId}/61` : `MedId: ${q.queueId}`}
    //                             </List.Header>
    //                             <br />
    //                             <List.Description as="a" style={style.textQueueNav}>
    //                                 {q.patientName}
    //                             </List.Description>
    //                         </List.Content>
    //                     </Grid.Column>
    //                 </Grid>
    //             </List>
    //         </Menu.Item>
    //     })

    //     return tmp

    // }

    componentWillMount = async () => {
        let empPosition = this.props.location.state ? this.props.location.state.position : this.state.empPosition
        this.setState({
            empPosition: empPosition
        })
        // this.prepareData(empPosition, 0)
    }

    goBack = () => {
        console.log(this.props.history)
        this.props.history.goBack();
    }

    render() {
        console.log(this.state)
        return (
            // <Container>
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
                        {/* <Scrollbars autoHide style={{ height: 614 }}>
                            {this.showQueues()}
                        </Scrollbars> */}
                    </Menu>
                    {this.showDependOnPosition()}
                </Dimmer.Dimmable>
            </div>
        );
    }
}

