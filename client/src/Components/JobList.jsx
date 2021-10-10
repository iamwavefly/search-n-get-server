import React, { Component } from "react";
import styled from "styled-components";
import JobPanel from "./JobPanel";
const Container = styled.div`
  position: relative;
  width: 85%;
  height: auto;
  margin: 2rem auto auto;
`;
export default class JobList extends Component {
  render() {
    return (
      <Container>
        <JobPanel />
      </Container>
    );
  }
}
