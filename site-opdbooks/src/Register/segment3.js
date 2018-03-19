import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import CSS from './style.css';
const SegmentThree = () => (
    <div>
        <div class="body">
            <b>ที่อยู่ปัจจุบัน (โปรดระบุอย่างละเอียด) (Home Address)</b>
            <br />
            ประเภทที่พักอาศัย (Types of Housing)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="ui compact menu three">
                <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
                    <div class="text" role="alert" aria-live="polite">---------------- SELECT ----------------</div>
                    <i aria-hidden="true" class="dropdown icon"></i>
                    <div class="menu transition">
                        <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                            <span class="text">อพาร์ทเม้นท์ (Apartment)</span>
                        </div>
                        <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                            <span class="text">บ้านเดี่ยว (House)</span>
                        </div>
                        <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                            <span class="text">ทาวน์เฮาส์ (Townhouse)</span>
                        </div>
                        <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                            <span class="text">แฟลต (Flat)</span>
                        </div>
                        <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                            <span class="text">คอนโดมิเนียม (Condominium)</span>
                        </div>
                        <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                            <span class="text">อื่นๆ (Other)</span>
                        </div>
                    </div>
                </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    ที่อยู่ &nbsp;(Address)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="ui input five">
                <input type="text" />
            </div>

            <br /><br />
            จังหวัด (Province) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            แขวง/ตำบล (Sub-District)
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
            เขต/อำเภอ (District)
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
            <br />
            <div class="left">
                รหัสไปรษณีย์ (Postal Code)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="ui input three">
                    <input type="text" />
                </div>
            </div>


        </div>


        <div class="body">
            <b>กรณีฉุกเฉินติดต่อ (Contact First And Last Name In Case Of Energency)</b>
            <br />
            <div class="left">
                <div class="ui radio checkbox">
                    <input type="radio" class="hidden" readonly="" tabindex="0" />&nbsp;&nbsp;
                    <label>ที่อยู่เดียวกัน</label>
                </div>
            </div>

            ระบุ ชื่อ-นามสกุล (Name)
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="ui input" >
                <input type="text" />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            เกี่ยวข้องเป็น (Relationship)
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="ui input six">
                <input type="text" />
            </div>

            <br />
                โทรศัพท์บ้าน (Home Phone Number)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="ui input three" >
                    <input type="text" />
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                โทรศัพท์มือถือ (Mobile Phone)
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="ui input seven">
                    <input type="text" />
                </div>


                <br/>

                ประเภทที่พักอาศัย (Types of Housing)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="ui compact menu three">
                <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
                    <div class="text" role="alert" aria-live="polite">---------------- SELECT ----------------</div>
                    <i aria-hidden="true" class="dropdown icon"></i>
                    <div class="menu transition">
                        <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                            <span class="text">อพาร์ทเม้นท์ (Apartment)</span>
                        </div>
                        <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                            <span class="text">บ้านเดี่ยว (House)</span>
                        </div>
                        <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                            <span class="text">ทาวน์เฮาส์ (Townhouse)</span>
                        </div>
                        <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                            <span class="text">แฟลต (Flat)</span>
                        </div>
                        <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                            <span class="text">คอนโดมิเนียม (Condominium)</span>
                        </div>
                        <div class="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                            <span class="text">อื่นๆ (Other)</span>
                        </div>
                    </div>
                </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    ที่อยู่ &nbsp;(Address)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="ui input five">
                <input type="text" />
            </div>

            <br /><br />
            จังหวัด (Province) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            แขวง/ตำบล (Sub-District)
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
            เขต/อำเภอ (District)
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
            <br />
            <div class="left">
                รหัสไปรษณีย์ (Postal Code)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="ui input three">
                    <input type="text" />
                </div>
            </div>
                




        </div>




    </div>

)

export default SegmentThree