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
    showChooseClinic : false
  }

  chooseTab = (tab) => {
    // this.setState({ activeTab: tab })

    if (!ClinicProvider.getRememberClinic()) {
      this.setState({ showChooseClinic: true, activeTab: tab })
    } else {
      this.setState({ showChooseClinic: false,activeTab: tab })
    }
    window.scrollTo(0, 0)
    if(tab === "home"){
        this.props.history.push({
            pathname: "/"
        });
        return 
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
            // setLoader={this.setLoader}
            />
      }
  }

  setLoader = (boolean) => {
    this.setState({ loader: boolean })
  }

  showChooseClinic = () => {
    return <Modal 
      size='tiny'
    open={this.state.showChooseClinic} 
          onClose={() => { 
            this.setState({ showChooseClinic: false })
          ClinicProvider.setClinic('SIT Clinic')
        }}centered>
      <Modal.Header>Select a clinic</Modal.Header>
      <Modal.Content image>
        {/* <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' /> */}
        <Modal.Description>
          <p>Please select the clinic you are going to treat. Is it okay to use this clnic.</p>
          <Button.Group fluid>
            <Button color="teal">SIT Clinic</Button>
            <Button.Or text='or' />
            <Button style={{ color: '#FFF', backgroundColor:'#FA636F'}}>KMUTT Clinic</Button>
          </Button.Group>
          <br /><br />
          <Checkbox 
            label='Remember'  
            checked={ClinicProvider.getRememberClinic()}
            onChange={() => { ClinicProvider.setRememberClinic(!ClinicProvider.getRememberClinic()) }}
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
