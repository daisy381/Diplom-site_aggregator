export const authenticationService = { signin, signup };

function signin(data) {
    let formBody = [];
    for (let property in data) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return fetch(
        `${process.env.REACT_APP_SERVERLESS_URL}/api/login`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            },
            body: formBody,
        },
    )
        .then((response) => response.json());
}

function signup(data) {
    let formBody = [];
    for (let property in data) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return fetch(
        `${process.env.REACT_APP_SERVERLESS_URL}/api/register`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            },
            body: formBody,
        },
    )
        .then((response) => response.json());
}