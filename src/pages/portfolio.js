import React from 'react'
import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import { Layout, Container, Watermark, MainHeading, Text, Navbar, Flex, Seo } from '../components'
import styled from 'styled-components'
import Gallery from '@browniebroke/gatsby-image-gallery'

const PortfolioHero = styled.section`
  position: relative;
  background: var(--secondary-color);
  padding: 0 32px;

  @media screen and (min-width: 1500px) {
  padding: 0 64px;  
  }  
`

const Wrapper = styled.section`
  position: relative;
  background: var(--primary-color);
  padding: 0 16px;

  @media screen and (min-width: 1500px) {
  padding: 0 64px;
}
`

export default function Portfolio({ data }) {
    const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
    return (
        <Layout>
      <Seo title="Our Portfolio"/>
            <PortfolioHero>
                <Navbar />
                <Container>
                    <Flex nowrap column>
                    <MainHeading center light>
                      <motion.span initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.2, duration: 1,}}>
                      Our Portfolio
                      </motion.span>
                    </MainHeading>
                    <Text center light grey desc>
                    <motion.span initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.7, duration: 1,}} >
                    We value our clients and see them as our partners, we respect their needs, budget and appeal. We are confident to offer products with true worth and value that would stand the test of time
                    </motion.span>
                    </Text>
                    </Flex>
                </Container>
                <Watermark />
            </PortfolioHero>
            <Wrapper>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
            <Container>
              <Gallery images={images} />
            </Container>
            </motion.div>
            </Wrapper>
        </Layout>
    )
}

export const query = graphql`
query MyImages {
    allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
      edges {
        node {
          childImageSharp {
              thumb: gatsbyImageData(
                width: 250
                height: 250
                placeholder: BLURRED
              )
              full: gatsbyImageData(layout: FULL_WIDTH)
            }
        }
      }
    }
  }
  
`
