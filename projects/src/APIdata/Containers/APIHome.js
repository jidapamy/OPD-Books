import React, { Component } from "react";

export default class APIHome extends Component {
    state = {
        citizenId: "",
        password: "",
        checklogin: ""
    };

    render() {
        return (
           <div>
                <button>Example for Registrar</button>
                <button>Example for Nurse</button>
                <button>Example for Doctor</button>
           </div>
        );
    }
}
