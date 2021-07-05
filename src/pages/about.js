import React from "react"
import styled from "styled-components"
import {
  Container,
  Hero,
  Layout,
  Navbar,
  Watermark,
  Flex,
  MainHeading,
  Text,
  SubHeading,
  Identity
} from "../components"

const Offers = styled.div`
  background-color: var(--secondary-color);
`
const HeroImg = styled.div`
  width: 410px;
`

export default function about() {
  return (
    <Layout>
      <Hero>
        <Navbar light />
        <Container>
          <Flex column>
            <MainHeading center>
              Different Approach
              <br />
              Quality Output
            </MainHeading>
            <HeroImg>
              <img src="/about-hero.svg" alt="A welder welding" />
            </HeroImg>
          </Flex>
        </Container>
        <Watermark />
      </Hero>
      <Container>
        <SubHeading>Our Identity</SubHeading>
        <Text column>
        Ashway integrated services with RC: 234667 has been opreating for about 10 years with the mission to provide quality products and services ranging from steel gates and doors, laser pattern rails.
        At Ashway we offer various products and services ranging from steel gates and doors, laser pattern rails and gates, steel shelves, interior decoration and whatever your mind can concieve
        </Text>
        <Flex>
          <Identity>
            <Flex>
              <img src="/identity-1.svg" alt="Investment Icon" />
              <Text bold small center>Investment In Our People</Text>
            </Flex>
          </Identity>
          <Identity>
            <Flex>
              <img src="/identity-2.svg" alt="Community Icon" />
              <Text bold small center>Community Care</Text>
            </Flex>
          </Identity>
          <Identity>
            <Flex>
              <img src="/identity-3.svg" alt="Safety Icon" />
              <Text bold small center>Safety, Health and Environment Care Policy</Text>
            </Flex>
          </Identity>
        </Flex>
      </Container>
      <Offers>
        <Container>
            <SubHeading>What We Offer</SubHeading>
        </Container>
      </Offers>
    </Layout>
  )
}
