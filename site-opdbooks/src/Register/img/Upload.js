import React from 'react';
import styled from 'styled-components'
import Dropzone from 'react-dropzone'
import GridRow, { Header, Icon, Image, Grid } from 'semantic-ui-react'
import './UploadStyle.css';
import cameraIcon from './camera.png';
import DivPicCenter from './camera.png';
import GridCenter from './camera.png';


const GridColumns = styled(Dropzone) `
    
    width: 150px;
    height: 150px;
    border-width: 0.1px;
    border-color: #A8AEB9;
    border-style: solid;
    border-radius: 500px !important; 
    margin-left: 43%;
`




export default class Basic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
    }

    _handleImageChange(e) {
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
        let { imagePreviewUrl } = this.state;
        let $imagePreview = <Image src='https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg' size='small' circular />;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        }

        return (
            <section className="GridCenter">
                <div className="DivPicCenter">
                    <GridColumns type="file" onChange={this._handleImageChange}>
                        <Image class="img" circular>{$imagePreview}</Image>
                        <div className="IconCamera">
                            <Image src={cameraIcon} />
                        </div>
                    </GridColumns>

                </div>
            </section>


        )
    }

}