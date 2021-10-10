import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";
import SearchInput from "./SearchInput";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 5%;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 2rem;
  display: flex;
  align-items: center;
`;

export default class AccountMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <SearchInput />
        <ButtonWrapper>
          <Button btnType="secondary" text="Log In" />
          <Button text="Sign Up" />
        </ButtonWrapper>
      </Container>
    );
  }
}
