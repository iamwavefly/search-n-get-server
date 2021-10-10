import React, { Component } from "react";
import styled from "styled-components";
import Tag from "./Tag";
const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 1rem;
  // border-bottom: 1px solid #eee;
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin: 4px;
  }
`;
export default class TagContainer extends Component {
  render() {
    return (
      <Container>
        <Tag text="Web Dev" />
        <Tag text="Accounting" />
        <Tag text="Writing" />
        <Tag text="Mobile Dev" />
        <Tag text="Admin Support" />
        <Tag text="Customer Service" />
        <Tag type="tag-cta" text="View all category" />
      </Container>
    );
  }
}
