import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThemeProvider } from "styled-components";
import JobLIsting from "./Pages/JobLIsting";
import { fetchPostsWithRedux } from "./Reducers";

const theme = {
  colors: {
    primary: "#5e4bd9",
  },
};
class App extends Component {
  componentDidMount() {
    this.props.fetchJobs(this.props.posts.searchTerm, 100);
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <JobLIsting />
        </div>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
const mapDispatchprops = (dispatch) =>
  bindActionCreators(
    {
      fetchJobs: fetchPostsWithRedux,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchprops)(App);
