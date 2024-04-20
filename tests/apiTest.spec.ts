import { test, expect } from '@playwright/test'

var userId;

test('Get user Details using GET API request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    var responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toBe(200);
    expect(responseJson.data[0].first_name).toBe('Michael');
});

test('Create a new user using POST API request', async ({ request }) => {
    var user = {
        "name": "playwright",
        "job": "tester"
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

test('Update a user data using PUT API request', async ({ request }) => {
    var user = {
        "name": "automation",
        "job": "course"
    }

    const response = await request.put('https://reqres.in/api/users/' + userId, {
        data: user,
        headers: { "ACCEPT": "applications/JSON" }
    })

    var responseJson = await response.json();
    expect(response.status()).toBe(200);
    expect(responseJson.name).toBe(`${user.name}`);
    expect(responseJson.job).toBe(`${user.job}`);
    userId = responseJson.id;
});