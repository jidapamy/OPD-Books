import React, { Component } from 'react';
import footer from './img/footer.png';
class Footer extends Component {

    render() {
        return (
            <div >
                <div class=" ui vertical center aligned segment">
                    <img src={footer} class="imgfootter headerphoto ui fluid image " />
                <div class="boxfooter ui text footer">Copyright © 2018 Senior project OPD Books </div>
                
                </div>
            </div>
        );
    }
}

export default Footer;
