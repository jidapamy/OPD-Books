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
    border-style: solid;
    border-radius: 500px !important; 
    margin-left: 43%;
`




export default class Basic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: [],
            imagePreviewUrl: '',



        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
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
        // console.log(file);
        reader.readAsDataURL(file)
    }

    getFile(files) {
        this.setState({files}),
        console.log(files);
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
                        <Image className="circular" circular>
                            <div className="setImage">{$imagePreview}</div>
                        </Image>
                        <div className="IconCamera">
                            <Image src={cameraIcon} />
                        </div>

                    </GridColumns>
                    <FileBase64
                        multiple={true}
                        onDone={this.getFile.bind(this)} 
                        />

                </div>
                <br />



            </section>


        )
    }

}