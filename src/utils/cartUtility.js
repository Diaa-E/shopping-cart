export function createCartItem(product, amount)
{
    return {
        ...product,
        amount: amount
    }
}