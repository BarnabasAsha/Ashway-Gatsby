import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Logo } from '..'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${props => props.light ? "#000000" : "#ffffff"};
    padding: 36px 0;
    font-family: 'Jost', sans-serif;
`

const NavLinks = styled.nav `
    display: none;

    a {
        font-weight: 500;
        font-size: 1.3rem;
        line-height: 1.8rem;
        margin-left: 32px;
        color: ${props => props.light ? "#27272A" : "#B5B5B5"};
        font-family: 'Jost', sans-serif;
    }

    @media screen and (min-width: 768px) {
        display: block;
    }

    @media screen and (min-width: 1500px) {
        display: block;
        a {
            margin-left: 60px;
        }
    }
`

export default function Navbar({ light }) {
    return (
        <Nav light={light}>
            <Logo />
            <NavLinks>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/">Portfolio</Link>
                <Link to="/">Contact</Link>
            </NavLinks>
        </Nav>
    )
}
