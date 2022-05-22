export const productsServices = { getCategories, getProductsPage, getCategory, getBrands, getByBrands, getByText };

function getCategories() {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/categories`, {
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}

function getCategory(id) {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/products?category_id=${id}&limit=100`, {
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}

function getBrands(id) {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/brands?category_id=${id}`, {
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}

function getByBrands(id, brand) {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/products?category_id=${id}&limit=100&brand=${brand}`, {
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


function getProductsPage(url) {
    return fetch(url, {
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}