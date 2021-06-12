import React from 'react'
import styled from 'styled-components';

const Nav = styled.nav`
    height: 60px;
    background: red;
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo>Logo</Logo>
            <h1>Navbar</h1>
        </Nav>
    )
}

export default Navbar
