// import React, { Component } from "react";
// import { Menu } from "semantic-ui-react";
// import { getAccountLogin, logout } from "./../../Service/EmpReducer";
// import { Employee } from "./../../Model/Employee";


// export default class EmpHeader extends Component {
//   state = {
//     emp : getAccountLogin()
//   }

//   logout = () => {
//     this.sr
//   }

//   render() {
//     return (
//     <Menu inverted>
//         <Menu.Menu position="right">
//           <Menu.Item name="name">
//             {this.state.emp.nameTitle} {this.state.emp.firstname}  {this.state.emp.lastname}
//           </Menu.Item>
//           <Menu.Item name="help" onClick={this.handleItemClick}>
//             Logout
//           </Menu.Item>
//         </Menu.Menu>
//       </Menu>
//     )
//   }
// }


import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { getAccountLogin, logout } from "./../../Service/EmpReducer";
import { Employee } from "./../../Model/Employee";

export default class EmpHeader extends Component {
  state = { 
    activeItem: "" ,
    emp : getAccountLogin()
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const empName =  this.state.emp.nameTitle + " " + this.state.emp.firstname + "  " + this.state.emp.lastname
    return (
      <Menu inverted>
         <Menu.Menu position="right">
        <Menu.Item
          name={empName}
          active={activeItem === "empName"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="logout"
          active={activeItem === "logout"}
          onClick={this.handleItemClick}
        />
         </Menu.Menu>
      </Menu>
    );
  }
}