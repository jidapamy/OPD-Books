import React, { Component } from 'react';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'


const Footer = () => (
    <div>
        <Form.Group inline>
            <Form.Field control={Checkbox} label='ข้าพเจ้าขอรับรองว่าข้อมูลบุคคลทั้งหมดตามที่แจ้งแก่เจ้าหน้าที่ของคลินิกนี้ถูกต้อง และตรงกับความเป็นจริงทุกประการ หากมีข้อความใดไม่ถูกต้องหรือไม่ตรงกับความจริง และอาจจะทำให้เกิดความเสียหายแก่ตัวข้าพเจ้าหรือบุคคลอื่นใด ข้าพเจ้ายินยอมรับผิดชอบในความเสียหายที่เกิดขึ้นทุกประการ และอนุญาตให้เผยแพร่ข้อมูลข้องข้าพเจ้าในระบบในเครือของคลินิก' />
        </Form.Group>
        <Grid>
            <Grid.Column width={8}>
                <Button color='green'>CONFIRM</Button>
            </Grid.Column>
            <Grid.Column width={8}>
                <Button color='google plus'>CANCEL</Button>
            </Grid.Column>
        </Grid>
        <br></br>
    </div>
)

export default Footer
