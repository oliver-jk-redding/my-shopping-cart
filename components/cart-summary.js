import React, {Component} from 'react'
import {connect} from 'react-redux'

class CartSummary extends Component {
  render() {
    return (
      <div id='cart'>
        <h3>Shopping Cart</h3>
        <div className='products'>
          {this.props.cart.map((product, idx) => {
            return <div key={idx}>{product.get('name')} x{product.get('volume')}</div>
          })}
        </div>
      </div>
    )
  }
}

function mapStateProps(state) {
  return {
    cart: state.get('cart')
  }
}

export default connect(
  mapStateProps
)(CartSummary)