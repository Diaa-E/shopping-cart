# Design

## Color palette

## Git branches

- dev (local) -> features in progress
- release (local) -> stable undeployed features
- main (remote) -> production

## Stages

1. ### Navigation Bar
    - Links to pages

1. ### Page Components (return wrappers)
    - Home
    - Shop
    - About

1. ### Routes
    - Add routes to all page components

1. ### Routes error page
    - Display error code
    - Show a link to home

1. ### Sync navigation to active route
    - Highlight active tab in navigation (minimal styling)

1. ### Custom hooks for fetching products
    - Fetch all products when shop mounts using a custom hook

1. ### Display products on Shop page
    - Display all products on the shop page
    - Add option to sort by category
    - Add option to sort by name (asc and desc)
    - Add option to sort by price (asc and desc)
    - Add a search bar and filter products based on keyword

1. ### Cart component
    - Display current items in the cart
    - Each item's amount can be adjusted from within the cart
    - each item in the cart has a remove option
    - A remove option triggers a confirmation modal
    - store items in session
    - Calculate subtotal
    - Add a checkout option
    - Add a clear cart option

1. ### Product items
    - Shop items can be added to cart
    - Add option to set amount by typing
    - Add dials to fine tune amount

1. ### Small components
    - Regular buttons (primary, secondary, danger)
    - Icon buttons
    - Car button
    - Nav links
    - Footer links
    - Search bar
    - Select input
    - Number input
    - Product item

1. ### Landmark components
    - Navigation bar
    - logo/home link
    - Footer
    - Modal

1. ### Page components (finalized)
    - About
    - Home

1. ### Dark mode

1. ### Mobile display