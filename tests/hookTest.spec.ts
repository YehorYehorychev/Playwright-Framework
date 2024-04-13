import { test } from '@playwright/test'

test.beforeAll(async () => {
    console.log('Before All Hook');
})

test.beforeEach(async () => {
    console.log('Before Each Hook');
})

test('Test 1', async () => {
    console.log('Test 1 Block');
})

test('Test 2', async () => {
    console.log('Test 2 Block');
})

test('Test 3', async () => {
    console.log('Test 3 Block');
})

test.afterEach(async () => {
    console.log('After Each Hook');
})

test.afterAll(async () => {
    console.log('After All Hook');
})
