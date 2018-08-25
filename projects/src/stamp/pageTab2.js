import React from 'react';
import { Button, Segment, Input, Grid, List, Label, Form, TextArea, Message, Tab, Card } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';
import { style } from './queueCss'

class PageTab2 extends React.Component {

    render() {
        return (


            // <Grid centered columns={2} centered>
            //     <Grid.Column>
            //         <Card style={style.space1}>
            //             <Card.Content style={style.history}>
            //                 <Card.Description><b>วันที่เข้ารับการรักษา :</b></Card.Description>
            //                 <Card.Meta>25 มกราคม 2561</Card.Meta>
            //                 <Card.Description><b>คลินิกที่เข้ารับการรักษา :</b></Card.Description>
            //                 <Card.Meta>คลินิกศูนย์แพทย์พัฒนา</Card.Meta>
            //                 <Card.Description><b>แพทย์ที่รักษา :</b></Card.Description>
            //                 <Card.Meta>นายแพทย์ใจดี สุขใจ</Card.Meta>

            //             </Card.Content>
            //         </Card>
            //     </Grid.Column>
            //     <Grid.Column>
            //         <Card style={style.space2}>
            //             <Card.Content style={style.history}>
            //                 <Card.Description><b>วันที่เข้ารับการรักษา :</b></Card.Description>
            //                 <Card.Meta>25 มกราคม 2561</Card.Meta>
            //                 <Card.Description><b>คลินิกที่เข้ารับการรักษา :</b></Card.Description>
            //                 <Card.Meta>คลินิกศูนย์แพทย์พัฒนา</Card.Meta>
            //                 <Card.Description><b>แพทย์ที่รักษา :</b></Card.Description>
            //                 <Card.Meta>นายแพทย์ใจดี สุขใจ</Card.Meta>

            //             </Card.Content>
            //         </Card>
            //     </Grid.Column>
            // </Grid>

            <List divided relaxed>
                <List.Item style={style.edit}>
                    <Grid columns='two'>
                        <Grid.Row style={style.paddingPatient}>
                            <Grid.Column width={7}>
                                <List.Header as='a' style={style.toppicPatient}>Hospital Number</List.Header>
                            </Grid.Column>

                            <Grid.Column width={9}>
                                <List.Description as='a' style={style.showData}>0000/00</List.Description>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row style={style.paddingPatient}>
                            <Grid.Column width={7}>
                                <List.Header as='a' style={style.toppicPatient}>Name</List.Header>
                            </Grid.Column>

                            <Grid.Column width={9}>
                                <List.Description as='a' style={style.showData}>Weerapat</List.Description>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row style={style.paddingPatient}>
                            <Grid.Column width={7}>
                                <List.Header as='a' style={style.toppicPatient}>Surname</List.Header>
                            </Grid.Column>

                            <Grid.Column width={9}>
                                <List.Description as='a' style={style.showData}>Laorshubpayapat</List.Description>
                            </Grid.Column>
                        </Grid.Row>

                        
                        <Grid.Row style={style.paddingPatient}>
                            <Grid.Column width={7}>
                                <List.Header as='a' style={style.toppicPatient}>โรคประจำตัว</List.Header>
                            </Grid.Column>

                            <Grid.Column width={9}>
                                <List.Description as='a' style={style.showData}>ภูมิแพ้</List.Description>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row style={style.paddingPatient}>
                            <Grid.Column width={7}>
                                <List.Header as='a' style={style.toppicPatient}>สิ่งที่แพ้</List.Header>
                            </Grid.Column>

                            <Grid.Column width={9}>
                                <List.Description as='a' style={style.showData}>อาหารทะเล</List.Description>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row style={style.paddingPatient}>
                            <Grid.Column width={7}>
                                <List.Header as='a' style={style.toppicPatient}>สิทธิการรักษา</List.Header>
                            </Grid.Column>

                            <Grid.Column width={9}>
                                <List.Description as='a' style={style.showData}>ราชการ</List.Description>
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>




                </List.Item>


            </List>

        );
    }
}

export default PageTab2;

