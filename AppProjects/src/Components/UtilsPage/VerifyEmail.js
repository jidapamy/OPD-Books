import React from "react";
import {
    Grid, Menu, Container, Icon, Image, Button, Header, Dimmer, Loader
} from "semantic-ui-react";
import styled from "styled-components";
import notfound from './../../Static/Img/Error/404.gif'
import { Link } from "react-router-dom";
import queryString from 'query-string'
import { verifyEmail } from "../../Services/AuthenticationMethod"
import SuccessEmail from "./SuccessEmail"
import ErrorNotFound from "./ErrorNotFound"

export default class VerifyEmail extends React.Component {
    state = { 
        willmount:null,
        statusPage : false,
        loader: false
    }

    componentDidMount = () => {
        console.log(this.props.location.search)
        const value = queryString.parse(this.props.location.search)
        console.log(value.code)

        verifyEmail(value.code).then(res => {
            this.setState({ loader: true })
            console.log(res)
            if(res.status){
                // success
                this.setState({ statusPage: true, loader: false, willmount: true })
            }else{
                // 404 error
                this.setState({ statusPage: false, loader: false, willmount: false })
            }
        })
    }

    showPage = () => {
        if (this.state.willmount != null){
            if (this.state.statusPage) {
                return <SuccessEmail />
            } else {
                return <ErrorNotFound />
            }
        }
    }

    render() {
        console.log(this.state)
        return (
            <Dimmer.Dimmable blurring dimmed={this.state.loader}>
                <Dimmer page active={this.state.loader}>
                    <Loader indeterminate size='massive'>Loading</Loader>
                </Dimmer>
            {this.showPage()}
            </Dimmer.Dimmable>
        );
    }
}
