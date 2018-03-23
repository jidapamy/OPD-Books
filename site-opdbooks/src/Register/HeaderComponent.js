import React, { Component } from 'react';
import { Header, Icon, Image } from 'semantic-ui-react'

const HeaderComponent = () => (
    <div>
        <br></br>
        <div>
            <Header as='h2' icon textAlign='center'>
                <Icon name='users' circular />
                <Header.Content>
                    ใบลงทะเบียนผู้ป่วยใหม่
                </Header.Content>
                <Header.Content>
                    NEW PATIENT RESGISTRATION FORM
                </Header.Content>
            </Header>
            <br></br>
        </div>
    </div>
)

export default HeaderComponent
