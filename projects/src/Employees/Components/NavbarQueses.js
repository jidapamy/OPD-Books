import React, { Component } from "react";
import {
  Button,
  Segment,
  Input,
  Grid,
  List,
  Label,
  Form,
  TextArea,
  Message,
  Tab,
  Card,
  Header,
  Divider,
  Sidebar,
  Menu,
  Icon,
  Image,
  Table
} from "semantic-ui-react";

import { style } from "./../../Static/Style/QueueCss";


export default class NavbarQueses extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleVisit () {
    color: '#ffffff';
  }

  render() {
    const { activeItem } = this.state

    return (

      //   <Menu vertical>
      //     <Menu.Item
      //       name='promotions'
      //       active={activeItem === 'promotions'}
      //       onClick={this.handleItemClick}
      //     >
      //       <Header as='h4'>Queues</Header>
      //       <p>Check out our new promotions</p>
      //     </Menu.Item>

      //     <Menu.Item name='coupons' active={activeItem === 'coupons'} onClick={this.handleItemClick}>
      //       <Header as='h4'>Coupons</Header>
      //       <p>Check out our collection of coupons</p>
      //     </Menu.Item>

      //     <Menu.Item name='rebates' active={activeItem === 'rebates'} onClick={this.handleItemClick}>
      //       <Header as='h4'>Rebates</Header>
      //       <p>Visit our rebate forum for information on claiming rebates</p>
      //     </Menu.Item>
      //   </Menu>






      <Menu vertical inverted fixed='left' position='fixed'>
        <Menu.Item color='teal'>
          <Header style={style.navbarDeco} >Queues</Header>
        </Menu.Item>
        {/* <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick} style={style.naveText}>
          <Label color='teal'>1</Label>
          Inbox
        </Menu.Item>

        <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
          <Label>51</Label>
          Spam
        </Menu.Item>

        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
          <Label>1</Label>
          Updates
        </Menu.Item> */}


        <Menu.Item name='001' active={activeItem === '001'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
          <List>
            <Grid style={ activeItem === '001' ? style.widthNav2 :style.widthNav }>
              <Grid.Column width={7} style={ activeItem === '001' ? style.queueNoNav2 :style.queueNoNav}>
                001
                </Grid.Column>
              <Grid.Column width={9}>
                <List.Content>
                  <List.Header as="a" style={ activeItem === '001' ? style.hnNoNav2 :style.hnNoNav}>
                    HN HP2312
                    </List.Header><br />
                  <List.Description as="a" style={style.textQueueNav}>
                    Mr. putpong champ
                    </List.Description>
                </List.Content>
              </Grid.Column>
            </Grid>
          </List>
        </Menu.Item>


        <Menu.Item name='002' active={activeItem === '002'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
          <List>
            <Grid style={ activeItem === '002' ? style.widthNav2 :style.widthNav }>
              <Grid.Column width={7} style={ activeItem === '002' ? style.queueNoNav2 :style.queueNoNav}>
                002
                </Grid.Column>
              <Grid.Column width={9}>
                <List.Content>
                  <List.Header as="a" style={ activeItem === '002' ? style.hnNoNav2 :style.hnNoNav}>
                    HN HP2312
                    </List.Header><br />
                  <List.Description as="a" style={style.textQueueNav}>
                    Mr. putpong champ
                    </List.Description>
                </List.Content>
              </Grid.Column>
            </Grid>
          </List>
        </Menu.Item>



        <Menu.Item name='003' active={activeItem === '003'} onClick={this.handleItemClick} onVisit={() => this.handleVisit()}>
          <List>
            <Grid style={ activeItem === '003' ? style.widthNav2 :style.widthNav }>
              <Grid.Column width={7} style={ activeItem === '003' ? style.queueNoNav2 :style.queueNoNav}>
                003
                </Grid.Column>
              <Grid.Column width={9}>
                <List.Content>
                  <List.Header as="a" style={ activeItem === '003' ? style.hnNoNav2 :style.hnNoNav}>
                    HN HP2312
                    </List.Header><br />
                  <List.Description as="a" style={style.textQueueNav}>
                    Mr. putpong champ
                    </List.Description>
                </List.Content>
              </Grid.Column>
            </Grid>
          </List>
        </Menu.Item>







      </Menu>









      // <Menu vertical>
      //   <Menu.Item>
      //     <b>Queues</b>
      //   </Menu.Item>
      //   <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
      //     <Label color='teal'>1</Label>
      //     Inbox
      // </Menu.Item>

      //   <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
      //     <Label>51</Label>
      //     Spam
      // </Menu.Item>

      //   <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
      //     <Label>1</Label>
      //     Updates
      // </Menu.Item>
      // </Menu>
    )
  }
}

