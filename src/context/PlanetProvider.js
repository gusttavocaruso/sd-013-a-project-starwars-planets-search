import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

const Context = createContext();

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    const getPlanets = async () => {
      setData(await fetchPlanets());
      setIsFetching(false);
    };
    getPlanets();
  }, []);

  const context = {
    data,
    isFetching,
    filters,
    setFilters,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PlanetProvider as Provider, Context };
