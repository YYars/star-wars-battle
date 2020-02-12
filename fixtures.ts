import { Starship } from 'src/app/game/models/starship.model';
import { Character } from 'src/app/game/models/character.model';

export const mockStarship: Starship = {
    MGLT: '10 MGLT',
    cargo_capacity: '1000000000000',
    consumables: '3 years',
    cost_in_credits: '1000000000000',
    crew: '342953',
    hyperdrive_rating: '4.0',
    length: '120000',
    manufacturer: 'Imperial Department of Military Research, Sienar Fleet Systems',
    max_atmosphering_speed: 'n/a',
    model: 'DS-1 Orbital Battle Station',
    name: 'Death Star',
    passengers: '843342',
    starship_class: 'Deep Space Mobile Battlestation'
};

export const mockCharacter: Character = {
    birth_year: '19 BBY',
    eye_color: 'Blue',
    gender: 'Male',
    hair_color: 'Blond',
    height: '172',
    mass: '77',
    name: 'Luke Skywalker',
    skin_color: 'Fair'
};
