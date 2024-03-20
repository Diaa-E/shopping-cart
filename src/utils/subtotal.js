export function getSubtotal(cart)
{
    const subTotal = cart.reduce((total, current) => {

        const currentTotal = (+current.price * +current.amount).toFixed(2);
        return total + +currentTotal;
    }, 0);

    return subTotal;
}