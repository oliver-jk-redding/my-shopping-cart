import React, { Component } from 'react'
import CartSummary from './cart-summary'
import routes from './routes'

export default class App extends Component {

  render () {
    return (
      <div>
        <div id='main'>{routes}</div>
        <div id='side'>
          <CartSummary />
        </div>
      </div>
    )
  }

}