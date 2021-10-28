import React from "react"
import { SubHeading, Button } from ".."
import styled from "styled-components"
import { Logo, Text } from ".."

const FooterWrapper = styled.section`
  background-color: var(--white-color);
  padding: 64px 16px 0px 16px;

  @media screen and (min-width: 1500px) {
  padding: 10px 64px 0 64px;
  }
`
const Container = styled.div`
  background-color: var(--secondary-color);
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #393939;
  border-radius: 50px;
  padding: 16px;
`
const FooterContent = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px 0;
  
  @media screen and (max-width: 999px) {
    p {
      text-align: left !important;
    }
}

  @media screen and (min-width: 1000px) {
    justify-content: space-between;
    align-items: flex-end;
  }
`

export default function Footer(props) {
  return (
    <FooterWrapper>
      {
        !props.hide ? (
          <Container>
          <SubHeading light>Have That Idea You Want To Bring To Life?</SubHeading>
          <Button link="/" light>GET IN TOUCH</Button>
        </Container>
        ) : null
      }
      <FooterContent>
          <div style={{margin: '1em'}}>
              <Logo />
              <Text small shortdesc>
              1, Community road, off Navy Town, Ijegun Imoore, Satellite Town Lagos.
              </Text>
          </div>
          <div style={{margin: '1em'}}>
              <Text small bold right>
                  <a href="tel:+2348033727794">+2348033727794</a>
              </Text>
              <Text small bold right>
                  <a href="mailto:hello@shway.com">hello@ashway.com</a>
              </Text>
              <div style={{margin: '0.8em 0 0 0.8em'}}>
              <Text xsmall right>
              © 2021 ASHWAY Integrated Services. All rights reserved.
              </Text>
              </div>
          </div>
      </FooterContent>
    </FooterWrapper>
  )
}
