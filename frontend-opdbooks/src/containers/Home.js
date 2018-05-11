import React, { Component } from 'react';
import Header from './../components/Header';
import Navbar from './../components/NavbarIndex';
import Content from './../components/Container';
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