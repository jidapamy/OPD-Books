import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Form, Segment } from 'semantic-ui-react'
import { patientField } from "../Static/Data/Field"

import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const FixDatePickerTimer = styled.span`
  & .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    padding-left: unset;
    padding-right: unset;
    width: 100px;
  }
  & .react-datepicker__input-container {
    width:100%;
  }
  & .react-datepicker-wrapper {
    width:100%;
  }
  & .react-datepicker {
    width: 314px;
  }
`;

const DateBirthday = styled(DatePicker) `
    padding-left: 40px !important;
    margin-left: -3% !important; 
`


export default class Example extends React.Component {
    // constructor(props) {
    //     super(props);
    state = {
        startDate: moment()
    };
    //     this.handleChange = this.handleChange.bind(this);
    // }

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    DateInput = () => {
        return <FixDatePickerTimer><DateBirthday
            selected={this.state.startDate}
            onChange={() => this.handleChange()}
        /></FixDatePickerTimer>
    }



    render() {
        return (
            <div>
                {/* <style>
                    {`.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
            padding-left: 0;
            padding-right: 0;
          }`}
                </style> */}
                <Segment>
                    {/* <FixDatePickerTimer>
                        <DatePicker
                            dateFormat="YYYY-MM-DD HH:mm"
                            showTimeSelect
                            timeFormat="HH:mm"
                            selected={moment(this.state.startDate)}
                            onChange={() => this.handleChange()}
                        />
                    </FixDatePickerTimer> */}


                    {/* <DatePicker
                        dateFormat="YYYY-MM-DD HH:mm"
                        showTimeSelect
                        timeFormat="HH:mm"
                        selected={this.state.startDate}
                        onChange={() => this.handleChange()}
                        popperModifiers={{
                            offset: {
                                enabled: true,
                                offset: '0px, 12px'
                            },
                            preventOverflow: {
                                enabled: true,
                                escapeWithReference: false,
                                boundariesElement: 'viewport'
                            }
                        }}
                    /> */}

                    <Form>
                        <Form.Group widths='equal' >
                            <Form.Field
                                control={this.DateInput}
                                label={patientField.dob.label}
                                required
                                error={this.props.errorField ? this.props.errorField.dob : false}
                                placeholderText="ex. 01/01/1990"
                            />
                            <Form.Field
                                control={this.DateInput}
                                label={patientField.dob.label}
                                required
                                error={this.props.errorField ? this.props.errorField.dob : false}
                                placeholderText="ex. 01/01/1990"
                            />
                            <Form.Field
                                control={this.DateInput}
                                label={patientField.dob.label}
                                required
                                error={this.props.errorField ? this.props.errorField.dob : false}
                                placeholderText="ex. 01/01/1990"
                            />
                        </Form.Group>
                    </Form>
                </Segment>
            </div>
        );
    }
}