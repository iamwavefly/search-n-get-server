import React, { Component } from "react";
import styled from "styled-components";
import LogoImg from "../assets/images/logo.svg";

const BrandLogo = styled.div`
  width: 10rem;
  height: 100%;
  color: #333;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  align-item: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default class Logo extends Component {
  render() {
    return (
      <BrandLogo>
        <Img src={LogoImg} />
      </BrandLogo>
    );
  }
}
