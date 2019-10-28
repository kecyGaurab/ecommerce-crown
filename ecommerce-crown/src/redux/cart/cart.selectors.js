import { createSelector } from 'reselect'

//just select the piece of state that we need
const selectCart = state => state.cart


// create a memoize selector that return the items from the cart
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity,
            0
        )
)