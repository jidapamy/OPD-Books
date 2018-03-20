import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import CSS from './style.css';
const SegmentOne = () => (
    <div>
        <div class="ui vertically divided grid">
            <div class="three column row">
                <div class="column">
                    <div class="body4">
                        วันที่ทำประวัติ (Register Date)
                    <br />
                        <div class="ui input small">
                            <input type="text" />
                        </div>
                    </div>

                </div>
                <div class="column">
                    <div class="titleRegisterForm">
                        ใบลงทะเบียนผู้ป่วยใหม่
                    </div>
                </div>
                <div class="column">
                    <a href='/'><div class="iconClose">
                        <i class="close icon" end></i>
                    </div></a>
                </div>
            </div>
        </div>
        <div class="one column row">
            <div class="titleRegisterForm2">
                NEW PATIENT REGISTRATION FORM
            </div>
        </div>
        <br/>
       
       




    </div>


)

export default SegmentOne