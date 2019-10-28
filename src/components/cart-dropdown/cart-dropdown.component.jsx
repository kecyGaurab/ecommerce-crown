import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import CustomButton from "../custom-button/custom-button.component"
import CartItem from "../cart-item/cart-item.component"
import { selectCartItems } from "../../redux/cart/cart.selector"

import { toggleCartHidden } from "../../redux/cart/cart-actions"

import { createStructuredSelector } from "reselect"
import "./cart-dropdown.styles.scss"

// if only one parameter is passed in with mapStateToProps 
//dispatch can be directly passed into component
const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">You cart is empty</span>
        )}
      </div>

    
        <CustomButton 
        onClick = { ()=> {
          history.push('/checkout')
          dispatch(toggleCartHidden())
          }}> GO TO CHECKOUT</CustomButton>
     
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
