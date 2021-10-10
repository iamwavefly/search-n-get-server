import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  & > i {
    position: absolute;
    right: 0;
    top: 33%;
    font-size: 15px;
    color: #888;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 2.3rem;
  margin: auto 0;
  border: 1px solid #eee;
  border-radius: 20px;
  padding: 0px 20px;
  outline: none;
  color: #2b2d42;
`;

export default class SearchInput extends Component {
  render() {
    return (
      <Container>
        <Input placeholder="Search jobs here..." />
        <i class="lni lni-search-alt"></i>
      </Container>
    );
  }
}
