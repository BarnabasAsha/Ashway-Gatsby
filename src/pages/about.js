import React from "react"
import Fade from 'react-reveal/Fade'
import styled from "styled-components"
import { motion } from 'framer-motion'
import { graphql } from "gatsby"
import {
  Container,
  Layout,
  Navbar,
  Watermark,
  Flex,
  MainHeading,
  Text,
  SubHeading,
  Identity, 
  ServiceCard,
  Seo
} from "../components"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.section`
  position: relative;
  background: var(--white-color);
  padding: 0 16px;

  @media screen and (min-width: 1500px) {
  padding: 0 64px;
}
`

const IdentityWrapper = styled.section`
  position: relative;
  background: var(--primary-color);
  padding: 0 16px;

  @media screen and (min-width: 1500px) {
  padding: 0 64px;
}
`

const TeamWrapper = styled.section`
  position: relative;
  background: var(--tertiary-color);
  padding: 0 16px;

  @media screen and (min-width: 1500px) {
  padding: 0 64px;
}
`

const HeroImg = styled.div`
  display: none;

  @media screen and (min-width: 767px) {
    width: 300px;
    display: block;
  }

  @media screen and (min-width: 1400px) {
    width: 410px;
    display: block;
  }
`

const Team = styled(Flex)`
   margin: 18px;
   flex-direction: column;
`

const Services = styled.div`
  background-color: var(--tertiary-color);
  padding-bottom: 32px;
`

export default function About({ data }) {
  console.log(data)
  return (
    <Layout>
      <Seo title="About Us" />
      <Wrapper>
        <Navbar light />
        <Container>
          <Flex column>
            <MainHeading center>
              <motion.span initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.5, duration: 1,}}>Different&nbsp;</motion.span>
              <motion.span initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 1, duration: 1,}}>Approach&nbsp;</motion.span>
              <motion.span initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 1.5, duration: 1,}}>Quality&nbsp;</motion.span>
          <motion.span initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 2, duration: 1,}}>Output&nbsp;</motion.span>
            </MainHeading>
            <HeroImg>
              <motion.div initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 2.5, duration: 1,}}>
              <img src="/about-hero.svg" alt="A welder welding" />
              </motion.div>
            </HeroImg>
          </Flex>
        </Container>
        <Watermark />
      </Wrapper>
      <IdentityWrapper>
      <Container>
        <SubHeading><Fade bottom cascade>Our Identity</Fade></SubHeading>
        <Text column>
        <Fade bottom>
        Ashway integrated services with RC: 234667 has been opreating for about 10 years with the mission to provide quality products and services ranging from steel gates and doors, laser pattern rails.
        At Ashway we offer various products and services ranging from steel gates and doors, laser pattern rails and gates, steel shelves, interior decoration and whatever your mind can concieve
        </Fade>
        </Text>
        <Flex>
            <Identity>
              <Fade bottom>
              <Flex>
                <img src="/identity-1.svg" alt="Investment Icon" />
                <Text bold small center>
                  Investment In Our People
                </Text>
              </Flex>
              </Fade>
            </Identity>
            <Identity>
            <Fade bottom>
              <Flex>
                <img src="/identity-2.svg" alt="Community Icon" />
                <Text bold small center>
                  Community Care
                </Text>
              </Flex>
              </Fade>
            </Identity>
            <Identity>
            <Fade bottom>
              <Flex>
                <img src="/identity-3.svg" alt="Safety Icon" />
                <Text bold small center>
                  Safety, Health and Environment Care Policy
                </Text>
              </Flex>
              </Fade>
            </Identity>
          </Flex>
      </Container>
      </IdentityWrapper>
      <Services>
        <Container>
            <SubHeading light><Fade bottom cascade>What We Offer</Fade></SubHeading>
            <Flex>
              {
                data.allServicesJson.nodes.map(card => {
                  return (
                    <Fade bottom>
                    <ServiceCard {...card} />
                    </Fade>
                  )
                })
              }
            </Flex>
        </Container>
      </Services>
      <TeamWrapper>
      <Container>
        <SubHeading light><Fade bottom cascade>Our Team</Fade></SubHeading>
        <Text light desc center>
        <Fade bottom>
        We are lead by innovative individuals, Our goal is to offer innovative and durable solutions to your needs. We put the needs of our customers first lorem ipsum dolor iput lorem dolor dolord dolor
        </Fade>
        </Text>

        <Flex>
        <Fade left>
          <Team>
          <StaticImage src="../images/about/founder.jpg" placeholder="blurred" alt="Afolabi Ajani" />
          <Text light small bold>Afolabi Ajani</Text>
          <Text xsmall grey>CoFounder CEO</Text>
          </Team>
          </Fade>
        <Fade right>
          <Team>
          <StaticImage src="../images/about/founder.jpg" placeholder="blurred" alt="Afolabi Ajani" />
          <Text light small bold>Suresh Suresh</Text>
          <Text xsmall grey>CoFounder CEO</Text>
          </Team>
          </Fade>
        </Flex>
      </Container>
      </TeamWrapper>
    </Layout>
  )
}

export const getServices = graphql`
query MyServices {
  allServicesJson {
    nodes {
      description
      icon
      id
      title
    }
  }
}

`