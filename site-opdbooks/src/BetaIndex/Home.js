import React, { Component } from 'react';
import Navbar from './Navbar';
import Content from './Container';
import Headers from './Header';
import Footer from './Footer';


class Home extends Component {

    render() {
        return (
            <div >
                <Navbar/>
                {/* <Headers/> */}
                <Content/>
                {/* <Footer/> */}
            </div>
        );
    }
}

export default Home;
