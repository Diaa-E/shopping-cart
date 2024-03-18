export function createCartItem(product, amount)
{
    return {
        ...product,
        amount: amount
    }
}

export function addItemToCart(cart, item)
{
    const itemCartIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    if (itemCartIndex < 0)
    {
        cart.push(item);
    }
    else
    {
        cart[itemCartIndex] = {...item};
    }

    return cart;
}