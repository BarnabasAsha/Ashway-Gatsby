import React from "react"
import { SubHeading, Button } from ".."
import styled from "styled-components"
import { Logo, Text } from ".."

const FooterWrapper = styled.section`
  background-color: var(--secondary-color);
  padding: 0 32px;

  @media screen and (min-width: 1500px) {
  padding: 0 64px;
  }
`
const Container = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #393939;
`
const FooterContent = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 110px 0;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <SubHeading light>Have That Idea You Want To Bring To Life?</SubHeading>
        <Button link="/" light>GET IN TOUCH</Button>
      </Container>
      <FooterContent>
          <div>
              <Logo />
              <Text small light shortdesc>
              1, Community road, off Navy Town, Ijegun Imoore, Satellite Town Lagos.
              </Text>
          </div>
          <div>
              <Text small bold light right>
                  <a href="tel:+2348033727794">+2348033727794</a>
              </Text>
              <Text small bold light right>
                  <a href="mailto:hello@shway.com">hello@ashway.com</a>
              </Text>
              <Text xsmall light right>
              © 2021 ASHWAY Integrated Services. All rights reserved.
              </Text>
          </div>
      </FooterContent>
    </FooterWrapper>
  )
}
