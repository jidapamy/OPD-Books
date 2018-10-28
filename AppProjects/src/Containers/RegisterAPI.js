import React, { Component } from "react";
import styled from "styled-components";
import BGGs from "./../Static/Img/BG.png";
import { Container, Header } from "semantic-ui-react";

const Wrapper = styled.div`
  background: url(${BGGs}) no-repeat center fixed;
  background-size: 100% 100%;
`;

class GenerateWallet extends Component {
  render() {
    return  (
        <Wrapper >
           
                        <br />
                        <Header as="h1" textAlign="center">
                           
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfLMG-KO2nKWJdzt4JDcVmycXLCTeug4eTm6Y74MDX6vNR6CQ/viewform?embedded=true" width="540" height="2043" frameborder="0" marginheight="0" marginwidth="0">กำลังโหลด...</iframe>
                        </Header>
                        
                        <br/>
                        
                    

                    
        </Wrapper>
    )
  }
}

export default GenerateWallet;
