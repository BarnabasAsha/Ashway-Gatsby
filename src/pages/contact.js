import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import {
  Layout,
  Navbar,
  Container,
  Watermark,
  Button,
  Flex,
  MainHeading,
  Seo,
} from "../components"

const ContactWrapper = styled.section`
  position: relative;
  background: var(--secondary-color);
  padding: 0 16px;

  @media screen and (min-width: 1500px) {
    padding: 0 64px;
  }
`

const ContactForm = styled.form`
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.05);
  background: var(--white-color);
  border-radius: 20px;
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  margin-top: -64px;
  padding: 32px 7%;
`

const Input = styled.input`
  border: 2px solid rgba(140, 143, 163, 0.05);
  border-radius: 10px;
  background: #f7f8f8;
  outline: none;
  padding: 18px;
  font-size: 1rem;
  width: 100%;
  margin: 18px 0;

  &::placeholder {
    font-size: 1rem;
    color: #8c8fa3;
    font-family: var(--primary-font);
  }
`

const Textarea = styled.textarea`
  border: 2px solid rgba(140, 143, 163, 0.05);
  font-size: 1rem;
  border-radius: 10px;
  background: #f7f8f8;
  outline: none;
  padding: 18px;
  width: 100%;
  height: 100px;
  margin: 18px 0 32px 0;
  resize: none;

  &::placeholder {
    font-size: 1rem;
    color: #8c8fa3;
    font-family: var(--primary-font);
  }
`

export default function Contact() {
  return (
    <Layout hide>
      <Seo title="Contact Us" />
      <ContactWrapper>
        <Navbar />
        <Container>
          <MainHeading light center>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Talk
              to
              us
              and
              get
              your
              project
              moving!
            </motion.span>
          </MainHeading>
          <Watermark />
        </Container>
        <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
        <Container>
          <ContactForm>
            <Flex>
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Email Address" required />
              <Input type="tel" placeholder="Phone Number" required />
              <Textarea placeholder="Your Ideas and Thoughts" required />
              <Button large>Talk to us</Button>
            </Flex>
          </ContactForm>
        </Container>
        </motion.div>
      </ContactWrapper>
    </Layout>
  )
}
