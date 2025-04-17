import { test, expect } from "@playwright/test"

test('Task 1 - GET request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    //console.log(responseBody);
    expect(responseBody.data.first_name).toBe("Janet");
    expect(responseBody.data.last_name).toBe("Weaver");
    expect(responseBody.data.email).toBe("janet.weaver@reqres.in");    
});

test('Task 2 - POST request', async ({ request }) => {
    const response = await request.post('https://dummyjson.com/posts/add', {
        data: {
            title: "Awesome title",
            userId: "10",
        }
    });
    const responseBody = await response.json();
    expect(response.status()).toBe(201);
    //console.log(responseBody);
    expect(responseBody.title).toBe("Awesome title");
    expect(responseBody.userId).toBe("10");
});

test('Task 3 - GET request with params', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products', {
        params: {
            skip: 10,
            limit: 5,
        }
    });
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    //console.log(responseBody);
    expect(responseBody.products.length).toBe(5);
    expect(responseBody.products[0].price).toBe(1899.99);
    expect(responseBody.products[1].rating).toBeLessThan(4);
    expect(responseBody.products[4].stock).toBeGreaterThan(10);
    expect(responseBody.products[0]).toHaveProperty("returnPolicy");
});