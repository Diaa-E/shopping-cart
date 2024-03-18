export function sortByTitle(items, reverse)
{
    const sortedItems = [...items];

    sortedItems.sort((a, b) => a.title.localeCompare(b.title, "en", {sensitivity: "base"}));

    if (reverse) return sortedItems.reverse();

    return sortedItems;
}

export function sortByPrice(items, reverse)
{
    const sortedItems = [...items];

    sortedItems.sort((a, b) => +a.price - +b.price);

    if (reverse) return sortedItems.reverse();

    return sortedItems;
}