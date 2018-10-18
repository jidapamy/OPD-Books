import React, { Component } from "react";
import {
  Dimmer, Loader, Menu, Button
} from "semantic-ui-react";
import FooterDemo from '../Components/ApiDocuments/FooterDemo'
import ApiDocument from "./ApiDocument";
import DemoExample from "./DemoExample"
import Registration from "../Components/DemoExamples/Registration"

export default class Document extends Component {
  state = {
    activeTab: "api",
    loader: false
  }

  chooseTab = (tab) => {
    this.setState({ activeTab: tab })
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

  render() {
    console.log("Document!!")
    return (
      <div>
        {/* <Dimmer.Dimmable blurring dimmed={this.state.loader}> */}
       
        <Dimmer page active={this.state.loader}>
            <Loader size='massive' indeterminate>Loading</Loader>
          </Dimmer>
        
        {this.showPage()}
        <FooterDemo
            history={this.props.history}
            chooseTab={this.chooseTab}
            tab={this.state.activeTab}
        />
        {/* </Dimmer.Dimmable> */}

      </div>
    )
  }
}
