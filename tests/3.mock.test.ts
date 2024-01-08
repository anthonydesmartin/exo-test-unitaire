import { test, expect, vi } from 'vitest';
import { searchPokemon, type Pokemon } from '../3';
import axios from 'axios';

vi.mock('axios');

test('searchPokemon is working', async () => {
    const Pokemons: Pokemon[] = [
        {name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/'},
        {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
        {name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/'},
        {name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/'},
        {name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/'},
    ]

    axios.get.mockResolvedValueOnce({
        data: {
            results: Pokemons
        }
    });

    const result = await searchPokemon('pikachu');

    expect(result).toEqual([{
        name: 'pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon/25/'
    }])
})

test('searchPokemon is working with bad data', async () => {
    const Pokemons: Pokemon[] = [
        {name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/'},
        {name: undefined, url: 'https://pokeapi.co/api/v2/pokemon/1/'},
        {name: null, url: 'https://pokeapi.co/api/v2/pokemon/2/'},
        {name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/'},
        {name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/'},
    ]

    axios.get.mockResolvedValueOnce({
        data: {
            results: Pokemons
        }
    });

    const result = await searchPokemon('pikachu');

    expect(result).toEqual([{
        name: 'pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon/25/'
    }])
})

test('searchPokemon is working when search did not match', async () => {
    const Pokemons: Pokemon[] = [
        {name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/'},
        {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
        {name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/'},
        {name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/'},
        {name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/'},
    ]

    axios.get.mockResolvedValueOnce({
        data: {
            results: Pokemons
        }
    });

    const result = await searchPokemon('Raychu');

    expect(result).toEqual([])
})

test('searchPokemon is working when api fail', async () => {
    axios.get.mockRejectedValueOnce();

    const result = await searchPokemon('pikachu');

    expect(result).toEqual([])
})