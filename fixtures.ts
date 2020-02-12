import { Starship } from 'src/app/game/models/starship.model';
import { Character } from 'src/app/game/models/character.model';

export const mockStarshipsPage = {
    count: 37,
    next: 'https://swapi.co/api/starships/?page=3',
    previous: 'https://swapi.co/api/starships/?page=1',
    results: [
        {
            name: 'Calamari Cruiser',
            model: 'MC80 Liberty type Star Cruiser',
            manufacturer: 'Mon Calamari shipyards',
            cost_in_credits: '104000000',
            length: '1200',
            max_atmosphering_speed: 'n/a',
            crew: '5400',
            passengers: '1200',
            cargo_capacity: 'unknown',
            consumables: '2 years',
            hyperdrive_rating: '1.0',
            MGLT: '60',
            starship_class: 'Star Cruiser',
            pilots: [],
            films: [
                'https://swapi.co/api/films/3/'
            ],
            created: '2014-12-18T10:54:57.804000Z',
            edited: '2014-12-22T17:35:44.957852Z',
            url: 'https://swapi.co/api/starships/27/'
        },
        {
            name: 'A-wing',
            model: 'RZ-1 A-wing Interceptor',
            manufacturer: 'Alliance Underground Engineering, Incom Corporation',
            cost_in_credits: '175000',
            length: '9.6',
            max_atmosphering_speed: '1300',
            crew: '1',
            passengers: '0',
            cargo_capacity: '40',
            consumables: '1 week',
            hyperdrive_rating: '1.0',
            MGLT: '120',
            starship_class: 'Starfighter',
            pilots: [
                'https://swapi.co/api/people/29/'
            ],
            films: [
                'https://swapi.co/api/films/3/'
            ],
            created: '2014-12-18T11:16:34.542000Z',
            edited: '2014-12-22T17:35:44.978754Z',
            url: 'https://swapi.co/api/starships/28/'
        },
        {
            name: 'B-wing',
            model: 'A/SF-01 B-wing starfighter',
            manufacturer: 'Slayn & Korpil',
            cost_in_credits: '220000',
            length: '16.9',
            max_atmosphering_speed: '950',
            crew: '1',
            passengers: '0',
            cargo_capacity: '45',
            consumables: '1 week',
            hyperdrive_rating: '2.0',
            MGLT: '91',
            starship_class: 'Assault Starfighter',
            pilots: [],
            films: [
                'https://swapi.co/api/films/3/'
            ],
            created: '2014-12-18T11:18:04.763000Z',
            edited: '2014-12-22T17:35:45.011193Z',
            url: 'https://swapi.co/api/starships/29/'
        },
        {
            name: 'Republic Cruiser',
            model: 'Consular-class cruiser',
            manufacturer: 'Corellian Engineering Corporation',
            cost_in_credits: 'unknown',
            length: '115',
            max_atmosphering_speed: '900',
            crew: '9',
            passengers: '16',
            cargo_capacity: 'unknown',
            consumables: 'unknown',
            hyperdrive_rating: '2.0',
            MGLT: 'unknown',
            starship_class: 'Space cruiser',
            pilots: [],
            films: [
                'https://swapi.co/api/films/4/'
            ],
            created: '2014-12-19T17:01:31.488000Z',
            edited: '2014-12-22T17:35:45.027308Z',
            url: 'https://swapi.co/api/starships/31/'
        },
        {
            name: 'Naboo fighter',
            model: 'N-1 starfighter',
            manufacturer: 'Theed Palace Space Vessel Engineering Corps',
            cost_in_credits: '200000',
            length: '11',
            max_atmosphering_speed: '1100',
            crew: '1',
            passengers: '0',
            cargo_capacity: '65',
            consumables: '7 days',
            hyperdrive_rating: '1.0',
            MGLT: 'unknown',
            starship_class: 'Starfighter',
            pilots: [
                'https://swapi.co/api/people/11/',
                'https://swapi.co/api/people/60/',
                'https://swapi.co/api/people/35/'
            ],
            films: [
                'https://swapi.co/api/films/5/',
                'https://swapi.co/api/films/4/'
            ],
            created: '2014-12-19T17:39:17.582000Z',
            edited: '2014-12-22T17:35:45.079452Z',
            url: 'https://swapi.co/api/starships/39/'
        },
        {
            name: 'Naboo Royal Starship',
            model: 'J-type 327 Nubian royal starship',
            manufacturer: 'Theed Palace Space Vessel Engineering Corps, Nubia Star Drives',
            cost_in_credits: 'unknown',
            length: '76',
            max_atmosphering_speed: '920',
            crew: '8',
            passengers: 'unknown',
            cargo_capacity: 'unknown',
            consumables: 'unknown',
            hyperdrive_rating: '1.8',
            MGLT: 'unknown',
            starship_class: 'yacht',
            pilots: [
                'https://swapi.co/api/people/39/'
            ],
            films: [
                'https://swapi.co/api/films/4/'
            ],
            created: '2014-12-19T17:45:03.506000Z',
            edited: '2014-12-22T17:35:45.091925Z',
            url: 'https://swapi.co/api/starships/40/'
        },
        {
            name: 'Scimitar',
            model: 'Star Courier',
            manufacturer: 'Republic Sienar Systems',
            cost_in_credits: '55000000',
            length: '26.5',
            max_atmosphering_speed: '1180',
            crew: '1',
            passengers: '6',
            cargo_capacity: '2500000',
            consumables: '30 days',
            hyperdrive_rating: '1.5',
            MGLT: 'unknown',
            starship_class: 'Space Transport',
            pilots: [
                'https://swapi.co/api/people/44/'
            ],
            films: [
                'https://swapi.co/api/films/4/'
            ],
            created: '2014-12-20T09:39:56.116000Z',
            edited: '2014-12-22T17:35:45.105522Z',
            url: 'https://swapi.co/api/starships/41/'
        },
        {
            name: 'J-type diplomatic barge',
            model: 'J-type diplomatic barge',
            manufacturer: 'Theed Palace Space Vessel Engineering Corps, Nubia Star Drives',
            cost_in_credits: '2000000',
            length: '39',
            max_atmosphering_speed: '2000',
            crew: '5',
            passengers: '10',
            cargo_capacity: 'unknown',
            consumables: '1 year',
            hyperdrive_rating: '0.7',
            MGLT: 'unknown',
            starship_class: 'Diplomatic barge',
            pilots: [],
            films: [
                'https://swapi.co/api/films/5/'
            ],
            created: '2014-12-20T11:05:51.237000Z',
            edited: '2014-12-22T17:35:45.124386Z',
            url: 'https://swapi.co/api/starships/43/'
        },
        {
            name: 'AA-9 Coruscant freighter',
            model: 'Botajef AA-9 Freighter-Liner',
            manufacturer: 'Botajef Shipyards',
            cost_in_credits: 'unknown',
            length: '390',
            max_atmosphering_speed: 'unknown',
            crew: 'unknown',
            passengers: '30000',
            cargo_capacity: 'unknown',
            consumables: 'unknown',
            hyperdrive_rating: 'unknown',
            MGLT: 'unknown',
            starship_class: 'freighter',
            pilots: [],
            films: [
                'https://swapi.co/api/films/5/'
            ],
            created: '2014-12-20T17:24:23.509000Z',
            edited: '2014-12-22T17:35:45.135987Z',
            url: 'https://swapi.co/api/starships/47/'
        },
        {
            name: 'Jedi starfighter',
            model: 'Delta-7 Aethersprite-class interceptor',
            manufacturer: 'Kuat Systems Engineering',
            cost_in_credits: '180000',
            length: '8',
            max_atmosphering_speed: '1150',
            crew: '1',
            passengers: '0',
            cargo_capacity: '60',
            consumables: '7 days',
            hyperdrive_rating: '1.0',
            MGLT: 'unknown',
            starship_class: 'Starfighter',
            pilots: [
                'https://swapi.co/api/people/10/',
                'https://swapi.co/api/people/58/'
            ],
            films: [
                'https://swapi.co/api/films/5/',
                'https://swapi.co/api/films/6/'
            ],
            created: '2014-12-20T17:35:23.906000Z',
            edited: '2014-12-22T17:35:45.147746Z',
            url: 'https://swapi.co/api/starships/48/'
        }
    ]
};

export const mockCharactersPage = {
    count: 87,
    next: 'https://swapi.co/api/people/?page=2',
    previous: null,
    results: [
        {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '19BBY',
            gender: 'male',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/',
                'https://swapi.co/api/films/7/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [
                'https://swapi.co/api/vehicles/14/',
                'https://swapi.co/api/vehicles/30/'
            ],
            starships: [
                'https://swapi.co/api/starships/12/',
                'https://swapi.co/api/starships/22/'
            ],
            created: '2014-12-09T13:50:51.644000Z',
            edited: '2014-12-20T21:17:56.891000Z',
            url: 'https://swapi.co/api/people/1/'
        },
        {
            name: 'C-3PO',
            height: '167',
            mass: '75',
            hair_color: 'n/a',
            skin_color: 'gold',
            eye_color: 'yellow',
            birth_year: '112BBY',
            gender: 'n/a',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/5/',
                'https://swapi.co/api/films/4/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/2/'
            ],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:10:51.357000Z',
            edited: '2014-12-20T21:17:50.309000Z',
            url: 'https://swapi.co/api/people/2/'
        },
        {
            name: 'R2-D2',
            height: '96',
            mass: '32',
            hair_color: 'n/a',
            skin_color: 'white, blue',
            eye_color: 'red',
            birth_year: '33BBY',
            gender: 'n/a',
            homeworld: 'https://swapi.co/api/planets/8/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/5/',
                'https://swapi.co/api/films/4/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/',
                'https://swapi.co/api/films/7/'
            ],
            species: [
                'https://swapi.co/api/species/2/'
            ],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:11:50.376000Z',
            edited: '2014-12-20T21:17:50.311000Z',
            url: 'https://swapi.co/api/people/3/'
        },
        {
            name: 'Darth Vader',
            height: '202',
            mass: '136',
            hair_color: 'none',
            skin_color: 'white',
            eye_color: 'yellow',
            birth_year: '41.9BBY',
            gender: 'male',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [],
            starships: [
                'https://swapi.co/api/starships/13/'
            ],
            created: '2014-12-10T15:18:20.704000Z',
            edited: '2014-12-20T21:17:50.313000Z',
            url: 'https://swapi.co/api/people/4/'
        },
        {
            name: 'Leia Organa',
            height: '150',
            mass: '49',
            hair_color: 'brown',
            skin_color: 'light',
            eye_color: 'brown',
            birth_year: '19BBY',
            gender: 'female',
            homeworld: 'https://swapi.co/api/planets/2/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/',
                'https://swapi.co/api/films/7/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [
                'https://swapi.co/api/vehicles/30/'
            ],
            starships: [],
            created: '2014-12-10T15:20:09.791000Z',
            edited: '2014-12-20T21:17:50.315000Z',
            url: 'https://swapi.co/api/people/5/'
        },
        {
            name: 'Owen Lars',
            height: '178',
            mass: '120',
            hair_color: 'brown, grey',
            skin_color: 'light',
            eye_color: 'blue',
            birth_year: '52BBY',
            gender: 'male',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/5/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:52:14.024000Z',
            edited: '2014-12-20T21:17:50.317000Z',
            url: 'https://swapi.co/api/people/6/'
        },
        {
            name: 'Beru Whitesun lars',
            height: '165',
            mass: '75',
            hair_color: 'brown',
            skin_color: 'light',
            eye_color: 'blue',
            birth_year: '47BBY',
            gender: 'female',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/5/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:53:41.121000Z',
            edited: '2014-12-20T21:17:50.319000Z',
            url: 'https://swapi.co/api/people/7/'
        },
        {
            name: 'R5-D4',
            height: '97',
            mass: '32',
            hair_color: 'n/a',
            skin_color: 'white, red',
            eye_color: 'red',
            birth_year: 'unknown',
            gender: 'n/a',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/2/'
            ],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:57:50.959000Z',
            edited: '2014-12-20T21:17:50.321000Z',
            url: 'https://swapi.co/api/people/8/'
        },
        {
            name: 'Biggs Darklighter',
            height: '183',
            mass: '84',
            hair_color: 'black',
            skin_color: 'light',
            eye_color: 'brown',
            birth_year: '24BBY',
            gender: 'male',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [],
            starships: [
                'https://swapi.co/api/starships/12/'
            ],
            created: '2014-12-10T15:59:50.509000Z',
            edited: '2014-12-20T21:17:50.323000Z',
            url: 'https://swapi.co/api/people/9/'
        },
        {
            name: 'Obi-Wan Kenobi',
            height: '182',
            mass: '77',
            hair_color: 'auburn, white',
            skin_color: 'fair',
            eye_color: 'blue-gray',
            birth_year: '57BBY',
            gender: 'male',
            homeworld: 'https://swapi.co/api/planets/20/',
            films: [
                'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/5/',
                'https://swapi.co/api/films/4/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/'
            ],
            species: [
                'https://swapi.co/api/species/1/'
            ],
            vehicles: [
                'https://swapi.co/api/vehicles/38/'
            ],
            starships: [
                'https://swapi.co/api/starships/48/',
                'https://swapi.co/api/starships/59/',
                'https://swapi.co/api/starships/64/',
                'https://swapi.co/api/starships/65/',
                'https://swapi.co/api/starships/74/'
            ],
            created: '2014-12-10T16:16:29.192000Z',
            edited: '2014-12-20T21:17:50.325000Z',
            url: 'https://swapi.co/api/people/10/'
        }
    ]
};

export const mockStarship: Starship = mockStarshipsPage.results.slice()[1];

export const mockCharacter: Character = mockCharactersPage.results.slice()[0];
