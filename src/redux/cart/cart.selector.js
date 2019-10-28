import { createSelector } from 'reselect'

// return piece of cart state from whole state
const selectCart = state => state.cart

// return cartItem state from selectCart
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulatedTotal, cartItem) =>
        accumulatedTotal + cartItem.quantity*cartItem.price,
        0)
) 


// return cartItemsQuantity from cartItem 
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + cartItem.quantity,
                0
        )
)