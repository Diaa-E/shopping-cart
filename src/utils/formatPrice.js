export function formatPrice(price)
{
    price = price.toString();
    const splitprice = price.split(".");

    if (!splitprice[1]) return [splitprice[0], "00"];
    if (splitprice[1].length < 2) return [splitprice[0], splitprice[1] + "0"];
    return splitprice;
}