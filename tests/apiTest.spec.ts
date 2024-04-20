import { test, expect } from '@playwright/test'

var userId;

test('Get user Details using GET API request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    var responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toBe(200);
    expect(responseJson.data[0].first_name).toBe('Michael');
});

test.only('Create a new user using POST API request', async ({ request }) => {
    var user = {
        "name": "morpheus",
        "job": "leader"
    }

    const response = await request.post('https://reqres.in/api/users', {
        data: user,
        headers: { "ACCEPT": "applications/JSON" }
    })

    var responseJson = await response.json();
    expect(response.status()).toBe(201);
    expect(responseJson.name).toBe(`${user.name}`);
    expect(responseJson.job).toBe(`${user.job}`);
    userId = responseJson.id;
});