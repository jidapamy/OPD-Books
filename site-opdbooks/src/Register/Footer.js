import React, { Component } from 'react';
import styled from 'styled-components'
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const GridColumn = styled(Grid.Column) `
    display: flex;
    justify-content: center;
    align-items: center;
`
const ButtomSize = styled(Button) `
    font-size:20px;
    padding:10px;
    margin-left:10px;
`
const Footer = ({
    //method
    setField, checkAgreement,
    //attribute
    agreement
}) => (
    <div>
        <Form.Group inline>
            <Form.Field control={Checkbox} 
                        label='ข้าพเจ้าขอรับรองว่าข้อมูลบุคคลทั้งหมดตามที่แจ้งแก่เจ้าหน้าที่ของคลินิกนี้ถูกต้อง และตรงกับความเป็นจริงทุกประการ หากมีข้อความใดไม่ถูกต้องหรือไม่ตรงกับความจริง และอาจจะทำให้เกิดความเสียหายแก่ตัวข้าพเจ้าหรือบุคคลอื่นใด ข้าพเจ้ายินยอมรับผิดชอบในความเสียหายที่เกิดขึ้นทุกประการ และอนุญาตให้เผยแพร่ข้อมูลข้องข้าพเจ้าในระบบในเครือของคลินิก'
                        onChange={()=>checkAgreement()}
            />
        </Form.Group>
        <GridColumn width={16}>
            <Button disabled={!agreement} color='green'>
                <h3>CONFIRM</h3>
            </Button>
            < Link to='/'>
                <Button disabled={false} color='google plus'>
                    <h3>CANCEL</h3>
                </Button>
            </Link>
        </GridColumn>
        <br></br>
    </div>
)

export default Footer
