import React, { Component } from "react";
import {
  Header,
  Menu,
  Table,
  Responsive
} from "semantic-ui-react";
import { style } from "../../Static/Style/QueueCss";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

export default class FooterOnMobile extends Component {
    state = {
        activeTab: this.props.tab
      }
    
      componentWillReceiveProps = (nextProps) => {
        this.setState({ activeTab : nextProps.tab });
      }
      
      render() {
        console.log("PROPS",this.props)
    return (
        
        <Responsive {...Responsive.onlyMobile}>
        <div style={{ marginLeft: "0px", textAlign: 'left' }}>
          <div style={style.footerMobileChoosing}>
          
            <Menu borderless style={{ background: "#1D7A8B", fontWeight: "bold", color: "#ffffff", textAlign: "left" }} >
              <Menu.Item 
                active={this.state.activeTab === 'home'}
                onClick={() => this.props.chooseTab("home")}
                position='right'
                icon='home'
                style={this.state.activeTab === "home" ? style.footerMobileAfterClick : style.footerMobileBeforClick}
              />
              
              <Menu.Item disabled />
            </Menu>
          </div>

            <ScrollUpButton style={{ borderRadius: 60, backgroundColor:'#31A5BA',borderColor:'#D6F2F2',color:'#FFF'}} ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled" />

        </div>
        </Responsive>



    )
  }
}
