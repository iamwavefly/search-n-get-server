import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: fit-content;
  height: 1rem;
  padding: 8px 15px;
  border: 1px solid #eee;
  border-radius: 20px;
  color: rgba(41, 44, 63, 0.8);
  font-size: 12px;
  font-weight: 600;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    border: 1px solid #4c39c3;
    color: #4c39c3;
  }
`;

export default class Tag extends Component {
  render() {
    return (
      <Container className={this.props.type}>
        <span>{this.props.text}</span>
      </Container>
    );
  }
}
