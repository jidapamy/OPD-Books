import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import CSS from './style.css';
const SegmentTwo = () => (
    <div>
        <div class="body5">

            <form class="right alight ui form">
                ประเภทบัตร (Card type)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
                <div class="ui compact menu">
                    <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
                        <div class="text" role="alert" aria-live="polite">------- SELECT -------</div>
                        <i aria-hidden="true" class="dropdown icon"></i>
                        <div class="menu transition">
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">ID CARD No.</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">Passport No.</span>
                            </div>
                        </div>
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        เลขบัตรประชาชน &nbsp;(ID CARD No./Passport No.)
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="ui input">
                    <input type="text" />
                </div>


                <br />
                คำนำหน้า &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="ui compact menu">
                    <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
                        <div class="text" role="alert" aria-live="polite">------- SELECT -------</div>
                        <i aria-hidden="true" class="dropdown icon"></i>
                        <div class="menu transition">
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">นาย</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">นาง</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">นางสาว</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">เด็กชาย</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">เด็กหญิง</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">อื่นๆ</span>
                            </div>
                        </div>
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ชื่อจริง
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="ui input two">
                    <input type="text" />
                </div>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                สกุล
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="ui input two">
                    <input type="text" />
                </div>


                <br />
                Title &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="ui compact menu">
                    <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
                        <div class="text" role="alert" aria-live="polite">------- SELECT -------</div>
                        <i aria-hidden="true" class="dropdown icon"></i>
                        <div class="menu transition">
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">Mr.</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">Mrs.</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">Miss</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">Other</span>
                            </div>
                        </div>
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Name
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="ui input two">
                    <input type="text" />
                </div>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                Surname
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="ui input two">
                    <input type="text" />
                </div>


                <br />
                วัน/เดือน/ปี เกิด (Date of Birth) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="ui compact menu three">
                    <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
                        <div class="text" role="alert" aria-live="polite">--------------- SELECT ---------------</div>
                        <i aria-hidden="true" class="dropdown icon"></i>
                        <div class="menu transition">
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">Mr.</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">Mrs.</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">Miss</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">Other</span>
                            </div>
                        </div>
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                อายุ (Age)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="ui input three">
                    <input type="text" />
                </div>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                เพศ (Gender)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="ui compact menu">
                    <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
                        <div class="text" role="alert" aria-live="polite">---------- SELECT ----------</div>
                        <i aria-hidden="true" class="dropdown icon"></i>
                        <div class="menu transition">
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">Male</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">Female</span>
                            </div>
                        </div>
                    </div>
                </div>


                <br /><br />
                กรุ๊ปเลือด (Blood Group) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="ui compact menu two">
                    <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
                        <div class="text" role="alert" aria-live="polite">--- SELECT ---</div>
                        <i aria-hidden="true" class="dropdown icon"></i>
                        <div class="menu transition">
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">O</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">A</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">B</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">AB</span>
                            </div>
                        </div>
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                สัญชาติ (Nationality)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="ui compact menu three">
                    <div role="listbox" aria-expanded="false" class="ui item simple dropdown three" tabindex="0">
                        <div class="text" role="alert" aria-live="polite">--------------- SELECT ---------------</div>
                        <i aria-hidden="true" class="dropdown icon"></i>
                        <div class="menu transition">
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">ไทย (Thai)</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">จีน (Chinese)</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">อินเดีย (Indian)</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">อื่นๆ (Other)</span>
                            </div>
                        </div>
                    </div>
                </div>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                ศาสนา (Religion)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="ui compact menu three">
                    <div role="listbox" aria-expanded="false" class="ui item simple dropdown three" tabindex="0">
                        <div class="text" role="alert" aria-live="polite">--------------- SELECT ---------------</div>
                        <i aria-hidden="true" class="dropdown icon"></i>
                        <div class="menu transition">
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">พุทธ (Buddhism)</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">คริสต์ (Christianity)</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">อิสลาม (Islam)</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">อินเดีย (Brahmanism- Hinduism)</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">อื่นๆ (Other)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                สถานภาพ (Status) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="ui compact menu two">
                    <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
                        <div class="text" role="alert" aria-live="polite">--- SELECT ---</div>
                        <i aria-hidden="true" class="dropdown icon"></i>
                        <div class="menu transition">
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">โสด (Single)</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">หมั้น (Engaged)</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">แต่งงานแล้ว (Married)</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">แยกกันอยู่ (Separated)</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                                <span class="text">หย่าร้าง (Divorced)</span>
                            </div>
                            <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                                <span class="text">หม้าย (Widowed)</span>
                            </div>
                        </div>
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                อาชีพ (Occupation)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="ui input four">
                    <input type="text" />
                </div>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                โทรศัพท์บ้าน (Home Phone Number)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="ui input four">
                    <input type="text" />
                </div>

                <br />
                โทรศัพท์มือถือ (Mobile Phone)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="ui input three" >
                    <input type="text" />
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                โทรศัพท์ที่ทำงาน (ID CARD No./Passport No.)
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="ui input two">
                    <input type="text" />
                </div>







            </form>

        </div>




    </div>

)

export default SegmentTwo