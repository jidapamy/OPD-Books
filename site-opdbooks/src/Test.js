import React, { Component } from 'react'
import HomeAddress from './Register/HomeAddress'
import HomeAddressForeigner from './Register/HomeAddressOfForeigner'
import { Form, Button, Input} from 'semantic-ui-react'

class Test extends Component {
  state = {
    mymy:true,
    test1:'',
    test2: '',
    test3: '',
    test4: '',
  }
  submit = (e) => {
    console.log('submit')
    console.log(e)
  }

  handleRef = (c) => {
    this.inputRef = c
  }

  focus = () => {
    this.inputRef.focus()
    console.log('Click')
  }

  render() {
    // console.log(this.state.mymy)
    return (
      <div>
        {/* <Form onSubmit={this.submit(this)} >
          <Form.Group widths='equal'>
            <Form.Input fluid label='Test 1' placeholder='Test 1' ref={this.state.test1}/>
            <Form.Input fluid label='Test 2' placeholder='Test 2' />
            <Form.Input fluid label='Test 3' placeholder='Test 3' />
          </Form.Group>
          <Form.Button type='submit' primary>Submit</Form.Button>
        </Form> */}

        {/* <Form onSubmit={this.focus} >
          <Form.Group widths='equal'>
            <Form.Input fluid label='Test 1' placeholder='Test 1' value={this.state.test1} />
          </Form.Group>
          <Form.Button type='submit' primary>Submit</Form.Button>
        </Form> */}

      </div>
    )
  }
}

export default Test