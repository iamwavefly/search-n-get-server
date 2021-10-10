import React, { Component } from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import JobList from "../Components/JobList";
import JobPanel from "../Components/JobPanel";
import JobResultDetails from "../Components/JobResultDetails";
import Partners from "../Components/Partners";

export default class JobLIsting extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Partners />
        <JobResultDetails />
        <JobList />
        <Footer />
      </div>
    );
  }
}
