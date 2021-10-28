import React from "react"
import {
  Navbar,
  Layout,
  MainHeading,
  Watermark,
  Text,
  Flex,
  Container,
  Image,
  SubHeading,
  Button,
  Identity,
  Seo,
} from "../components"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { InView } from "react-intersection-observer"

const HomeHero = styled.section`
  width: 100%;
  position: relative;
  padding: 0 32px;
  background-color: var(--secondary-color);
  height: 100vh;

  @media screen and (min-width: 767px) and (max-width: 1400px) {
    height: 650px;
  }

  @media screen and (min-width: 1500px) {
    padding: 0 64px;
  }
`
const ShowCase = styled.div`
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

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  @media screen and (min-width: 1400px) {
    justify-content: flex-start;
  }
`
const HeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    text-align: center;
  }

  @media screen and (min-width: 1400px) {
    width: 50%;
    text-align: left;
    align-items: flex-start;

    p {
      text-align: left;
    }
  }
`

const HeroImg = styled.div`
  display: none;
  width: 500px;
  margin-left: 45px;
  align-self: flex-start;

  @media screen and (min-width: 1400px) {
    display: block;
  }
`

export default function Home({ data }) {
  return (
    <Layout>
      <Seo
        title="Ashway"
        description="At Ashway we offer various products and services ranging from fabrication of steel
          gates and doors, laser pattern rails and gates, steel shelves,
          interior decoration and whatever your mind can concieve"
      />
      <HomeHero>
        <Navbar />
        <HeroContainer>
          <HeroContent>
            <MainHeading light>
            <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                Crafting
                Cutting-Edge
                Products
              </motion.span>
            </MainHeading>

            <Text grey desc>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                A team of innovative and creative craftmen building beautiful
                products from steel and metal while maintaining durability
              </motion.span>
            </Text>
          </HeroContent>
          <HeroImg>
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 30 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ delay: 1, duration: 2 }}
            >
              <img src="/home-hero.svg" alt="A Welder" />
            </motion.div>
          </HeroImg>
        </HeroContainer>
        <Watermark />
      </HomeHero>
      <ShowCase>
        <Container>
          <InView threshold={0.3}>
            {({ ref, inView }) => (
               <motion.div
               ref={ref}
               initial={{ y: 80, opacity: 0 }}
               animate={
                 inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }
               }
               transition={{ duration: 0.8 }}
             >
              <SubHeading>
                  Value And Quality Held With High Regard
              </SubHeading>
              </motion.div>
            )}
          </InView>
          <InView threshold={0.3}>
            {({ ref, inView }) => (
              <motion.div
              ref={ref}
              initial={{ y: 90, opacity: 0 }}
              animate={
                inView ? { y: 0, opacity: 1 } : { y: 90, opacity: 0 }
              }
              transition={{ duration: 0.8 }}
            >
              <Text desc center>
                  At Ashway we offer various products and services ranging from
                  fabrication of steel gates and doors, laser pattern rails and
                  gates, steel shelves, interior decoration and whatever your
                  mind can concieve
              </Text>
              </motion.div>

            )}
          </InView>

          <InView threshold={0.3}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ y: 150, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
                transition={{ duration: 0.9 }}
              >
                <Flex>
                  {data.allFile.nodes.map(img => {
                    return (
                      <Image>
                        <GatsbyImage
                          key={img.id}
                          image={img.childrenImageSharp[0].gatsbyImageData}
                          alt="Product Image"
                        />
                      </Image>
                    )
                  })}
                </Flex>
              </motion.div>
            )}
          </InView>
          <Button link="/" marginTop>
            EXPLORE
          </Button>
        </Container>
      </ShowCase>
      <IdentityWrapper>
        <Container>
        <InView threshold={0.3}>
            {({ ref, inView }) => (
              <motion.div
              ref={ref}
              initial={{ y: 80, opacity: 0 }}
              animate={
                inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }
              }
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
              animate={
                inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }
              }
              transition={{ duration: 0.8 }}
            >
          <Text desc center>
            Ashway integrated service is a steel construction and fabrication
            company located in Lagos, Nigeria, Providing quality services for
            over ten yerars now. Ashway is trusted by many for extensive quality
            services in areas such as steel doors favrication, interrior
            decoration, Tank stands .
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
                initial={{ y: 80, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
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
                initial={{ y: 80, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
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
                initial={{ y: 80, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
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
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allFile(filter: { relativeDirectory: { eq: "home" } }) {
      nodes {
        childrenImageSharp {
          gatsbyImageData
          id
        }
      }
    }
  }
`
