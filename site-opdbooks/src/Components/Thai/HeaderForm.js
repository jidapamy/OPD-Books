import React from 'react'
import styled from 'styled-components'
import Dropzone from 'react-dropzone'
import GridRow, { Header, Icon, Image } from 'semantic-ui-react'
import './../../Static/style/UploadStyle.css';
import cameraIcon from './../../Static/img/camera.png';


const HeaderForm = (props) => {
    const imageDefault = 'https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg'

    const handleImageChange = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            props.setField('picture', reader.result)
        }
        reader.readAsDataURL(file)
    }

    const GridColumns = styled(Dropzone) `
            width: 150px !important;
            height: 150px !important;
            border-width: 0.1px;
            border-color: #A8AEB9;
            border-style: solid;
            border-radius: 500px !important; 
            background-size: cover;
            float:center;
            margin:auto;
            background-image : url(${props.picture === '' ? imageDefault : props.picture});
    `


    return (
        <div>
            <Header style={{ border: '0px' }} as='h2' attached='top' textAlign='center'>
                ใบลงทะเบียนผู้ป่วยใหม่ <br />
                NEW PATIENT RESGISTRATION FORM <br/>
                รูปประจำตัว
            </Header>
            <br />

            {/* Upload */}
            <GridColumns type="file" onChange={handleImageChange}>
                <div className="IconCamera">
                    <Image src={cameraIcon} />
                </div>
            </GridColumns>

        </div>
    )
}

export default HeaderForm
