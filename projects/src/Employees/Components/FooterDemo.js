import React, { Component } from "react";
import {
  Header,
  Menu,
  Table,

} from "semantic-ui-react";
import { style } from "../../Static/Style/QueueCss";

export default class FooterDemo extends Component {
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  state = {
    activeTab: this.props.tab
  }

  showAttribute = () => {
    let arrAttr = []
    let tmp = "";
    if (this.state.statusJson === 1) {
      // request 
      arrAttr = this.state.chooseMethod.attrReq
    } else {
      //res
      arrAttr = this.state.chooseMethod.attrRes
    }
    tmp = arrAttr.map((attr, i) => {
      return <Table.Row style={style.textDes}>
        <Table.Cell width="6">
          <Header as='h4'>
            {attr.name}
          </Header>
        </Table.Cell>
        <Table.Cell width="3"> {attr.type}</Table.Cell>
        <Table.Cell width="7">{attr.des}</Table.Cell>
      </Table.Row>
    })
    return tmp
  }

  chooseTab = (tab) => {
    this.setState({ activeTab: tab })
    console.log("TAB",tab)
    switch (tab) {
      case "home":
        // home
        this.props.history.push({
          pathname: "/"
        });
        break;
      case "api":
        // api
        this.props.history.push({
          pathname: "/apiDoc"
        });
        break;
      case "1":
        // registrar
        this.props.history.push({
          pathname: "/demoExample",
          state: { position: 1 }
        });
        break;
      case "2":
        // nurse
        this.props.history.push({
          pathname: "/demoExample",
          state: { position: 2 }
        });
        break;
      case "3":
        // doctor
        this.props.history.push({
          pathname: "/demoExample",
          state: { position: 3 }
        });
        break;
      case "4":
        // pharmacy
        this.props.history.push({
          pathname: "/demoExample",
          state: { position: 4 }
        });
        break;
      default:
        this.props.history.push({
          pathname: "/apiDoc"
        });
        break;
    }
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <div style={{ marginLeft: "0px", textAlign: 'left' }}>
          <div style={style.footerChoosing}>
            <Menu borderless style={{ background: "#4D8B87", fontWeight: "bold", color: "#ffffff" }} >
              <Menu.Item name='Home'
                active={this.state.activeTab === 'home'}
                onClick={() => this.chooseTab("home")}
                position='right'
                icon='home'
                style={this.state.activeTab === "home" ? style.footerAfterClick : style.footerBeforClick}
              />
              <Menu.Item name='API Document' 
                active={this.state.activeTab === 'api'} 
                onClick={() => this.chooseTab("api")} 
                icon='credit card' 
                style={this.state.activeTab === "api" ? style.footerAfterClick : style.footerBeforClick} 
              />
              <Menu.Item name='Registrar' 
                active={this.state.activeTab === '1'} 
                onClick={() => this.chooseTab("1")} 
                icon='file alternate outline' 
                style={this.state.activeTab === "1" ? style.footerAfterClick : style.footerBeforClick} 
              />
              <Menu.Item name='Nurse' 
                active={this.state.activeTab === '2'} 
                onClick={() => this.chooseTab("2")} 
                icon='stethoscope' 
                style={this.state.activeTab === "2" ? style.footerAfterClick : style.footerBeforClick} 
              />
              <Menu.Item name='Doctor' 
                active={this.state.activeTab === '3'} 
                onClick={() => this.chooseTab("3")} 
                icon='user md' 
                style={this.state.activeTab === "3" ? style.footerAfterClick : style.footerBeforClick} 
              />
              <Menu.Item name='Pharmacy' 
                active={this.state.activeTab === '4'} 
                onClick={() => this.chooseTab("4")} 
                icon='medkit' 
                style={this.state.activeTab === "4" ? style.footerAfterClick : style.footerBeforClick} 
              />
              <Menu.Item disabled />
            </Menu>
          </div>
        </div>
      </div>



    )
  }
}
