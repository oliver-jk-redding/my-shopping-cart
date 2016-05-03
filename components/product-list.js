import React, {Component} from 'react'
import ProductSummary from './product-summary.js'
import {connect} from 'react-redux'

class ProductList extends Component {
  render() {
    const productSummaries = this.props.products.map( product => {
      return <ProductSummary key={product.get('id')} product={product} />
    })
    return <div id='productList'> {productSummaries}</div>
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products')
  }
}

export default connect(mapStateToProps)(ProductList)