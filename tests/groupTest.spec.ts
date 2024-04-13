import { test, expect } from '@playwright/test'

test.describe('Suite', () => {

    test('Test 1', async () => {
        console.log('Test 1 block')
    });

    test('Test 2', async () => {
        console.log('Test 2 block')
    });
});

test.beforeAll(async () => {
    console.log('Database Connection Setup');
});

test.beforeEach(async () => {
    console.log('Clearing Cookies');
});

test.afterEach(async () => {
    console.log('Cache Removal');
});

test.afterAll(async () => {
    console.log('Database Connection disconnect');
});

test('Test 3', async () => {
    console.log('Test 3 block')
});

test('Test 4', async () => {
    console.log('Test 4 block')
});