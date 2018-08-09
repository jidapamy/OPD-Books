import React, { Component } from 'react';
import { Step, Container, Grid, Icon, Segment, Image } from 'semantic-ui-react'
import styled from 'styled-components'

import TestComponent from './../components/TestComponent'

import StepZilla from './../lib/main'

const Wrapper = styled.div`
  background-size: 100% 100%;
`

const ContanierTop = styled(Container) `
    padding-top:4%;
`



export default class Test extends Component {
    render() {
        // const steps =
        //     [
        //         { name: 'Step 1', component: <TestComponent /> },
        //         { name: 'Step 2', component: <TestComponent /> },
        //         { name: 'Step 3', component: <TestComponent /> },
        //         { name: 'Step 4', component: <TestComponent /> },
        //         { name: 'Step 5', component: <TestComponent /> }
        //     ]
        return (
            <Wrapper>
                <ContanierTop>
                    <Grid centered>
                        {/* <Grid.Column>
                            Test
                        </Grid.Column> */}
                        <Step.Group attached='top'>
                            <Step>
                                <Icon name='truck' />
                                <Step.Content>
                                    <Step.Title>Shipping</Step.Title>
                                    <Step.Description>Choose your shipping options</Step.Description>
                                </Step.Content>
                            </Step>

                            <Step active>
                                <Icon name='payment' />
                                <Step.Content>
                                    <Step.Title>Billing</Step.Title>
                                    <Step.Description>Enter billing information</Step.Description>
                                </Step.Content>
                            </Step>

                            <Step disabled>
                                <Icon name='info' />
                                <Step.Content>
                                    <Step.Title>Confirm Order</Step.Title>
                                </Step.Content>
                            </Step>
                        </Step.Group>

                        <Segment attached>
                            <Image src='http://airasiagotravelreview.com/wp-content/uploads/2017/01/ผ่อนคลายไปกับ-10-โรงแรมวิวสวยชมทะเลได้จากสระ.jpg' />
                        </Segment>

                        <Step.Group attached='bottom'>
                            <Step>
                                <Icon name='truck' />
                                <Step.Content>
                                    <Step.Title>Shipping</Step.Title>
                                    <Step.Description>Choose your shipping options</Step.Description>
                                </Step.Content>
                            </Step>

                            <Step active>
                                <Icon name='payment' />
                                <Step.Content>
                                    <Step.Title>Billing</Step.Title>
                                    <Step.Description>Enter billing information</Step.Description>
                                </Step.Content>
                            </Step>

                            <Step disabled>
                                <Icon name='info' />
                                <Step.Content>
                                    <Step.Title>Confirm Order</Step.Title>
                                </Step.Content>
                            </Step>
                        </Step.Group>
                    </Grid>
                </ContanierTop>
            </Wrapper>
        )
    }
}