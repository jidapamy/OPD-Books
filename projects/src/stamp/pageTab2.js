import React from 'react';
import { Button, Segment, Input, Grid, List, Label, Form, TextArea, Message, Tab, Card } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';
import { style } from './queueCss'

class PageTab2 extends React.Component {

    render() {
        return (


            <Grid centered columns={2} centered>
                <Grid.Column>
                    <Card style={style.space1}>
                        <Card.Content style={style.history}>
                            <Card.Description><b>วันที่เข้ารับการรักษา :</b></Card.Description>
                            <Card.Meta>25 มกราคม 2561</Card.Meta>
                            <Card.Description><b>คลินิกที่เข้ารับการรักษา :</b></Card.Description>
                            <Card.Meta>คลินิกศูนย์แพทย์พัฒนา</Card.Meta>
                            <Card.Description><b>แพทย์ที่รักษา :</b></Card.Description>
                            <Card.Meta>นายแพทย์ใจดี สุขใจ</Card.Meta>

                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card style={style.space2}>
                        <Card.Content style={style.history}>
                            <Card.Description><b>วันที่เข้ารับการรักษา :</b></Card.Description>
                            <Card.Meta>25 มกราคม 2561</Card.Meta>
                            <Card.Description><b>คลินิกที่เข้ารับการรักษา :</b></Card.Description>
                            <Card.Meta>คลินิกศูนย์แพทย์พัฒนา</Card.Meta>
                            <Card.Description><b>แพทย์ที่รักษา :</b></Card.Description>
                            <Card.Meta>นายแพทย์ใจดี สุขใจ</Card.Meta>

                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>

        );
    }
}

export default PageTab2;

