import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'


import { QRCode } from 'react-qr-svg';

class SidebarBottomOverlay extends Component {
 

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
   
    return (
      <div>
            <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{ width: 256 }}
                value="some text"
            />
      </div>
    )
  }
}

export default SidebarBottomOverlay
