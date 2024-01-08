import { test, expect, vi } from 'vitest';
import { calculateTotalTime, User } from '../2';

test('It should calcul users registered total time', async () => {
  const users: User[] = [
    {
      name: 'Alice',
      records: [
        { time: 10, name: 'Record 1' },
        { time: 20, name: 'Record 2' },
        // Add more records here...
      ],
    },
    {
      name: 'Bob',
      records: [
        { time: 15, name: 'Record 3' },
        { time: 25, name: 'Record 4' },
        // Add more records here...
      ],
    },
    // Add more users here...
  ];

  const calcul = calculateTotalTime(users);

  const results = [
    {
      name: 'Alice',
      totalTime: 30,
    },
    {
      name: 'Bob',
      totalTime: 40,
    },
  ];

  expect(calcul).toEqual(results);
});

test('It should sort users by sort asc', async () => {
  const users: User[] = [
    {
      name: 'Alice',
      records: [
        { time: 10, name: 'Record 1' },
        { time: 20, name: 'Record 2' },
      ],
    },
    {
      name: 'Bob',
      records: [
        { time: 15, name: 'Record 3' },
        { time: 25, name: 'Record 4' },
      ],
    },
    {
      name: 'Roger',
      records: [
        { time: 45, name: 'Record 5' },
        { time: 25, name: 'Record 6' },
      ],
    },
    {
      name: 'Faustine',
      records: [
        { time: 15, name: 'Record 7' },
        { time: 5, name: 'Record 8' },
      ],
    },
    // Add more users here...
  ];

  const calcul = calculateTotalTime(users, 'asc');

  const results = [
    {
      name: 'Faustine',
      totalTime: 20,
    },
    {
      name: 'Alice',
      totalTime: 30,
    },
    {
      name: 'Bob',
      totalTime: 40,
    },
    {
      name: 'Roger',
      totalTime: 70,
    },
  ];

  expect(calcul).toEqual(results);
});

test('It should sort users by sort asc', async () => {
  const users: User[] = [
    {
      name: 'Alice',
      records: [
        { time: 10, name: 'Record 1' },
        { time: 20, name: 'Record 2' },
      ],
    },
    {
      name: 'Bob',
      records: [
        { time: 15, name: 'Record 3' },
        { time: 25, name: 'Record 4' },
      ],
    },
    {
      name: 'Roger',
      records: [
        { time: 45, name: 'Record 5' },
        { time: 25, name: 'Record 6' },
      ],
    },
    {
      name: 'Faustine',
      records: [
        { time: 15, name: 'Record 7' },
        { time: 5, name: 'Record 8' },
      ],
    },
    // Add more users here...
  ];

  const calcul = calculateTotalTime(users, 'desc');

  const results = [
    {
      name: 'Roger',
      totalTime: 70,
    },
    {
      name: 'Bob',
      totalTime: 40,
    },
    {
      name: 'Alice',
      totalTime: 30,
    },
    {
      name: 'Faustine',
      totalTime: 20,
    },
  ];

  expect(calcul).toEqual(results);
});

test('It should work without records', async () => {
  const users: User[] = [
    {
      name: 'Alice',
      records: [
        // Add more records here...
      ],
    },
    {
      name: 'Bob',
      records: [
        { time: 15, name: 'Record 3' },
        { time: 25, name: 'Record 4' },
        // Add more records here...
      ],
    },
    // Add more users here...
  ];

  const calcul = calculateTotalTime(users);

  const results = [
    {
      name: 'Alice',
      totalTime: 0,
    },
    {
      name: 'Bob',
      totalTime: 40,
    },
  ];

  expect(calcul).toEqual(results);
});
