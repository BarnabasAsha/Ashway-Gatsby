import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import { motion } from "framer-motion"
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
  Seo,
} from "../components"
import { StaticImage } from "gatsby-plugin-image"
import { InView } from "react-intersection-observer"


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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <MainHeading center>
                Different Approach Quality Output
              </MainHeading>
            </motion.div>
            <HeroImg>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                <img src="/about-hero.svg" alt="A welder welding" />
              </motion.div>
            </HeroImg>
          </Flex>
        </Container>
        <Watermark />
      </Wrapper>
      <IdentityWrapper>
        <Container>
          <InView threshold={0.3}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ y: 80, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <SubHeading>Our Identity</SubHeading>
              </motion.div>
            )}
          </InView>
          <InView threshold={0.3}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ y: 80, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Text column>
                  Ashway integrated services with RC: 234667 has been opreating
                  for about 10 years with the mission to provide quality
                  products and services ranging from steel gates and doors,
                  laser pattern rails. At Ashway we offer various products and
                  services ranging from steel gates and doors, laser pattern
                  rails and gates, steel shelves, interior decoration and
                  whatever your mind can concieve
                </Text>
              </motion.div>
            )}
          </InView>
          <Flex>
            <Identity>
              <InView threshold={0.3}>
                {({ ref, inView }) => (
                  <motion.div
                    ref={ref}
                    initial={{ y: 50, opacity: 0 }}
                    animate={
                      inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                    }
                    transition={{ duration: 0.9 }}
                  >
                    <Flex>
                      <img src="/identity-1.svg" alt="Investment Icon" />
                      <Text bold small center>
                        Investment In Our People
                      </Text>
                    </Flex>
                  </motion.div>
                )}
              </InView>
            </Identity>

            <Identity>
              <InView threshold={0.3}>
                {({ ref, inView }) => (
                  <motion.div
                    ref={ref}
                    initial={{ y: 50, opacity: 0 }}
                    animate={
                      inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                    }
                    transition={{ duration: 0.9 }}
                  >
                    <Flex>
                      <img src="/identity-2.svg" alt="Community Icon" />
                      <Text bold small center>
                        Community Care
                      </Text>
                    </Flex>
                  </motion.div>
                )}
              </InView>
            </Identity>
            <Identity>
              <InView threshold={0.3}>
                {({ ref, inView }) => (
                  <motion.div
                    ref={ref}
                    initial={{ y: 50, opacity: 0 }}
                    animate={
                      inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                    }
                    transition={{ duration: 0.9 }}
                  >
                    <Flex>
                      <img src="/identity-3.svg" alt="Safety Icon" />
                      <Text bold small center>
                        Safety, Health and Environment Care Policy
                      </Text>
                    </Flex>
                  </motion.div>
                )}
              </InView>
            </Identity>
          </Flex>
        </Container>
      </IdentityWrapper>
      <Services>
        <Container>
          <InView threshold={0.3}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ y: 80, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <SubHeading light>What We Offer</SubHeading>
              </motion.div>
            )}
          </InView>
          <Flex>
            {data.allServicesJson.nodes.map(card => {
              return (
                <InView threshold={0.3}>
                  {({ ref, inView }) => (
                    <motion.div
                      ref={ref}
                      initial={{ y: 30, opacity: 0 }}
                      animate={
                        inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                      }
                      transition={{ duration: 0.8 }}
                    >
                      <ServiceCard {...card} />
                    </motion.div>
                  )}
                </InView>
              )
            })}
          </Flex>
        </Container>
      </Services>
      <TeamWrapper>
        <Container>
          <InView threshold={0.3}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ y: 80, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <SubHeading light>Our Team</SubHeading>
              </motion.div>
            )}
          </InView>
          <InView threshold={0.3}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ y: 80, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Text light desc center>
                  We are lead by innovative individuals, Our goal is to offer
                  innovative and durable solutions to your needs. We put the
                  needs of our customers first lorem ipsum dolor iput lorem
                  dolor dolord dolor
                </Text>
              </motion.div>
            )}
          </InView>
          <InView threshold={0.3}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ y: 40, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Flex>
                  <Team>
                    <StaticImage
                      src="../images/about/founder.jpg"
                      placeholder="blurred"
                      alt="Afolabi Ajani"
                    />
                    <Text light small bold>
                      Afolabi Ajani
                    </Text>
                    <Text xsmall grey>
                      CoFounder CEO
                    </Text>
                  </Team>
                  <Team>
                    <StaticImage
                      src="../images/about/founder.jpg"
                      placeholder="blurred"
                      alt="Afolabi Ajani"
                    />
                    <Text light small bold>
                      Suresh Suresh
                    </Text>
                    <Text xsmall grey>
                      CoFounder CEO
                    </Text>
                  </Team>
                </Flex>
              </motion.div>
            )}
          </InView>
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
