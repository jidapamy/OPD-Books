import React from 'react'
import styled from 'styled-components'
import { Header, Icon, Image, Grid } from 'semantic-ui-react'
import Basic from './img/Upload.js';

const GridColumn = styled(Grid.Column) `
    display: flex;
    justify-content: center;
    align-items: center;
    
   
`
const GridColumn2 = styled(Grid.Column) `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:21%
`

const HeaderExampleUsersIcon = () => (
    <div>
        
        <Header style={{ border: '0px' }} as='h2' attached='top' textAlign='center'>
            ใบลงทะเบียนผู้ป่วยใหม่
                        <br />
            NEW PATIENT RESGISTRATION FORM
            <h3>รูปประจำตัว</h3>
        </Header><br />

        <GridColumn>
            <Basic />
        </GridColumn>

    </div>
    
)

export default HeaderExampleUsersIcon
