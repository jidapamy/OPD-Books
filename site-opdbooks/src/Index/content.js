import React, { Component } from 'react';
import asia from './img/asia.jpg';
import my from './img/my.jpg';
import stamp from './img/stamp.jpg';
import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';
import icon3 from './img/icon3.png';
import icon4 from './img/icon4.png';
import photocontent1 from './img/photocontent1@2x.png';
class Content extends Component {

    render() {
        return (
            <div >
                <div class="ui four column center aligned stackable grid container">
                    <div class="column">
                        <img class="ui centered small  image" src={icon1}></img>
                        <h1 class="ui header">
                            DAVELOP
                                </h1>
                        <p></p>
                        Develop our team potential and learn new technology

                        </div>
                    <div class="column">
                        <img class="ui centered small  image" src={icon2}></img>
                        <h1 class="ui header">
                            PREVENT
                                    </h1>
                        <p>
                            Prevent theft of patient data. In case the patient does not consent.
                                    </p>

                    </div>
                    <div class="column">
                        <img class="ui centered small  image" src={icon3}></img>
                        <h1 class="ui header">
                            FACILITATE
                                        </h1>
                        <p>
                            Facilitate about registration for patient and data management for employee.
                                        </p>

                    </div>
                    <div class="column">
                        <img class="ui centered small  image" src={icon4}></img>
                        <h1 class="ui header">
                            ONLINE
                                        </h1>
                        <p>
                            Save on internet instead of paper document.

                                        </p>

                    </div>
                </div>
                <br></br><br></br>
                <div class="ui vertical stripe segment">
                    <div class="ui middle aligned stackable grid container">
                        <div class="row">
                            <div class="eight wide column">
                                <h1 class="ui header">
                                    เว็บเราทำอะไร?
                                </h1>
                                <p>
                                    ระบบที่จัดการทะเบียนผู้ป่วยสำหรับคลินิกในเครือเดียวกันโดยใช้ Technology blockchian  มาใช้ในการ Share ข้อมูลผู้ป่วยร่วมกัน ทำให้ผู้ป่วย ไม่ต้องลงทะเบียนผู้ป่วยหลายๆครั้ง และข้อมูลของผู้ป่วยมีความปลอดภัยซึ่งเป็นจุดสำคัญของระบบนี้ รวมไปถึงช่วยให้บุคลากรในคลินิก ทำงานรวดเร็วขึ้นและลดการใช้เอกสารกระดาษเปลี่ยนให้เป็นการเก็บข้อมูลแบบ electronic
                                </p>
                                <h1 class="center ui header">
                                    เว็บเราต่างจากที่อื่นอย่างไร?
                                </h1>
                                <p>
                                    <ul>
                                        <li> การกรอกข้อมูลทะเบียนของผู้ป่วย ปกติผู้ป่วยจะต้องกรอกใหม่ทุกครั้งถ้าไปยังคลินิกที่ยังไม่เคยมีประวัติของผู้ป่วยมาก่อน แต่ระบบที่จะพัฒนาจะแก้ไขปัญหานี้คือระบบจะสามารถแชร์ข้อมูลผู้ป่วยให้กับอีกคลินิกได้ ถ้าหากผู้ป่วยยินยอม เพื่อลดเวลาการกรอกข้อมูลของผู้ป่วย</li>
                                    </ul>
                                    <ul>
                                        <li>ระบบคลินิกปัจจุบันจะเป็นการเก็บข้อมูลแบบ Centralized หากเกิดกรณีฉุกเฉินอย่างเช่นระบบศูนย์กลางล่ม ที่อื่นๆก็จะไม่สามารถใช้งานได้เลย และข้อมูลอาจจะศูนย์หายได้ ระบบที่จะพัฒนาจึงนำ เทคโนโลยี Blockchain เข้ามาช่วยในการ Redundant ข้อมูลและหากระบบหนึ่งล่ม ระบบอื่นก็ยังสามารถใช้งานต่อได้ แถมข้อมูลยังมีความปลอดภัย และน่าเชื่อถือ เนื่องจากทุกเอกสารข้อมูลใน Blockchain จะเป็นต้นฉบับที่เจ้าของ รับรองความถูกต้อง</li>
                                    </ul>
                                    <ul>
                                        <li>ระบบเดิมของคลินิกที่เคยมีมาจะเป็นโปรแกรมแบบติดตั้งลงบนเครื่อง แต่ระบบที่จะพัฒนาจะเป็น Web Application ไม่ต้องติดตั้งโปรแกรม ทำให้การตอนติดตั้งระบบต่างๆจะรวดเร็วกว่าแบบเดิม โดยไม่ต้องมานั่งลงโปรแกรมทุกเครื่อง ทุกเครื่องสามารถเปิด Web site และเข้าใช้งานได้เลย</li>
                                    </ul>
                                </p>
                            </div>
                            <div class="six wide right floated column">
                                <img class="ui large bordered rounded image" src={photocontent1}></img>
                            </div>
                        </div>
                        <div class="row">

                        </div>
                    </div>

                    <br></br> <br></br> <br></br> <br></br>
                    <div class="ui three column center aligned stackable grid container">
                        <h2>MEMBER</h2>
                    </div>
                    <div class="ui three column center aligned stackable grid container">
                        <div class="column">


                            <img class="ui centered small circular image" src={my}></img>
                            <h1 class="ui header">
                                Jidapa Sikaphan
                                </h1>
                            <p></p>
                            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.

                    </div>

                        <div class="column">

                            <img class="ui centered small circular image" src={stamp}></img>
                            <h1 class="ui header">
                                Notphattri Buntham
                                    </h1>
                            <p>
                                Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
                                    </p>

                        </div>
                        <div class="column">

                            <img class="ui centered small circular image" src={asia}></img>
                            <h1 class="ui header">
                                Surakiti Sopontanapat
                                        </h1>
                            <p>
                                Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
                                        </p>

                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default Content;



