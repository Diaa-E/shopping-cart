export function filterProducts(products, selectedCategory)
{
    const filtered = [];

    if (!selectedCategory) return products;

    for (const product of products)
    {   
        if (product.category === selectedCategory) filtered.push(product);
    }

    return filtered;
}