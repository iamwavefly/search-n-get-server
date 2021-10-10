import React, { Component } from "react";
import styled from "styled-components";
import imgError from "../assets/images/brand/placeholder.png";
const Container = styled.div`
  width: 100%;
  height: auto;
  max-height: 100%;
  display: grid;
  grid-template-columns: 20% 1fr;
  & > div:first-child {
    width: 60%;
    height: 60%;
    display: grid;
    place-items: center;
    margin: auto auto;
    border-radius: 10px;
    overflow: hidden;
    & > img {
      position: relative;
      height: auto;
      max-width: 100%;
      object-fit: cover;
    }
  }
  & > div:last-child {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 0rem;
    padding: 0;
    & > h2 {
      font-size: 16px;
      font-weight: 800;
      color: #373948;
      white-space: nowrap;
    }
    & > p {
      line-height: 0rem;
      font-size: 15px;
      color: #4c39c3;
      margin-top: 10px;
      white-space: nowrap;
    }
  }
`;
export default class JobHeader extends Component {
  render() {
    return (
      <Container>
        <div className="job-company-logo">
          <img
            src={this.props.imgUrl}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = imgError;
            }}
            alt=""
          />
        </div>
        <div className="content">
          <h2>
            {this.props.jobTitle && this.props.jobTitle.length > 40
              ? this.props.jobTitle.substring(0, 40) + "..."
              : this.props.jobTitle}
          </h2>
          <p>
            {this.props.companyName && this.props.companyName.length > 35
              ? this.props.companyName.substring(0, 35) + "..."
              : this.props.companyName}
          </p>
        </div>
      </Container>
    );
  }
}
