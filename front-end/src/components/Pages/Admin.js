import React, { Component } from "react";
import { connect } from "react-redux";

import AdminDetails from "../Organisms/AdminDetails.js";
import AdminHours from "../Organisms/AdminHours.js";

import { Header } from "semantic-ui-react";
import {
  AdminContainer,
  AdminHeader,
  Welcome,
  AdminBody,
} from "../../styles/Admin.js";

class Admin extends Component {
  render() {
    return (
      <AdminContainer>
        <AdminHeader>
          <Welcome>
            {`Welcome, ${this.props.first_name} ${this.props.last_name}`}
          </Welcome>
        </AdminHeader>
        <Header>Dashboard</Header>
        <AdminBody>
          <AdminHours />
          <AdminDetails />
        </AdminBody>
      </AdminContainer>
    );
  }
}

const mapStateToProps = state => {
  const userProfile = state.user.currentUser;
  //TODO: check for empty profile - error
  return {
    first_name: userProfile.user.first_name,
    last_name: userProfile.user.last_name,
  };
};

export default connect(mapStateToProps)(Admin);
