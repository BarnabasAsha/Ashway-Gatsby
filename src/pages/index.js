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
  Hero
} from "../components"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

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

  @media screen and (min-width: 1400px) {
    display: block;
  }
`

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <Hero dark>
        <Navbar />
        <HeroContainer>
          <HeroContent>
            <MainHeading light>Crafting Cutting-Edge Products</MainHeading>
            <Text grey desc>
              A team of innovative and creative craftmen building beautiful
              products from steel and metal while maintaining durability
            </Text>
          </HeroContent>
          <HeroImg>
            <img src="/home-hero.svg" alt="A Welder" />
          </HeroImg>
        </HeroContainer>
        <Watermark />
      </Hero>
      <Container>
        <SubHeading>Value And Quality Held With High Regard</SubHeading>
        <Text desc center>
          At Ashway we offer various products and services ranging from steel
          gates and doors, laser pattern rails and gates, steel shelves,
          interior decoration and whatever your mind can concieve
        </Text>
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
        <Button link="/" marginTop>
          EXPLORE
        </Button>
      </Container>
      <Container>
        <SubHeading>Our Identity</SubHeading>
        <Text desc center>
          Ashway integrated service is a steel construction and fabrication
          company located in Lagos, Nigeria, Providing quality services for over
          ten yerars now. Ashway is trusted by many for extensive quality
          services in areas such as steel doors favrication, interrior
          decoration, Tank stands .
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
