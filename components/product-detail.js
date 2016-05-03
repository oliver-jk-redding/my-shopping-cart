import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Map} from 'immutable'

class ProductDetail extends Component {
  render() {
    const {id} = this.props.params
    const product = this.props.products.filter(p => p.get('id') == id).first()
    const name = product.get('name')
    const addToCart = (e) => {
      e.preventDefault()
      const cartProduct = this.props.cart.filter(p => p.get('id') == id)
      if(cartProduct.size == 0)
        this.props.addToCart(id, name)
      this.props.increaseVolume(id, name)
    }
    return (
      <div className='product' id={id}>
        <div> Detailed view of {name}</div>
        <div><a href='' onClick={addToCart}>Add to Cart</a></div>
        <div><Link to='/'>View all</Link></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products'),
    cart: state.get('cart')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (id, name) => {
      dispatch({
        type: 'ADD_PRODUCT_TO_CART',
        product: Map({
          id: parseInt(id),
          name: name,
        })
      })
    },
    increaseVolume: (id, name) => {
      dispatch({
        type: 'INCREASE_VOLUME',
        product: Map({
          id: parseInt(id),
          name: name
        })
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)