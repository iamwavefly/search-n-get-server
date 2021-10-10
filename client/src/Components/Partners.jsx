import React, { Component } from "react";
import styled from "styled-components";
import google from "../assets/images/brand/google-logo.png";
import ziprecruiter from "../assets/images/brand/ziprecruiter-logo.jpg";
import freelancer from "../assets/images/brand/freelancer-logo.png";
import indeed from "../assets/images/brand/indeed-logo.png";
import joberman from "../assets/images/brand/joberman-logo.jpeg";
import monster from "../assets/images/brand/monster-logo.png";

const Container = styled.div`
  height: 5rem;
  width: 70%;
  margin: 2rem auto auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 40px;
  padding: 0 40px;
  & > div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    & > img {
      width: 100%;
      height: 100%;
      filter: grayscale();
      object-fit: contain;
      opacity: 0.5;
    }
  }
`;

export default class Partners extends Component {
  render() {
    return (
      <Container>
        <div className="brand-logo">
          <img src={google} alt="google logo" />
        </div>
        <div className="brand-logo">
          <img src={ziprecruiter} alt="ziprecruiter logo" />
        </div>
        <div className="brand-logo">
          <img src={freelancer} alt="freelancer logo" />
        </div>
        <div className="brand-logo">
          <img src={indeed} alt="indeed logo" />
        </div>
        <div className="brand-logo">
          <img src={joberman} alt="joberman logo" />
        </div>
        <div className="brand-logo">
          <img src={monster} alt="monster logo" />
        </div>
      </Container>
    );
  }
}
