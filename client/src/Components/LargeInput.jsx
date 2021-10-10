import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { fetchPostsWithRedux } from "../Reducers";
import Button from "./Button";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 50px;
  padding: 0 20px;
  color: rgba(41, 44, 63, 0.8);
  font-size: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 10, 0.05);
`;
const BtnWrapper = styled.div`
  position: absolute;
  width: fit-content;
  height: auto;
  right: -8%;
  top: 10%;
`;
class LargeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "Java Developer",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }
  handleSubmit() {
    this.props.updateSearchTerm(this.state.searchTerm);
    this.props.fetchJobs(this.props.posts.searchTerm, 100);
    // this.setState({ searchTerm: "" });
  }
  render() {
    return (
      <Container>
        <Input
          value={this.state.searchTerm}
          onChange={this.handleChange}
          autoFocus
          placeholder="Search here..."
        />
        <BtnWrapper>
          <Button
            handleSubmit={this.handleSubmit}
            btnType="job-search"
            text="Search Job"
          />
        </BtnWrapper>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchTerm: (val) => {
      dispatch({ type: "UPDATE_SEARCH_TERM", val });
    },
    fetchJobs: bindActionCreators(fetchPostsWithRedux, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LargeInput);
