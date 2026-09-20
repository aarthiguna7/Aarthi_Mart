document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       ORIGINAL AARTHI MART PRODUCTS
       ========================================================= */

    const products = [

        /* ---------- TOPS ---------- */

        {
            id: 1,
            title: "Maroon Faux Fishbone Top",
            price: 1099,
            rating: 4.6,
            reviews: 255,
            badge: "Best Sellers",
            category: "tops",
            collection: "bestsellers",
            discounted: false,
            newest: false,
            img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 2,
            title: "V-Neck Layered Top",
            price: 549,
            rating: 4.8,
            reviews: 302,
            badge: "Best Sellers",
            category: "tops",
            collection: "bestsellers",
            discounted: true,
            newest: false,
            img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 3,
            title: "Slim Fit Fitted Top",
            price: 649,
            rating: 4.8,
            reviews: 204,
            badge: "Best Sellers",
            category: "tops",
            collection: "retail",
            discounted: false,
            newest: true,
            img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 4,
            title: "Polka Dot Wrap Top",
            price: 499,
            rating: 4.1,
            reviews: 126,
            badge: "Best Sellers",
            category: "tops",
            collection: "summer",
            discounted: true,
            newest: false,
            img: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 5,
            title: "Sweetheart Neck Top",
            price: 749,
            rating: 4.6,
            reviews: 138,
            badge: "Best Sellers",
            category: "tops",
            collection: "spring",
            discounted: false,
            newest: true,
            img: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 6,
            title: "Halter Neck Layered Top",
            price: 549,
            rating: 4.7,
            reviews: 30,
            badge: "Best Sellers",
            category: "tops",
            collection: "campus",
            discounted: true,
            newest: false,
            img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 7,
            title: "Floral Lace Bow Top",
            price: 699,
            rating: 4.8,
            reviews: 95,
            badge: "Just In",
            category: "tops",
            collection: "spring",
            discounted: false,
            newest: true,
            img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 8,
            title: "Off Shoulder Ruched Top",
            price: 1099,
            rating: 4.8,
            reviews: 218,
            badge: "Best Sellers",
            category: "tops",
            collection: "streetwear",
            discounted: false,
            newest: false,
            img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 9,
            title: "Asymmetrical Polka Dot Top",
            price: 499,
            rating: 4.6,
            reviews: 119,
            badge: "Best Sellers",
            category: "tops",
            collection: "summer",
            discounted: true,
            newest: false,
            img: "https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 10,
            title: "Halter Neck Sleeveless Top",
            price: 749,
            rating: 4.8,
            reviews: 142,
            badge: "Best Sellers",
            category: "tops",
            collection: "streetwear",
            discounted: false,
            newest: true,
            img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500&q=80"
        },


        /* ---------- DRESSES ---------- */

        {
            id: 11,
            title: "Fishtail Hem Fitted Dress",
            price: 1099,
            rating: 4.9,
            reviews: 174,
            badge: "Best Sellers",
            category: "dresses",
            collection: "retail",
            discounted: false,
            newest: false,
            img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 12,
            title: "Ruched Fitted Dress",
            price: 1099,
            rating: 4.8,
            reviews: 284,
            badge: "Best Sellers",
            category: "dresses",
            collection: "retail",
            discounted: false,
            newest: false,
            img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 13,
            title: "Floral Summer Midi Dress",
            price: 899,
            rating: 4.7,
            reviews: 188,
            badge: "Just In",
            category: "dresses",
            collection: "summer",
            discounted: true,
            newest: true,
            img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500&q=80"
        },


        /* ---------- DENIM ---------- */

        {
            id: 14,
            title: "Classic Blue Straight Jeans",
            price: 1299,
            rating: 4.7,
            reviews: 212,
            badge: "Best Sellers",
            category: "denim",
            collection: "campus",
            discounted: false,
            newest: false,
            img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 15,
            title: "Wide Leg Denim Jeans",
            price: 1399,
            rating: 4.8,
            reviews: 154,
            badge: "Just In",
            category: "denim",
            collection: "streetwear",
            discounted: true,
            newest: true,
            img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 16,
            title: "High Rise Blue Denim",
            price: 1199,
            rating: 4.5,
            reviews: 98,
            badge: "Best Sellers",
            category: "denim",
            collection: "retail",
            discounted: false,
            newest: false,
            img: "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=500&q=80"
        },


        /* ---------- FOOTWEAR ---------- */

        {
            id: 17,
            title: "Classic White Sneakers",
            price: 1499,
            rating: 4.8,
            reviews: 342,
            badge: "Best Sellers",
            category: "footwear",
            collection: "campus",
            discounted: false,
            newest: false,
            img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 18,
            title: "Minimal Platform Sandals",
            price: 899,
            rating: 4.6,
            reviews: 126,
            badge: "Just In",
            category: "footwear",
            collection: "summer",
            discounted: true,
            newest: true,
            img: "https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 19,
            title: "Everyday Casual Flats",
            price: 799,
            rating: 4.5,
            reviews: 87,
            badge: "Best Sellers",
            category: "footwear",
            collection: "retail",
            discounted: false,
            newest: false,
            img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=500&q=80"
        },


        /* ---------- TROUSERS ---------- */

        {
            id: 20,
            title: "Tailored Straight Trousers",
            price: 1199,
            rating: 4.7,
            reviews: 164,
            badge: "Best Sellers",
            category: "trousers",
            collection: "retail",
            discounted: false,
            newest: false,
            img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 21,
            title: "Wide Leg Formal Trousers",
            price: 1299,
            rating: 4.6,
            reviews: 113,
            badge: "Just In",
            category: "trousers",
            collection: "campus",
            discounted: true,
            newest: true,
            img: "https://images.unsplash.com/photo-1506629905607-d9c297d6f7f7?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 22,
            title: "Relaxed Fit Cargo Trousers",
            price: 1399,
            rating: 4.8,
            reviews: 201,
            badge: "Best Sellers",
            category: "trousers",
            collection: "streetwear",
            discounted: false,
            newest: true,
            img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&q=80"
        },


        /* ---------- HANDBAGS ---------- */

        {
            id: 23,
            title: "Structured Everyday Handbag",
            price: 999,
            rating: 4.6,
            reviews: 145,
            badge: "Best Sellers",
            category: "handbags",
            collection: "retail",
            discounted: false,
            newest: false,
            img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 24,
            title: "Mini Shoulder Bag",
            price: 749,
            rating: 4.7,
            reviews: 119,
            badge: "Just In",
            category: "handbags",
            collection: "summer",
            discounted: true,
            newest: true,
            img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=500&q=80"
        },


        /* ---------- CO-ORDS ---------- */

        {
            id: 25,
            title: "Soft Knit Co-ord Set",
            price: 1599,
            rating: 4.8,
            reviews: 132,
            badge: "Just In",
            category: "coords",
            collection: "spring",
            discounted: false,
            newest: true,
            img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 26,
            title: "Casual Campus Co-ord",
            price: 1399,
            rating: 4.6,
            reviews: 91,
            badge: "Best Sellers",
            category: "coords",
            collection: "campus",
            discounted: true,
            newest: false,
            img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500&q=80"
        },


        /* ---------- SKIRTS ---------- */

        {
            id: 27,
            title: "Pleated Midi Skirt",
            price: 899,
            rating: 4.7,
            reviews: 102,
            badge: "Best Sellers",
            category: "skirts",
            collection: "spring",
            discounted: false,
            newest: false,
            img: "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 28,
            title: "Denim Mini Skirt",
            price: 799,
            rating: 4.6,
            reviews: 76,
            badge: "Just In",
            category: "skirts",
            collection: "streetwear",
            discounted: true,
            newest: true,
            img: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?auto=format&fit=crop&w=500&q=80"
        }
    ];


    /* =========================================================
       ELEMENTS
       ========================================================= */

    const grid =
        document.getElementById("productGrid");

    const cartBadge =
        document.getElementById("cartBadge");

    const searchInput =
        document.getElementById("searchInput");

    const searchSection =
        document.getElementById("search");

    const sortSelect =
        document.getElementById("sortSelect");

    const productTitle =
        document.getElementById("productSectionTitle");


    /* =========================================================
       STATE
       ========================================================= */

    let currentProducts = [...products];

    let currentCategory = "all";

    let currentCollection = "all";

    let currentSearch = "";

    let offersOnly = false;

    let wishlistIds = new Set();


    /* =========================================================
       WISHLIST
       ========================================================= */

    async function loadWishlist() {

        try {

            const response =
                await fetch("wishlist");


            if (response.status === 401) {

                wishlistIds =
                    new Set();

                return;
            }


            if (!response.ok) {

                wishlistIds =
                    new Set();

                return;
            }


            const wishlistProducts =
                await response.json();


            if (
                Array.isArray(
                    wishlistProducts
                )
            ) {

                wishlistIds =
                    new Set(
                        wishlistProducts.map(
                            product =>
                                Number(
                                    product.id
                                )
                        )
                    );

            } else {

                wishlistIds =
                    new Set();
            }


        } catch (error) {

            console.error(
                "Could not load wishlist:",
                error
            );

            wishlistIds =
                new Set();
        }
    }


    function isInWishlist(
        productId
    ) {

        return wishlistIds.has(
            Number(productId)
        );
    }


    async function toggleWishlist(
        productId
    ) {

        const id =
            Number(productId);


        const currentlyInWishlist =
            isInWishlist(id);


        const body =
            new URLSearchParams();


        body.append(
            "action",
            currentlyInWishlist
                ? "remove"
                : "add"
        );


        body.append(
            "productId",
            id
        );


        try {

            const response =
                await fetch(
                    "wishlist",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/x-www-form-urlencoded"
                        },
                        body:
                            body.toString()
                    }
                );


            if (
                response.status ===
                401
            ) {

                alert(
                    "Please login first to use your wishlist."
                );

                return;
            }


            if (!response.ok) {

                alert(
                    "Could not update your wishlist."
                );

                return;
            }


            const result =
                await response.json();


            if (
                result.success
            ) {

                if (
                    currentlyInWishlist
                ) {

                    wishlistIds.delete(
                        id
                    );

                } else {

                    wishlistIds.add(
                        id
                    );
                }


                updateAllWishlistButtons();

            } else {

                alert(
                    "Could not update your wishlist."
                );
            }


        } catch (error) {

            console.error(
                "Wishlist error:",
                error
            );

            alert(
                "Something went wrong with your wishlist."
            );
        }
    }


    function updateWishlistButton(
        button,
        productId
    ) {

        if (!button) return;


        const icon =
            button.querySelector("i");


        const active =
            isInWishlist(productId);


        button.classList.toggle(
            "active",
            active
        );


        if (icon) {

            icon.className =
                active
                    ? "fa-solid fa-heart"
                    : "fa-regular fa-heart";
        }


        button.setAttribute(
            "aria-label",
            active
                ? "Remove from wishlist"
                : "Add to wishlist"
        );
    }


    function updateAllWishlistButtons() {

        document
            .querySelectorAll(
                ".wishlist-btn"
            )
            .forEach(button => {

                updateWishlistButton(
                    button,
                    button.dataset.productId
                );

            });
    }


    /* =========================================================
       BACKEND PRODUCTS
       ========================================================= */

    async function loadProducts() {

        try {

            const response =
                await fetch(
                    "products"
                );


            if (!response.ok) {

                throw new Error(
                    "Products request failed"
                );
            }


            const backendProducts =
                await response.json();


            if (
                !Array.isArray(
                    backendProducts
                )
            ) {

                throw new Error(
                    "Invalid products response"
                );
            }


            currentProducts =
                backendProducts.map(
                    backendProduct => {

                        const id =
                            Number(
                                backendProduct.id
                            );


                        const oldProduct =
                            products.find(
                                product =>
                                    Number(
                                        product.id
                                    ) === id
                            );


                        return {

                            id: id,

                            title:
                                backendProduct.name ||
                                backendProduct.title ||
                                oldProduct?.title ||
                                "Product",

                            price:
                                Number(
                                    backendProduct.price ??
                                    oldProduct?.price ??
                                    0
                                ),

                          rating:
    backendProduct.rating != null
        ? Number(backendProduct.rating)
        : null,

reviews:
    backendProduct.reviewCount != null
        ? Number(backendProduct.reviewCount)
        : 0,

                            badge:
                                oldProduct?.badge ??
                                "New Arrival",

                            category:
                                (
                                    backendProduct.category ||
                                    oldProduct?.category ||
                                    ""
                                ).toLowerCase(),

                            collection:
                                oldProduct?.collection ??
                                "all",

                            discounted:
                                oldProduct?.discounted ??
                                false,

                            newest:
                                oldProduct?.newest ??
                                true,

                            img:
                                backendProduct.imageUrl ||
                                backendProduct.image ||
                                oldProduct?.img ||
                                "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500&q=80",

                            description:
                                backendProduct.description ||
                                ""
                        };
                    }
                );


            if (
                currentProducts.length ===
                0
            ) {

                currentProducts =
                    [...products];
            }


            renderProducts();


        } catch (error) {

            console.error(
                "Could not load backend products:",
                error
            );


            currentProducts =
                [...products];


            renderProducts();
        }
    }


    /* =========================================================
       CART COUNT
       ========================================================= */

    async function loadCartCount() {

        if (!cartBadge) return;


        try {

            const response =
                await fetch(
                    "cart"
                );


            if (!response.ok) {

                cartBadge.textContent =
                    "0";

                return;
            }


            const items =
                await response.json();


            const count =
                Array.isArray(items)

                    ? items.reduce(
                        (
                            total,
                            item
                        ) => {

                            return (
                                total +
                                Number(
                                    item.quantity ||
                                    0
                                )
                            );

                        },
                        0
                    )

                    : 0;


            cartBadge.textContent =
                count;


        } catch (error) {

            console.error(
                "Could not load cart:",
                error
            );

            cartBadge.textContent =
                "0";
        }
    }


    /* =========================================================
       ADD TO CART
       ========================================================= */

    async function addToCart(
        product,
        button
    ) {

        if (
            !product ||
            !product.id
        ) {

            return;
        }


        if (button) {

            button.disabled =
                true;

            button.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Adding...';
        }


        try {

            const body =
                new URLSearchParams();


            body.append(
                "action",
                "add"
            );


            body.append(
                "productId",
                product.id
            );


            body.append(
                "quantity",
                "1"
            );


            const response =
                await fetch(
                    "cart",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/x-www-form-urlencoded"
                        },

                        body:
                            body.toString()
                    }
                );


            if (
                response.status ===
                401
            ) {

                alert(
                    "Please login first."
                );


                resetCartButton(
                    button
                );

                return;
            }


            if (!response.ok) {

                console.error(
                    "Cart error:",
                    response.status
                );


                alert(
                    "Could not add this product to cart."
                );


                resetCartButton(
                    button
                );

                return;
            }


            const result =
                await response.json();


            if (
                result.success
            ) {

                await loadCartCount();


                if (button) {

                    button.innerHTML =
                        '<i class="fa-solid fa-check"></i> Added';


                    button.classList.add(
                        "added"
                    );


                    setTimeout(
                        () => {

                            resetCartButton(
                                button
                            );

                        },
                        1200
                    );
                }


            } else {

                alert(
                    "Something went wrong while adding the product."
                );


                resetCartButton(
                    button
                );
            }


        } catch (error) {

            console.error(
                "Add to cart failed:",
                error
            );


            alert(
                "Something went wrong while adding the product."
            );


            resetCartButton(
                button
            );
        }
    }


    function resetCartButton(
        button
    ) {

        if (!button) return;


        button.disabled =
            false;


        button.innerHTML =
            '<i class="fa-solid fa-cart-plus"></i> Add to Cart';


        button.classList.remove(
            "added"
        );
    }


    /* =========================================================
       PRODUCT DISPLAY
       ========================================================= */

    function renderProducts() {

        if (!grid) return;


        let filteredProducts =
            currentProducts.filter(
                product => {

                    const matchesCategory =
                        currentCategory ===
                            "all" ||

                        product.category ===
                            currentCategory;


                    let matchesCollection = true;

if (currentCollection === "rechecked") {

    matchesCollection =
        product.newest === true ||
        product.badge === "Just In";

} else if (currentCollection === "bestsellers") {

    matchesCollection =
        product.collection === "bestsellers" ||
        product.badge === "Best Sellers";

} else if (currentCollection !== "all") {

    matchesCollection =
        product.collection === currentCollection;
}

                    const searchableText =
                        (
                            product.title +
                            " " +
                            (
                                product.description ||
                                ""
                            ) +
                            " " +
                            (
                                product.category ||
                                ""
                            )
                        )
                            .toLowerCase();


                    const matchesSearch =
                        searchableText.includes(
                            currentSearch
                        );


                    const matchesOffers =
                        !offersOnly ||

                        product.discounted ===
                            true;


                    return (
                        matchesCategory &&
                        matchesCollection &&
                        matchesSearch &&
                        matchesOffers
                    );
                }
            );


        /* ================= SORT ================= */

        if (sortSelect) {

            const sortValue =
                sortSelect.value;


            if (
                sortValue ===
                "price-low"
            ) {

                filteredProducts.sort(
                    (a, b) =>
                        a.price -
                        b.price
                );


            } else if (
                sortValue ===
                "price-high"
            ) {

                filteredProducts.sort(
                    (a, b) =>
                        b.price -
                        a.price
                );


            } else if (
                sortValue ===
                "rating"
            ) {

                filteredProducts.sort(
                    (a, b) =>
                        Number(
                            b.rating || 0
                        ) -
                        Number(
                            a.rating || 0
                        )
                );


            } else if (
                sortValue ===
                "newest"
            ) {

                filteredProducts.sort(
                    (a, b) =>
                        Number(
                            b.newest
                        ) -
                        Number(
                            a.newest
                        )
                );
            }
        }


        /* ================= CLEAR GRID ================= */

        grid.innerHTML =
            "";


        /* ================= NO RESULTS ================= */

        if (
            filteredProducts.length ===
            0
        ) {

            grid.innerHTML = `

                <div class="loading-products">

                    <i class="fa-solid fa-magnifying-glass"></i>

                    <p>
                        No products found.
                    </p>

                </div>

            `;


            updateResultLabel(
                0
            );

            return;
        }


        /* ================= CREATE CARDS ================= */

        filteredProducts.forEach(
            product => {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "product-card";


                const badgeClass =
                    product.badge ===
                        "Just In"

                        ? "badge-justin"

                        : "badge-bestseller";


                const ratingHTML =
                    product.rating !==
                        null &&

                    product.rating !==
                        undefined

                        ? `

                            <span>
                                ${product.rating}
                            </span>

                            <i class="fa-solid fa-star"></i>

                            <span class="review-count">
                                | ${product.reviews || 0}
                            </span>

                          `

                        : `

                            <span>
                                New
                            </span>

                          `;


                /*
                 * KEEP THIS STRUCTURE.
                 * This matches the original
                 * Aarthi Mart product-card layout.
                 */

                card.innerHTML = `

                    <div class="product-img-wrap">

                        <img
                            src="${product.img}"
                            alt="${product.title}"
                            loading="lazy"
                        >

                        <span class="badge-tag ${badgeClass}">
                            ${product.badge}
                        </span>

                        <button
                            class="wishlist-btn"
                            type="button"
                            aria-label="Add to wishlist"
                            data-product-id="${product.id}"
                        >

                            <i class="fa-regular fa-heart"></i>

                        </button>

                    </div>


                    <div class="product-info">

                        <div class="rating-tag">

                            ${ratingHTML}

                        </div>


                        <div class="product-title">
                            ${product.title}
                        </div>


                        <div class="product-price">
                            ₹${Number(product.price).toLocaleString("en-IN")}
                        </div>


                        <button
                            class="add-cart-btn"
                            type="button">

                            <i class="fa-solid fa-cart-plus"></i>

                            Add to Cart

                        </button>

                    </div>

                `;


                grid.appendChild(
                    card
                );


                /* ================= WISHLIST ================= */

                const wishlistButton =
                    card.querySelector(
                        ".wishlist-btn"
                    );


                if (wishlistButton) {

                    updateWishlistButton(
                        wishlistButton,
                        product.id
                    );


                    wishlistButton.addEventListener(
                        "click",
                        event => {

                            event.preventDefault();

                            event.stopPropagation();


                            toggleWishlist(
                                product.id
                            );
                        }
                    );
                }


                /* ================= CART ================= */

                const addButton =
                    card.querySelector(
                        ".add-cart-btn"
                    );


                if (addButton) {

                    addButton.addEventListener(
                        "click",
                        event => {

                            event.preventDefault();

                            event.stopPropagation();


                            addToCart(
                                product,
                                addButton
                            );
                        }
                    );
                }

            }
        );


        updateResultLabel(
            filteredProducts.length
        );
    }


    /* =========================================================
       RESULT LABEL
       ========================================================= */

    function updateResultLabel(
        count
    ) {

        const resultLabel =
            document.querySelector(
                ".product-result-label"
            );


        if (!resultLabel) return;


        resultLabel.textContent =
            `${count} product${count === 1 ? "" : "s"}`;
    }


    /* =========================================================
       SCROLL TO PRODUCTS
       ========================================================= */

    function scrollToProducts() {

        document
            .getElementById(
                "products"
            )
            ?.scrollIntoView({
                behavior:
                    "smooth"
            });
    }


    /* =========================================================
       CATEGORY FILTER
       ========================================================= */

    function filterByCategory(
        category
    ) {

        if (
            category ===
            "bestsellers"
        ) {

            showBestSellers();

            return;
        }


        if (
            category ===
            "rechecked"
        ) {

            showRechecked();

            return;
        }


        currentCategory =
            category;

        currentCollection =
            "all";

        offersOnly =
            false;

        currentSearch =
            "";


        if (searchInput) {

            searchInput.value =
                "";
        }


        const names = {

            dresses:
                "Dresses",

            tops:
                "Tops",

            denim:
                "Denim",

            footwear:
                "Footwear",

            trousers:
                "Trousers",

            handbags:
                "Handbags",

            coords:
                "Co-ords",

            skirts:
                "Skirts"
        };


        if (productTitle) {

            productTitle.textContent =
                names[category] ||
                "All Clothing";
        }


        renderProducts();

        scrollToProducts();
    }


    /* =========================================================
       OFFERS
       ========================================================= */

    function showOffers() {

        currentCategory =
            "all";

        currentCollection =
            "all";

        offersOnly =
            true;

        currentSearch =
            "";


        if (searchInput) {

            searchInput.value =
                "";
        }


        if (productTitle) {

            productTitle.textContent =
                "50% OFF & Offers";
        }


        renderProducts();

        scrollToProducts();
    }


    /* =========================================================
       BEST SELLERS
       ========================================================= */

    function showBestSellers() {

        currentCategory =
            "all";

        currentCollection =
            "bestsellers";

        offersOnly =
            false;

        currentSearch =
            "";


        if (searchInput) {

            searchInput.value =
                "";
        }


        if (productTitle) {

            productTitle.textContent =
                "Best Sellers";
        }


        renderProducts();

        scrollToProducts();
    }


    /* =========================================================
       RECHECKED
       ========================================================= */

    function showRechecked() {

        currentCategory =
            "all";

        currentCollection =
            "rechecked";

        offersOnly =
            false;

        currentSearch =
            "";


        if (searchInput) {

            searchInput.value =
                "";
        }


        if (productTitle) {

            productTitle.textContent =
                "Re:Checked";
        }


        renderProducts();

        scrollToProducts();
    }


    /* =========================================================
       CATEGORY LINKS
       ========================================================= */

    document
        .querySelectorAll(
            "[data-category]"
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();


                        const category =
                            link.dataset.category;


                        filterByCategory(
                            category
                        );
                    }
                );
            }
        );


    /* =========================================================
       QUICK CATEGORY LINKS
       ========================================================= */

    const quickCategoryMap = {

        "#dresses":
            "dresses",

        "#tops":
            "tops",

        "#denim":
            "denim",

        "#footwear":
            "footwear",

        "#trousers":
            "trousers"
    };


    document
        .querySelectorAll(
            ".categories-scroll a"
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();


                        const target =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            target ===
                            "#offers"
                        ) {

                            showOffers();

                            return;
                        }


                        if (
                            target ===
                            "#rechecked"
                        ) {

                            showRechecked();

                            return;
                        }


                        if (
                            quickCategoryMap[
                                target
                            ]
                        ) {

                            filterByCategory(
                                quickCategoryMap[
                                    target
                                ]
                            );
                        }
                    }
                );
            }
        );


    /* =========================================================
       HERO COLLECTIONS
       ========================================================= */

    document
        .querySelectorAll(
            "[data-collection]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();


                        const collection =
                            button.dataset.collection;


                        currentCategory =
                            "all";

                        currentCollection =
                            collection;

                        offersOnly =
                            false;

                        currentSearch =
                            "";


                        if (searchInput) {

                            searchInput.value =
                                "";
                        }


                        const names = {

                            retail:
                                "Retail Collection",

                            campus:
                                "Back to Campus",

                            summer:
                                "Summer Wear",

                            spring:
                                "Spring Wear",

                            autumn:
                                "Autumn Wear",

                            streetwear:
                                "Streetwear"
                        };


                        if (productTitle) {

                            productTitle.textContent =
                                names[
                                    collection
                                ] ||
                                "Collection";
                        }


                        renderProducts();

                        scrollToProducts();
                    }
                );
            }
        );


    /* =========================================================
       SEARCH
       ========================================================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                currentSearch =
                    searchInput.value
                        .toLowerCase()
                        .trim();


                currentCategory =
                    "all";

                currentCollection =
                    "all";

                offersOnly =
                    false;


                if (productTitle) {

                    productTitle.textContent =
                        currentSearch

                            ? `Search: ${searchInput.value}`

                            : "All Clothing";
                }


                renderProducts();
            }
        );
    }


    /* =========================================================
       SORT
       ========================================================= */

    if (sortSelect) {

        sortSelect.addEventListener(
            "change",
            () => {

                renderProducts();

            }
        );
    }


    /* =========================================================
       HERO CAROUSEL
       ========================================================= */

    const slides =
        document.querySelectorAll(
            ".hero-slide"
        );


    const dots =
        document.querySelectorAll(
            ".hero-dot"
        );


    const nextButton =
        document.querySelector(
            ".hero-next"
        );


    const prevButton =
        document.querySelector(
            ".hero-prev"
        );


    let currentSlide =
        0;


    function showSlide(
        index
    ) {

        if (!slides.length) {
            return;
        }


        if (
            index >=
            slides.length
        ) {

            currentSlide =
                0;

        } else if (
            index < 0
        ) {

            currentSlide =
                slides.length - 1;

        } else {

            currentSlide =
                index;
        }


        slides.forEach(
            slide => {

                slide.classList.remove(
                    "active"
                );

            }
        );


        dots.forEach(
            dot => {

                dot.classList.remove(
                    "active"
                );

            }
        );


        slides[
            currentSlide
        ].classList.add(
            "active"
        );


        if (
            dots[
                currentSlide
            ]
        ) {

            dots[
                currentSlide
            ].classList.add(
                "active"
            );
        }
    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                showSlide(
                    currentSlide + 1
                );

            }
        );
    }


    if (prevButton) {

        prevButton.addEventListener(
            "click",
            () => {

                showSlide(
                    currentSlide - 1
                );

            }
        );
    }


    dots.forEach(
        (
            dot,
            index
        ) => {

            dot.addEventListener(
                "click",
                () => {

                    showSlide(
                        index
                    );

                }
            );
        }
    );


    if (
        slides.length >
        1
    ) {

        setInterval(
            () => {

                showSlide(
                    currentSlide + 1
                );

            },
            5000
        );
    }


    /* =========================================================
       SIDE MENU
       ========================================================= */

    const menuButton =
        document.getElementById(
            "menuButton"
        );


    const sideMenu =
        document.getElementById(
            "sideMenu"
        );


    const menuOverlay =
        document.getElementById(
            "menuOverlay"
        );


    const closeMenu =
        document.getElementById(
            "closeMenu"
        );


    function openMenu() {

        if (sideMenu) {

            sideMenu.classList.add(
                "active"
            );
        }


        if (menuOverlay) {

            menuOverlay.classList.add(
                "active"
            );
        }


        document.body.classList.add(
            "menu-open"
        );
    }


    function closeSideMenu() {

        if (sideMenu) {

            sideMenu.classList.remove(
                "active"
            );
        }


        if (menuOverlay) {

            menuOverlay.classList.remove(
                "active"
            );
        }


        document.body.classList.remove(
            "menu-open"
        );
    }


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                if (
                    sideMenu &&
                    sideMenu.classList.contains(
                        "active"
                    )
                ) {

                    closeSideMenu();

                } else {

                    openMenu();
                }
            }
        );
    }


    if (closeMenu) {

        closeMenu.addEventListener(
            "click",
            closeSideMenu
        );
    }


    if (menuOverlay) {

        menuOverlay.addEventListener(
            "click",
            closeSideMenu
        );
    }


    if (sideMenu) {

        sideMenu
            .querySelectorAll("a")
            .forEach(
                link => {

                    link.addEventListener(
                        "click",
                        event => {

                            const href =
                                link.getAttribute(
                                    "href"
                                );


                            if (
                                href ===
                                "#categories"
                            ) {

                                event.preventDefault();

                                closeSideMenu();


                                document
                                    .getElementById(
                                        "categories"
                                    )
                                    ?.scrollIntoView({
                                        behavior:
                                            "smooth"
                                    });

                                return;
                            }


                            if (
                                href ===
                                "#offers"
                            ) {

                                event.preventDefault();

                                closeSideMenu();

                                showOffers();

                                return;
                            }


                            if (
                                href ===
                                "#collections"
                            ) {

                                event.preventDefault();

                                closeSideMenu();


                                document
                                    .getElementById(
                                        "collections"
                                    )
                                    ?.scrollIntoView({
                                        behavior:
                                            "smooth"
                                    });

                                return;
                            }


                            if (
                                href ===
                                "#bestsellers"
                            ) {

                                event.preventDefault();

                                closeSideMenu();

                                showBestSellers();

                                return;
                            }


                            closeSideMenu();
                        }
                    );
                }
            );
    }


    /* =========================================================
       ACCOUNT DROPDOWN
       ========================================================= */

    const accountButton =
        document.getElementById(
            "accountButton"
        );


    const accountDropdown =
        document.getElementById(
            "accountDropdown"
        );


    function closeAccount() {

        if (accountDropdown) {

            accountDropdown.classList.remove(
                "active"
            );
        }


        document.body.classList.remove(
            "account-open"
        );
    }


    if (
        accountButton &&
        accountDropdown
    ) {

        accountButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                accountDropdown.classList.toggle(
                    "active"
                );


                document.body.classList.toggle(
                    "account-open"
                );
            }
        );
    }


    if (accountDropdown) {

        accountDropdown.addEventListener(
            "click",
            event => {

                event.stopPropagation();
            }
        );
    }


    document.addEventListener(
        "click",
        () => {

            closeAccount();

        }
    );


    /* =========================================================
       CURRENT USER
       ========================================================= */

    async function loadCurrentUser() {

        try {

            const response =
                await fetch(
                    "auth?action=me"
                );


            if (!response.ok) {

                return {
                    loggedIn:
                        false
                };
            }


            return await response.json();


        } catch (error) {

            console.error(
                "Could not check login:",
                error
            );


            return {
                loggedIn:
                    false
            };
        }
    }


    function updateAccountUI(
        user
    ) {

        if (!accountDropdown) {
            return;
        }


        const header =
            accountDropdown.querySelector(
                ".account-dropdown-header"
            );


        const links =
            accountDropdown.querySelector(
                ".account-dropdown-links"
            );


        const footer =
            accountDropdown.querySelector(
                ".account-dropdown-footer"
            );


        if (!header) {
            return;
        }


        /* ================= LOGGED IN ================= */

        if (
            user &&
            user.loggedIn
        ) {

            header.innerHTML = `

                <div class="account-avatar">

                    <i class="fa-regular fa-user"></i>

                </div>

                <div>

                    <strong>
                        ${user.name || "My Account"}
                    </strong>

                    <span>
                        ${user.email || "Welcome back"}
                    </span>

                </div>

            `;


            if (links) {

                links.innerHTML = `

                    <a href="account.html">

                        <i class="fa-regular fa-user"></i>

                        <span>
                            My Account
                        </span>

                    </a>


                    <a href="orders.html">

                        <i class="fa-solid fa-box"></i>

                        <span>
                            My Orders
                        </span>

                    </a>


                    <a href="wishlist.html">

                        <i class="fa-regular fa-heart"></i>

                        <span>
                            My Wishlist
                        </span>

                    </a>


                    <a href="cart.html">

                        <i class="fa-solid fa-bag-shopping"></i>

                        <span>
                            My Cart
                        </span>

                    </a>


                    <a href="seller.html">

                        <i class="fa-solid fa-store"></i>

                        <span>
                            Sell on Aarthi Mart
                        </span>

                    </a>

                `;
            }


            if (footer) {

                footer.innerHTML = `

                    <button
                        type="button"
                        id="logoutButton"
                        class="account-logout-button">

                        <i class="fa-solid fa-right-from-bracket"></i>

                        Logout

                    </button>

                `;


                const logoutButton =
                    document.getElementById(
                        "logoutButton"
                    );


                if (logoutButton) {

                    logoutButton.addEventListener(
                        "click",
                        logoutUser
                    );
                }
            }


        }

        /* ================= LOGGED OUT ================= */

        else {

            header.innerHTML = `

                <div class="account-avatar">

                    <i class="fa-regular fa-user"></i>

                </div>

                <div>

                    <strong>
                        My Account
                    </strong>

                    <span>
                        Login to view your account
                    </span>

                </div>

            `;


            if (links) {

                links.innerHTML = `

                    <a href="login.html">

                        <i class="fa-regular fa-user"></i>

                        <span>
                            My Account
                        </span>

                    </a>


                    <a href="login.html">

                        <i class="fa-solid fa-box"></i>

                        <span>
                            My Orders
                        </span>

                    </a>


                    <a href="wishlist.html">

                        <i class="fa-regular fa-heart"></i>

                        <span>
                            My Wishlist
                        </span>

                    </a>


                    <a href="cart.html">

                        <i class="fa-solid fa-bag-shopping"></i>

                        <span>
                            My Cart
                        </span>

                    </a>


                    <a href="seller.html">

                        <i class="fa-solid fa-store"></i>

                        <span>
                            Sell on Aarthi Mart
                        </span>

                    </a>

                `;
            }


            if (footer) {

                footer.innerHTML = `

                    <a href="login.html">
                        Login / Register
                    </a>

                `;
            }
        }
    }


    /* =========================================================
       LOGOUT
       ========================================================= */

    async function logoutUser() {

        try {

            const body =
                new URLSearchParams();


            body.append(
                "action",
                "logout"
            );


            await fetch(
                "auth",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded"
                    },

                    body:
                        body.toString()
                }
            );


        } catch (error) {

            console.error(
                "Logout error:",
                error
            );
        }


        closeAccount();


        window.location.href =
            "index.html";
    }


    /* =========================================================
       SEARCH BUTTON
       ========================================================= */

    const searchButton =
        document.getElementById(
            "searchButton"
        );


    if (
        searchButton &&
        searchInput
    ) {

        searchButton.addEventListener(
            "click",
            () => {

                if (searchSection) {

                    searchSection.scrollIntoView({
                        behavior:
                            "smooth"
                    });
                }


                setTimeout(
                    () => {

                        searchInput.focus();

                    },
                    400
                );
            }
        );
    }
/* =========================================================
   BOTTOM NAVIGATION
   ========================================================= */

const bottomNav =
    document.querySelector(".bottom-nav");

const bottomAccountButton =
    document.getElementById("bottomAccountButton");


/* ---------- BOTTOM NAV LINKS ---------- */

if (bottomNav) {

    bottomNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const href =
                        link.getAttribute("href");


                    /* Categories */

                    if (href === "#categories") {

                        event.preventDefault();

                        closeSideMenu();
                        closeAccount();

                        document
                            .getElementById("categories")
                            ?.scrollIntoView({
                                behavior: "smooth"
                            });

                        return;
                    }


                    /* Account */

                    if (href === "#account") {

                        event.preventDefault();

                        closeSideMenu();

                        if (
                            accountDropdown &&
                            accountButton
                        ) {

                            accountDropdown.classList.toggle(
                                "active"
                            );

                            document.body.classList.toggle(
                                "account-open"
                            );
                        }

                        return;
                    }

                }
            );

        });
}


/* =========================================================
   ALL CATEGORY ANCHORS
   ========================================================= */

document
    .querySelectorAll('a[href="#categories"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                closeSideMenu();
                closeAccount();

                document
                    .getElementById("categories")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


/* =========================================================
   COLLECTIONS ANCHORS
   ========================================================= */

document
    .querySelectorAll('a[href="#collections"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                closeSideMenu();
                closeAccount();

                document
                    .getElementById("collections")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


/* =========================================================
   HOME LINKS
   ========================================================= */

document
    .querySelectorAll('a[href="index.html"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                closeSideMenu();
                closeAccount();

            }
        );

    });


    /* =========================================================
       INITIAL LOAD
       ========================================================= */

    async function initializePage() {

        await loadWishlist();

        await loadProducts();

        await loadCartCount();

        const user =
            await loadCurrentUser();

        updateAccountUI(
            user
        );
    }


    initializePage();

});