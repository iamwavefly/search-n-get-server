import React, { Component } from "react";
import { GoSettings } from "react-icons/go";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import styled from "styled-components";
import { updateJobsFreelance } from "../Actions";
import { fetchPostsWithRedux } from "../Reducers";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
  grid-gap: 20px;
`;
const Filters = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: flex-end;
`;
const VisibleCheck = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Filter = styled.div``;
const SortWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  grid-template-columns: 2fr 2fr;
  justify-content: flex-end;
  align-items: center;
  & > select {
    width: 60%;
    height: 60%;
    border-radius: 20px;
    margin: auto 10px auto 0px;
    background: #fff;
    padding: 0 10px;
    border: 1px solid #ddd;
    outline: none;
    color: #373948;
  }
`;
const SortMenu = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: grid;
  color: #4c39c3;
  place-items: center;
  padding: 4px;
  transform: rotate(90deg);
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    background: #4c39c3;
    color: #fff;
  }
`;

class FilterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullTime: true,
      freelance: false,
    };
    this.fullTimeToggle = this.fullTimeToggle.bind(this);
    this.freelanceToggle = this.freelanceToggle.bind(this);
  }
  fullTimeToggle() {
    this.props.updateJobsFullTime(!this.props.posts.fullTime);
    this.props.fetchJobs(this.props.posts.searchTerm, 100);
  }
  freelanceToggle() {
    this.props.updateJobsFreelance(!this.props.posts.freelance);
    this.props.fetchJobs(this.props.posts.searchTerm, 100);
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <Container>
        <Filters>
          <Filter className="filter-checkbox">
            <input
              onChange={this.fullTimeToggle}
              type="checkbox"
              checked={this.props.posts.fullTime}
              id="fulltime"
            />
            <label htmlFor="fulltime"></label>
            <span>Full-time</span>
          </Filter>
          <Filter className="filter-checkbox">
            <input
              type="checkbox"
              id="freelance"
              checked={this.props.posts.freelance}
              onChange={this.freelanceToggle}
            />
            <label htmlFor="freelance"></label>
            <span>Freelance</span>
          </Filter>
        </Filters>
        <VisibleCheck>
          <Filter className="filter-switch">
            <label className="switch" htmlFor="details"></label>
            <input type="checkbox" id="details" />
            <span>Details</span>
          </Filter>
          <Filter className="filter-switch">
            <label className="switch" htmlFor="Salary"></label>
            <input type="checkbox" id="Salary" />
            <span>Salary</span>
          </Filter>
        </VisibleCheck>
        <SortWrapper>
          <select id="">
            <option value="new">New</option>
            <option value="new">Popular</option>
          </select>
          <SortMenu>
            <GoSettings />
          </SortMenu>
        </SortWrapper>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
const mapDispatchprops = (dispatch) => {
  return {
    updateJobsFreelance: (val) => {
      dispatch({ type: "UPDATE_JOBS_FREELANCE", val });
    },
    updateJobsFullTime: (val) => {
      dispatch({ type: "UPDATE_JOBS_FULLTIME", val });
    },
    fetchJobs: bindActionCreators(fetchPostsWithRedux, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchprops)(FilterBox);
