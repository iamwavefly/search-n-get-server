import React, { Component } from "react";
import styled from "styled-components";
import AccountMenu from "./AccountMenu";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Container = styled.div`
  position: relative;
  width: 85%;
  height: auto;
  min-height: 3.5rem;
  margin: 5px auto auto;
  display: grid;
  grid-template-columns: auto repeat(2, 1fr);
  align-item: center;
  justify-content: center;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.04);
`;

const BrandLogo = styled.div`
  width: auto;
  min-width: 10rem;
  height: 100%;
  color: #333;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  align-item: center;
`;

export default class Header extends Component {
  render() {
    return (
      <Container>
        <BrandLogo>
          <Logo />
        </BrandLogo>
        <NavLinks />
        <AccountMenu />
      </Container>
    );
  }
}
