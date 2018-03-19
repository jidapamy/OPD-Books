import React, { Component } from 'react';
import Navbar from './navbar.js';
import Content from './content.js';
import Headers from './headers.js';
import Footer from './footer.js';


class App extends Component {

    render() {
        return (
            <div >
                <Navbar />
                <Headers />
                <Content/>
                <Footer />


            </div>
        );
    }
}

export default App;
