import styled from "styled-components";
import BGcomputer from '../Img/Wallpaper/BGcomputer.png'
import BGIPad1 from '../Img/Wallpaper/BGIPad1.png'
import BGIPad2 from '../Img/Wallpaper/BGIPad2.png'
import BGIPad3 from '../Img/Wallpaper/BGIPad3.png'
import BGIPhone from '../Img/Wallpaper/BGIPhone.png'
import BGIPhonePlus from '../Img/Wallpaper/BGIPhonePlus.png'
import BGIPhonX from '../Img/Wallpaper/BGIPhonX.png'

export const Wrapper = styled.div`

@media only screen and (max-width: 1366px) and (min-width: 1024px) {
  background: url(${BGIPad3}) no-repeat center fixed;
  background-size: 100% 100%;
  height:100vh
}
@media only screen and (max-width: 1112px) and (min-width: 834px) {
  background: url(${BGIPad2}) no-repeat center fixed;
  background-size: 100% 100%;
   height:100vh
}
@media only screen and (max-width: 1024px) and (min-width: 768px) {
  background: url(${BGIPad1}) no-repeat center fixed;
  background-size: 100% 100%;
   height:100vh
}
@media only screen and (max-width: 812px) and (min-width: 315px) {
  background: url(${BGIPhonX}) no-repeat center fixed;
  background-size: 100% 100%;
   height:100vh
}
@media only screen and (max-width: 736px) and (min-width: 414px) {
  background: url(${BGIPhonePlus}) no-repeat center fixed;
  background-size: 100% 100%;
   height:100vh
}
@media only screen and (max-width: 667px) and (min-width: 375px) {
  background: url(${BGIPhone}) no-repeat center fixed;
  background-size: 100% 100%;
   height:100vh
}
@media only screen and (min-width: 1025px)  {
  background: url(${BGcomputer}) no-repeat center fixed;
  background-size: 100% 100%;
   height:100vh
}

`
export const style = {


    centerr: {
        textAlign: 'center',
    },
    contentPosition: {
        // textAlign: 'center',
        width: '95%',
        borderRadius: '7px',
        paddingTop: '4%',
        paddingBottom: '4%',
        color: '#707070',
        marginTop: '5%',
        marginLeft: '1%',
        marginBottom: '5%',


    },

    buttonQueue: {
        color: 'white',
        fontSize: '19px',
        backgroundColor: '#00b5ad',
        borderRadius: '4px',
        border: '1px solid #00b5ad',
        paddingTop: '4%',
        paddingBottom: '4%',
        width: '85%',
        marginTop: '4%'
    },

    box: {
        width: 'auto',
        marginTop: '1.5%',
        marginLeft: '0.1%',
        marginRight: '0.1%'
    },

    segmentTwo: {
        backgroundColor: '#00b5ad',
    }
    ,

    queueZone: {
        marginTop: '2%',
        backgroundColor: '#00b5ad'

    },

    queue1: {
        marginTop: '2%',
        backgroundColor: '#0023ad'

    },

    queue2: {
        marginTop: '2%',
        color: 'white',
        fontSize: '19px',
        borderRadius: '4px',
        border: '1px solid #00b5ad',
        paddingTop: '4%',
        paddingBottom: '4%',
        width: '85%'

    },

    head: {
        color: '#00b5ad',
        fontSize: '45px',
        marginBottom: ' -5%'
    },

    queueNo: {
        color: '#00b5ad',
        fontSize: '25px',
        marginTop: '3%'


    },

    hnNo: {
        marginLeft: '-30%'
    },

    edit: {
        paddingBottom: '8%',
        paddingTop: '8%'
    },


    topic1: {
        fontSize: '14px',
        color: '#000000',
        marginBottom: '0%',
        textAlign: 'left',
        marginLeft: '13%'
    },

    topic2: {
        fontSize: '14px',
        color: '#000000',
        marginBottom: '0%',
        textAlign: 'left',
        marginLeft: '0%'
    },
    topic3: {
        fontSize: '14px',
        color: '#000000',
        marginBottom: '0%',
        textAlign: 'left',
        marginLeft: '-7%'
    },

    input1: {
        width: '55%',
        marginLeft: '-20%'
    }
    ,

    Row: {
        marginTop: '-2.5%'
    },

    input2: {
        width: '55%',
        marginLeft: '-45%'
    },

    input3: {
        width: '55%',
        marginLeft: '-60%'

    },

    ribbonNur: {

        textAlign: 'left',
        fontSize: '14px',
        width: '55%',
        marginLeft: '-48%',
        paddingBottom: '-30%'
    },
    ribbonDoc: {
        textAlign: 'left',
        fontSize: '14px',
        width: '55%',
        marginLeft: '-47.5%',
        paddingBottom: '-30%'
    },

    inputField: {
        width: '93%'
    },

    topicChief: {
        fontSize: '14px',
        color: '#000000',
        marginBottom: '0%',
        textAlign: 'left',
        marginLeft: '4%'
    },

    inputFieldDoc: {
        width: '93%',
        marginBottom: '4%'

    },

    topicDoc: {
        fontSize: '14px',
        color: '#000000',
        marginBottom: '0%',
        textAlign: 'left',
        paddingLeft: '4%'
    },
    topicTime: {
        fontSize: '14px',
        color: '#000000',
        marginBottom: '0%',
        textAlign: 'left',
        marginLeft: '7%'
    },

    ColumnDate: {
        width: '90%',
        height: '50%',
        marginLeft: '7%',
        paddingTop: '2%',
        marginTop: '0%'

    },
    ColumnDates: {
        width: '20em',
        height: '50%',
        marginLeft: '0',
        paddingTop: '2%',
        marginTop: '0%'

    },
    ColumnDoc: {
        width: '93%',
        // height: '50%',
        marginLeft: '-2%',
        paddingTop: '2%',
        marginTop: '0%',
        textAlign: 'center',
        color: '#666666'

    },

    ColumnNameDoc: {
        fontSize: '14px',
        color: '#000000',
        marginBottom: '0%',
        textAlign: 'left',
        paddingLeft: '%'
    },
    topicNameDoc: {
        fontSize: '14px',
        color: '#000000',
        marginBottom: '0%',
        textAlign: 'left',
        marginLeft: '-2%'
    },

    headSeg2: {
        color: '#00b5ad',
        fontSize: '30px',
        marginBottom: ' -5%'
    },

    toppicPatient: {
        fontSize: '15px',
        color: '#4183C4',
        textAlign: 'left',
        marginLeft: '10%'

    },

    Column2: {
        textAlign: 'left'
    }
    ,

    showData: {
        width: '80%',
        textAlign: 'left',
        positon: 'center'

    }
    ,

    space1: {
        marginLeft: '3%'
    },
    space2: {
        marginLeft: '-3%'
    }
    ,

    paddingPatient: {
        paddingBottom: '2%',
        paddingTop: '2%'
    },

    fixContent: {
        positon: 'fixed !important'
    },

    cardInfo: {
        textAlign: 'center',
        marginTop: '5%',
        align: 'center'
    },

    history: {
        // fontSize: '14px',
        // padding: '5%',
        fontSize: '14px',
        padding: '0%',
    },
    topicNameNurse: {
        fontSize: '14px',
        color: '#000000',
        marginBottom: '0%',
        textAlign: 'left',
        marginLeft: '8%'
    },

    ColumnNurse: {
        width: '95%',
        height: '50%',
        marginLeft: '8%',
        paddingTop: '2%',
        marginTop: '0%'
    },
    ButtonNurse: {
        marginLeft: '29%'
    },
    ButtonNurse2: {
        // margintop: '-15%'
        marginBottom: '-5%'
    },
    ButtonDoctor: {
        marginLeft: '23%',
        marginBottom: '5%'
    },

    textCard: {
        fontSize: '14px',
        textAlign: 'left',
        marginLeft: '-6%',

    },
    iconCard: {
        fontSize: '22px',
        textAlign: 'right',


    },
    rowScaleTop: {
        paddingTop: '3%',
        marginBottom: '-4%',

    },
    rowScaleBottom: {
        paddingBottom: '3%',
        marginTop: '-4%'
    },
    cardCenter: {
        paddingLeft: '4%',
        // marginTop: '1%'
    },

    visitNumber: {
        width: '25%',
        height: '1%',
        marginLeft: '-2%',
        paddingTop: '2%',
        marginTop: '0%',
        paddingTop: '1.5%',
        paddingBottom: '1.5%'
    },
    visitNumberPosition: {
        marginLeft: '69.5%',
        marginRight: '-60%',
        marginTop: '-5%'
    },

    scroll: {
        overflow: 'auto',
        whiteSpace: 'nowrap',
        overflowY: 'auto',
        overflow: 'scroll',

    },


    showTopic1: {
        fontSize: '14px',
        color: '#000000',
        marginBottom: '0%',
        // textAlign:'left',
        marginLeft: '17%'
    },

    showTopic2: {
        fontSize: '14px',
        color: '#000000',
        marginBottom: '0%',
        // textAlign:'left',
        marginLeft: '12%'
    },
    showTopic3: {
        fontSize: '14px',
        color: '#000000',
        marginBottom: '0%',
        // textAlign:'left',
        marginLeft: '2%'
    },

    showInput1: {
        width: '55%',
        marginLeft: '15%'
    }
    ,

    showInput2: {
        width: '55%',
        marginLeft: '10%'
    },

    showInput3: {
        width: '55%',
        // marginLeft: '-60%'

    },
    Row: {
        marginTop: '-2.5%'
    },

    showTopicChief: {
        fontSize: '14px',
        color: '#000000',
        marginBottom: '0%',
        textAlign: 'left',
        marginLeft: '5.5%'
    },
    showInputField: {
        width: '89%',
        marginLeft: '5%'
    },
    showTopicNameDoc: {
        fontSize: '14px',
        color: '#000000',
        marginBottom: '0%',
        textAlign: 'left',
        marginLeft: '38%'
    },
    showColumnDoc: {
        width: '50%',
        height: '50%',
        marginLeft: '37%',
        paddingTop: '1%',
        marginTop: '0%',
    },

    showTopicDoc: {
        fontSize: '14px',
        color: '#000000',
        textAlign: 'left',
        marginLeft: '5%'
    },
    showInputFieldDoc: {
        width: '89%',
        marginLeft: '5%'

    },

    headForm: {
        width: '105.2%',
        textAlign: 'left',
        marginLeft: '-2.5%',
        marginTop: '-2.6%',
        paddingLeft: '5%',
        borderColor: '#525252',

    },
    headText: {
        color: ' #ffffff',
    },
    headMargin: {
        marginBottom: '0%',
        marginTop: '-3.5%'
    },
    textQueue: {
        textAlign: 'left',
        marginLeft: '6%'

    },
    headMarginShow: {
        marginBottom: '0%',
        marginTop: '-3.5%'
    },
    headFormShow: {
        width: '103.5%',
        textAlign: 'left',
        marginLeft: '-2.5%',
        marginTop: '-2.6%',
        paddingLeft: '5%',
        borderColor: '#525252',
        borderRadius: '0px'
    },
    headMarginShow: {
        marginBottom: '0%',
        marginTop: '-2%'

    },

    dividerDeco: {
        width: '93%',
        marginLeft: '-2%',
        marginTop: '-5%',
        textAlign: 'left',
        borderColor: '#000000',
        borderWidth: 'thick'
    },
    dividerDeco2: {
        width: '90%',
        marginLeft: '-2%',
        marginTop: '-3%',
        textAlign: 'left',
        borderColor: '#000000',
        borderWidth: 'thick'
    },
    dividerShowDate: {
        width: '80%',
        marginLeft: '11%',
        marginTop: '-3%',
        textAlign: 'left',
        borderColor: '#000000',
        borderWidth: 'thick'
    },
    tab1Height: {
        height: '550px'
    },

    navbarDeco: {
        fontSize: '20px',
        borderRadius: '0px',
        color: '#31A5BA',
        textAlign: 'center',
        paddingTop: '15%'


    },
    naveText: {
        fontSize: '16px',
        color: '#3EBDB2',
    },

    hnNoNav: {
        // marginLeft: '-11%',
        color: '#849695',
        fontSize: '10px'
    },
    textQueueNav: {
        textAlign: 'left',
        // marginLeft: '-11%',
        color: '#ffffff',
        fontSize: '14px'

    },
    queueNoNav: {
        color: '#31a5ba',
        fontSize: '25px',
        // marginTop: '5%',
        textAlign: 'right',

    },
    widthNav: {
        // marginTop:'-5%',
        // marginBottom: '-5%'
    },
    visiteNav: {
        visitedColor: '#2C7E79',
    },

    queueNoNav2: {
        color: '#ffffff',
        fontSize: '25px',
        // marginTop: '5%',
        textAlign: 'right',

    },
    hnNoNav2: {
        // marginLeft: '-11%',
        color: '#083E3B',
        fontSize: '10px'
    },
    textQueueNav2: {
        textAlign: 'left',
        // marginLeft: '-11%',
        color: '#ffffff',
    },
    widthNav2: {
        background: '#31a5ba',
    },
    bgDoc: {
        background: '#FFFFFF',
    },

    bgApi: {
        // background:'#EAE8E8',
        background: '#FFFFFF',
        height: '',
    },
    HeaderColor: {
        color: '#31A5BA',
        fontSize: '20px'
    },
    HeaderColor2: {
        color: '#31A5BA',
        textAlign: 'center',
    },

    HeaderColor3: {
        color: '#31A5BA',
        textAlign: 'center',
        marginTop:'17%'
    },
    headTable: {
        background: '#444040',
        color: '#FFFFFF',
        borderRadius: '0px',
        padding: '5px',
        fontSize: '15px',
        textAlign: 'left'
    },
    tableWidth: {
        width: '100%',
    },
    tableBody: {
        textAlign: 'left',
        fontSize: '15px',
    },

    // Test

    apiDescription: {
        background: '#F74F4',
        padding: '0px',
        color: '#444040',
        fontSize: '14.5px',
        marginBottom: '4%',

    },
    apiMethod: {
        fontSize: '14px',
        fontWeight: '100',
        color: '#000000',
        marginBottom: '4%',
        width:'100%'
    },
    apiMethodName: {
        fontSize: '15px',
        marginBottom: '1%',
    },

    textDes: {
        fontSize: '15px'
    },

    tableHead: {
        background: '#444040',
        color: '#ffffff',
        borderRadius: '0px',
        padding: '5px',
        fontSize: '15px',
        textAlign: 'left',
        width: '100%',
        textAlign: 'Left',
        height: '4.5%',
        marginBottom: '-6%'
    },

    //api Document Css
    menuAPI: {
        fontWeight: 'bold',
        fontSize: '15px'
    },

    

    beforeClick: {
        color: '#31A5BA',
        textAlign: 'left',
        // borderBottom: 'none'

    },

    afterClick: {
        textAlign: 'left',
        color: 'white',
        background: '#31A5BA',
        fontWeight: 'bold',
        // borderBottom: '0px !important'


    },

    // Code Mirror CSS
    bgCodeMirror: {
        backgroundColor: '#2B2B2B',
        width: '100%',
        height: '550px',
        margin: '3%',
        marginTop: '13%'
    },

    HeadCodeMirror: {
        color: '#4D8B87',
        fontSize: '16px',
        margin: '2%',
        paddingTop: '1.5%',

    },
    HeadCodeMirror2: {
        color: '#31A5BA',
        fontSize: '17px',
        width: '100%',
        padding: '-3%',
        paddingLeft: '5%',

    },
    HeadCodeMirror3: {
        color: '#cc3300',
        fontSize: '17px',
        width: '100%',
        padding: '3%',
        paddingLeft: '5%',

    },
    topicCodeMirror: {
        color: '#4D8B87',
        fontSize: '15px',
        fontWeight: 'lighter',

    },

    textCodeMirror: {
        color: '#EDD16F',
        fontSize: '15px',

    },
    HeaderTextCodeMirror: {
        color: '#ADA18F',
        fontSize: '15px',
        marginLeft: '10%',
        fontWeight: 'bold',
    },
    HeaderTextCodeMirror2: {
        color: '#ADA18F',
        fontSize: '15px',
        marginLeft: '17%',
    },
    AreaCodeMirror: {
        marginLeft: '3%',
    },
    HeaderTextCodeMirror3: {
        color: '#4D8B87',
        fontSize: '25px',
        marginLeft: '10%',
        fontWeight: 'bold',
    },

    // Demo Button

    demoButPosition: {
        position: 'absolute',
        bottom: '2%',
        marginLeft: '15%',
        width: '70%',
        textAlign: 'center',
        background: '#4D8B87',
        color: '#ffffff',
    },

    demoDropdown: {
        background: '#f2f2f2',
    },

    // footer

    footerChoosing: {
        border: "0px",
        borderRadius: "0px",
        position: 'fixed',
        bottom: '0%',
        width: '100%',
        textAlign: 'right',
        background: '#298C9F',
        color: '#262626',
        height: 'auto',
    },



    footerBeforClick: {
        color: '#ffffff',
        fontSize: '13.5px',
        fontWeight: 'bold',
    },
    footerAfterClick: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '13.5px',
        backgroundColor: '#262626',
        borderRadius: '0px'
    },



    //ForgotPassword

    Container: {
        textAlign: 'center',
        //marginTop: '15%',
        paddingTop: '3%',
        height: '100%',
        width: '50%',

    },
    DecoSegment: {
        // opacity: '0.7',
        borderRadius: '25px',
        // border: '0px solid',
        // backgroundColor:'#000000',
        height: '200%',
        marginBottom: '20%',


    }
    ,
    circularActive: {
        width: '6%',
        borderRadius: '100%',
        border: '3.5px solid  ',
        // borderColor: 'linear-gradient(red, yellow, blue)',
        fontSize: '25px',
        padding: '1.5%',
        // borderColor:'rgba(49, 165, 186, 1)  100%;'



    },

    circularInactive: {
        width: '6%',
        borderRadius: '100%',
        border: '3.5px solid ',
        fontSize: '25px',
        padding: '1.5%',
        backgroundColor: '#ffffff',



    },

    ForgotTopic: {
        fontSize: '35px',
        marginBottom: '1%',
        marginTop: '1.5%',
        color: '#ffffff',
    },

    circularZone: {
        textAlign: 'center',
        marginLeft: '37%',
        marginTop: '5%',
        marginBottom: '6%'

    },

    inputForgotZone: {
        textAlign: 'center !important',
        marginTop: '-10%',

    },

    inputForgot: {
        // width: '84%',
        width: '100%',
        marginBottom: '1%',
        // height: '16%'
    },
    ButtonNext: {
        // width: '100%',
        backgroundColor: '#31A5BA',
        color: '#ffffff',
        // marginBottom: '1.5%',
        // height: '16%',
    },
    ButtonCancel: {
        width: '100%',
        backgroundColor: '#BA3131',
        color: '#ffffff',
        height: '16%'

    },

    DividerEdit: {
        // width:'40%',
        textAlign: 'center',
        opacity: '0.5',
        // paddingRight: '10%',



    },

    LabelIcon: {
        width: '3%',
        fontSize: '15px',
        textAlign: 'center',
        height: '10%',
        marginTop: '-3%',
    },

    InputDate: {
        width: '30%',
        display: 'flex',

    },

    ForgotDescrip: {
        fontSize: '16px',
        color: '#666666',

    },

    bgDescription: {
        width: '73%',
        textAlign: 'left',
        // marginLeft: '14%',
    },

    twoColumnButton: {
        width: '87.5%',
        // marginLeft:'-2%',
        marginTop: '1.5%'


    },
    twoColumnButton2: {
        width: '78%',
        // marginLeft:'-6%',
        margintop: '15%',
        marginBottom: '2%'


    },


    decoDescription: {
        width: '84%'
    },

    //ForgotPassword On mobile

    ContainerMobile: {
        textAlign: 'center',
        //marginTop: '15%',
        paddingTop: '3%',
        height: '100%',
        width: '50%',

    },

    sidebarEdit: {
        color: 'black',

    },


    footerMobileChoosing: {
        border: "0px",
        borderRadius: "0px",
        position: 'fixed',
        bottom: '0%',
        width: '100%',
        textAlign: 'center',
        background: '#298C9F',
        color: '#262626',
        height: 'auto',
        padding: "0px",

    },

    footerMobileBeforClick: {
        color: '#ffffff',
        fontSize: '20px',
        fontWeight: 'bold',
        width: '100%',
    },
    footerMobileAfterClick: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '20px',
        backgroundColor: '#262626',
        borderRadius: '0px',
        width: '100%',
    },

    DecoSegmentMobile: {
        borderRadius: '15px',
        marginBottom: '20%',
        // height: '640px',

    },

    circularZoneMobile: {
        textAlign: 'center',
        marginLeft: '20%',
        marginTop: '10%'

    },
    circularZoneMobile2: {
        textAlign: 'center',
        marginLeft: '25%',
        marginTop: '5%',
        marginBottom: '-12%'

    },

    bgDescriptionMobile: {
        width: '96%',
        textAlign: 'left',
        marginLeft: '0%',
        marginBottom: '5%'
    },

    inputForgotZoneMobile: {
        width: '100%',
        marginTop: '-20% !important',
        marginLeft: '0%',
    },

    inputIDMobile: {
        width: '96%',
        marginBottom: '5%',
        marginLeft: '0%'
    },

    inputDateMobile: {
        width: '50%',
    },

    twoColumnButtonMobile1: {
        width: '100%',
        marginLeft: '-2%',
        marginBottom: '10%',
        marginTop: '8%'

    },
    twoColumnButtonMobile2: {
        width: '100%',
        marginLeft: '-2%',

    },

    buttonSelecctSend: {
        backgroundColor: '',
    },

    twoColumnButton2Mobile: {

        marginLeft: '-21.5%',
        width: '10%',
        marginTop: '10%',
        marginBottom: '-5%'


    },

    areaButton: {
        width: '100%',
    },

    circularZoneMobile: {
        textAlign: 'center',
        marginLeft: '28%',
        marginTop: '5%',
        marginBottom: '6%'

    },

    inputForgotMobile: {
        width: '100%',
        // marginBottom: '1%',
        // marginBottom: '4%'
    },






    //API Mobile 

    tableHeadMobile: {
        background: '#444040',
        color: '#ffffff',
        borderRadius: '0px',
        padding: '3%',
        fontSize: '15px',
        textAlign: 'left',
        width: '100%',
        // textAlign: 'Left',
        height: '35%',
        marginBottom: '-2%',


    },

    tableBodyMobile: {
        textAlign: 'left',
        fontSize: '15px',
    },


    // Code Mirror CSS on Mobile
    bgCodeMirrorMobile: {
        backgroundColor: '#2B2B2B',
        width: '100%',
        height: 'auto',
        // margin: '3%',
        marginTop: '-5%',
        marginBottom: '8%'
    },

    AreaCodeMirrorMobile: {
        marginLeft: '3%',
    },

    ForgotTopicMobile: {
        fontSize: '30px',
        marginBottom: '1%',
        paddingTop: '10%',
        color: '#ffffff',
    },


    // New Menu

    NavSize:{
        width: '18.5%',

    }















}
