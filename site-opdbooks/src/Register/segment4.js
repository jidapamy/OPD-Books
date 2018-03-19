import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import CSS from './style.css';
const SegmentFour = () => (
    <div>
        <div class="body">
            <b>** กรณีผู้เยาว์ในความปกครอง (อายุไม่ถึง 15 ปี บริบูรณ์) กรุณากรอกข้อมูล</b>
            <br />
            <br />
            บิดา (Father's Name)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="ui input two">
                <input type="text" />
            </div>

            <br />
            มารดา (Mother's Name)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="ui input two">
                <input type="text" />
            </div>

        </div>
        <div class="body2">
            <b>ประวัติการแพ้ยา อาหาร และสารอื่นๆ (History of Food Or Drug Allergy)</b>
            <br />
            <br />

            <form class="ui form">
                <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio" class="hidden" name="radioGroup" readonly="" tabindex="0" value="this" />
                        <label>ไม่เคยมีประวัติแพ้ ( No )</label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio" class="hidden" name="radioGroup" readonly="" tabindex="0" value="that" />
                        <label>มีประวัติแพ้, โปรดระบุ ( Yes, Please specify )</label>
                        <input class="ui input three" type="text" />
                    </div>
                </div>
            </form>



        </div>

        <div class="body3">
            <b>สิทธิการรักษา</b>
            <br />
            <div class="ui radio checkbox two">
                <input type="radio" class="hidden" name="radioGroup" readonly="" tabindex="0" value="this" />
                <label>ข้าราชการ</label>
                <input type="radio" class="hidden" name="radioGroup" readonly="" tabindex="0" value="this" />
                <label>ครอบครัวข้าราชการ</label>
                <input type="radio" class="hidden" name="radioGroup" readonly="" tabindex="0" value="this" />
                <label>รัฐวิสาหกิจ</label>
                <input type="radio" class="hidden" name="radioGroup" readonly="" tabindex="0" value="this" />
                <label>ครอบครัวรัฐวิสาหกิจ</label>
                <input type="radio" class="hidden" name="radioGroup" readonly="" tabindex="0" value="this" />
                <label>บุคคลทั่วไป</label>
                <input type="radio" class="hidden" name="radioGroup" readonly="" tabindex="0" value="this" />
                <label>อื่นๆ</label>
                <div class="ui input three">
                    <input type="text" />
                </div>

            </div>

        </div>

        <div class="body4">
            <div class="ui radio checkbox two">
                <input type="radio" class="hidden" name="radioGroup" readonly="" tabindex="0" value="this" />
                <label>ข้าพเจ้าขอรับรองว่าข้อมูลบุคคลทั้งหมดตามที่แจ้งแก่เจ้าหน้าที่ของคลินิกนี้ถูกต้อง และตรงกับความเป็นจริงทุกประการ หากมีข้อความใดไม่ถูกต้องหรือไม่ตรงกับความจริง และอาจจะทำให้เกิดความเสียหาย
                        <br />แก่ตัวข้าพเจ้าหรือบุคคลอื่นใด ข้าพเจ้ายินยอมรับผิดชอบในความเสียหายที่เกิดขึ้นทุกประการ และอนุญาตให้เผยแพร่ข้อมูลข้องข้าพเจ้าในระบบในเครือของคลินิก</label>
            </div>

        </div>

        <div class="body5">
            <div>
                <button class="ui positive button" role="button">CONFIRM</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button class="ui negative button" role="button">CANCEL</button>
            </div>


        </div>






    </div>

)

export default SegmentFour