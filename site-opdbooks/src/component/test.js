import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class Test extends Component {
    render() {
        return (
            <div className="App">
              <p>Hello</p>
              <div>
                  <Button primary>Primary</Button>
                  <Button secondary>Secondary</Button>
              </div>
            </div>
        );
    }
}

export default Test;
