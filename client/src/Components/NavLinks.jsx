import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.nav`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  & > li {
    height: 100%;
    display: grid;
    place-items: center;
    list-style-type: none;
    padding: 0 20px;
    color: rgba(41, 44, 63, 0.8);
    transition: all 0.4s ease;
    border-bottom: 1px solid transparent;
    & > a {
      text-decoration: none;
      color: inherit;
      font-size: 14px;
      font-weight: 600;
      white-space: nowrap;
    }
    &:hover {
      color: #4c39c3;
      border-bottom: 1px solid #4c39c3;
    }
  }
`;

export default class lis extends Component {
  render() {
    return (
      <Container>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Become a member</a>
        </li>
      </Container>
    );
  }
}
