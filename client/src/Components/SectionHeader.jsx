import React, { Component } from "react";
import styled from "styled-components";
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  & > h2 {
    font-size: 22px;
    color: #373948;
  }
`;
export default class SectionHeader extends Component {
  render() {
    return (
      <Container>
        <h2>{this.props.text}</h2>
      </Container>
    );
  }
}
