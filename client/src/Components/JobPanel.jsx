import React, { Component } from "react";
import styled from "styled-components";
import JobDetails from "./JobDetails";
import JobHeader from "./JobHeader";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillClockCircle } from "react-icons/ai";
import JobCta from "./JobCta";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import moment from "moment";
import { bindActionCreators } from "redux";
import { updateJobs } from "../Reducers";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0.2rem auto auto;
  display: grid;
  grid-template-columns: 40% repeat(3, 1fr);
  grid-auto-rows: 6rem;
  grid-gap: 10px;
  border-radius: 10px;
  padding: 0 10px;
  box-shadow: 0 0px 10px rgba(0, 0, 10, 0.05);
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 10, 0.1);
  }
`;

class JobPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {}
  render() {
    if (!this.props.posts.results) {
      return <Skeleton circle={true} count={3} />;
    }
    return (
      <div>
        {/* loader posts */}
        <InfiniteScroll
          dataLength={
            this.props.posts.results && this.props.posts.results.length
          }
          next={this.props.updateJobs(this.props.posts.searchTerm, 100)}
          hasMore={this.props.posts.next === null ? false : true}
          loader={<Skeleton circle={true} count={3} />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.props.posts.results &&
            this.props.posts.results.map((post) => {
              return (
                <Container>
                  <JobHeader
                    imgUrl={post.logo}
                    companyName={post.company_name}
                    jobTitle={post.role}
                  />
                  <JobDetails
                    title={
                      post.location ? post.location : "Unverified Recruiter"
                    }
                    subtitle="Location"
                    bgColor="green"
                    iconName={<HiLocationMarker />}
                  />
                  <JobDetails
                    title={
                      post.employment_type ? post.employment_type : "Contract"
                    }
                    subtitle={moment(post.date_posted).fromNow()}
                    bgColor="orange"
                    iconName={<AiFillClockCircle />}
                  />
                  <JobCta />
                </Container>
              );
            })}
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateJobs: bindActionCreators(updateJobs, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobPanel);
