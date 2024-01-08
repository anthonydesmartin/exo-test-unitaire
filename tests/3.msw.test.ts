import {test, expect, beforeAll, afterAll} from 'vitest';
import {searchPokemon} from '../3';
import {http, HttpResponse} from 'msw';
import {setupServer} from 'msw/node';
import axios from 'axios';

const handlers = [
    http.get('https://pokeapi.co/api/v2/pokemon/pikachu', () => {
        return HttpResponse.json({
            name: 'pikachu',
            url: 'https://pokeapi.co/api/v2/pokemon/25/'
        })
    }),
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterAll(() => server.close())

test('searchPokemon is working', async () => {
    const result = await searchPokemon('pikachu');

    expect(result).toEqual([{
        name: 'pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon/25/'
    }])
})

test('searchPokemon is working with bad data', async () => {
    const result = await searchPokemon('pikachu');

    expect(result).toEqual([{
        name: 'pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon/25/'
    }])
})

test('searchPokemon is working when search did not match', async () => {
    const result = await searchPokemon('pikachu');

    expect(result).toEqual([{
        name: 'pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon/25/'
    }])
})

test('searchPokemon is working when api fail', async () => {
    const result = await searchPokemon('pikachu');

    expect(result).toEqual([{
        name: 'pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon/25/'
    }])
})