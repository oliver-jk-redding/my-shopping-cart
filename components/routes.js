import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {createHistory} from 'history'
import ProductList from './product-list.js'
import ProductDetail from './product-detail.js'

const history = createHistory()

export default (
  <Router history={browserHistory}>
    <Route path='/' component={ProductList} />
    <Route path='/products/:id' component={ProductDetail} />
  </Router>
)