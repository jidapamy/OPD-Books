import React from 'react';
import styled from 'styled-components'
import Dropzone from 'react-dropzone'
import GridRow, { Header, Icon, Image, Grid } from 'semantic-ui-react'
import './UploadStyle.css';
import cameraIcon from './camera.png';
import DivPicCenter from './camera.png';
import GridCenter from './camera.png';
import FileBase64 from 'react-file-base64';

const GridColumns = styled(Dropzone) `
    
    width: 150px;
    height: 150px;
    border-width: 0.1px;
    border-color: #A8AEB9;
    border-radius: 500px !important; 
`


export default class Basic extends React.Component {
    imageDefault = 'https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg'
    state = {
        file: [],
        imagePreviewUrl: '',
    };

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    render() {

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
            background-image : url(${this.state.imagePreviewUrl === '' ? this.imageDefault : this.state.imagePreviewUrl})
        `
        return (
                    <GridColumns type="file" onChange={this.handleImageChange}>
                        <div className="IconCamera">
                            <Image src={cameraIcon} />
                        </div>
                    </GridColumns>

        )
    }

}