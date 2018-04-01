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
    constructor() {
        super()
        this.state = { files: [] }
    }

    onDrop(files) {
        this.setState({
            files
        });
    }

    render() {
        return (
            <section className="GridCenter">
                <div className="DivPicCenter">
                    <GridColumns onDrop={this.onDrop.bind(this)}>
                        <Image src='https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg' size='small' circular />
                        <div className="IconCamera">
                            <Image src={cameraIcon} />
                        </div>
                    </GridColumns>
                </div>
                <br />

                <aside>
                    <h2>Flie รูปที่อัพโหลดมา</h2>
                    <ul>
                        {
                            this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                </aside>

            </section>

        );
    }
}

