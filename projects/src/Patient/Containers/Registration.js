import React, { Component } from 'react';
import ScanButton from "./../../Static/Img/ScanButton.png";
import { Scrollbars } from 'react-custom-scrollbars';
import Queues from './../Components/Queues'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
    List,
    Divider,
} from 'semantic-ui-react'
const style = {
    h1: {
        marginTop: '4em',
        marginBottom: '50px'

    },
    h2: {
        margin: '4em 0em 2em',
    },
    d1: {
        marginTop: '1em',
        marginBottom: '50px'
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    last: {

    },

}

class Registration extends Component {
    render() {
        return (
            <div >
                <Container >
                    <Header as='h1' style={style.h1} textAlign='center'>
                        <Header.Content>
                            <span style={{ fontSize: '2em', color: '#00B5AD' }}>OPD BOOKS</span>
                            <Header.Subheader >Project on Blockchain</Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Image
                        onClick={""}
                        style={style.d1}
                        rounded
                        size='medium'
                        src={ScanButton}
                    />
                    <Container>
                        <Grid style={style.last} textAlign='center'>
                            < Queues position="Nurse" StatusQueue="N" />
                            < Queues position="Doctor" StatusQueue="D"/>
                            < Queues position="Phamacy" StatusQueue="P"/>
                        </Grid>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Registration;