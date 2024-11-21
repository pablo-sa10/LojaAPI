
async function api(url, method, body = undefined) {
    return await fetch(`http://localhost:4000${url}`, {
        body: body !== undefined ? JSON.stringify(body) : body,
        method: method,
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
    }).then((res) => res.json());
}

export async function apiGetProducts() {
    const data = await api("/products", "GET");
    return data.products;
}

export async function apiSubmitCart(products) {
    await api("/purchases", "POST", { products });
}
