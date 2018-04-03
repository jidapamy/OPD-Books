import React from 'react'
import styled from 'styled-components'
import { Header, Icon, Image, Grid } from 'semantic-ui-react'
import Basic from './img/Upload.js';

const GridColumn = styled(Grid.Column) `
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderExampleUsersIcon = () => (
  <div>
      <Header style={{border: '0px'}} as='h2' attached='top' textAlign='center'>
                ใบลงทะเบียนผู้ป่วยใหม่
                        <br></br>
                NEW PATIENT RESGISTRATION FORM
            </Header>
      <Header as='h2' textAlign='center'>
      <Header.Content>
      <p>รูปประจำตัว</p>
      </Header.Content>
    
     {/* <GridColumn ><Image src='https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg' size='small' circular /></GridColumn> */}
     <Basic>
     <GridColumn ><Image src='https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg' size='small' circular /></GridColumn>
     </Basic>
    </Header>
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
  </div>
)

export default HeaderExampleUsersIcon
