// Context API
import React, { createContext, useState, useEffect, useCallback } from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Services
import getPlanetsData from '../services/planetsAPI';

// Helpers
import colOptions from '../helpers/colOptions';

// Context
export const Planets = createContext();

/*= =================================================== */
export default function PlanetsProvider({ children }) {
  /*= ================= DATA ================= */
  const [raw, setRaw] = useState([]); // Todos os planetas
  const [data, setData] = useState([]); // Planetas filtrados

  /*
    Quando o componente montar, armazenar as informações da API no data
    Fonte: 'https://javascript.plainenglish.io/how-to-use-async-function-in-react-hook-useeffect-typescript-js-6204a788a435'
  */
  const callbackData = () => {
    (async () => {
      const planets = await getPlanetsData();
      setRaw(planets);
      setData(planets);
    })();
  };

  useEffect(callbackData, []);

  /*= ================= FILTERS ================= */
  /*
    Foi necessário ecrever um esqueleto de filterByNumericValues para usar
    como estado inicial */
  const defaultFilters = { filterByNumericValues: [] };
  const [filters, setFilters] = useState(defaultFilters); // Filtros
  const [options, setOptions] = useState(colOptions()); // Select colunas

  /* Aplicar o filtro de nome */
  const applyNameFilter = useCallback(() => {
    const filterByName = Object.prototype.hasOwnProperty.call(filters, 'filterByName');
    if (filterByName) {
      setData(raw.filter(({ name }) => {
        const nameStr = name.toLowerCase();
        const valueStr = filters.filterByName.name.toLowerCase();

        return nameStr.includes(valueStr);
      }));
    }
  }, [raw, filters]);

  useEffect(() => {
    applyNameFilter();
  }, [applyNameFilter]);

  /* Imprimir um item de lista no DOM */
  const logCompareFilter = useCallback((col, comp, val) => {
    // Cria novo item de filtro
    const listItem = document.createElement('li');
    listItem.innerHTML = `${col} ${comp} ${val}`;

    // Renderiza elemento no DOM
    const filterList = document.getElementById('filter-list');
    filterList.appendChild(listItem);

    // Remove opção de options
    setOptions(options.filter(({ value }) => value !== col));
  }, [options]);

  /* Aplicar o filtro de comparação */
  const applyCompareFilter = useCallback(() => {
    if (filters.filterByNumericValues.length) {
      const index = filters.filterByNumericValues.length - 1;
      const { column, comparison, value } = filters.filterByNumericValues[index];

      const comparators = {
        'maior que': (a, b) => parseInt(a, 0) > parseInt(b, 0),
        'menor que': (a, b) => parseInt(a, 0) < parseInt(b, 0),
        'igual a': (a, b) => a === b,
      };

      setData(raw.filter((planet) => {
        const boolean = comparators[comparison](planet[column], value);
        return boolean;
      }));

      // logCompareFilter(column, comparison, value);
    }
  }, [filters.filterByNumericValues, raw]);

  useEffect(() => {
    applyCompareFilter();
  }, [applyCompareFilter]);

  /*
    Retornar this.children aninhado dentro do Provider, agora com a
    propriedade 'value' sendo um objeto com as chaves do estado */
  const contextValue = {
    data,
    filters,
    setFilters,
    applyCompareFilter,
    options,
  };

  return (
    <Planets.Provider value={ contextValue }>
      { children }
    </Planets.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
