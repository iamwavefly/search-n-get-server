import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";

import styled from "styled-components";
import Button from "./Button";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export default class JobCta extends Component {
  render() {
    return (
      <Container>
        <Button text="Apply Now" btnType="secondary" />
        <Button text={<FaHeart />} btnType="danger round" />
      </Container>
    );
  }
}
