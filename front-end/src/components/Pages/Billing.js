import React, { Component } from "react";

import { StripeProvider } from "react-stripe-elements";

import MyStoreCheckout from "./test_pages/MyStoreCheckout";

import { BillingContainer } from "../../styles/Billing.js";
import { Segment, Header } from "semantic-ui-react";

//StripeProvider gives us access to the Stripe Object
//i.e Stripe.createToken, stripe.elements() etc
//App loads the stripe script asynchronously in CDM

class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = { stripe: "" };
  }
  componentDidMount() {
    if (window.Stripe) {
      this.setState({
        stripe: window.Stripe(process.env.REACT_APP_publishable),
      });
    } else {
      document.querySelector("#stripe-js").addEventListener("load", () => {
        //Create Stripe instance once Stripe.js loads
        this.setState({
          stripe: window.Stripe(process.env.REACT_APP_publishable),
        });
      });
    }
  }

  render() {
    return (
      <BillingContainer>
        <Header>Billing</Header>
        <Segment>
          {this.state.stripe ? (
            <StripeProvider stripe={this.state.stripe}>
              <MyStoreCheckout />
            </StripeProvider>
          ) : null}
        </Segment>
      </BillingContainer>
    );
  }
}

export default Billing;
