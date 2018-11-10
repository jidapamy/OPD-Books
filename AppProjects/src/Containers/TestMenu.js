import React, { Component } from 'react'
import { Button, Dropdown, Menu, Transition, Segment, Container, Header } from 'semantic-ui-react'
import { style } from "../Static/Style/QueueCss";
import { apiData } from "../Static/Data/ApiData"
import { MySlidedown } from "../Components/ApiDocuments/Slide"

export default class MenuExampleSizeTiny extends Component {
    state = {
        statusShowHistory: true,
        avtiveMenuTab: false,
        sidebarOpened: false,
        menuTab: 0,
        statusTab: false,
        tab: 0,
        activeItem: "home",
        activeItemMenu: "home",
        menuFixed: false,
        overlayFixed: false,
        open: false,
        loader: true,

    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    state = {
        open: "Manage Patient Profile",
        activeItem: "Insert Patient Method",
        chooseMethod: apiData[0].method[0],
        statusJson: 1,
        activePage: '1'
    }
    choose = (name, i, j) => {
        this.setState({
            activeItem: name,
            chooseMethod: apiData[i].method[j], statusJson: 1
        })
    }



    showMethod = (index) => {
        let tmp = ""
        tmp = apiData[index].method.map((method, j) => {
            return <Menu.Item name={method.title} key={index + "/" + j}
                active={this.state.activeItem === method.title}
                onClick={(e, { name }) => this.choose(name, index, j)}
                style={this.state.activeItem === method.title ? style.afterClick : style.beforeClick} 
            />
        })
        return tmp
    }

    showData = () => {
        let tmp = ''
        tmp = apiData.map((data, i) => {
            return <div key={i}>
                <Menu.Item name={data.system}
                    onClick={() => { this.setState({ open: data.system }) }}
                    style={style.menuAPI}
                />

                <MySlidedown open={this.state.open === data.system ? true : false}>
                    {this.showMethod(i)}
                </MySlidedown>

            </div>
        })
        return tmp

    }
    // setField = (field, value) => {
    //     this.setState({ [field]: value })
    // }

    render() {



        return (
            <Menu fixed='left' vertical style={style.NavSize}>
                <Header size='huge' style={style.HeaderColor3}>API Documents</Header>
                {this.showData()}<br />
            </Menu>




            //   <Menu size='huge' fixed='left' vertical>

            //     <Menu.Item
            //       name='messages'
            //     //   active={activeItem === 'messages'}
            //       onClick={() => this.setField("item1", !this.state.item1)}
            //       style={item1 ? after : before}
            //     />
            //     <Transition.Group animation={'slide down'} duration={350} divided size='mini' >
            //                 {item1 &&
            //                 <Menu size='huge'>
            //                 <Menu.Item
            //                 name='AAAAAA'
            //                 active={activeItem === 'AAAAAA'}
            //               />
            //               <Menu.Item
            //                 name='AAAAAA'
            //                 active={activeItem === 'AAAAAA'}
            //               />
            //               <Menu.Item
            //                 name='AAAAAA'
            //                 active={activeItem === 'AAAAAA'}
            //               />

            //               </Menu>

            //                 }
            //     </Transition.Group>
            //     <Menu.Item
            //       name='AAAAAA'
            //       active={activeItem === 'AAAAAA'}
            //       onClick={this.handleItemClick}
            //       style={item2 ? after : before}

            //     />
            //     <Menu.Item
            //       name='BBBBBB'
            //       active={activeItem === 'BBBBBB'}
            //       onClick={this.handleItemClick}
            //       style={item3 ? after : before}
            //     />

            //     <Menu.Menu position='right'>



            //     </Menu.Menu>
            //   </Menu>



            // <Container>
            // <Segment onClick={() => this.setField("item1", !this.state.item1)}
            //       style={item1 ? after : before}>
            //     fghghjk
            // </Segment>

            // <Transition.Group animation={'slide down'} duration={350} divided size='mini' >
            //           {item1 &&
            //                 <Segment>dfghjkl;'</Segment>
            //                 }
            //     </Transition.Group>
            // </Container>




        )
    }
}
