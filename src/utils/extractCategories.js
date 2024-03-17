export function extractCategories(items)
{
    const categories = [{name : "All categories", value: ""}];

    for (const item of items)
    {
        if (categories.findIndex((current) => current.value === item.category) < 0)
        {
            categories.push({name: item.category, value: item.category});
        }
    }

    return categories;
}