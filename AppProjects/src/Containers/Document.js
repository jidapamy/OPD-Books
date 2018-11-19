import React, { Component } from "react";
import {
  Dimmer, Loader, Menu, Button, Modal, Image, Header, Checkbox
} from "semantic-ui-react";
import FooterDemo from '../Components/ApiDocuments/FooterDemo'
import ApiDocument from "./ApiDocument";
import DemoExample from "./DemoExample"
import Registration from "../Components/DemoExamples/Registration"
import { ClinicProvider }  from "../Services/ClinicProvider"

export default class Document extends Component {
  state = {
    activeTab: "api",
    loader: false,
    showChooseClinic : false,

    chooseClinic : '',
    rememberStatus : true

  }

  chooseTab = (tab) => {
    this.setState({ activeTab: tab })
    window.scrollTo(0, 0)
    if(tab === "home"){
        this.props.history.push({
            pathname: "/"
        });
        return 
    }
    if (tab != "api"){
      console.log('ClinicProvider.getRememberClinic()', ClinicProvider.getRememberClinic())
      if (!ClinicProvider.getRememberClinic()) {
        this.setState({ showChooseClinic: true, rememberStatus: true })
      } else {
        this.setState({ showChooseClinic: false, rememberStatus: false })
      }
    }else{
      ClinicProvider.setClinic('SIT')
      ClinicProvider.setRememberClinic(false)
    }
  }

  showPage = () => {
      if(this.state.activeTab === "api"){
        return  <ApiDocument/>
      } else if (this.state.activeTab === "1"){
        return <Registration />
      }else{
          return <DemoExample 
            empPosition={+(this.state.activeTab)} 
            chooseClinic={this.state.chooseClinic}
            // setLoader={this.setLoader}
            />
      }
  }

  setLoader = (boolean) => {
    this.setState({ loader: boolean })
  }

  chooseClinic = (clinic) => {
    this.setState({ showChooseClinic : false })
    ClinicProvider.setClinic(clinic)
    ClinicProvider.setRememberClinic(this.state.rememberStatus)
  }

  showChooseClinic = () => {
    return <Modal 
      size='tiny'
    open={this.state.showChooseClinic} 
          onClose={() => { 
            this.setState({ showChooseClinic: false })
        }}centered>
      <Modal.Header>Select a clinic</Modal.Header>
      <Modal.Content image>
        {/* <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' /> */}
        <Modal.Description>
          <p>
            Please select the clinic you are going to treat. <br/>
            We're set 'SIT Clinic' as default. Is it okay to use this clinic? 
          </p>
          <Button.Group fluid>
            <Button style={{ color: '#FFF', backgroundColor: '#31A5BA' }} onClick={() => this.chooseClinic("SIT")} >SIT Clinic</Button>
            <Button.Or text='or' />
            <Button style={{ color: '#FFF', backgroundColor:'#FA636F'}}
              onClick={() => this.chooseClinic("KMUTT")}
            >KMUTT Clinic</Button>
          </Button.Group>
          <br /><br />
          <Checkbox 
            label='Remember'  
            checked={this.state.rememberStatus}
            onChange={() => this.setState({ rememberStatus: !this.state.rememberStatus }) }
            />
        </Modal.Description>
      </Modal.Content>
      
    </Modal>
  }

  render() {
    console.log("Document!!")
    return (
      <div>
        {/* <Dimmer.Dimmable blurring dimmed={this.state.loader}> */}
       
        <Dimmer page active={this.state.loader}>
            <Loader size='massive' indeterminate>Loading</Loader>
        </Dimmer>
        {this.showChooseClinic()}
        {this.showPage()}
        <FooterDemo
            history={this.props.history}
            chooseTab={this.chooseTab}
            tab={this.state.activeTab}
            loader={this.state.loader}
        />
        {/* </Dimmer.Dimmable> */}

      </div>
    )
  }
}
