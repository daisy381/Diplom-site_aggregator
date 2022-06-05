export const productsServices = {
    getCategories,
    getProductsPage,
    getCategory,
    getBrands,
    getByText,
    getFilter,
    getBasketData,
    addToBasket,
    deleteToBasket,
    getFavouritesData,
    addToFavourites,
    deleteToFavourites,
    getServiceData,
    getSearchHistoryData
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
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/products?category_id=${id}&limit=20`, {
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


//All about Basket
function getBasketData() {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/basket`, {
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}

function addToBasket(id,state){
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/products/${id}/buy?state=${state}`,{
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

//All about Favourites
function getFavouritesData(){
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/favourites`,{
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}

function addToFavourites(id){
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/products/${id}/favourite`,{
        headers: {
            'Content-type': 'application/json',
        },
        method:'post'
    })
}

function deleteToFavourites(id){
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/favourites?id=${id}`,{
        headers: {
            'Content-type': 'application/json',
        },
        method:'post'
    })
}

function getServiceData() {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/services`, {
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}


function getSearchHistoryData() {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/products/search/history`, {
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}