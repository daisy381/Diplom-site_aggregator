export const productsServices = {
    getCategories,
    getProductsPage,
    getCategory,
    getBrands,
    getByText,
    getFilter,
    getBasketData,
    addToBasket,
    deleteToBasket
};

function getProductsPage(url) {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/products/${url}`, {
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}

// HEADERS
function getCategories() {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/categories`, {
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}

function getBrands(id) {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/brands?category_id=${id}&limit=15`, {
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}

//Get Products
function getCategory(id) {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/products?category_id=${id}&limit=100`, {
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}


//Filters
function getFilter(url) {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}${url}`, {
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}
//
function getByText(text) {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/products/search?limit=10&text=${text}`, {
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}

function getBasketData() {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/basket`, {
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}


//All about Basket
function addToBasket(id){
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/products/${id}/buy`,{
        headers: {
            'Content-type': 'application/json',
        },
        method:'post'
    })
}

function deleteToBasket(id){
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/basket?id=${id}`,{
        headers: {
            'Content-type': 'application/json',
        },
        method:'post'
    })
}
