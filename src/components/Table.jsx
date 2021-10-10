import React from 'react';
import { usePlanets } from './PlanetsContext';

const Table = () => {
  const data = usePlanets();
  // if ((data === undefined) || (data === null) || (data === [])) {
  //   console.log('t', data);
  //   return (
  //     <h1>Carregando...</h1>
  //   );
  // }
  return (
    <table>
      {/* {console.log(data)} */}
      <tbody>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>

        {data.map((planet, index) => (
          <tr key={ index }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>
              {planet.films.map((film) => (
                <a
                  key={ film }
                  href={ film }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{film}</p>
                </a>))}
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>
              <a
                href={ planet.url }
                target="_blank"
                rel="noopener noreferrer"
              >
                {planet.url}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
