export function extractCategories(items)
{
    const categories = ["All categories"];

    for (const item of items)
    {
        if (categories.findIndex((current) => current === item.category) < 0)
        {
            categories.push(item.category);
        }
    }

    return categories;
}