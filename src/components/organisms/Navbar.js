import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Logo } from ".."

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${props => (props.light ? "#000000" : "#ffffff")};
  padding: 36px 16px;
  font-family: "Jost", sans-serif;
`

const NavLinks = styled.nav`
  a {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.8rem;
    margin-left: 32px;
    color: ${props => (props.light ? "#27272A" : "#B5B5B5")};
    font-family: "Jost", sans-serif;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: var(--white-color);
    border-top: 1px solid var(--secondary-color);
    display: flex;
    justify-content: space-around;
    padding: 10px;
    align-items: center;
    z-index: 20;

    a {
        color: var(--dark-variant-1);
        font-size: 1rem;
        margin: 5px 0;
    }
  }

  @media screen and (min-width: 1500px) {
    a {
      margin-left: 60px;
    }
  }
`

export default function Navbar({ light }) {
  return (
    <Nav light={light}>
      <Logo />
      <NavLinks light={light}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </Nav>
  )
}
