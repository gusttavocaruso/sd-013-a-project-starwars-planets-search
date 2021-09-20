const ONE_STANDARD = '1 standard';

const PLANETS = {

  count: 60,
  next: 'https://swapi-trybe.herokuapp.com/api/planets/?page=2&format=json',
  previous: null,
  results: [
    {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: ONE_STANDARD,
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/1/',
        'https://swapi-trybe.herokuapp.com/api/people/2/',
        'https://swapi-trybe.herokuapp.com/api/people/4/',
        'https://swapi-trybe.herokuapp.com/api/people/6/',
        'https://swapi-trybe.herokuapp.com/api/people/7/',
        'https://swapi-trybe.herokuapp.com/api/people/8/',
        'https://swapi-trybe.herokuapp.com/api/people/9/',
        'https://swapi-trybe.herokuapp.com/api/people/11/',
        'https://swapi-trybe.herokuapp.com/api/people/43/',
        'https://swapi-trybe.herokuapp.com/api/people/62/',
      ],
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/1/',
        'https://swapi-trybe.herokuapp.com/api/films/3/',
        'https://swapi-trybe.herokuapp.com/api/films/4/',
        'https://swapi-trybe.herokuapp.com/api/films/5/',
        'https://swapi-trybe.herokuapp.com/api/films/6/',
      ],
      created: '2014-12-09T13:50:49.641000Z',
      edited: '2014-12-20T20:58:18.411000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/1/',
    },
  ],

};

export default PLANETS;
