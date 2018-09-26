import React from "react";
import { patientField, mdrField } from "../../Static/Data/Field"
import { Segment, Icon, Form } from "semantic-ui-react";
export default class ShowHeaderMdr extends React.Component {
    render(){
        return (
            <Segment style={{ backgroundColor: '#313334', color: '#FFFFFF', border: 0 }}>
                <Form>
                    <Form.Group widths="equal">
                        <Form.Field>
                            <div><Icon name='calendar alternate outline' /> {mdrField.date.label} : {this.props[mdrField.date.variable]}</div>
                        </Form.Field>
                        <Form.Field>
                            <div><Icon name='clock outline' /> {mdrField.time.label} : {this.props[mdrField.time.variable]}</div>
                        </Form.Field>
                        <Form.Field>
                            <div><Icon name='hospital outline' /> {mdrField.clinic.label} : {this.props[mdrField.clinic.variable]}</div>
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Field>
                            <div><Icon name='star outline' /> {patientField.privilege.label} : {this.props[patientField.privilege.variable]}</div>
                        </Form.Field>
                        <Form.Field>
                            <div><Icon name='pills' /> {patientField.allergy.label} : {this.props[patientField.allergy.variable]}</div>
                        </Form.Field>
                        <Form.Field>
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Segment>
        )
    }
}