import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500} // number of cents
        token={token => this.props.handleToken(token)} // cb after getting auth token from API
        stripeKey={process.env.REACT_APP_STRIPE_KEY} // needs to be added in heroku too
      >
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
