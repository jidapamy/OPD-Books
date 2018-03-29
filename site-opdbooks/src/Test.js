import React, { Component } from 'react'
import HomeAddress from './Register/HomeAddress'
import HomeAddressForeigner from './Register/HomeAddressOfForeigner'
import { Form } from 'semantic-ui-react'

// const Address = () => {
//   console.log(this.state.mymy)
//   if (this.state.mymy){
//     return <div>
//             <h1>ID CARD</h1>
//             <HomeAddress />
//           </div>
//   }
//   return <div>
//             <h1>Passport</h1>
//             <HomeAddressForeigner />
//          </div>

// }

// const options = [
//   { key: 1, text: 'idcard', value: 'idcard' },
//   { key: 2, text: 'passpot', value: 'passpot' },
// ]

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

  render() {
    // const button = this.state.mymy===true ? (
    //   <div>
    //     <h1>ID CARD</h1>
    //     <HomeAddress />
    //   </div>
    // ) : (
    //     <div>
    //       <h1>Passport</h1>
    //       <HomeAddressForeigner />
    //     </div>
    // );
    console.log(this.state.mymy)
    return (
      <div>
        <Form onSubmit={this.submit(this)} >
          <Form.Group widths='equal'>
            <Form.Input fluid label='Test 1' placeholder='Test 1' name='test1' ref='test1'/>
            <Form.Input fluid label='Test 2' placeholder='Test 2' name='test2' />
            <Form.Input fluid label='Test 3' placeholder='Test 3' name='test3' />
          </Form.Group>
          <Form.Button type='submit' primary>Submit</Form.Button>
        </Form>



        {/* <Input placeholder='Test 1...' name='test1' />
        <Input placeholder='Test 2...' name='test2' />
        <Input placeholder='Test 3...' name='test3' />
        <Input placeholder='Test 4...' name='test4' />
        <Button primary onClick={this.Submit}>Primary</Button>
         */}
        {/* <Menu compact>
          <Dropdown text='Dropdown' 
                    options={options} 
                    simple 
                    item 
                    value={this.state.idcardType}/>
        </Menu>
        <br/>
        <br/>
        {button} */}
      </div>
    )
  }
}

export default Test