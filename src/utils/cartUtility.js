export function createCartItem(product, amount)
{
    return {
        ...product,
        amount: amount
    }
}

export function removeItemFromCart(cart, item)
{
    const updatedCart = [...cart];

    return updatedCart.filter(cartItem => cartItem.id !== item.id);
}

export function addItemToCart(cart, item)
{
    const updatedCart = [...cart];

    const itemCartIndex = searchCart(updatedCart, item);

    if (itemCartIndex < 0)
    {
        updatedCart.push(item);
    }
    else
    {
        updatedCart[itemCartIndex] = {...item};
    }

    return updatedCart;
}

export function searchCart(cart, item)
{
    return cart.findIndex(cartItem => cartItem.id === item.id);
}