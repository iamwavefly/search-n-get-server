import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import FilterBox from "./FilterBox";
import SectionHeader from "./SectionHeader";

const Container = styled.div`
  position: relative;
  width: 85%;
  height: auto;
  min-height: 4rem;
  margin: 10px auto auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

class JobResultDetails extends Component {
  render() {
    return (
      <Container>
        <SectionHeader
          text={`Showing ${
            this.props.posts.results ? this.props.posts.results.length : 0
          } Jobs`}
        />
        <FilterBox />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(JobResultDetails);
