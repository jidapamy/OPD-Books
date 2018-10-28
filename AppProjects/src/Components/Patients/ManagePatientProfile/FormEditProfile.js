import React from "react";
import {
    Segment, Icon, Form, Input, Transition, Dropdown, Select, Menu, Container, Button, Grid, Label
} from "semantic-ui-react";
import {
    titleNameChildData, genderData, cardTypeData, titleNameParentData, bloodgroupData,
    nationalityData, religionData, statusData, countryData
} from '../../../Static/Data/FormData'
import { patientField, groupInfoPatientField } from "../../../Static/Data/Field"
import InfoPatient from '../../../Components/Patients/ManagePatientProfile/InfoPatient';
import HomeAddress from '../../../Components/Patients/ManagePatientProfile/HomeAddress'
import EmergencyContact from '../../../Components/Patients/ManagePatientProfile/EmergencyContact'
import PatientParent from '../../../Components/Patients/ManagePatientProfile/PatientParent'
import Allergy from '../../../Components/Patients/ManagePatientProfile/Allergy'
import ErrorMessage from '../../../Components/Patients/ManagePatientProfile/ErrorMessage'

const provincesData = require('../../../Static/Data/Provinces')

const itemStyle = {
    paddingLeft: '1.5%',
    paddingRight: '1.5%',
    color: '#000',
    fontSize:'10px',
};

const itemActiveStyle = {
    paddingLeft: '1.5%',
    paddingRight: '1.5%',
    backgroundColor: '#31A5BA',
    color: '#FFF'

};
const elimentStyle = {
    paddingLeft: '1.5%',
    paddingRight: '1.5%',
    backgroundColor: '#F7F7F7',
};
const headerSetting = {
    color: '#8A8A8A',
};

export default class EditProfile extends React.Component {
    state = {
        editprofile: false,
        editAddress: false,
        editEmp: false,
        underAge: false,
        allergy: false,
        open: false,
        changePassword:false,
        changeEmail: false,
        editEmail:false,

        
    }
    componentWillMount() {
        this.setState({
            provinces: provincesData.default,
        })
    }
    close = () => this.setState({ open: false })
    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }

    setField = ( field,value ) => {
        this.setState({ [field] : value })
    }

    render() {
        const { editprofile, editAddress, editEmp, underAge, allergy, changePassword, changeEmail, editEmail } = this.state
        return (
            <div>
                <h4 style={headerSetting}>General Account Setting</h4>
                <Segment style={editprofile ? itemActiveStyle : itemStyle} vertical onClick={() => this.setField("editprofile", !this.state.editprofile)}> 
                    <h4 ><Icon name='file alternate outline' />{groupInfoPatientField.info.label}<Icon style={{ float: 'right' }} name={editprofile ? 'angle down' : 'angle left'} /></h4></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided size='mini' >
                    {editprofile && <Segment style={elimentStyle} vertical >
                        <Form>
                        <InfoPatient 
                            patient={this.props.patient}
                            currentDate={this.state.currentDate}
                            // setPatientDetail={this.setPatientDetail}
                            // errorText={this.state.errorInfo}
                            setField={this.setField}
                            // cardType={this.state.cardType}
                            // age={this.state.age}
                            // errorField={this.state.errorField}
                            // setFieldAndValidate={this.setFieldAndValidate}
                            // requiredAllParentField={this.state.requiredAllParentField}
                        />
                        </Form>
                        {/* <Form>
                            <Form.Group widths='equal' >
                                <Form.Input fluid
                                    style={{ border: '0 px' }}
                                    label={patientField.registerDate.label}
                                    placeholder=''
                                    readOnly
                                    value={this.props.patient.registerDate}
                                />
                            </Form.Group>
                            <Form.Group widths='equal' >
                                <Form.Input
                                    loading={false}
                                    fluid
                                    label={patientField.citizenId.label}
                                    readOnly
                                    value={this.props.patient.citizenId}
                                />
                                <Form.Input
                                    loading={false}
                                    fluid
                                    label={patientField.dob.label}
                                    readOnly
                                    value={this.props.patient.dob}
                                />
                                <Form.Input
                                    loading={false}
                                    fluid
                                    label={patientField.age.label}
                                    readOnly
                                    value={this.props.patient.age}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    control={Dropdown}
                                    search
                                    selection
                                    allowAdditions
                                    onAddItem={(e, { value }) => {
                                        this.props.requiredAllParentField ?
                                            titleNameChildData.push({ key: value, text: value, value: value }) :
                                            titleNameParentData.push({ key: value, text: value, value: value })
                                    }}
                                    additionLabel='other : '
                                    label={patientField.nametitle.label}
                                    options={
                                        this.props.requiredAllParentField ? titleNameChildData : titleNameParentData
                                    }
                                    onChange={(e, { value }) => this.props.setFieldAndValidate('nametitle', value)}
                                    required
                                    value={this.props.patient.nametitle}
                                />
                                <Form.Input
                                    label={patientField.firstname.label}
                                    onChange={e => this.props.setFieldAndValidate('firstname', e.target.value)}
                                    required
                                    value={this.props.patient.firstname}
                                />
                                <Form.Input
                                    label={patientField.lastname.label}
                                    onChange={e => this.props.setFieldAndValidate('lastname', e.target.value)}
                                    required
                                    value={this.props.patient.lastname}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    label={patientField.congenitalDisease.label}
                                    required
                                    onChange={e => this.props.setFieldAndValidate('congenitalDisease', e.target.value)}
                                    value={this.props.patient.congenitalDisease}
                                />
                                <Form.Input
                                    label={patientField.gender.label}
                                    required
                                    value={this.props.patient.gender}
                                    readOnly
                                />
                                <Form.Input
                                    label={patientField.bloodgroup.label}
                                    required
                                    readOnly
                                    value={this.props.patient.bloodgroup}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    control={Dropdown}
                                    search
                                    selection
                                    allowAdditions
                                    onAddItem={(e, { value }) => religionData.push({ key: value, text: value, value: value })}
                                    additionLabel='other : '
                                    label={patientField.religion.label}
                                    options={religionData}
                                    onChange={(e, { value }) => this.props.setFieldAndValidate('religion', value)}
                                    required
                                    value={this.props.patient.religion}
                                />
                                <Form.Field
                                    control={Dropdown}
                                    search
                                    selection
                                    allowAdditions
                                    onAddItem={(e, { value }) => nationalityData.push({ key: value, text: value, value: value })}
                                    additionLabel='other : '
                                    control={Select}
                                    label={patientField.nationality.label}
                                    options={nationalityData}
                                    onChange={(e, { value }) => this.props.setFieldAndValidate('nationality', value)}
                                    required
                                    value={this.props.patient.nationality}
                                />
                                <Form.Input
                                    label={patientField.country.label}
                                    required
                                    value={this.props.patient.country}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    control={Select}
                                    label={patientField.status.label}
                                    options={statusData}
                                    onChange={(e, { value }) => this.props.setFieldAndValidate('status', value)}
                                    required
                                    value={this.props.patient.status}
                                />
                                <Form.Input
                                    label={patientField.occupartion.label}
                                    onChange={e => this.props.setFieldAndValidate('occupartion', e.target.value)}
                                    value={this.props.patient.occupartion}
                                />
                                
                            </Form.Group>
                            <Form.Group widths='equal'>
                                
                                <Form.Input
                                    label={patientField.homePhonenumber.label}
                                    onChange={e => this.props.setFieldAndValidate('homePhonenumber', e.target.value)}
                                    value={this.props.patient.mobileNumber}
                                />
                                <Form.Input
                                    label={patientField.mobileNumber.label}
                                    required
                                    onChange={e => this.props.setFieldAndValidate('mobileNumber', e.target.value)}
                                    value={this.props.patient.mobileNumber}
                                />
                            </Form.Group>
                        </Form> */}
                    </Segment>}
                </Transition.Group>

                <Segment style={editAddress ? itemActiveStyle : itemStyle} vertical onClick={() => this.setField("editAddress", !this.state.editAddress)}>
                    <h4><Icon name='home' />{groupInfoPatientField.address.label}<Icon style={{ float: 'right' }} name={editAddress ? 'angle down' : 'angle left'} /></h4></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided  >
                    {editAddress &&
                        <Segment style={elimentStyle} vertical>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='ประเภทที่พักอาศัย (Types of Housing)'
                                        options={'options'}
                                        placeholder='ประเภทที่พักอาศัย'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='ที่อยู่(Address) '
                                        placeholder='ที่อยู่'
                                    />
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='จังหวัด (Province)'
                                        options={'options'}
                                        placeholder='จังหวัด'
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='เขต/อำเภอ (District)'
                                        options={'options'}
                                        placeholder='เขต/อำเภอ'
                                    />
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='แขวง/ตำบล (Sub-District)'
                                        options={'options'}
                                        placeholder='แขวง/ตำบล'
                                    />
                                    <Form.Field
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='รหัสไปรษณีย์ (Postal Code)'
                                        placeholder='รหัสไปรษณีย์'
                                    />
                                </Form.Group>
                            </Form>
                        </Segment >}
                </Transition.Group>


                <Segment style={editEmp ? itemActiveStyle : itemStyle} vertical onClick={() => this.setField("editEmp", !this.state.editEmp)}>
                    <h4><Icon name='home' />{groupInfoPatientField.emerContact.label}<Icon style={{ float: 'right' }} name={editEmp ? 'angle down' : 'angle left'} /></h4>
                </Segment>
                <Transition.Group animation={'slide down'} duration={350} divided size='mini' >
                    {editEmp &&
                        <Segment style={elimentStyle} vertical>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='คำนำหน้า (Title Name)'
                                        options={'options'}
                                        placeholder='คำนำหน้า'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='ชื่อจริง(Name)'
                                        placeholder='ชื่อจริง'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='นามสกุล ( Surname)'
                                        placeholder='นามสกุล'
                                    />

                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='เกี่ยวข้องเป็น (Relationship)'
                                        placeholder='เกี่ยวข้องเป็น'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='ที่อยู่(Address) '
                                        placeholder='ที่อยู่'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='โทรศัพท์บ้าน (Home Phonenumber)'
                                        placeholder='โทรศัพท์บ้าน'
                                    />

                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='โทรศัพท์มือถือ (Mobile Number)'
                                        options={'options'}
                                        placeholder='โทรศัพท์มือถือ'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='ที่อยู่(Address) '
                                        placeholder='ที่อยู่'
                                    />
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='จังหวัด (Province)'
                                        options={'options'}
                                        placeholder='จังหวัด'
                                    />

                                </Form.Group>

                                <Form.Group widths='equal'>

                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='เขต/อำเภอ (District)'
                                        options={'options'}
                                        placeholder='เขต/อำเภอ'
                                    />
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='แขวง/ตำบล (Sub-District)'
                                        options={'options'}
                                        placeholder='แขวง/ตำบล'
                                    />

                                    <Form.Field
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='รหัสไปรษณีย์ (Postal Code)'
                                        placeholder='รหัสไปรษณีย์'
                                    />
                                </Form.Group>
                            </Form>
                        </Segment >}
                </Transition.Group>



                <Segment style={underAge ? itemActiveStyle : itemStyle} vertical onClick={() => this.setField("underAge", !this.state.underAge)}> 
                <h4><Icon name='child' />{groupInfoPatientField.parent.label}<Icon style={{ float: 'right' }} name={underAge ? 'angle down' : 'angle left'} /></h4></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided  >
                    {underAge &&
                        <Segment style={elimentStyle} vertical>
                            <Form>
                                <Form.Group>
                                <p style={{ color: '#277e8e', paddingLeft: '0.5em', paddingRight: '0.5em', fontSize: '12px' }}> * {groupInfoPatientField.descriptionParent.label} </p>
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='ชื่อจริงบิดา (Father Firstname)'
                                        placeholder='First name'
                                    />
                                    <Form.Field
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='นามสกุลบิดา (Father Lastname)'
                                        placeholder='Last name'
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='ชื่อจริงบิดา (Mother Firstname)'
                                        placeholder='First name'
                                    />
                                    <Form.Field
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='นามสกุลมารดา (Mother Lastname)'
                                        placeholder='Last name'
                                    />
                                </Form.Group>
                            </Form>
                        </Segment >}
                </Transition.Group>

                <Segment style={allergy ? itemActiveStyle : itemStyle} vertical onClick={() => this.setField("allergy", !this.state.allergy)}> 
                    <h4><Icon name='pills' />{groupInfoPatientField.allergyNPrivilege.label}<Icon style={{ float: 'right' }} name={allergy ? 'angle down' : 'angle left'} /></h4>
                    </Segment>
                <Transition.Group animation={'slide down'} duration={350} divided  >
                    {allergy &&
                        <Segment style={elimentStyle} vertical>
                            <Form>
                                <h3 >{groupInfoPatientField.allergy.label}<span style={{ color: 'red' }}> * </span></h3 >
                                <Form.Group inline>
                                    <Form.Radio
                                        label=' No '
                                        value='not have'
                                        checked={'this.props.patient.allergy' === 'not have'}
                                        onChange={(e, { value }) => this.chooseChoice('allergy', value)}
                                    />
                                    <Form.Radio
                                        label='Yes, Please specify'
                                        value='other'
                                        checked={'!this.state.disabledOtherallergy'}
                                        onChange={(e, { value }) => this.chooseChoice('allergy', value)}
                                    />
                                    <Form.Input
                                        label=''
                                        placeholder='Please specify'
                                        width={4}
                                        disabled={'this.state.disabledOtherallergy'}
                                        onChange={(e, { value }) => {
                                            this.chooseChoice('allergy', value)
                                            this.setState({ otherallergy: value })
                                        }}
                                        required={'!this.state.disabledOtherallergy'}
                                        value={'this.state.otherallergy'}
                                    />
                                    <br></br>
                                </Form.Group>



                                <h3>{groupInfoPatientField.privilege.label}<span style={{ color: 'red' }}>*</span></h3>
                                <Form.Group inline>
                                    <Form.Radio
                                        value='government officer'
                                        label='government officer'
                                        checked={'this.props.patient.privilege' === 'government officer'}
                                        width={4}
                                        onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                                    />
                                    <Form.Radio
                                        value='family of government officials'
                                        label='family of government officials'
                                        checked={'this.props.patient.privilege' === 'family of government officials'}
                                        width={4}
                                        onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                                    />
                                    <Form.Radio
                                        value='state enterprise officer '
                                        label='state enterprise officer '
                                        checked={'this.props.patient.privilege' === 'state enterprise officer '}
                                        width={4}
                                        onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                                    />
                                </Form.Group>

                                <Form.Group inline>
                                    <Form.Radio
                                        value='family of state enterprise officer '
                                        label='family of state enterprise officer '
                                        width={4}
                                        checked={'this.props.patient.privilege' === 'family of state enterprise officer'}
                                        onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                                    />
                                    <Form.Radio
                                        value='normal person '
                                        label='normal person '
                                        width={4}
                                        checked={'this.props.patient.privilege' === 'normal person '}
                                    />
                                    <Form.Radio
                                        label='other'
                                        value='other'
                                        checked={'!this.state.disabledOtherprivilege'}
                                        onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                                    />
                                    <Form.Input
                                        label=''
                                        placeholder='Please specify other'
                                        width={4}
                                        disabled={'this.state.disabledOtherprivilege'}
                                        required={'!this.state.disabledOtherprivilege'}
                                        onChange={e => {
                                            this.chooseChoice('privilege', e.target.value)
                                            this.setState({ otherprivilege: e.target.value })
                                        }}
                                        value={'this.state.otherprivilege'}
                                    />
                                </Form.Group>
                            </Form>
                        </Segment >}
                </Transition.Group> 
                <br /><h3 style={headerSetting}>Security Setting</h3>
                <Segment style={changeEmail ? itemActiveStyle : itemStyle} vertical onClick={() => this.setField("changeEmail", !this.state.changeEmail)}> 
                    <h4 ><Icon name='mail' />Change Email <Icon style={{ float: 'right' }} name={changeEmail ? 'angle down' : 'angle left'} /></h4></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided size='mini' >
                    {changeEmail && <Segment style={elimentStyle} vertical >
                        <Form text >
                            <Form.Group widths={6}>
                            <Form.Input
                                icon='mail' iconPosition='left' 
                                readOnly={!editEmail}
                                label={patientField.email.label}
                                width={6}
                                required
                                type='email'
                                value={this.props.patient.email}
                                autoFocus
                            />
                                <Form.Button 
                                    label='&nbsp;' 
                                    circular icon='edit' 
                                    onClick={() => this.setField("editEmail", !this.state.editEmail)} 
                                    style={{ color: '#31A5BA',backgroundColor:'#FFF',fontSize:16 }}
                                />
                            </Form.Group>
                            <Form.Group widths={6}>
                           
                             <Form.Input
                                icon='lock' iconPosition='left' 
                                label='Pssword'
                                width={6}
                                required
                                type='password'
                                value={this.props.patient.password}
                            />
                            </Form.Group>
                            <Grid>
                            <Grid.Column width={6}>
                                    <Button fluid content='Submit' style={{ backgroundColor: '#31A5BA', color: '#FFF' }} />
                            </Grid.Column>
                            </Grid>
                            {/* <Form.Button
                                label='&nbsp;'
                                icon='pencil'
                                onClick={() => this.handleActiveEditEmail()}
                                style={{ backgroundColor: '#31A5BA' }}
                            /> */}
                        </Form>
                    </Segment>}
                </Transition.Group>
                <Segment style={changePassword ? itemActiveStyle : itemStyle} vertical onClick={() => this.setField("changePassword", !this.state.changePassword)}> 
                    <h4 ><Icon name='lock' />Change Password <Icon style={{ float: 'right' }} name={changePassword ? 'angle down' : 'angle left'} /></h4></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided size='mini' >
                    {changePassword && <Segment style={elimentStyle} vertical >
                        <Form>

                                <Form.Input
                                    icon='lock' iconPosition='left'
                                    label='Old Pssword'
                                    width={6}
                                    required
                                    type='password'
                                    value={this.props.patient.password}
                                />
                                <Form.Input
                                    icon='lock' iconPosition='left'
                                    label='New Pssword'
                                    width={6}
                                    required
                                    type='password'
                                    value={this.props.patient.password}
                                />
                                <Form.Input
                                    icon='lock' iconPosition='left'
                                    label='Confirm New Pssword'
                                    width={6}
                                    required
                                    type='password'
                                    value={this.props.patient.password}
                                />
                                <Grid>
                                    <Grid.Column width={6}>
                                        <Button fluid content='Submit' style={{ backgroundColor: '#31A5BA', color: '#FFF' }} />
                                    </Grid.Column>
                                </Grid>
                        </Form>
                    </Segment>}
                </Transition.Group>







            </div>
        );
    }
}
