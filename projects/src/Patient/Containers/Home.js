import React, { Component } from 'react';
import Header from './../Components/Header';
import Navbar from './../Components/NavbarIndex';
import Content from './../Components/Container';
// import Content from './Container';
// import Headers from './Header';
// import Footer from './Footer';

class Home extends Component {
    render() {
        return (
            <div >
                <Navbar />
                <Header />
                {/* <Headers /> */}
                <Content />
                {/* <Footer/> */}
            </div>
        );
    }
}

export default Home;