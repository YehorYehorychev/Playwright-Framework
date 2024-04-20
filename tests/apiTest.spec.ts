import { test, expect } from '@playwright/test'

test('Get user Details using GET API request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    var responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toBe(200);
    expect(responseJson.data[0].first_name).toBe('Michael');
})