import React, { Component } from "react";
import {
  Header,
  Menu,
  Table,
} from "semantic-ui-react";
import { style } from "../../Static/Style/QueueCss";

export default class FooterDemo extends Component {
  state = {
    activeTab: this.props.tab
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ activeTab : nextProps.tab });
  }
  
  render() {
    console.log("PROPS",this.props)
    return (
      <div>
        <div style={{ marginLeft: "0px", textAlign: 'left' }}>
          <div style={style.footerChoosing}>
            <Menu borderless style={{ background: "#4D8B87", fontWeight: "bold", color: "#ffffff" }} >
              <Menu.Item name='Home'
                active={this.state.activeTab === 'home'}
                onClick={() => this.props.chooseTab("home")}
                position='right'
                icon='home'
                style={this.state.activeTab === "home" ? style.footerAfterClick : style.footerBeforClick}
              />
              <Menu.Item name='API Document' 
                active={this.state.activeTab === 'api'} 
                onClick={() => this.props.chooseTab("api")} 
                icon='credit card' 
                style={this.state.activeTab === "api" ? style.footerAfterClick : style.footerBeforClick} 
              />
              <Menu.Item name='Registrar' 
                active={this.state.activeTab === '1'} 
                onClick={() => this.props.chooseTab("1")} 
                icon='file alternate outline' 
                style={this.state.activeTab === "1" ? style.footerAfterClick : style.footerBeforClick} 
              />
              <Menu.Item name='Nurse' 
                active={this.state.activeTab === '2'} 
                onClick={() => this.props.chooseTab("2")} 
                icon='stethoscope' 
                style={this.state.activeTab === "2" ? style.footerAfterClick : style.footerBeforClick} 
              />
              <Menu.Item name='Doctor' 
                active={this.state.activeTab === '3'} 
                onClick={() => this.props.chooseTab("3")} 
                icon='user md' 
                style={this.state.activeTab === "3" ? style.footerAfterClick : style.footerBeforClick} 
              />
              <Menu.Item name='Pharmacy' 
                active={this.state.activeTab === '4'} 
                onClick={() => this.props.chooseTab("4")} 
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
