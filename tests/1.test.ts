import { test, expect, vi } from 'vitest';
import { filterAndSortUsers, User } from '../1';

test('It should filter underage people', async () => {
  const users: User[] = [
    { age: 25, name: 'Alice' },
    { age: 17, name: 'Bob' },
    { age: 30, name: 'Charlie' },
    // Add more users here...
  ];

  const filtered_users = filterAndSortUsers(users);

  const result = [
    { age: 30, name: 'Charlie' },
    { age: 25, name: 'Alice' },
  ];

  expect(filtered_users).toEqual(result);
});

test('It should desc sort users', async () => {
  const users: User[] = [
    { age: 25, name: 'Alice' },
    { age: 30, name: 'Charlie' },
    { age: 45, name: 'Richard' },
    { age: 18, name: 'Justine' },
    { age: 64, name: 'Maxime' },
    // Add more users here...
  ];

  const filtered_users = filterAndSortUsers(users);

  const result = [
    { age: 45, name: 'Richard' },
    { age: 64, name: 'Maxime' },
    { age: 18, name: 'Justine' },
    { age: 30, name: 'Charlie' },
    { age: 25, name: 'Alice' },
  ];

  expect(filtered_users).toEqual(result);
});

test('Is it working without age value', async () => {
  const users: User[] = [
    { age: 25, name: 'Alice' },
    { age: 30, name: 'Charlie' },
    { age: null, name: 'Richard' },
    { age: 18, name: 'Justine' },
    { age: 64, name: 'Maxime' },
    // Add more users here...
  ];

  const filtered_users = filterAndSortUsers(users);

  const result = [
    { age: 64, name: 'Maxime' },
    { age: 18, name: 'Justine' },
    { age: 30, name: 'Charlie' },
    { age: 25, name: 'Alice' },
  ];

  expect(filtered_users).toEqual(result);
});

test('Is it working without name value', async () => {
  const users: User[] = [
    { age: 25, name: 'Alice' },
    { age: 30, name: 'Charlie' },
    { age: null, name: 'Richard' },
    { age: 18, name: null },
    { age: 64, name: 'Maxime' },
    // Add more users here...
  ];

  const filtered_users = filterAndSortUsers(users);

  const result = [
    { age: 64, name: 'Maxime' },
    { age: 30, name: 'Charlie' },
    { age: 25, name: 'Alice' },
  ];

  expect(filtered_users).toEqual(result);
});
