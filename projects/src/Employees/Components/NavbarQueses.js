import React, { Component } from "react";
import { Grid, List, Header, Menu, } from "semantic-ui-react";
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
      <Menu vertical inverted fixed='left' position='fixed'>
        <Menu.Item color='teal'>
          <Header style={style.navbarDeco} >Queues</Header>
        </Menu.Item>
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
    )
  }
}

