import React, { useState, useReducer } from 'react'
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useHistory
} from 'react-router-dom'
import Centered from 'YesterTech/Centered'

// To run the final solution: Comment this in and the rest out
// import Checkout from './Checkout.final'
// export default Checkout

// Route Targets
import ViewCart from 'YesterTech/ViewCart'
import CheckoutBilling from './CheckoutBilling'
import CheckoutReview from 'YesterTech/CheckoutReview'

function Checkout() {
  const match = useRouteMatch()
  const history = useHistory()

  const defaultSameAsBilling = false;
  const defaultFields = {
    billingName: 'cwong',
    billingAddress: '345 Park Ave',
    shippingName: 'Calvin',
    shippingAddress: '321 Park Ave'
  };

  const [sameAsBilling, setSameAsBilling] = useState(defaultSameAsBilling);
  const [fields, setFields] = useState(defaultFields);

  function handleBillingSubmit(sameAsBilling, fields) {
    console.log('sameAsBilling', sameAsBilling, 'fields', fields)
    setSameAsBilling(sameAsBilling);
    setFields(fields);
    history.push(`${match.path}/review`)
  }

  return (
    <Centered>
      <Switch>
        <Route path={`${match.path}/cart`} exact>
          <ViewCart />
        </Route>
        <Route path={`${match.path}/billing`}>
          <CheckoutBilling
            onSubmit={handleBillingSubmit}
            defaultSameAsBilling={sameAsBilling}
            defaultFields={fields}
          />
        </Route>

        {/*
          Hint: We shouldn't be able to visit this route unless we have
          values inside of our state for `fields`. See the README
        */}
        {Object.keys(fields).length > 0 && (
          <Route path={`${match.path}/review`}>
            {/* The README also tells you what props you need to pass into CheckoutReview */}
            <CheckoutReview sameAsBilling={sameAsBilling} fields={fields} />
          </Route>
        )}

        <Redirect to={`${match.path}/cart`} />
      </Switch>
    </Centered>
  )
}

export default Checkout
