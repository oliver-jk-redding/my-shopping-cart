import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name: 'pants'},
    {id: 2, name: 'shirt'},
    {id: 3, name: 'hat'}
  ],
  cart: []
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.product))
    case 'INCREASE_VOLUME':
      const index = state.get('cart').indexOf(state.get(action.product))
      return state.updateIn(
        ['cart', index, 'volume'],
        0,
        n => n + 1
      )
    default:
      return state
  }
}